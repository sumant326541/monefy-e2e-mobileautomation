const { config } = require('./wdio.conf'); // add your own services and capabilities if needed

config.capabilities = [{
    // capabilities for Android
    "platformName": "Android",
    "appium:automationName": "UiAutomator2",
    "appium:deviceName": "emulator",
    "appium:udid": "emulator-5554",
    "appium:appPackage": "com.monefy.app.lite",
    "appium:appActivity": "com.monefy.activities.main.MainActivity_",
    "appium:noReset": false,
    //'appium:app': 'app.apk' // path to your app
}];
exports.config = config;
