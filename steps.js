const { Given, When, Then } = require('@wdio/cucumber-framework');
const testData = require('../../data/orderSearch.json');
//const cucumberJson = require('wdio-cucumberjs-json-reporter').default;
const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const landingPage = require('../pageobjects/landing.page');
const allure = require('@wdio/allure-reporter');
const navigatorLoginPage = require('../pageobjects/login.navigator.page');
const navigatorLandingPage = require('../pageobjects/landing.navigator.page');
const navigatorOrderSearchPage = require('../pageobjects/orderSearch.navigator.page');


const pages = {
    login: LoginPage,
    navigatorLogin: navigatorLoginPage,
    orderSearch: navigatorOrderSearchPage
}
const page = null;
Given(/^I am on the (\w+) page$/, async (page) => {
    this.page = page;
    await pages[page].open()
});

When(/^I login with (.*) and (.*)$/, async (username, password) => {
    await pages[this.page].login(username, password);
});

Then(/^I was directed to landing page$/, async () => {
    if (this.page == 'login') {
        await landingPage.compassValidation();
        //cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    } else if (this.page == 'navigatorLogin') {
        await navigatorLandingPage.navigatorLandingPageValidation();
        //cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    }
});

When(/^I navigate to (\w+) tab$/, async (tab) => {
    this.page = tab;
    await pages[this.page].gotoOrderSearchTab();
});

When(/^I search for the order id under order search tab$/, async () => {
    let orderIdData = testData.orderId;
    await pages[this.page].searchOrder(orderIdData);
});

Then(/^I verify order id exists in the search results$/, async () => {
    let orderIdData = testData.orderId;
    await pages[this.page].verifySearchResults(orderIdData, 1);
    //cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
});

When(/^I reset the search tab results$/, async () => {
    await pages[this.page].resetSearchResults();
})

When(/^I search for the order name under order search tab$/, async () => {
    let orderNameData = testData.orderName;
    await pages[this.page].searchOrderByName(orderNameData);
});
Then(/^I verify order name exists in the search results$/, async () => {
    let orderNameData = testData.orderName;
    await pages[this.page].verifySearchResults(orderNameData, 2);
    //cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
});

When(/^I search order by status under order search tab$/, async () => {
    let orderByStatus = testData.status;
    await pages[this.page].searchOrderByStatus(orderByStatus);
});
Then(/^I verify order status exists in the search results$/, async () => {
    let orderStatusData = testData.orderStatus;
    await pages[this.page].verifySearchResults(orderStatusData, 6);
    //cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
});
When(/^I search for the order type under order search tab$/, async () => {
    let orderTypeData = testData.orderTypeIndex;
    await pages[this.page].searchOrderByOrderType(orderTypeData);
});

Then(/^I verify order type exists in the search results$/, async () => {
    let orderTypeData = testData.orderType;
    await pages[this.page].verifySearchResults(orderTypeData, 7);
    //cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
});

When(/^I search for the DRO number under order search tab$/, async () => {
    let droNumbData = testData.droNumber;
    await pages[this.page].searchByDRONumber(droNumbData);
    await pages[this.page].clickOnTheJob();
});

Then(/^I verify DRO number exists in the search results$/, async () => {
    let droNumData = testData.droNumber;
    await pages[this.page].verifyDroSearchResults(droNumData);
    //cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
});

When(/^I changed to other location$/, async () => {
    let locationData = testData.location;
    //let locationValue = testData.verifyLocationValue;
    await pages[this.page].changeLocation(locationData);
});

When(/^I select an order to update order shorts$/, async () => {
    let droNumbData = testData.droNumber;
    await pages[this.page].orderShorts();
});

Then(/^I update order shorts and validate order shorts button$/, async () => {
    let actualData = testData.ordershortMsg;
    await pages[this.page].verifyOrderShots(actualData);
    //cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
});

When(/^I click on new internal order button$/, async () => {
    await pages[this.page].clickOnNewInternalOrder();
});

Then(/^I should navigate to orders page$/, async () => {
    await pages[this.page].verifyNewInternalOrder();
    //cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
});
When(/^I select an order and go to production quote$/, async () => {
    let dropdownVal = testData.printProdQuote;
    await pages[this.page].selectTopRowInResults();
    await pages[this.page].printConsolidatedProdQuote(dropdownVal);
});

Then(/^I should able to verify print consolidated production quote$/, async () => {
    let actualData = testData.reportValidationMsg;
    await pages[this.page].validatePrintConsolidatedProdQuote(actualData);
    //cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
});

When(/^I select an order and go to consolidated quote$/, async () => {
    let dropdownVal = testData.printConsolidatedQuote;
    await pages[this.page].selectTopRowInResults();
    await pages[this.page].printConsolidatedQuote(dropdownVal);
});

Then(/^I should able to verify print consolidated quote$/, async () => {
    let actualData = testData.reportValidationMsg;
    await pages[this.page].validatePrintConsolidatedQuote(actualData);
    //cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
});

When(/^I select an order and go to event billing quote$/, async () => {
    let dropdownVal = testData.printEventBillingQuote;
    await pages[this.page].selectTopRowInResults();
    await pages[this.page].printEventBillingQuote(dropdownVal);
});

Then(/^I should able to verify print event billing quote$/, async () => {
    let actualData = testData.reportValidationMsg;
    await pages[this.page].validatePrintConsolidatedProdQuote(actualData);
    //cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
});

When(/^I give a date range and check the search results$/, async () => {
    let startDateVal = testData.startDate;
    let endDateVal = testData.endDate;
    await pages[this.page].selectUseDateRange(startDateVal, endDateVal);
});

Then(/^I should validate date according to the search date$/, async () => {
    let startDateVal = testData.startDate;
    let endDateVal = testData.endDate;
    await pages[this.page].validatingUseDateRange(startDateVal, endDateVal);
    //cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
});