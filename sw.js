const CACHE_NAME = "elite-sc-v3";

// INSTALAÇÃO (rápida)
self.addEventListener("install", () => {
  self.skipWaiting();
});

// ATIVAÇÃO
self.addEventListener("activate", () => {
  self.clients.claim();
});

// FETCH (sempre pega da internet primeiro)
self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
