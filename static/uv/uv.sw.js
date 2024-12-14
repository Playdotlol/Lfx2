self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('uv-cache').then((c) => {
      return c.addAll([
        '/static/uv/uv.bundle.js',
        '/static/uv/uv.config.js',
        '/static/uv/uv.handler.js',
        '/static/uv/uv.sw.js',
        // add other static assets to cache as needed
      ]);
    })
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (e) => {
  const u = e.request.url;

  // Bypass service worker for GeForce Now requests to avoid 403 errors
  if (u.includes('play.geforcenow.com')) {
    console.log('Bypassing service worker for GeForce Now request:', u);
    e.respondWith(fetch(e.request)); // Always fetch from the network
  } else {
    // Handle caching for other requests
    e.respondWith(
      caches.match(e.request).then((r) => {
        // If cache is available, return cached response, otherwise fetch from the network
        return r || fetch(e.request).then((res) => {
          // Optionally, cache the response for future use
          return caches.open('uv-cache').then((cache) => {
            cache.put(e.request, res.clone());
            return res;
          });
        });
      })
    );
  }
});

self.addEventListener('fetch', (e) => {
  const r = e.request;
  
  // Log request details for debugging
  console.log('Intercepted request to:', r.url);
  console.log('Request headers:', r.headers);

  // Copy the original request to avoid unwanted modifications
  const mR = new Request(r, {
    headers: new Headers(r.headers) // Preserve original headers
  });

  // Fetch the modified request
  e.respondWith(fetch(mR).then((res) => {
    console.log('Response status:', res.status);
    return res;
  }));
});
