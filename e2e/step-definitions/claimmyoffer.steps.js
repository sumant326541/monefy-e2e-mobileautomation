const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
const GetStartScreen = require('../screens/getstart.screen')
const HomeScreen = require('../screens/home.screen')

const screens = {
    getStart: GetStartScreen,
    home: HomeScreen,
}

Given(/^I am on moneyfy home screen$/, async () => {
    try {
        await screens.getStart.completeWelcomeOfferSteps();
        await expect(screens.home.headerMonefy).toBeExisting();
    } catch (error) {
        console.error('app might not be reset hence not landing on getstart page', error);
        await screens.getStart.buttonCloseClaimMyOffer.click();
        await expect(screens.home.headerMonefy).toBeExisting();
    }
});
