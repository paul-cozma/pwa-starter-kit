/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

importScripts(
  "precache-manifest.c96ee04de2783af2a29c65997a95fe26.js"
);

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "_redirects",
    "revision": "d7ad4ab2152e894d5ce6a2c9bf44749f"
  },
  {
    "url": "0.module.bundle.js",
    "revision": "052cb33411258e848a30257f316329a1"
  },
  {
    "url": "1.module.bundle.js",
    "revision": "79a9642ef316b5112bc18f148acb913b"
  },
  {
    "url": "2.module.bundle.js",
    "revision": "384869b29a3664e732fde3887ffed155"
  },
  {
    "url": "3.module.bundle.js",
    "revision": "cd81bc54afec2b7bd16060408095e706"
  },
  {
    "url": "4.module.bundle.js",
    "revision": "23c7d911bad8b8895e95c1aea5d46b5a"
  },
  {
    "url": "5.module.bundle.js",
    "revision": "7681ca8892e635cf787ed267189d3f1d"
  },
  {
    "url": "6.module.bundle.js",
    "revision": "7f3640d47e239ce4e8b093cd29a5f23c"
  },
  {
    "url": "7.module.bundle.js",
    "revision": "def318f43cb48b7a7ba0a5126895eaf8"
  },
  {
    "url": "8.module.bundle.js",
    "revision": "9fe9a3f82aee3f914bf3ebd0e32762be"
  },
  {
    "url": "admin/config.yml",
    "revision": "2323d2fb19a7b004c9c44bec710bdcda"
  },
  {
    "url": "admin/index.html",
    "revision": "e71c6e62d6d85781aabcb1fcd4af1a2e"
  },
  {
    "url": "images/bufscalat.jpg",
    "revision": "0d9ea1ac8657ad584aa601d5cfa390b7"
  },
  {
    "url": "images/DDD-1.png",
    "revision": "214013e07c59ed0c1fb81ebc5fc0d1ab"
  },
  {
    "url": "images/DDD-2.png",
    "revision": "6096e286b843f9986e3bb156aa6eb7f8"
  },
  {
    "url": "images/DDD.png",
    "revision": "c8393940cc420a931e9f5751dc6cd9a3"
  },
  {
    "url": "images/icons/favicon-16x16.png",
    "revision": "5048e2367d92a6d25d7891e1e708c32d"
  },
  {
    "url": "images/icons/favicon-32x32.png",
    "revision": "aba6ab914d8a289c5685d3d35e54501f"
  },
  {
    "url": "images/icons/favicon-96x96.png",
    "revision": "bdc0444f4bc1d590393debdd86cf6ff5"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "b06e6c8685ac2bc0cb52fdd00c742dad"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "03e690812fded164d8a3a37705f5472c"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "e2086bc967349847ab5d4273eb6a1589"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "0953e64fa318475e6f0ddca04d05e391"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "931dbb1292fbdc0e83f6aecbd93df924"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "1cf8bae1ca3bd58401e1983fe8cc67c0"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "b3051ad117c9ee72796089600ef66b79"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "e2c882e49561dc5df515bbed391ad547"
  },
  {
    "url": "images/icons/Thumbs.db",
    "revision": "6db71d8805040a02778506376c9b9058"
  },
  {
    "url": "images/logo-soulmatters.png",
    "revision": "7f1d661352059f5c45e9fa52c5844ac1"
  },
  {
    "url": "index.html",
    "revision": "ca1093c58dbba60e5eb8f565711c3361"
  },
  {
    "url": "manifest.json",
    "revision": "f834b59da115382162fb2c695ed7d8c8"
  },
  {
    "url": "module.bundle.js",
    "revision": "716172194253d73eca93d4e9e9642ca2"
  },
  {
    "url": "precache-manifest.15cff9c332855f2e8180c33e67183f24.js",
    "revision": "15cff9c332855f2e8180c33e67183f24"
  },
  {
    "url": "vendor/apply-shim.min.js",
    "revision": "b7a01b6e7d7c5ec6ed630b1b9ea90155"
  },
  {
    "url": "vendor/bundles/webcomponents-ce.js",
    "revision": "36d176c49f8a669b5b65bb65af5ad1e4"
  },
  {
    "url": "vendor/bundles/webcomponents-sd-ce-pf.js",
    "revision": "7ab0bbec395a979a911577f3b1dfe71f"
  },
  {
    "url": "vendor/bundles/webcomponents-sd-ce.js",
    "revision": "e46a8332e6e2cbbcbb7a04bfba472b38"
  },
  {
    "url": "vendor/bundles/webcomponents-sd.js",
    "revision": "3f5d1aa043b3e9dc1260e507b78cd5d3"
  },
  {
    "url": "vendor/custom-elements-es5-adapter.js",
    "revision": "af8a7a337a6db0a7a94dc072e3c17515"
  },
  {
    "url": "vendor/custom-style-interface.min.js",
    "revision": "0e459ea9ff2b13159359db1d78432426"
  },
  {
    "url": "vendor/scoping-shim.min.js",
    "revision": "0c14594063839432f39386eb1ca22a46"
  },
  {
    "url": "vendor/webcomponents-bundle.js",
    "revision": "fe4a22f36087db029cd3f476a1935410"
  },
  {
    "url": "vendor/webcomponents-loader.js",
    "revision": "e044a63e034bf10304dad73138b8c74b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/https:\/\/api.soulmatters.ro/, workbox.strategies.staleWhileRevalidate(), 'GET');
