const { $ } = require('@wdio/globals')
const BaseScreen = require("./base.screen")

class GetStartScreen extends BaseScreen {

    get btnGetStarted() {
        const androidSelector = `//*[@resource-id="com.monefy.app.lite:id/buttonContinue"]`
        const iosSelector = '**/XCUIElementTypeButton[`name == "GET STARTED"`]'
        const selector = driver.isAndroid ? androidSelector : `-ios class chain:${iosSelector}`
        return $(selector);
    }

    get btnAmazing() {
        const androidSelector = `//*[@resource-id="com.monefy.app.lite:id/buttonContinue"]`
        const iosSelector = '**/XCUIElementTypeButton[`name == "AMAZING"`]'
        const selector = driver.isAndroid ? androidSelector : `-ios class chain:${iosSelector}`
        return $(selector);
    }

    get btnYesPlease() {
        const androidSelector = `//*[@resource-id="com.monefy.app.lite:id/buttonContinue"]`
        const iosSelector = '**/XCUIElementTypeButton[`name == "YES, PLEASE!"`]'
        const selector = driver.isAndroid ? androidSelector : `-ios class chain:${iosSelector}`
        return $(selector);
    }

    get btnIAmReady() {
        const androidSelector = `//*[@resource-id="com.monefy.app.lite:id/buttonContinue"]`
        const iosSelector = '**/XCUIElementTypeStaticText[`name == "I’M READY"`]'
        const selector = driver.isAndroid ? androidSelector : `-ios class chain:${iosSelector}`
        return $(selector);
    }

    get btnClaimMyOffer() {
        const androidSelector = `//*[@resource-id="com.monefy.app.lite:id/buttonPurchase"]`
        const iosSelector = '**/XCUIElementTypeButton[`name == "BuyMonefyProButton"`]'
        const selector = driver.isAndroid ? androidSelector : `-ios class chain:${iosSelector}`
        return $(selector);
    }

    get buttonCloseClaimMyOffer() {
        const androidSelector = `//*[@resource-id="com.monefy.app.lite:id/buttonClose"]`
        const iosSelector = '**/XCUIElementTypeButton[`name == "closeButton"`]'
        const selector = driver.isAndroid ? androidSelector : `-ios class chain:${iosSelector}`
        return $(selector);
    }

    /**
     * complete welcome offer steps to get to the home screen
     */

    async completeWelcomeOfferSteps() {
        await this.btnGetStarted.click();
        await this.btnAmazing.click();
        if (driver.isAndroid) {
            await this.btnYesPlease.click();
            await this.clickOnAllowPopUp();
        }
        await this.btnIAmReady.click();
        await this.buttonCloseClaimMyOffer.click();
    }

}
module.exports = new GetStartScreen();
