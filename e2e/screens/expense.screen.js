const { $ } = require('@wdio/globals');
const incomeexpensecommonScreen = require('./incomeExpenseTransferCommon.screen');

class ExpenseScreen extends incomeexpensecommonScreen {

    get headerTitle() {
        const androidSelector = `//*[@text="New expense"]`
        const iosSelector = '**/XCUIElementTypeStaticText[`name == "New expense"`]'
        const selector = driver.isAndroid ? androidSelector : `-ios class chain:${iosSelector}`
        return $(selector);
    }

    /**
     * * Adds a new expense transaction.
     * * @param {string} amount - The amount of the expense.
     * * @param {string} category - The category of the expense.
     * * @param {string} mode - The payment mode for the expense.
     * * @param {string} description - A description of the expense.
     * * This method fills in the amount, selects the category and payment mode, enters a description, and saves the transaction.
     */
    async addNewExpense(amount, category, mode, description) {
        await this.addTransaction(amount, category, mode, description);
    }
}
module.exports = new ExpenseScreen();
