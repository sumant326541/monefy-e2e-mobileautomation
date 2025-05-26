const { $ } = require('@wdio/globals')
const BaseScreen = require("./base.screen")
const { expect } = require('@wdio/globals')

class HomeScreen extends BaseScreen {

    get addNewExpenseSuggestion() {
        const androidSelector = `//*[@text="Tap to add a new expense record"]`
        const iosSelector = '**/XCUIElementTypeStaticText[`name == "add_new_expense_suggestion"`]'
        const selector = driver.isAndroid ? androidSelector : `-ios class chain:${iosSelector}`
        return $(selector);
    }

    get tapCategoryIconSuggestion() {
        const androidSelector = `//*[@text="Or tap the category icon to add a record faster"]`
        const iosSelector = '**/XCUIElementTypeStaticText[`name == "add_new_expense_suggestion"`]'
        const selector = driver.isAndroid ? androidSelector : `-ios class chain:${iosSelector}`
        return $(selector);
    }

    get tapTransferBtnSuggestion() {
        const androidSelector = `//*[@text="Tap the 'Transfer' button to move money between accounts"]`
        const iosSelector = '**/XCUIElementTypeStaticText[`name == "add_new_expense_suggestion"`]'
        const selector = driver.isAndroid ? androidSelector : `-ios class chain:${iosSelector}`
        return $(selector);
    }

    get mainCurrencyChangeSuggestion() {
        const androidSelector = `//*[@text="Main currency can be changed here"]`
        const iosSelector = '**/XCUIElementTypeStaticText[`name == "change_main_currency_suggestion"`]'
        const selector = driver.isAndroid ? androidSelector : `-ios class chain:${iosSelector}`
        return $(selector);
    }

    get mainRecurringRecordsSuggestion() {
        const androidSelector = `//*[@text="Recurring records are now available in Monefy Premium!"]`
        const iosSelector = '**/XCUIElementTypeStaticText[`name == "change_main_currency_suggestion"`]'
        const selector = driver.isAndroid ? androidSelector : `-ios class chain:${iosSelector}`
        return $(selector);
    }
    	
    get tapBalanceOrChartSliceSuggestion() {
        const androidSelector = `//*[@text="Tap 'Balance' or a chart slice to see all records"]`
        const iosSelector = '**/XCUIElementTypeStaticText[`name == "tap_balance_or_chart_slice_suggestion"`]'
        const selector = driver.isAndroid ? androidSelector : `-ios class chain:${iosSelector}`
        return $(selector);
    }

    get monefyHeaderText() {
        const androidSelector = `//*[@resource-id="com.monefy.app.lite:id/toolbar"]//*[@text="Monefy"]`
        const iosSelector = '**/XCUIElementTypeStaticText[`name == "Monefy"`]'
        const selector = driver.isAndroid ? androidSelector : `-ios class chain:${iosSelector}`
        return $(selector);
    }

    get transferBtn(){
        const androidSelector = `//*[@resource-id="com.monefy.app.lite:id/transfer_menu_item"]`
        const iosSelector = '**/XCUIElementTypeButton[`name == "Transfer"`]'
        const selector = driver.isAndroid ? androidSelector : `-ios class chain:${iosSelector}`
        return $(selector);
    }

    get getmenuOverflowBtn() {
        const androidSelector = `//*[@resource-id="com.monefy.app.lite:id/overflow"]`
        const iosSelector = '**/XCUIElementTypeButton[`name == "GET STARTED"`]'
        const selector = driver.isAndroid ? androidSelector : `-ios class chain:${iosSelector}`
        return $(selector);
    }

    get balanceAmountText() {
        const androidSelector = `//*[@resource-id="com.monefy.app.lite:id/balance_amount"]`
        const iosSelector = '**/XCUIElementTypeStaticText[`name == "balanceTextView"`]'
        const selector = driver.isAndroid ? androidSelector : `-ios class chain:${iosSelector}`
        return $(selector);
    }

