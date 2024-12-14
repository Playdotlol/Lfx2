importScripts("/static/uv/uv.bundle.js"); // Ensure bundle is correctly imported

class UVServiceWorker {
  constructor() {
    // Initialize any necessary properties for the service worker
    this.cacheName = "uv-cache";
    this.cacheWhitelist = [this.cacheName];
  }

  fetch(event) {
    const url = event.request.url;

    // Example: Bypass GeForce Now URLs if needed
    if (url.includes("play.geforcenow.com")) {
      console.log("Bypassing service worker for GeForce Now request:", url);
      return fetch(event.request);
    }

    // Handle caching for all other requests
    return caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      // If not in cache, fetch from network
      return fetch(event.request).then((response) => {
        // If the response is valid, cache it
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

  // Install and activate event listeners for managing cache and service worker lifecycle
  install(event) {
    event.waitUntil(
      caches.open(this.cacheName).then((cache) => {
        return cache.addAll([
          "/static/uv/uv.bundle.js",
          "/static/uv/uv.config.js",
          "/static/uv/uv.sw.js",
          // Add other resources that need to be cached initially
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
const sw = new UVServiceWorker();

// Listen for the fetch event
self.addEventListener("fetch", (event) => {
  event.respondWith(sw.fetch(event));
});

// Listen for the install event to cache resources
self.addEventListener("install", (event) => {
  sw.install(event);
});

// Listen for the activate event to manage old caches
self.addEventListener("activate", (event) => {
  sw.activate(event);
});
