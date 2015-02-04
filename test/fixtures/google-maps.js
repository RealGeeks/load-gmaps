(function () {
  'use strict';

  window.google = {
    maps: {
      Map: function () {}
    }
  };

  if (!window.mapScriptLoadCount) {
    window.mapScriptLoadCount = 0;
  }

  window.mapScriptLoadCount++;
  window.mapLoaded();
})();
