# Stubifier
Stub endpoints in any easy and isolated way.<br />
<br />
**Stubifier** uses a Service Worker to stub endpoints at the browser level:

# Benefits
1. No need to run any server or modify your backend code.
2. Works through your entire application.

# Usage 
The package exports a _**stub**_ method that you can call anywhere in your app (preferably in your entry point file).<br />
<br />

_**stub**_ method parameters:
1. The **Service Worker url**, the service worker file should be copied in a folder inside your web application that can be accessed by the borwser.
2. The stub endpoints (see the below example for the structure of the object that needs to be provided).
3. The service worker scope. 

# Example
```javascript
import { stub } from 'stubifier';

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
