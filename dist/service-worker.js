"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["404.html","8eacf84f578c1772054d2843e7e402c8"],["76fd2d842e68663cc5098fd7a0bdac58.jpg","76fd2d842e68663cc5098fd7a0bdac58"],["a934db4a6ee2b4a0c0bec19e3ad1ee74.jpg","a934db4a6ee2b4a0c0bec19e3ad1ee74"],["ac658832e1128aa2d07be4b71d21ac4d.jpg","ac658832e1128aa2d07be4b71d21ac4d"],["cfa67451755de1164158cfd493dd0ba4.jpg","cfa67451755de1164158cfd493dd0ba4"],["e2be1f4befc052baa9ac37a32149a318.jpg","e2be1f4befc052baa9ac37a32149a318"],["ed52062c9a84535e2170990f57308c5e.jpg","ed52062c9a84535e2170990f57308c5e"],["icons/favicon.png","2e3ac7322d4b8aad6bd8846a5a56c8fe"],["icons/launcher/icon-128x128.png","31a5d645672c866a666e9cd6e0e30e17"],["icons/launcher/icon-144x144.png","0f10a95ee8c5c715c79d2fcf5b19571e"],["icons/launcher/icon-152x152.png","ae0fc79cf7b68a0e68dc35a46feb129b"],["icons/launcher/icon-192x192.png","75ac3bd73cee14bb081444b134a0f411"],["icons/launcher/icon-256x256.png","33de2a45ddf1a702e69918525f9ffc78"],["index.html","60e6d38353350f31db5f93cb076360f3"],["main.ee99d92c179155d0bc44.js","97fbd51b647aec8054a3c03603d629c1"],["manifest.json","1b18ea77b125facc9a75508f87c74a20"],["robots.txt","8dabae6ae335ab1539b9e43664e3bbf4"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,n){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=n),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(n){return new Response(n,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,n,a,t){var r=new URL(e);return t&&r.pathname.match(t)||(r.search+=(r.search?"&":"")+encodeURIComponent(n)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,n){if(0===e.length)return!0;var a=new URL(n).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,n){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return n.every(function(n){return!n.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var n=e[0],a=e[1],t=new URL(n,self.location),r=createCacheKey(t,hashParamName,a,/./);return[t.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!n.has(a)){var t=new Request(a,{credentials:"same-origin"});return fetch(t).then(function(n){if(!n.ok)throw new Error("Request for "+a+" returned a response with status "+n.status);return cleanResponse(n).then(function(n){return e.put(a,n)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!n.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var n,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(n=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),n=urlsToCacheKeys.has(a));!n&&"navigate"===e.request.mode&&isPathWhitelisted([],e.request.url)&&(a=new URL("index.html",self.location).toString(),n=urlsToCacheKeys.has(a)),n&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(n){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,n),fetch(e.request)}))}});