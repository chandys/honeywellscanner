# cordova-honeywell-scanner-simplified
Ionic/Cordova Honeywell Scanner Simplified Plugin for the barcodes buil-in scanner.

# Install
Ionic: `ionic cordova plugin add cordova-honeywell-scanner-simplified`

Cordova: `cordova plugin add cordova-honeywell-scanner-simplified`

# Tested with
Honeywell ScanPal EDA50

# Usage
```javascript
window.plugins.honeywell.listen(data => {
    console.log('Scanned: ' + data);
  }, err => {
   console.log('Error occured: ' + error);
  });
```


[Doru Moraru](http://doru-moraru.com)