# Load Gmaps

Asynchronously load Google Maps script.

## Usage

Make sure to include a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) polyfill for browsers that don’t support it natively. [es6-promise](https://github.com/jakearchibald/es6-promise) seems to do a nice job.

```js
var loadGmaps = require('load-gmaps');

// Set version to load (Optional).
loadGmaps.version = '3.17';

loadGmaps().then(function (mapsApi) {
  // Create a map.
  var map = new mapsApi.Map(/* options */);
});
```
