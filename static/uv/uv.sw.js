importScripts("/static/uv/uv.bundle.js"); // Ensure bundle is correctly imported

class UVServiceWorker {
  constructor() {
    this.cacheName = "uv-cache";
    this.cacheWhitelist = [this.cacheName];
  }

  fetch(event) {
    const url = event.request.url;

    // Handle GeForce Now requests
    if (url.includes("play.geforcenow.com")) {
      console.log("Bypassing service worker for GeForce Now request:", url);
      return fetch(event.request);
    }

    return caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request).then((response) => {
        if (response && response.status === 200 && response.type === "basic") {
          return caches.open(this.cacheName).then((cache) => {
            cache.put(event.request, response.clone());
            return response;
          });
        }
        return response;
      });
    });
  }

  install(event) {
    event.waitUntil(
      caches.open(this.cacheName).then((cache) => {
        return cache.addAll([
          "/static/uv/uv.bundle.js",
          "/static/uv/uv.config.js",
          "/static/uv/uv.sw.js",
          // Add more resources if needed
        ]);
      })
    );
  }

  activate(event) {
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (this.cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  }
}

// Create an instance of UVServiceWorker
const uvServiceWorker = new UVServiceWorker();

// Listen for the fetch event
self.addEventListener("fetch", (event) => {
  event.respondWith(uvServiceWorker.fetch(event));
});

// Install and activate events
self.addEventListener("install", (event) => {
  uvServiceWorker.install(event);
});

self.addEventListener("activate", (event) => {
  uvServiceWorker.activate(event);
});
