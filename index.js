const channel = new BroadcastChannel('stubify_channel');

exports.stub = function(serviceWorkerUrl, fakeEndpoints, scope){
    if (!('serviceWorker' in navigator)) {
        return;
    }
    window.addEventListener('load', function() {
        navigator.serviceWorker.register(serviceWorkerUrl, {scope: scope || '/'}).then(function(registration) {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
            channel.postMessage(fakeEndpoints);
        }, function(err) {
            console.log('Stubify serviceWorker registration failed: ' + err);
        });
    });
}