    get incomeAmountText() {
        const androidSelector = `//*[@resource-id="com.monefy.app.lite:id/income_amount_text"]`
        const iosSelector = '**/XCUIElementTypeStaticText[`name == "incomeTextView"`]'
        const selector = driver.isAndroid ? androidSelector : `-ios class chain:${iosSelector}`
        return $(selector);
    }

    get expenseAmountText() {
        const androidSelector = `//*[@resource-id="com.monefy.app.lite:id/expense_amount_text"]`
        const iosSelector = '**/XCUIElementTypeStaticText[`name == "expenseTextView"`]'
        const selector = driver.isAndroid ? androidSelector : `-ios class chain:${iosSelector}`
        return $(selector);
    }

    get balanceSliderLeft() {
        const androidSelector = `//*[@resource-id="com.monefy.app.lite:id/leftLinesImageView"]`
        const iosSelector = '**/XCUIElementTypeStaticText[`name == "leftLinesImageView"`]'
        const selector = driver.isAndroid ? androidSelector : `-ios class chain:${iosSelector}`
        return $(selector);
    }

    get balanceSliderRight() {
        const androidSelector = `//*[@resource-id="com.monefy.app.lite:id/rightLinesImageView"]`
        const iosSelector = '**/XCUIElementTypeStaticText[`name == "rightLinesImageView"`]'
        const selector = driver.isAndroid ? androidSelector : `-ios class chain:${iosSelector}`
        return $(selector);
    }

    get balanceAmountSlider() {
        const androidSelector = `//*[@resource-id="com.monefy.app.lite:id/balance_amount"]`
        const iosSelector = '**/XCUIElementTypeStaticText[`name == "balance_amount"`]'
        const selector = driver.isAndroid ? androidSelector : `-ios class chain:${iosSelector}`
        return $(selector);
    }

    get expenseBtn() {
        const androidSelector = `//*[@resource-id="com.monefy.app.lite:id/expense_button"]`
        const iosSelector = '**/XCUIElementTypeStaticText[`name == "expense_button"`]'
        const selector = driver.isAndroid ? androidSelector : `-ios class chain:${iosSelector}`
        return $(selector);
    }

    get incomeBtn() {
        const androidSelector = `//*[@resource-id="com.monefy.app.lite:id/income_button"]`
        const iosSelector = '**/XCUIElementTypeStaticText[`name == "income_button"`]'
        const selector = driver.isAndroid ? androidSelector : `-ios class chain:${iosSelector}`
        return $(selector);
    }

    async handleSuggestions() {
        const suggestions = [
            this.addNewExpenseSuggestion,
            this.tapCategoryIconSuggestion,
            this.tapTransferBtnSuggestion,
            this.mainCurrencyChangeSuggestion
        ];

        for (const suggestion of suggestions) {
            try {
                await suggestion.click();
            } catch (error) {
                console.log(`Suggestion not displayed: ${await suggestion}`);
            }
        }
        await this.clickOnMenuOverflow();

    }

    async tapOnTransferBtn() {
        await this.transferBtn.click();
    }

    async getBalanceAmount() {
        const amountStr = await this.balanceAmountText.getText();
        const amount = parseFloat(amountStr.replace(/[^0-9.-]/g, ''));
        console.log('Balance Amount:', amount);
        return amount
    }

    async getIncomeAmount() {
        const amountStr = await this.incomeAmountText.getText();
        const amount = parseFloat(amountStr.replace('$', ''));
        return amount
    }

    async getExpenseAmount() {
        const amountStr = await this.expenseAmountText.getText();
        const amount = parseFloat(amountStr.replace('$', ''));
        return amount
    }

    /**
     ** click on income button
     */
    async clickOnIncomeBtn() {
        await this.incomeBtn.click();
    }

    /**
     * * click on expense button
     * */
    async clickOnExpenseBtn() {
        await this.expenseBtn.click();
    }

    /**
     * * go to menu overflow
     */
    async clickOnMenuOverflow() {
        await this.getmenuOverflowBtn.waitForDisplayed({ timeout: 5000 });
        await this.getmenuOverflowBtn.click();
    }

}
module.exports = new HomeScreen();

