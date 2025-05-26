const { $ } = require('@wdio/globals')
const BaseScreen = require("./base.screen")

class GetStartScreen extends BaseScreen {

    get getStartedBtn() {
        const androidSelector = `//*[@resource-id="com.monefy.app.lite:id/buttonContinue"]`
        const iosSelector = '**/XCUIElementTypeButton[`name == "GET STARTED"`]'
        const selector = driver.isAndroid ? androidSelector : `-ios class chain:${iosSelector}`
        return $(selector);
    }

    get AmazingBtn() {
        const androidSelector = `//*[@resource-id="com.monefy.app.lite:id/buttonContinue"]`
        const iosSelector = '**/XCUIElementTypeButton[`name == "AMAZING"`]'
        const selector = driver.isAndroid ? androidSelector : `-ios class chain:${iosSelector}`
        return $(selector);
    }

    get yesPleaseBtn() {
        const androidSelector = `//*[@resource-id="com.monefy.app.lite:id/buttonContinue"]`
        const iosSelector = '**/XCUIElementTypeButton[`name == "YES, PLEASE!"`]'
        const selector = driver.isAndroid ? androidSelector : `-ios class chain:${iosSelector}`
        return $(selector);
    }

    get iAmReadyBtn() {
        const androidSelector = `//*[@resource-id="com.monefy.app.lite:id/buttonContinue"]`
        const iosSelector = '**/XCUIElementTypeStaticText[`name == "I’M READY"`]'
        const selector = driver.isAndroid ? androidSelector : `-ios class chain:${iosSelector}`
        return $(selector);
    }

    get claimMyOfferBtn() {
        const androidSelector = `//*[@resource-id="com.monefy.app.lite:id/buttonPurchase"]`
        const iosSelector = '**/XCUIElementTypeButton[`name == "BuyMonefyProButton"`]'
        const selector = driver.isAndroid ? androidSelector : `-ios class chain:${iosSelector}`
        return $(selector);
    }

    get claimMyOfferCloseBtn() {
        const androidSelector = `//*[@resource-id="com.monefy.app.lite:id/buttonClose"]`
        const iosSelector = '**/XCUIElementTypeButton[`name == "closeButton"`]'
        const selector = driver.isAndroid ? androidSelector : `-ios class chain:${iosSelector}`
        return $(selector);
    }

    /**
     * complete welcome offer steps to get to the home screen
     */

    async completeWelcomeOfferSteps() {
        await this.getStartedBtn.click();
        await this.AmazingBtn.click();
        if (driver.isAndroid) {
            await this.yesPleaseBtn.click();
            await this.clickOnAllowPopUp();
        }
        await this.iAmReadyBtn.click();
        await this.claimMyOfferCloseBtn.click();
    }
    /**
     * click on claim my offer close button
     */
    async closeClaimMyOfferScreen() {
        await this.claimMyOfferCloseBtn.click();
    }

}
module.exports = new GetStartScreen();
