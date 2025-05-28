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
    "appium:uiautomator2ServerLaunchTimeout": 120000,
    "appium:newCommandTimeout": 300
    //'appium:app': 'app.apk' // set path to your app
}];
exports.config = config;
