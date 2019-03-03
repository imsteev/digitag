if ('serviceWorker' in navigator) {
  console.log('service worker is supported!');
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js')
    .then(registration => {
      console.log('Service Worker is registered', registration);
    })
    .catch(err => {
      console.error('Registration failed:', err);
    });
  });
  window.addEventListener('install', function(event) {
    console.log('installing!')
  });
}