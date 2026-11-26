const CACHE_PREFIX = "appsgenerator:" + self.registration.scope + ":";
const CACHE = CACHE_PREFIX + "v3";
const SHELL = [
  "./", "./style.css", "./app.js", "./storage.js", "./manifest.webmanifest",
  "./icone.ico", "./Import_csv_modele.csv", "./appreciations.db",
  "./sql-wasm.js", "./sql-wasm.wasm", "./papaparse.min.js",
  ...[48,72,96,128,144,152,167,180,192,256,384,512].map(size => "./icon-" + size + ".png"),
  "./maskable-192.png", "./maskable-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await cache.addAll(SHELL.map(url => new Request(url, { cache: "reload" })));
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    for (const name of await caches.keys()) {
      if (name.startsWith(CACHE_PREFIX) && name !== CACHE) await caches.delete(name);
    }
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET" || !event.request.url.startsWith(self.registration.scope)) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const request = event.request.mode === "navigate" ? "./" : event.request;
    return (await cache.match(request)) || fetch(event.request);
  })());
});
