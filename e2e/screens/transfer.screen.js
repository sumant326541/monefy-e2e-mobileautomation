const { $ } = require('@wdio/globals')
const IncomeExpenseTransferCommonScreen = require("./incomeExpenseTransferCommon.screen");
class TransferScreen extends IncomeExpenseTransferCommonScreen {

    get headerTitle() {
        const androidSelector = `//*[@text="New income"]`
        const iosSelector = '**/XCUIElementTypeStaticText[`name == "New income"`]'
        const selector = driver.isAndroid ? androidSelector : `-ios class chain:${iosSelector}`
        return $(selector);
    }

    async newTransfer(amount, from, to, notes) {
        await this.doTransfer(amount, from, to, notes);
    }
    
}
module.exports = new TransferScreen();
