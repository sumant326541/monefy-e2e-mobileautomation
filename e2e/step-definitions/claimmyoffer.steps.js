const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
const GetStartScreen = require('../screens/getstart.screen')
const HomeScreen = require('../screens/home.screen')

const screens = {
    getStart: GetStartScreen,
    home: HomeScreen
}

Given(/^I am on moneyfy home screen$/, async () => {
    await expect(screens.home.monefyHeaderText).toBeExisting();
});