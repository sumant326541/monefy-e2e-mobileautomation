const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
const IncomeScreen = require('../screens/income.screen')
const ExpenseScreen = require('../screens/expense.screen')
const HomeScreen = require('../screens/home.screen');

const screens = {
    home: HomeScreen,
    income: IncomeScreen,
    expense: ExpenseScreen
}

Then(/^I should see income page$/, async () => {
    await expect(screens.income.headerTitle).toBeExisting();
});

Then(/^I should see expenses page$/, async () => {
    await expect(screens.expense.headerTitle).toBeExisting();
});

When(/^I add an income record with amount (.*) ,category (.*) ,account (.*) and notes (.*)$/, async (amount, category, mode, description) => {
    global.storedValues.income += Number(amount); // Update expected income
    console.log(`Updated expected income: ${global.storedValues.income}`);
    await screens.income.addNewIncome(amount, category, mode, description);

});

When(/^I add an expense record with amount (.*) ,category (.*) ,account (.*) and notes (.*)$/, async (amount, category, mode, description) => {
    global.storedValues.expense += Number(amount); // Update expected expense
    console.log(`Updated expected expense: ${global.storedValues.expense}`);
    await screens.expense.addNewExpense(amount, category, mode, description);

});



