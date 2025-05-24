const { $ } = require('@wdio/globals')

class HomeScreen {

    get headerMonefy() {
        const androidSelector = `//*[@resource-id="com.monefy.app.lite:id/toolbar"]//*[@text="Monefy"]`
        const iosSelector = '**/XCUIElementTypeStaticText[`name == "Monefy"`]'
        const selector = driver.isAndroid ? androidSelector : `-ios class chain:${iosSelector}`
        return $(selector);
    }

}
module.exports = new HomeScreen();
