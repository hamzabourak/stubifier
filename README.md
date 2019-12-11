# stubifier
Stub endpoints in any easy and isolated way


# Usage example: 

const stubs = [{
  url: 'api/v3/pia/projects/*/accountability-mechanisms/Any',
  data: [
      {
          Id: 1,
          Name: 'First AM',
      },
      {
          Id: 2,
          Name: 'Second AM',
      },
  ],
}];

stub('../stubifierServiceWorker.js', stubs, '/');

1st parameter : the service worker url, the service worker file should be copied in a folder that can be accessed by the borwser.
2nd parameter : the stub endpoints
3rd parameter : the service worker scope