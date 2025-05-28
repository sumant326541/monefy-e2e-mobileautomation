const { Given, When, Then } = require('@wdio/cucumber-framework');
//const { expect, $ } = require('@wdio/globals')
const { expect } = require('chai')
const HomeScreen = require('../screens/home.screen')
const MenuOverFlowScreen = require('../screens/menuOverFlow.screen')
const AccountsScreen = require('../screens/accounts.screen')
const TransferScreen = require('../screens/transfer.screen');
const homeScreen = require('../screens/home.screen');

const screens = {
    home: HomeScreen,
    menuOverFlow: MenuOverFlowScreen,
    accounts: AccountsScreen,
    transfer: TransferScreen
}

Then(/^I tap on accounts$/, async () => {
    await screens.menuOverFlow.clickAccounts();
});

Then(/^I store cash and card balances$/, async () => {
    cashAmount = await screens.accounts.getCashAmount();
    cardAmount = await screens.accounts.getCardAmount();

    global.storedValues = {
        cashAmount,
        cardAmount
    };

    console.log('Stored cash and card amount:', global.storedValues);
});


When(/^I tap on transfer button$/, async () => {
    await screens.accounts.clickTransfer();
});


When(/^I transfer amount (.*) , from (.*) account to (.*) account with notes (.*)$/, async (amount, from, to, notes) => {
    if (from.toLowerCase() === 'cash' && to.toLowerCase() === 'card') {
        global.storedValues.cashAmount -= Number(amount); // Update expected cash amount
        global.storedValues.cardAmount += Number(amount); // Update expected card amount
    } else if (from.toLowerCase() === 'card' && to.toLowerCase() === 'cash') {
        global.storedValues.cardAmount -= Number(amount); // Update expected card amount
        global.storedValues.cashAmount += Number(amount); // Update expected cash amount
    }
    console.log(`Updated expected cash amount: ${global.storedValues.cashAmount}`);
    console.log(`Updated expected card amount: ${global.storedValues.cardAmount}`);
    await screens.transfer.newTransfer(amount, from, to, notes);
});

Then(/^I should see the updated card and cash account balances$/, async () => {
    const cashAmount = await screens.accounts.getCashAmount();
    const cardAmount = await screens.accounts.getCardAmount();
    expect(cashAmount).to.equal(global.storedValues.cashAmount, `Expected cash amount ${global.storedValues.cashAmount} does not match actual cash amount ${cashAmount}`);
    expect(cardAmount).to.equal(global.storedValues.cardAmount, `Expected card amount ${global.storedValues.cardAmount} does not match actual card amount ${cardAmount}`);
    await homeScreen.clickOnMenuOverflow();
});



