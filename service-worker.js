const staticFiles = ["/", "/index.html"];
const images = ["./images/logo.svg"];
const version = 8; 

const staticCacheName = `static-cache-${version}`;
const nodeModulesCacheName = `node-modules-cache-${version}`;
const imagesCacheName = `image-cache-${version}`;


const activateHandler = (event) => {
    //console.log("activateHandler", event);

    event.waitUntil(
        Promise.resolve()
            .then(() => {
                // få åpne sider til å begynne å bruke ny service worker
                return clients.claim().then(() => {
                    //console.log("clients claimed");
                });
            })
            .then(() => {
                return caches.keys().then(keys => {
                    return Promise.all(
                        keys.filter(key => parseInt(key.split("-").reverse()[0], 10) !== version).map(deletekey => caches.delete(deletekey))
                    );
                });
            })
    );
};

const installHandler = (event) => {
    //console.log("installHandler", event);
    self.skipWaiting(); // ikke vent til alle faner blir lukket

    

    event.waitUntil(
        Promise.resolve()
            .then(() => {
                // fylle static cache
                return fetch("./cache-list-static-files.json")
                    .then(response => response.json())
                    .then(staticFiles => {
                        //console.log({staticFiles});
                        return caches.open(staticCacheName).then(cache => {
                            return cache.addAll(staticFiles).then(() => {
                                //console.log(`${staticCacheName} loaded`);
                            });
                        });
                    });
            })
            .then(staticCacheReady => {
                // fylle image cache
                return Promise.all([
                    staticCacheReady,
                    fetch("./cache-list-images.json")
                        .then(response => response.json())
                        .then(images => {
                            //console.log({images});
                            return caches.open(imagesCacheName).then(cache => {
                                return cache.addAll(images).then(() => {
                                    //console.log(`${imagesCacheName} loaded`);
                                });
                            });
                        })
                ]);
            })
    ); // Promise

};

const fetchResponseHandler = (request, fetchResponse) => {
    if (request.url.match(/\/node_modules\//i)) {
        return caches.open(nodeModulesCacheName).then(nodeModulesCache => {
            nodeModulesCache.put(request, fetchResponse.clone());
            return fetchResponse;
        });
    } else if (request.url.match(/\/images\//i)) {
        return caches.open(imagesCacheName).then(imagesCache => {
            imagesCache.put(request, fetchResponse.clone());
            return fetchResponse;
        });
    } else if (request.url.match(/\/src\//i)) {
        return caches.open(staticCacheName).then(staticCache => {
            staticCache.put(request, fetchResponse.clone());
            return fetchResponse;
        });
    }

    return fetchResponse;    
};


function fakeResponse () {

    const options = {
        status: 418,
        statusText: "I'm a teapot"
    };
    const body = "somewhere something went terribly wrong";

    return new Response(body, options);
}


const fetchErrorHandler = (request, response) => {
    // denne kan bygges ut til å servere 404.html etc.

    if (response && response.status === 404) {
        console.warn("404: kunne ikke hente ", request.url);
    }
    return response || fakeResponse();
};


const fetchHandler = (event) => {
    //console.log("fetch!!!", event.request.url);
    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
            
        	/*
            if (cachedResponse === undefined) {
                console.log(`finner ikke ${event.request.url} i cache`);

            }
            */

            return cachedResponse || fetch(event.request)
                .then(fetchResponse => {
                    //console.log("går inn i fetchresponse");
                    if (fetchResponse.ok) {
                        return fetchResponseHandler(event.request, fetchResponse);
                    }

                    return fetchErrorHandler(event.request, fetchResponse);
                },
                error => {
                    //console.log("fetchfeil, men ikke 404", error);
                    return fetchErrorHandler(event.request);
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