/* global google */
'use strict';

var scriptLoad = require('@realgeeks/scriptload');
var qs = require('query-string');
var mapsPromise;

function loadApi(resolve) {
  var query = {
    v: loadGmaps.version,
    callback: loadGmaps.callbackName
  };

  if (loadGmaps.key) {
    query.key = loadGmaps.key;
  }

  if (loadGmaps.client) {
    query.client = loadGmaps.client;
  }

  if (loadGmaps.channel) {
    query.channel = loadGmaps.channel;
  }

  window[loadGmaps.callbackName] = function () {
    // IE8 throws an error if we try to delete window properties.
    window[loadGmaps.callbackName] = undefined;

    resolve(google.maps);
  };

  scriptLoad(loadGmaps.url + '?' + qs.stringify(query));
}

function loadGmaps() {
  return mapsPromise || (mapsPromise = new Promise(loadApi));
}

loadGmaps.url = 'https://maps.googleapis.com/maps/api/js';
loadGmaps.version = 'weekly';
loadGmaps.callbackName = 'mapLoaded';

module.exports = loadGmaps;
