/* ==========================================================================
   SERVICE WORKER — 6-MONTH EXECUTION BLUEPRINT PWA (v3.1.0)
   - Precaches complete App Shell (HTML, CSS, JS, Manifest, PNG/SVG Icons)
   - Caches Fontshare CSS & WOFF2 typography for full offline rendering
   - Never caches dynamic external API requests (api.github.com)
   - Automatically purges outdated cache versions on activation
   - Supports safe SKIP_WAITING updates without touching localStorage
   ========================================================================== */

const APP_SHELL_CACHE = "verisci-app-shell-v3.1.0";
const FONT_CACHE = "verisci-fonts-v1";
const ALL_CACHES = [APP_SHELL_CACHE, FONT_CACHE];

const PRECACHE_ASSETS = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./manifest.json",
  "./icons/favicon.svg",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-192.png",
  "./icons/icon-maskable-512.png",
  "./icons/apple-touch-icon.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(APP_SHELL_CACHE)
      .then((cache) => cache.addAll(PRECACHE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => !ALL_CACHES.includes(key))
            .map((oldKey) => caches.delete(oldKey))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);

  // 1. Dynamic API requests (e.g. GitHub Commit Activity API): Network-Only
  //    Never cache dynamic API responses in the Service Worker; script.js handles
  //    30-minute localStorage caching and displays an explicit offline state.
  if (url.hostname === "api.github.com") {
    return;
  }

  // 2. Fontshare Typography (api.fontshare.com & cdn.fontshare.com): Cache-First
  if (url.hostname.includes("fontshare.com")) {
    event.respondWith(
      caches.open(FONT_CACHE).then((cache) =>
        cache.match(req).then((cachedResponse) => {
          const fetchPromise = fetch(req)
            .then((networkResponse) => {
              if (networkResponse && (networkResponse.status === 200 || networkResponse.type === "opaque")) {
                cache.put(req, networkResponse.clone());
              }
              return networkResponse;
            })
            .catch(() => cachedResponse);
          return cachedResponse || fetchPromise;
        })
      )
    );
    return;
  }

  // 3. Same-Origin Navigation Requests (HTML Document): Network-First with Offline Fallback to cached index.html
  if (req.mode === "navigate" || (req.headers.get("accept") || "").includes("text/html")) {
    event.respondWith(
      fetch(req)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const copy = networkResponse.clone();
            caches.open(APP_SHELL_CACHE).then((cache) => cache.put("./index.html", copy));
          }
          return networkResponse;
        })
        .catch(() =>
          caches.match(req).then((matched) => matched || caches.match("./index.html") || caches.match("./"))
        )
    );
    return;
  }

  // 4. Same-Origin Static Assets (style.css, script.js, manifest.json, icons/*): Stale-While-Revalidate
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.open(APP_SHELL_CACHE).then((cache) =>
        cache.match(req).then((cachedResponse) => {
          const networkFetch = fetch(req)
            .then((networkResponse) => {
              if (networkResponse && networkResponse.status === 200) {
                cache.put(req, networkResponse.clone());
              }
              return networkResponse;
            })
            .catch(() => cachedResponse);
          return cachedResponse || networkFetch;
        })
      )
    );
  }
});
