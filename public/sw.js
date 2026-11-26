const CACHE_NAME = 'firatech-ils-v1';
   self.addEventListener('install', (event) => {
     self.skipWaiting();
   });
   self.addEventListener('fetch', (event) => {
     if (event.request.method !== 'GET') return;
     event.respondWith(
       caches.open(CACHE_NAME).then(async (cache) => {
         try {
           const fresh = await fetch(event.request);
           cache.put(event.request, fresh.clone());
           return fresh;
         } catch {
           return (await cache.match(event.request)) || Response.error();
         }
       })
     );
   });