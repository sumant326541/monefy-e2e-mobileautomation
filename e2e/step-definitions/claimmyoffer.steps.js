const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const GetStartScreen = require('../screens/getstart.screen')
const HomeScreen = require('../screens/home.screen')


const screens = {
    getStart: GetStartScreen,
    home: HomeScreen,
}

Given(/^I am on the getstart screen$/, async () => {
    await expect(await screens.getStart.btnGetStarted).toBeExisting();
});

When(/^I complete welcome offer steps$/, async () => {
    await screens.getStart.completeWelcomeOfferSteps();
});

Then(/^I should see moneyfy home screen$/, async () => {
    await expect(await screens.home.headerMonefy).toBeExisting();
});
