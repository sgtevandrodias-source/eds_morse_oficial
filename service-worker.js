const CACHE_NAME = "eds-morse-cache-v27";
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
  self.skipWaiting();

  evento.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ARQUIVOS_CACHE);
    })
  );
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
    }).then(() => {
      return self.clients.claim();
    })
  );
});

self.addEventListener("fetch", (evento) => {
  if (evento.request.method !== "GET") {
    return;
  }

  const url = new URL(evento.request.url);

  const arquivoDinamico =
    url.pathname.endsWith(".js") ||
    url.pathname.endsWith(".css") ||
    url.pathname.endsWith(".html") ||
    url.pathname === "/";

  if (arquivoDinamico) {
    evento.respondWith(
      fetch(evento.request)
        .then((respostaRede) => {
          const copia = respostaRede.clone();

          caches.open(CACHE_NAME).then((cache) => {
            cache.put(evento.request, copia);
          });

          return respostaRede;
        })
        .catch(() => {
          return caches.match(evento.request);
        })
    );

    return;
  }

  evento.respondWith(
    caches.match(evento.request).then((respostaCache) => {
      if (respostaCache) {
        return respostaCache;
      }

      return fetch(evento.request);
    })
  );
});