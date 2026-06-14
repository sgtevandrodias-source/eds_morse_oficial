const CACHE_NAME = "eds-morse-cache-v2";

const ARQUIVOS_CACHE = [
  "/",
  "/index.html",
  "/styles.css",
  "/script.js",
  "/manifest.json",
  "/icons/icon-192.png",
  "/icons/icon-512.png"
];

self.addEventListener("install", (evento) => {
  evento.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ARQUIVOS_CACHE);
    })
  );

  self.skipWaiting();
});

self.addEventListener("activate", (evento) => {
  evento.waitUntil(
    caches.keys().then((nomesCaches) => {
      return Promise.all(
        nomesCaches.map((nomeCache) => {
          if (nomeCache !== CACHE_NAME) {
            return caches.delete(nomeCache);
          }

          return null;
        })
      );
    })
  );

  self.clients.claim();
});

self.addEventListener("fetch", (evento) => {
  if (evento.request.method !== "GET") {
    return;
  }

  evento.respondWith(
    caches.match(evento.request).then((respostaCache) => {
      if (respostaCache) {
        return respostaCache;
      }

      return fetch(evento.request).then((respostaRede) => {
        return respostaRede;
      });
    })
  );
});