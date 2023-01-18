// load service worker

const registerServiceWorker = (config = {}) => {
    const {
        filename = "./service-worker.js",
        onSuccess = (worker) => console.log("success!!!", worker),
        onUpdate = (worker) => console.log("change!!!", worker),
        root = "/"
    } = config;

    if ("serviceWorker" in navigator) {
        console.log("service worker støttes");

        document.addEventListener("DOMContentLoaded", () => {
            const url = `${filename}`;
            navigator.serviceWorker
                .register(url, {scope: "/", type: "module"})
                .then((registration) => {
                    console.log({registration});
                    const serviceWorker = registration.installing || registration.waiting || registration.active;
/*
                    serviceWorker.onstatechange = (event) => console.log("statechange", event);

                    registration.onupdatefound = () => {
                        const installingWorker = registration.installing;
                        if (installingWorker == null) {
                            return;
                        }
                        installingWorker.onstatechange = () => {
                            console.log("onstatachange");
                            if (installingWorker.state === 'installed') {
                                if (navigator.serviceWorker.controller) {
                                    // At this point, the updated precached content has been fetched,
                                    // but the previous service worker will still serve the older
                                    // content until all client tabs are closed.
                                    console.log(
                                    'New content is available and will be used when all ' +
                                    'tabs for this page are closed. See https://cra.link/PWA.'
                                    );

                                    // Execute callback
                                    if (onUpdate) {
                                        onUpdate(registration);
                                    }
                                } else {
                                    // At this point, everything has been precached.
                                    // It's the perfect time to display a
                                    // "Content is cached for offline use." message.
                                    console.log('Content is cached for offline use.');

                                    // Execute callback
                                    if (config && config.onSuccess) {
                                        config.onSuccess(registration);
                                    }
                                }
                            }
                        };
                    };
                    return serviceWorker;
*/
                })
                .catch((error) => {
                    console.error('Error during service worker registration:', error);
                });
        });
    }
};

const unregisterServiceWorker = () => {
    console.log(this.name);
};

export {
    registerServiceWorker as register,
    unregisterServiceWorker as unregister
};
