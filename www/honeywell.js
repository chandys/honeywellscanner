var cordova = require('cordova');
var execute = require('cordova/exec');


    module.exports.listen = function (res, err) {
        return execute(res, err, "HoneywellScannerPlugin", "listen", []);
    },
    module.exports.release = function () {
        return execute(null, null, "HoneywellScannerPlugin", "release", []);
    },
    module.exports.claim = function () {
        return execute(null, null, "HoneywellScannerPlugin", "claim", []);
    }
    
