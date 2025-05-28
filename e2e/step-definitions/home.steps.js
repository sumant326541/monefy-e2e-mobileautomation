const { Given, When, Then } = require('@wdio/cucumber-framework');
//const { expect, $ } = require('@wdio/globals')
const {expect} = require('chai')
const HomeScreen = require('../screens/home.screen')
const IncomeScreen = require('../screens/income.screen')
const ExpenseScreen = require('../screens/expense.screen')

const screens = {
    home: HomeScreen,
    income: IncomeScreen,
    expense: ExpenseScreen
}

Then (/^I tap to menu overflow$/, async () => {
    await screens.home.clickOnMenuOverflow();
});

When(/^I tap on income button$/, async () => {
    await screens.home.clickOnIncomeBtn();
});

When(/^I tap on expense button$/, async () => {
    await screens.home.clickOnExpenseBtn();
});

Then(/^I store balance, income and expense record$/, async () => {
    income = await screens.home.getIncomeAmount(); 
    expense = await screens.home.getExpenseAmount();
    
    global.storedValues = {
        income,
        expense
    };
    
    console.log('Stored income, expense Values:', global.storedValues);
});

Then(/^I should see the updated balance, income and expense amounts$/, async () => {
    const balance = await screens.home.getBalanceAmount();
    const income = await screens.home.getIncomeAmount();
    const expense = await screens.home.getExpenseAmount();
    const expectedBalance = parseFloat((income - expense).toFixed(2));
    expect(balance).to.equal(expectedBalance, `Expected balance ${expectedBalance} does not match actual balance ${balance}`);
    expect(income).to.equal(global.storedValues.income, `Expected income ${global.storedValues.income} does not match actual income ${income}`);
    expect(expense).to.equal(global.storedValues.expense, `Expected expense ${global.storedValues.expense} does not match actual expense ${expense}`);
});


