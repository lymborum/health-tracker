const CACHE="tasks-v1";
self.addEventListener("install",e=>{self.skipWaiting()});
self.addEventListener("activate",e=>{e.waitUntil(clients.claim())});
self.addEventListener("fetch",e=>{
 e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{
  const copy=res.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return res;
 }).catch(()=>caches.match(e.request))));
});
