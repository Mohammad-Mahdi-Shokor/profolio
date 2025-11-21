'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8cd5b3ec51a760ef553fdf2119e08bdd",
".git/config": "224aba9af6339edcb628b1465bb2ef65",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "40c872e0c1a3302d6478e9606eafebe1",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "afd5924fea89dc9abf2b8096c45d79f2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f21a1f643426fa68e0341a789d9df644",
".git/logs/refs/heads/main": "00cc1772e7510d32c7ceffb70261906b",
".git/logs/refs/remotes/origin/main": "b7e958ef3dfc73ff4bf66963c35afc15",
".git/objects/01/399ad450dacca8f6837b361f560d2d9a28f0ac": "765219c14024d50875010fc4e6a5d413",
".git/objects/0d/049ac9745f21b0ab9d73c9193afbcd8adf08db": "c289cbc3dd4c3996904c0fce3c63106d",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/24/a98772ecbacc7b075395d49309609a7000e7e4": "4fe77a9ba86f4ed87154483e0dd125d0",
".git/objects/2a/43803f76d47b3cc5dd736c341d76e4215eecd5": "2e63903b39d7da8bfcc9931e87cde317",
".git/objects/34/cb82d4e3e1e5c9935a79a1b6828dbdf7fb1b8d": "0bbdcf29fe18897b6e603b064a4f3111",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/35/e3a4b95bdab3e5e2cee6b84634f79c4b76e74a": "7f938a133e73ed1f540333e4f00f7524",
".git/objects/39/14b5c03f6f54d413f436762fc875100d813adc": "dbb6807b9b322424ff0fd96b122243f3",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/4f/c45a2f4eb95371b8b6335a32df50a135792899": "8065f5f3ab19e543a8e84195f1ef7adb",
".git/objects/53/85ca0f57c1292062b5931488a44faacc0704af": "b9672c1426f940a4d6fb331e6d169f83",
".git/objects/54/f0ffc080a23819c7d32633b7a7d360810c2e63": "fad2da145fe4108eddc5848a94d8e117",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5c/1ea8aa027fd7b3532d4d165c6650abe6ef3f56": "22a7bb073502e8a223b130d7ef0b32f0",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/63/65d2c8979f886500c086a0b138ca8242f9460f": "f48b3839fc62d209a9648ef66c33b82c",
".git/objects/63/8c13f3a2c4e126ad4616e982648157bd9ca9d0": "798bc148cc752b5b10cbd6fd9fb98345",
".git/objects/69/15efb55f83aac0a925fa317b9f84c21f750676": "efde948f4b13c193201d8f0c205c8380",
".git/objects/69/ec716fef8cc0a84c6443b762ad529fb36065ee": "860154d6e128d73e53840697051427e7",
".git/objects/6a/8c43fb0b8c0f33432bfa2c031822d915c5e20a": "f1b756dc8f689533d822b0dd4d6279bd",
".git/objects/72/3d030bc89a4250e63d16b082affe1998618c3f": "e4299c419434fc51f64a5266659918fa",
".git/objects/72/92b7e3677ce8ff86718b6fb0bc0c480ab88c88": "a9cb5127ecc97d3a1800af177cf2a2e8",
".git/objects/73/c5e9900863805f94d71b3b1ddb41ef917d4a63": "8fefa2112d4535398a5eeb6ef0ccd7dd",
".git/objects/77/26324d93c0ac4fa9fba3f9d55335904b5b8ca5": "022aa0f828eda3da8f20402c3b986b52",
".git/objects/78/a043974f17843e295e31d43fa0ee621be5c25e": "97c224df3ab8104046d73cd014271b9c",
".git/objects/86/d111f09a93cccfa0011858c519a823e7dafef7": "9a15839a59b5f501fbf7b9824c4b6f84",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/263a4ece55cfdc84d2bad6ebea5d1566ac0f4f": "e22942bbef5065f3b61577c78a2dc4cc",
".git/objects/8e/b7b6ab04f8feaf22800acfa05ca44cde9a7dfc": "228218ad60f8bf1363ab9efec49cd848",
".git/objects/8f/368292a70675725b4d450fb31a7af7e7a2465c": "f772b016eabfd2336c517d3cfb18602d",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/9a/578a7b506406a878052b003516bb9a7fd6dbf5": "b951b6069b21bb24c22e14324b4193ef",
".git/objects/9e/26dfeeb6e641a33dae4961196235bdb965b21b": "304148c109fef2979ed83fbc7cd0b006",
".git/objects/9e/40e0b458cc05e89f1d75beffae32fc02fdcfb6": "3181943eaaff0b42ce39fa3e648f4139",
".git/objects/9f/896df604d1e24349a71d5ef19f4b6fb790e132": "d1f35b7b923405da49b5629e9393c840",
".git/objects/a0/3c8e3d8ff848e0d7d9a3552c12625763aa6e03": "0b61f9b0ccb22f703832e2868afb036d",
".git/objects/a5/8fa51e3fdc53a56b19906e44e142ed73329445": "6000830688a34718d80041f5f6c47317",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/ae/4c97180a4689e996f89f79e52cb3d443254b12": "6095fd3f0a6496b9842eb358488f11bd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c2/0b5e37412b67497a57e1f4f1a8eefbb5a68c2a": "e611929c3f2db802a8add7cd030a76e0",
".git/objects/ca/675b1c22e81aa8c787fcfabac5be6240af26c7": "985650a8b47bc651ddda450f18dcedf3",
".git/objects/ca/cd3c41ad9197f29fda34ca571944b487db95f5": "9c865682a2d9c0cc3e151f2a9a6a53f7",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/cc/59dd45deb6a18ab854614082c6a3437f07e902": "18d3c4a3f993b3f615b7766e73c0a37f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/db/846aca8694eb6e4207e1e75e69414dd4898b0d": "7b97a4010358bbb19cafac7ebdb7fde5",
".git/objects/db/9c9be50f33c61daf94252bb1b941149a8217a2": "c977e6406bf378d682890d22a29886b4",
".git/objects/de/cfd52b2fd81b80b98ebe53f5b85044e29e9a93": "b06195aa9328ce3229d0396e818695db",
".git/objects/e7/9ff8d94fee903630a824a566101f913bcc3e93": "dc96b5c90562d1aec75b439f6b7fd2ab",
".git/objects/ea/99c113740686e320438a3c555fa68bf8810878": "1a6c1276b9ed3a78d7ce77c7572c5265",
".git/objects/eb/5378ba4db8cada93b7d1ff24466bca37a5646d": "654eb2d131c30d0dd003e07f0a4dc1a1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/8b72f51015219cecd5478a024d9511be2fc18d": "25d1fb7a0403804df9cd7dac17f434c5",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/162a64ebe9db7cebcdc1d4de46a77d3f68d657": "dd83f82566049602106a704a5c600615",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f4/17459cc7e47e42754e489cd829e83e1110460e": "2551aa348af7b2796d0b615f61bd4104",
".git/objects/f4/5a8cbed93334a0923264553ceb7903795dd251": "89efb881592bea3a092a9bcd0e892bf0",
".git/objects/f9/594c9d3ad4fc944d1610a7c52132416610a312": "26e9020de9b2b8edbc9f1d0001284951",
".git/refs/heads/main": "792ccbeb7827dbcc89abacb7c0d63215",
".git/refs/remotes/origin/main": "673ade31410be53e4b5e181fb15a3f6b",
"assets/AssetManifest.bin": "076a9e91e7d78bef22bbe1995459cc8f",
"assets/AssetManifest.bin.json": "172fa5baee48ea091717c5a48a09de42",
"assets/AssetManifest.json": "6cb175e6aabdb83551c72e180a794fb4",
"assets/assets/Under_Construction.json": "977759c4f883bd4cc2beb3b29b6f21e8",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "ce3ec8b40ad59185ae83afc085346629",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "a5d9b0c8e2aa750d648b7b19959917d7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "21df8f93082dc09413f94be8dd941a82",
"/": "21df8f93082dc09413f94be8dd941a82",
"main.dart.js": "e2b477b126146c7787e2d2a973b0db20",
"manifest.json": "3f08b96f75242c9eb3ccebfe1655bbcd",
"version.json": "f6cccd6a4dc327af67744c99b72f9df6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
