import {staticFiles} from "./static-files.js";
import {images} from "./images.js";

const version = 3;

const staticCacheName = `static-cache-${version}`;
const nodeModulesCacheName = `node-modules-cache-${version}`;
const imagesCacheName = `image-cache-${version}`;


const activateHandler = (event) => {
	console.log("activateHandler", event);

	event.waitUntil(
		Promise.resolve().then(() => {
    	  // få åpne sider til å begynne å bruke ny service worker
	      return clients.claim().then(() => {
		    console.log("clients claimed");
		  })
		})
		.then(() => {
			caches.keys().then(keys => {
				return Promise.all(
					keys.filter(key => key !== staticCacheName).map(deletekey => caches.delete(deletekey))
				);
			})
		})
	);
};

const installHandler = (event) => {
	console.log("installHandler", event);
	self.skipWaiting(); // ikke vent til alle faner blir lukket

	event.waitUntil(
		Promise.resolve()
		.then(() => {
			// fylle static cache
			return caches.open(staticCacheName).then(cache => {
				return cache.addAll(staticFiles).then(() => {
					console.log(`${staticCacheName} loaded`);
				});
			});
		})
		.then(() => {
			// fylle image cache
			return caches.open(imagesCacheName).then(cache => {
				return cache.addAll(images).then(() => {
					console.log(`${imagesCacheName} loaded`);
				});
			});
		})
		.then(() => {
			// initialisere indexDB
		})

	); // Promise

};

const fetchHandler = (event) => {
	//console.log("fetch!!!", event.request.url);
	event.respondWith(
		caches.match(event.request).then(cachedResponse => {
			

			if (cachedResponse === undefined) {
				console.log(`finner ikke ${event.request.url} i cache`);

			}

			return cachedResponse || fetch(event.request)
				.then(fetchResponse => {
					if (event.request.url.match(/\/node_modules\//i)) {

						return caches.open(nodeModulesCacheName).then(nodeModulesCache => {
							nodeModulesCache.put(event.request, fetchResponse.clone());
							return fetchResponse;
						});
					} else if (event.request.url.match(/\/images\//i)) {
						return caches.open(imagesCacheName).then(imagesCache => {
							imagesCache.put(event.request, fetchResponse.clone());
							return fetchResponse;
						});
					} else {
						return fetchResponse;
					}
				});
		})
	);
};

const messageHandler = (event) => {
	console.log("message!!!", event);
};

self.addEventListener("activate", activateHandler);
self.addEventListener("install", installHandler);
self.addEventListener("fetch", fetchHandler);
self.addEventListener("message", messageHandler);