const { $ } = require('@wdio/globals')
const BaseScreen = require("./base.screen")

module.exports = class IncomeExpenseTransferCommonScreen extends BaseScreen {

    get dateText() {
        const androidSelector = `//*[@resource-id="com.monefy.app.lite:id/dateTextView"]`
        const iosSelector = '**/XCUIElementTypeStaticText[`name == "dateTextView"`]'
        const selector = driver.isAndroid ? androidSelector : `-ios class chain:${iosSelector}`
        return $(selector);
    }

    get navigationUpBtn() {
        const androidSelector = `~Navigate up`
        const iosSelector = '~Navigate up'
        const selector = driver.isAndroid ? androidSelector : iosSelector
        return $(selector);
    }

    get amountTextField() {
        const androidSelector = `//*[@resource-id="com.monefy.app.lite:id/amount_text"]`
        const iosSelector = '**/XCUIElementTypeStaticText[`name == "amount_text"`]'
        const selector = driver.isAndroid ? androidSelector : `-ios class chain:${iosSelector}`
        return $(selector);
    }

    get keyboardCleanerBtn() {
        const androidSelector = `//*[@resource-id="com.monefy.app.lite:id/buttonKeyboardClear"]`
        const iosSelector = '**/XCUIElementTypeStaticText[`name == "buttonKeyboardClear"`]'
        const selector = driver.isAndroid ? androidSelector : `-ios class chain:${iosSelector}`
        return $(selector);
    }

    get paymentModeSwitchFromDropdown() {
        const androidSelector = `(//*[@resource-id="com.monefy.app.lite:id/container"])[1]`
        const iosSelector = '**/XCUIElementTypeStaticText[`name == "buttonKeyboardClear"`]'
        const selector = driver.isAndroid ? androidSelector : `-ios class chain:${iosSelector}`
        return $(selector);
    }

    get paymentModeSwitchToDropdown() {
        const androidSelector = `(//*[@resource-id="com.monefy.app.lite:id/container"])[2]`
        const iosSelector = '**/XCUIElementTypeStaticText[`name == "keyboard_action_button"`]'
        const selector = driver.isAndroid ? androidSelector : `-ios class chain:${iosSelector}`
        return $(selector);
    }

    get cardPayment() {
        const androidSelector = `//*[@resource-id="com.monefy.app.lite:id/title" and @text="Payment card"]`
        const iosSelector = '**/XCUIElementTypeStaticText[`name == "keyboard_action_button"`]'
        const selector = driver.isAndroid ? androidSelector : `-ios class chain:${iosSelector}`
        return $(selector);
    }

    get cashPayment() {
        const androidSelector = `//*[@resource-id="com.monefy.app.lite:id/title" and @text="Cash"]`
        const iosSelector = '**/XCUIElementTypeStaticText[`name == "keyboard_action_button"`]'
        const selector = driver.isAndroid ? androidSelector : `-ios class chain:${iosSelector}`
        return $(selector);
    }

    get showKeyboardBtn(){
        const androidSelector = `//*[@resource-id="com.monefy.app.lite:id/show_keyboard_fab`
        const iosSelector = '**/XCUIElementTypeStaticText[`name == "keyboard_action_button"`]'
        const selector = driver.isAndroid ? androidSelector : `-ios class chain:${iosSelector}`
        return $(selector);
    }

    get sameAccountErrorMsg() {
        const androidSelector = `//*[@text="Accounts have to be different"]`
        const iosSelector = '**/XCUIElementTypeStaticText[`name == "textViewError"`]'
        const selector = driver.isAndroid ? androidSelector : `-ios class chain:${iosSelector}`
        return $(selector);
    }

    get noteTextInput() {
        const androidSelector = `//*[@resource-id="com.monefy.app.lite:id/textViewNote"]`
        const iosSelector = '**/XCUIElementTypeStaticText[`name == "noteAutocompleteTextInputLayout"`]'
        const selector = driver.isAndroid ? androidSelector : `-ios class chain:${iosSelector}`
        return $(selector);
    }

    get chooseCategoryBtn() {
        const androidSelector = `//*[@resource-id="com.monefy.app.lite:id/keyboard_action_button"]`
        const iosSelector = '**/XCUIElementTypeStaticText[`name == "keyboard_action_button"`]'
        const selector = driver.isAndroid ? androidSelector : `-ios class chain:${iosSelector}`
        return $(selector);
    }

    get keybordBtn() {
        return (key) => {
            const androidSelector = `//*[@resource-id="com.monefy.app.lite:id/buttonKeyboard${key}"]`;
            const iosSelector = `//XCUIElementTypeOther[contains(@label, '${key}')]`;
            const selector = driver.isAndroid ? androidSelector : iosSelector;
            return $(selector);
        };
    }

    get depositIcon() {
        const androidSelector = `//*[@resource-id="com.monefy.app.lite:id/textCategoryName" and @text="Deposits"]`
        const iosSelector = '**/XCUIElementTypeStaticText[`name == "keyboard_action_button"`]'
        const selector = driver.isAndroid ? androidSelector : `-ios class chain:${iosSelector}`
        return $(selector);
    }

    get addTransferBtn() {
        const androidSelector = `//*[@resource-id="com.monefy.app.lite:id/keyboard_action_button"]`
        const iosSelector = '**/XCUIElementTypeButton[`name == "buttonAddTransfer"`]'
        const selector = driver.isAndroid ? androidSelector : `-ios class chain:${iosSelector}`
        return $(selector);
    }

    get category() {
        return (categoryName) => {
            const androidSelector = `//*[@resource-id="com.monefy.app.lite:id/textCategoryName" and @text="${categoryName}"]`;
            const iosSelector = `//XCUIElementTypeStaticText[contains(@label, '${categoryName}')]`;
            const selector = driver.isAndroid ? androidSelector : iosSelector;
            return $(selector);

        }
    }


    async enterAmount(amount) {
        const digits = amount.toString().split('');
        for (let digit of digits) {
            if (digit === '.') {
                digit = 'Dot'; // app's button for decimal point is labeled 'Dot'
            }
            await this.keybordBtn(digit).click();
        }
    }

    async selectPaymentMode(mode) {
        await this.paymentModeSwitchFromDropdown.click();
        if (mode.toLowerCase() === 'card') {
            await this.cardPayment.click();
        } else if (mode.toLowerCase() === 'cash') {
            await this.cashPayment.click();
        } else {
            throw new Error(`Unsupported payment mode: ${mode}`);
        }

    }

    async enterDescription(description) {
        await this.noteTextInput.setValue(description);
    }

    async selectCategory(categoryName) {
        categoryName = categoryName.charAt(0).toUpperCase() + categoryName.slice(1).toLowerCase();
        await this.chooseCategoryBtn.click();
        await this.category(categoryName).click();
    }

    async addTransaction(amount, category, mode, description) {
        await this.enterAmount(amount);
        await this.selectPaymentMode(mode);
        await this.enterDescription(description);
        await this.selectCategory(category);
    }
    async selectFromAndToAccounts(from, to) {
        await this.paymentModeSwitchFromDropdown.click();
        if (from.toLowerCase() === 'card') {
            await this.cardPayment.click();
        } else if (from.toLowerCase() === 'cash') {
            await this.cashPayment.click();
        } else {
            throw new Error(`Unsupported account: ${from}`);
        }
     
        await this.paymentModeSwitchToDropdown.click();
        if (to.toLowerCase() === 'card') {
            await this.cardPayment.click();
        } else if (to.toLowerCase() === 'cash') {
            await this.cashPayment.click();
        } else {
            throw new Error(`Unsupported account: ${to}`);
        }
    }

    async tapOnShowKeyboardBtn()
         {
            await this.showKeyboardBtn.click();

         }


    
    async doTransfer(amount, from, to, notes) {
        await this.enterDescription(notes);
        await this.selectFromAndToAccounts(from,to);
        //await this.tapOnShowKeyboardBtn();
        await this.amountTextField.click();
        await this.enterAmount(amount);
        await this.addTransferBtn.click();

    }

}
//module.exports = new IncomeExpenseCommonScreen();
