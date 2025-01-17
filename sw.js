// sw.js
const CACHE_NAME = 'audio-mixer-v1';
const assetsToCache = [
    '/',
    '/index.html',
    '/styles.css',
    '/app.js',
    // Añade aquí todos los recursos que quieras cachear
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(assetsToCache))
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => response || fetch(event.request))
    );
});