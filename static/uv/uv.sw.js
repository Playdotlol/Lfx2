importScripts("/static/uv/uv.bundle.js"); // Ensure bundle is correctly imported

class UVServiceWorker {
  fetch(event) {
    const url = event.request.url;

    // Handle requests for GeForce Now or any other special cases
    if (url.includes('play.geforcenow.com')) {
      console.log('Bypassing service worker for GeForce Now request:', url);
      return fetch(event.request);
    }

    // Handle caching logic
    return caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request).then((response) => {
        return caches.open('uv-cache').then((cache) => {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    });
  }
}

const sw = new UVServiceWorker();

// Add event listener for fetch requests
self.addEventListener("fetch", (event) => {
  event.respondWith(sw.fetch(event));
});
