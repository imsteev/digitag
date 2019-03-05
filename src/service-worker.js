self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('static').then(cache => {
      return cache.addAll([
        '/static/',
        '/static/html',
        '/static/html/index.html',
        '/static/js',
        '/static/js/app.js',
        '/static/js/event-bus.js',
        '/static/js/laundry-symbols.js',
        '/static/assets',
        // TODO: all the .svg files. maybe use a function to generate
      ])
    })
  )
});
