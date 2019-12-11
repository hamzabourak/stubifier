# stubifier
Stub endpoints in any easy and isolated way


# Usage 
```javascript
const stubs = [{
  url: 'api/projects/*/tasks',
  data: [
      {
          Id: 1,
          Name: 'First task',
      },
      {
          Id: 2,
          Name: 'Second task',
      },
  ],
}];

stub('../stubifierServiceWorker.js', stubs, '/');
```
# Parameters 

1. The service worker url, the service worker file should be copied in a folder that can be accessed by the borwser.
2. The stub endpoints.
3. The service worker scope.