const CACHE_NAME = 'cache-v1'
console.log(CACHE_NAME)
let staticUrls = [
  '/static/',
  '/static/html',
  '/static/html/index.html',
  '/static/js',
  '/static/js/app.js',
  '/static/js/event-bus.js',
  '/static/js/laundry-symbols.js',
  '/static/assets',
  // TODO: all the .svg files. maybe use a function to generate
]

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(staticUrls)
    })
  )
});
