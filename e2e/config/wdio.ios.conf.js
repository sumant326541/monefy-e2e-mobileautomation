const { config } = require('./wdio.conf');

config.capabilities = [{
    // capabilities for local Appium web tests on iOS simulator
    platformName: 'iOS',
    'appium:deviceName': 'iPhone 15 Pro Max',
    'appium:platformVersion': '17.2',
    'appium:automationName': 'XCUITest',
    "appium:bundleId": "com.example.circusBasket"
}];

exports.config = config;
