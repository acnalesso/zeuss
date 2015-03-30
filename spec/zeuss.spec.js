var browsers = {};
var Zeuss = require('../src/zeuss');

describe('Zeuss', function () {

  var zeuss = new Zeuss(browsers);

  it('generates config for desktop browsers', function() {
    zeuss.addCustomLaunchers({
      mac: { 'Yosemite': { browsers: ['Chrome-35.0'] } }
    });

    var generated = browsers['bs_mac_Yosemite_Chrome'];

    expect(generated.base).toEqual('BrowserStack');
    expect(generated.device).toEqual('');
    expect(generated.browser).toEqual('Chrome');
    expect(generated.browser_version).toEqual('35.0');
    expect(generated.os).toEqual('OS X');
    expect(generated.os_version).toEqual('Yosemite');
  });

  it('generates config for mobile browsers', function() {
    zeuss.addCustomLaunchers({
      android: { '2.1': { devices: ['Samsung Galaxy'], browsers: ['chrome'] } }
    });

    var generated = browsers['bs_android_2.1_chrome_Samsung_Galaxy'];

    expect(generated.base).toEqual('BrowserStack');
    expect(generated.device).toEqual('Samsung Galaxy');
    expect(generated.browser).toEqual('chrome');
    expect(generated.browser_version).toEqual('');
    expect(generated.os).toEqual('Android');
    expect(generated.os_version).toEqual('2.1');
  });

  it('allows devs to append some default object', function() {

    var defaultConfig = {
      'browserstack.user': 'test',
      'browserstack.key': '232',
      'browserstack.local': true
    };

    zeuss.defaultConfig = defaultConfig;

    zeuss.addCustomLaunchers({
      mac: { 'Mavericks': { browsers: ['Chrome-35.0'] } }
    });

    var generated = browsers['bs_mac_Mavericks_Chrome'];

    expect(generated['browserstack.user']).toEqual('test');
    expect(generated['browserstack.key']).toEqual('232');
    expect(generated['browserstack.local']).toEqual(true);
  });
});
