'use strict';

require('es6-promise').polyfill();

var test = require('tape');
var loadGmaps = require('../');

// Use our stubbed Google Maps script.
loadGmaps.url = 'test/fixtures/google-maps.js';

test('Gmaps loader', {timeout: 500}, function (assert) {
  assert.plan(2);

  loadGmaps().then(function (mapsApi) {
    assert.ok(mapsApi.Map, 'map constructor present');

    loadGmaps().then(function () {
      assert.equal(window.mapScriptLoadCount, 1, 'does not load twice');
    });
  });
});
