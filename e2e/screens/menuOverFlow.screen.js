const { $ } = require('@wdio/globals')
const BaseScreen = require("./base.screen")

class MenuOverflowScreen extends BaseScreen {

    get accountsPannel() {
        const androidSelector = `//*[@resource-id="com.monefy.app.lite:id/accounts_panel"]`
        const iosSelector = '**/XCUIElementTypeButton[`name == "ACCOUNTS"`]'
        const selector = driver.isAndroid ? androidSelector : `-ios class chain:${iosSelector}`
        return $(selector);
    }

    get getSettingsBtn() {
        const androidSelector = `//*[@resource-id="com.monefy.app.lite:id/settings_button"]`
        const iosSelector = '**/XCUIElementTypeButton[`name == "SETTINGS"`]'
        const selector = driver.isAndroid ? androidSelector : `-ios class chain:${iosSelector}`
        return $(selector);
    }

    async clickAccounts() {
        await this.accountsPannel.waitForDisplayed({ timeout: 5000 });
        await this.accountsPannel.click();
    }
}
module.exports = new MenuOverflowScreen();
