importScripts('/l2x/uv.bundle.js');
importScripts('/l2x/uv.config.js');
importScripts('/l2x/uv.sw.js');
importScripts('https://arc.io/arc-sw-core.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => event.respondWith(sw.fetch(event)));
