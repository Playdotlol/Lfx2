self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('uv-cache').then((cache) => {
      return cache.addAll([
        '/static/uv/uv.bundle.js',
        '/static/uv/uv.config.js',
        '/static/uv/uv.handler.js',
        '/static/uv/uv.sw.js',
        // add other static assets to cache as needed
      ]);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  const url = event.request.url;

  // Bypass service worker for GeForce Now requests to avoid 403 errors
  if (url.includes('play.geforcenow.com')) {
    console.log('Bypassing service worker for GeForce Now request:', url);
    event.respondWith(fetch(event.request)); // Always fetch from the network
  } else {
    // Handle caching for other requests
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        // If cache is available, return cached response, otherwise fetch from the network
        return cachedResponse || fetch(event.request).then((response) => {
          // Optionally, cache the response for future use
          return caches.open('uv-cache').then((cache) => {
            cache.put(event.request, response.clone());
            return response;
          });
        });
      })
    );
  }
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  
  // Log request details for debugging
  console.log('Intercepted request to:', request.url);
  console.log('Request headers:', request.headers);

  // Copy the original request to avoid unwanted modifications
  const modifiedRequest = new Request(request, {
    headers: new Headers(request.headers) // Preserve original headers
  });

  // Fetch the modified request
  event.respondWith(fetch(modifiedRequest).then((response) => {
    console.log('Response status:', response.status);
    return response;
  }));
});
// Define UVServiceWorker inside uv.sw.js or import it if it is an external class

class UVServiceWorker {
  fetch(event) {
    const url = event.request.url;

    if (url.includes('play.geforcenow.com')) {
      console.log('Bypassing service worker for GeForce Now request:', url);
      return fetch(event.request);
    }

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

self.addEventListener("fetch", (event) => {
  const sw = new UVServiceWorker();
  event.respondWith(sw.fetch(event));
});
