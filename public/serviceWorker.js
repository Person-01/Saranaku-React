
// importScripts(
//     'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
//   );
// workbox.routing.registerRoute(
//     ({request}) => request.destination === 'image',
//     new workbox.strategies.CacheFirst()
// )
//install service worker
self.addEventListener('install', evt => {
    console.log('Service worker has been installed');
  });
  //activate event
  self.addEventListener('activate', evt => {
    console.log('service worker has been activated');
  });
  self.addEventListener('fetch', function(event){
  
  })