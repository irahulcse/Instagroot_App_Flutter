'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "0db7630cf60ff2fc7710b4fa6f1dd638",
"/": "0db7630cf60ff2fc7710b4fa6f1dd638",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"assets/packages/outline_material_icons/lib/outline_material_icons.ttf": "6b94994fffd9868330d830fcb18a6026",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/assets/fonts/Billabong.ttf": "52b04f1c2bd73f240b4ad620924a40c9",
"assets/assets/images/groot7.jpg": "c85d46ee6ad6615ff7f2930c2020ef99",
"assets/assets/images/launcher_groot.png": "098d5fda38df8b19b30ba5a142233193",
"assets/assets/images/nebula.jpg": "256e0f8d14e93979400ae815b7d0ce3a",
"assets/assets/images/rocket.jpg": "78d6bdf3337c4ee1151fddc62ebf8f9e",
"assets/assets/images/launcher_groot_512.png": "6043a120c3306edc62fb640757248a5a",
"assets/assets/images/grootlover.jpg": "984165de801ad6f797a243a9eb95045a",
"assets/assets/images/nickwu241.jpg": "346fdd3ed1e3d0147a48d7f2ef864a30",
"assets/assets/images/starlord.jpg": "e80acbab271e203fab4f3e4603a8056f",
"assets/assets/images/gamora.jpg": "b5a3e15254b73f94a76159f3edb129b6",
"assets/assets/images/groot5.jpg": "b416d0340381e443449292785b94ae40",
"assets/assets/images/groot2.jpg": "23644de96b8cd1d9836fc4532c99ebf0",
"assets/assets/images/building.gif": "1d04052406ca3ee669f669982831c24f",
"assets/assets/images/groot1.jpg": "7701079d41f09990187abacbc673003d",
"assets/assets/images/groot3.jpg": "d934914ca683cce9f575aa143ca9d342",
"assets/assets/images/groot6.jpg": "4e3adc7066d911744d6d91f1c1074bc9",
"assets/assets/images/groot4.jpg": "e56b4fc923f358111227b19ea7e2a46e",
"assets/FontManifest.json": "5cd86ca68acc1b17762533fbef46492d",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/AssetManifest.json": "aeeb6cf9cbbc4f43450f29fb1545c1b2",
"assets/LICENSE": "7e6f3c22048ec9f636cb51f568631f74",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "9e287983f340d51ab57d9dcf23cffa2c",
"manifest.json": "5da4426c7334e6b9fad2fc85639450b0"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
