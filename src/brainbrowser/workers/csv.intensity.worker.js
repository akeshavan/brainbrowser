
(function() {
  "use strict";

  self.addEventListener("message", function(e) {
    var input = e.data;
    console.log("input.url is", input.url)
    importScripts(input.url + 'utils/csv-parser.js');

    var resultAndBuffers = imports['csv-parser'].parseCSV(input.data, input.options);
    self.postMessage.apply(self, resultAndBuffers);
  });

})();
