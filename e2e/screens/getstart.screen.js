const { $ } = require('@wdio/globals')
const BaseScreen = require("./base.screen")

class GetStartScreen extends BaseScreen {

    get btnGetStarted() {
        const androidSelector = `//*[@resource-id="com.monefy.app.lite:id/buttonContinue"]`
        const iosSelector = `//*[@resource-id="com.monefy.app.lite:id/buttonContinue"]`
        const selector = driver.isAndroid ? androidSelector : iosSelector
        return $(selector);
    }

    get btnAmazing() {
        const androidSelector = `//*[@resource-id="com.monefy.app.lite:id/buttonContinue"]`
        const iosSelector = `//*[@resource-id="com.monefy.app.lite:id/buttonContinue"]`
        const selector = driver.isAndroid ? androidSelector : iosSelector
        return $(selector);
    }

    get btnYesPlease() {
        const androidSelector = `//*[@resource-id="com.monefy.app.lite:id/buttonContinue"]`
        const iosSelector = `//*[@resource-id="com.monefy.app.lite:id/buttonContinue"]`
        const selector = driver.isAndroid ? androidSelector : iosSelector
        return $(selector);
    }

    get btnIAmReady() {
        const androidSelector = `//*[@resource-id="com.monefy.app.lite:id/buttonContinue"]`
        const iosSelector = `//*[@resource-id="com.monefy.app.lite:id/buttonContinue"]`
        const selector = driver.isAndroid ? androidSelector : iosSelector
        return $(selector);
    }

    get btnClaimMyOffer() {
        const androidSelector = `id:com.monefy.app.lite:id/buttonPurchase`
        const iosSelector = `id:com.monefy.app.lite:id/buttonPurchase`
        const selector = driver.isAndroid ? androidSelector : iosSelector
        return $(selector);
    }

    get buttonCloseClaimMyOffer() {
        const androidSelector = `id:com.monefy.app.lite:id/buttonClose`
        const iosSelector = `id:com.monefy.app.lite:id/buttonClose`
        const selector = driver.isAndroid ? androidSelector : iosSelector
        return $(selector);
    }

    /**
     * complete welcome offer steps to get to the home screen
     */
    async completeWelcomeOfferSteps() {
        await this.btnGetStarted.click();
        await this.btnAmazing.click();
        await this.btnYesPlease.click();
        await this.clickOnAllowPopUp();
        await this.btnIAmReady.click();
        await this.buttonCloseClaimMyOffer.click();
    }

}
module.exports = new GetStartScreen();
