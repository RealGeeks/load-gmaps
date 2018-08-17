# Load Gmaps

Asynchronously load Google Maps script.

## Usage

Make sure to include a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) polyfill for browsers that don’t support it natively. [es6-promise](https://github.com/jakearchibald/es6-promise) seems to do a nice job.

```js
var loadGmaps = require('load-gmaps');

// Set version to load (Optional).
loadGmaps.version = '3.19';

// If using Enterprise Google Maps, set client and channel

loadGmaps.client = 'test';
loadGmaps.channel = 'test';

loadGmaps().then(function (mapsApi) {
  // Create a map.
  var map = new mapsApi.Map(/* options */);
});
```

## Changelog

08/17/18 - v0.1.2 - Added support for client and channel
