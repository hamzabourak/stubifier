const channel = new BroadcastChannel('stubify_channel');
var fakeEndpoints = [];

channel.onmessage = function(event) {
  fakeEndpoints = event.data;
};

self.addEventListener('install', function(event) {
  self.skipWaiting();
});

function matchUrl(u, v) {
  const uA = u.split('/');
  const vA = v.split('/');
  if (uA.length != vA.length) {
    return false;
  }

  for (var i=0; i<uA.length; i++) {
    if (uA[i] != vA[i] && uA[i] != '*'){
      return false;
    }
  }

  return true;
}

self.addEventListener('fetch', function(event) {
  var relativeUrl = event.request.url.replace(/^(?:\/\/|[^\/]+)*\//, "");

  const fakeEndpoint =
    fakeEndpoints.find(
      function(e){
      return matchUrl(e.url, relativeUrl);
    });

  if (fakeEndpoint){
     blob = new Blob([JSON.stringify(fakeEndpoint.data)], {type : 'application/json'});
     var fakeResponse = new Response(blob);
     event.respondWith(Promise.resolve(fakeResponse));
     return;
  }

  event.respondWith(fetch(event.request));
});
