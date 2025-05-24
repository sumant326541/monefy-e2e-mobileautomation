const { config } = require('./wdio.conf');

config.capabilities = [{
    // capabilities for iOS
    platformName: 'iOS',
    "appium:deviceName": "Bond007",
    "appium:platformVersion": "16",
    "appium:automationName": "XCUITest",
    "appium:udid": "183902d7e28b65fb1090b949cf8058005609b6ef",
    "appium:bundleId": "com.monefyapp.monefy",
    "appium:noReset": false,
    "appium:autoLaunch": true,
}];
exports.config = config;
