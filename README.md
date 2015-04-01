Zeuss
-----

### Desktop
```js
  var Zeuss = require('zeuss');

  var browsers = {};

  // Default browser key is just browser
  var zeuss new Zeuss(browsers, "browserName");

  zeuss.addCustomLaunchers({
    mac: { 'Yosemite': { browsers: ['Safari-8.0'] } }
  });

  // ## Outputs:
  {
   'bs_mac_Yosemite_Chrome': {
      base: 'BrowserStack',
      device: 'Samsung Galaxy',
      browserName: 'Safari',
      browser_version: '8.0',
      os: 'OS X',
      os_version: 'Yosemite'
    }
  }
```


### Mobile
```js
  var Zeuss = require('zeuss');

  var browsers = {};
  var zeuss new Zeuss(browsers);

  zeuss.addCustomLaunchers({
    android: { '2.1': { devices: ['Samsung Galaxy'], browsers: ['chrome'] } }
  });

  ## Outputs:
  {
   'bs_android_2.1_chrome_Samsung_Galaxy': {
      base: 'BrowserStack',
      device: 'Samsung Galaxy',
      browser: 'chrome',
      browser_version: '',
      os: 'Android',
      os_version: '2.1'
    }
  }
```


## Default config
```js
  var Zeuss = require('zeuss');

  var browsers = {};
  var zeuss new Zeuss(browsers);

  zeuss.customConfig = {
    'local.browserstack': true,
    'anythingElse': false
  };

  zeuss.addCustomLaunchers({
    android: { '2.1': { devices: ['Samsung Galaxy'], browsers: ['chrome'] } }
  });

  // ## Outputs:
  {
   'bs_android_2.1_chrome_Samsung_Galaxy': {
      base: 'BrowserStack',
      device: 'Samsung Galaxy',
      browser: 'chrome',
      browser_version: '',
      os: 'Android',
      os_version: '2.1',
      'local.browserstack': true,
      'anythingElse': false
    }
  }
```
