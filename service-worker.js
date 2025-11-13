self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("tunemate-cache-v1").then((cache) => {
      return cache.addAll([
        "/TuneMate/",
        "/TuneMate/index.html",
        "/TuneMate/style.css",
        "/TuneMate/script.js",
        "/TuneMate/img/",
        "/TuneMate/songs/"
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
