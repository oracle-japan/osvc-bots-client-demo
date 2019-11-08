define(["./persistenceManager","./persistenceUtils","./impl/logger"],function(a,b,c){"use strict";function d(){return function(a,b){return e(a,b).then(function(b){return f(a,b)}).then(function(b){return g(a,b)}).then(function(b){return h(a,b)}).then(function(b){return i(a,b)}).then(function(b){return k(a,b)})}}function e(a,d){var e=d.headers.get("Expires"),f=d.headers.get("x-oracle-jscpt-cache-expiration-date");return!e||!b.isCachedResponse(d)||f&&0!=f.length||(d.headers.set("x-oracle-jscpt-cache-expiration-date",e),c.log("Offline Persistence Toolkit cacheStrategies: Set x-oracle-jscpt-cache-expiration-date header based on HTTP Expires header")),Promise.resolve(d)}function f(a,d){var e=l(d.headers,"max-age");if(null!=e&&b.isCachedResponse(d)){var f=a.headers.get("Date");f||(f=(new Date).toUTCString());var g=new Date(f).getTime(),h=g+1e3*e,i=new Date(h);d.headers.set("x-oracle-jscpt-cache-expiration-date",i.toUTCString()),c.log("Offline Persistence Toolkit cacheStrategies: Set x-oracle-jscpt-cache-expiration-date header based on HTTP max-age header")}return Promise.resolve(d)}function g(d,e){var f=d.headers.get("If-Match"),g=d.headers.get("If-None-Match");if(f||g){if(a.isOnline())return m(d,e,!1);var h=e.headers.get("ETag");if(f&&h.indexOf(f)<0)return b.responseToJSON(e).then(function(a){return a.status=412,a.statusText="If-Match failed due to no matching ETag while offline",c.log("Offline Persistence Toolkit cacheStrategies: Returning Response status 412 based on ETag and HTTP If-Match header"),b.responseFromJSON(a)});if(g&&h.indexOf(g)>=0)return b.responseToJSON(e).then(function(a){return a.status=412,a.statusText="If-None-Match failed due to matching ETag while offline",c.log("Offline Persistence Toolkit cacheStrategies: Returning Response status 412 based on ETag and HTTP If-None-Match header"),b.responseFromJSON(a)})}return Promise.resolve(e)}function h(a,b){if(l(b.headers,"must-revalidate")){var d=b.headers.get("x-oracle-jscpt-cache-expiration-date");if(d){var e=new Date(d).getTime();if((new Date).getTime()>e)return c.log("Offline Persistence Toolkit cacheStrategies: Handling revalidation HTTP must-revalidate header"),m(a,b,!0)}}return Promise.resolve(b)}function i(a,b){return j(a,b)?m(a,b):Promise.resolve(b)}function j(a,b){if(l(b.headers,"no-cache"))return c.log("Offline Persistence Toolkit cacheStrategies: Has HTTP no-cache header"),!0;var d=a.headers.get("Pragma"),e=d&&"no-cache"===d.trim();return e&&c.log("Offline Persistence Toolkit cacheStrategies: Has HTTP Pragma no-cache header"),e}function k(a,d){return null!=l(d.headers,"no-store")?(b.isCachedResponse(d)&&d.headers.delete("x-oracle-jscpt-cache-expiration-date"),c.log("Offline Persistence Toolkit cacheStrategies: Has HTTP no-store header"),Promise.resolve(d)):n(a,d)}function l(a,b){var c=a.get("Cache-Control");if(c){var d,e,f,g=c.split(",");for(d=0;d<g.length;d++)if(e=g[d].trim(),0===e.indexOf(b))return f=e.split("="),!(f.length>1)||f[1].trim()}return null}function m(d,e,f){return b.isCachedResponse(e)?a.isOnline()?a.browserFetch(d).then(function(b){return 304==b.status?e:a.getCache().delete(d).then(function(){return c.log("Offline Persistence Toolkit cacheStrategies: Removing old entry based on HTTP revalidation"),b})}):f?b.responseToJSON(e).then(function(a){return a.status=504,a.statusText="cache-control: must-revalidate failed due to application being offline",c.log("Offline Persistence Toolkit cacheStrategies: Returning Response status 504 based HTTP revalidation"),b.responseFromJSON(a)}):Promise.resolve(e):Promise.resolve(e)}function n(d,e){if(null==e||b.isCachedResponse(e)||"GET"!=d.method&&"HEAD"!=d.method)return Promise.resolve(e);var f=e.clone();return a.getCache().put(d,e).then(function(){return c.log("Offline Persistence Toolkit cacheStrategies: Cached Request/Response"),f})}return{getHttpCacheHeaderStrategy:d}});