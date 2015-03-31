module.exports = function(browsers, browserKey) {

  this.browserKey = browserKey === undefined ? "browser" : browserKey;

  this.defaultConfig = {};

  this.getOsName = function(osName) {
    var osNames = { mac: "OS X", iphone: "IOS", windows: "Windows", linux: "Linux", windows: "Windows", android: "Android" };
    return osNames[osName];
  };

  this.addCustomLaunchers = function(customLaunchers) {
    for (os in customLaunchers) {
      for (osVersion in customLaunchers[os]) {

        var browserLength = customLaunchers[os][osVersion].browsers.length;

        for (var i = 0; i < browserLength; i++) {

          var browserNameAndVersion = customLaunchers[os][osVersion].browsers[i].split('-');
          var browserName = browserNameAndVersion[0];
          var browserVersion = browserNameAndVersion[1] || '';

          if ((customLaunchers[os][osVersion].devices || []).length > 0) {

            for (var i = 0; i < customLaunchers[os][osVersion].devices.length; i++) {
                var deviceName = customLaunchers[os][osVersion].devices[i];

                var launcherName = 'bs_'+ os +'_'+ osVersion.replace(/\s/g, '_') +'_'+ browserName.replace(/\s+/,'') +'_'+ deviceName.replace(/\s/g, '_');

                var tmpConfig = {
                    base: 'BrowserStack',
                    device: deviceName,
                    os: this.getOsName(os),
                    os_version: osVersion,
                    browser_version: browserVersion
                };
                tmpConfig[this.browserKey] = browserName;
                browsers[launcherName] = this._addDefaultConfigTo(tmpConfig);
            }
          } else {
            var launcherName = 'bs_'+ os +'_'+ osVersion.replace(/\s/g, '_') +'_'+ browserName.replace(/\s+/,'');

            var tmpConfig = {
                base: 'BrowserStack',
                device: '',
                os: this.getOsName(os),
                os_version: osVersion,
                browser_version: browserVersion
            };
            tmpConfig[this.browserKey] = browserName;
            browsers[launcherName] = this._addDefaultConfigTo(tmpConfig);
          }
        }

      }
    }

    return browsers;
  }

  this._addDefaultConfigTo = function(obj) {
    for(dft in this.defaultConfig) {
      obj[dft] = this.defaultConfig[dft];
    }
    return obj;
  };

};
