const CACHE_NAME = 'cache-v1'

// resources specified in URI format - scope is default to '/'
let resources = [
  '/static/js/app.js',
  '/static/js/event-bus.js',
  '/static/js/laundry-symbols.js',
  '/index.html'
  // TODO: cache .svg files. or perhaps leave this for the fetch caching?
]

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(cache => {
      return cache.addAll(resources)
    })
    .catch(err => {
      console.error(err)
    })
  )
});

// The following performs a cache-upon-response strategy
// See https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage#Examples

// self.addEventListener('fetch', function(event) {
//   return caches.match(event.request).then(function(response) {
//     return response || fetch(event.request).then(function(r) {
//       caches.open(CACHE_NAME).then(function(cache) {
//         cache.put(event.request, r);
//       });
//       return r.clone();
//     });
//   })
// });