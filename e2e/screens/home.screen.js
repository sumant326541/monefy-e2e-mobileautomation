const { $ } = require('@wdio/globals')

class HomeScreen {

    get headerMonefy() {
        const androidSelector = `//*[@resource-id="com.monefy.app.lite:id/toolbar"]//*[@text="Monefy"]`
        const iosSelector = `//*[@resource-id="com.monefy.app.lite:id/toolbar"]//*[@text="Monefy"]`
        const selector = driver.isAndroid ? androidSelector : iosSelector
        return $(selector);
    }

}
module.exports = new HomeScreen();
