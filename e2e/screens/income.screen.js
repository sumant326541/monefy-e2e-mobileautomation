const { $ } = require('@wdio/globals')
const IncomeExpenseCommonScreen = require("./incomeExpenseTransferCommon.screen");
class IncomeScreen extends IncomeExpenseCommonScreen {

    get headerTitle() {
        const androidSelector = `//*[@text="New income"]`
        const iosSelector = '**/XCUIElementTypeStaticText[`name == "New income"`]'
        const selector = driver.isAndroid ? androidSelector : `-ios class chain:${iosSelector}`
        return $(selector);
    }

    async addNewIncome(amount, category, mode, description) {
        await this.addTransaction(amount, category, mode, description);
        await browser.pause(4000);
    }
    
}
module.exports = new IncomeScreen();
