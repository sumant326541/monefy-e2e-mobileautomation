const { $ } = require('@wdio/globals')
const BaseScreen = require("./base.screen")

class AccountsScreen extends BaseScreen {

    get transferBtn() {
        const androidSelector = `//*[@resource-id="com.monefy.app.lite:id/relativeLayoutAddTransferListItem"]`
        const iosSelector = '**/XCUIElementTypeButton[`name == "ACCOUNTS"`]'
        const selector = driver.isAndroid ? androidSelector : `-ios class chain:${iosSelector}`
        return $(selector);
    }

    get CashAmount() {
        const androidSelector = `(//*[@resource-id="com.monefy.app.lite:id/textViewAmount"])[1]`
        const iosSelector = '**/XCUIElementTypeTable'
        const selector = driver.isAndroid ? androidSelector : `-ios class chain:${iosSelector}`
        return $(selector);
    }

    get CardAmount() {
        const androidSelector = `(//*[@resource-id="com.monefy.app.lite:id/textViewAmount"])[2]`
        const iosSelector = '**/XCUIElementTypeTable'
        const selector = driver.isAndroid ? androidSelector : `-ios class chain:${iosSelector}`
        return $(selector);
    }

    async clickTransfer() {
        await this.transferBtn.click();
    }

    async getCashAmount() {
        const amountStr = await this.CashAmount.getText();
        const amount = parseFloat(amountStr.replace('$', ''));
        return amount
    }
    async getCardAmount() {
        const amountStr = await this.CardAmount.getText();
        const amount = parseFloat(amountStr.replace('$', ''));
        return amount
    }

}
module.exports = new AccountsScreen();
