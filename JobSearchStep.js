const { Given, When, Then } = require("@wdio/cucumber-framework");
//const testData = require("../../data/orderSearch.json");
const jobsearchData = require("../../data/jobSearch.json");

const LoginPage = require("../pageobjects/login.page");
const SecurePage = require("../pageobjects/secure.page");
const landingPage = require("../pageobjects/landing.page");
const allure = require("@wdio/allure-reporter");
const navigatorLoginPage = require("../pageobjects/login.navigator.page");
const navigatorLandingPage = require("../pageobjects/landing.navigator.page");
// const navigatorOrderSearchPage = require("../pageobjects/orderSearch.navigator.page");
const jobsearchNavigatorPage = require("../pageobjects/jobSearch.navigator.page");

const pages = {
  login: LoginPage,
  navigatorLogin: navigatorLoginPage,
  //   orderSearch: navigatorOrderSearchPage,
  jobSearch: jobsearchNavigatorPage,
};
const page = null;
// Job Number Search Scenario
When(/^I click on (\w+) tab$/, async (tab) => {
  this.page = tab;
  await pages[this.page].gotoJobSearchTab();
});

When(/^I search for the job id under job search tab$/, async () => {
  let jobIdData = jobsearchData.jobId;
  await browser.pause(8000);
  await pages[this.page].searchjob(jobIdData);
});

Then(/^I verify job id exists in the search results$/, async () => {
  let jobIdData = jobsearchData.jobId;
  await pages[this.page].verifyJobSearchResults(jobIdData);
  await browser.pause(8000);
});

// Order Name Search Scenario
When(/^I click on (\w+) tab$/, async (tab) => {
  this.page = tab;
  await pages[this.page].gotoJobSearchTab();
});

When(/^I search for the order Name under job search tab$/, async () => {
  let jobOrderData = jobsearchData.orderName;
  await browser.pause(8000);
  await pages[this.page].datRangeChkbox();
  await pages[this.page].searchOrderName(jobOrderData);
});
Then(/^I verify Order Name exists in the search results page$/, async () => {
  let jobOrderData = jobsearchData.orderName;
  await pages[this.page].verifyOrderNameSearchResults(jobOrderData);
  await browser.pause(8000);
});

//Order Number Search Scenario
When(/^I click on (\w+) tab$/, async (tab) => {
  this.page = tab;
  await pages[this.page].gotoJobSearchTab();
});

When(/^I search for the order Num under job search tab$/, async () => {
  let jobOrderData = jobsearchData.orderNum;
  await browser.pause(8000);
  await pages[this.page].searchOrderNum(jobOrderData);
});
Then(/^I verify Order Number exists in the search results page$/, async () => {
  let jobOrderData = jobsearchData.orderNum;
  await pages[this.page].verifyOrderSearchResults(jobOrderData);
  await browser.pause(8000);
});

// Choosing the Job Status Scenario
When(/^I click on (\w+) tab$/, async (tab) => {
  this.page = tab;
  await pages[this.page].gotoJobSearchTab();
});

When(/^I search for the choose Job Status under job search tab$/, async () => {
  let jobOrderData = jobsearchData.orderStatusIndex;
  await browser.pause(8000);
  await pages[this.page].chooseJobStatus(jobOrderData);
  await browser.pause(8000);
});
Then(
  /^I verify choose  Job Status  exists in the search results page$/,
  async () => {
    let jobOrderData = jobsearchData.orderStatus;
    await pages[this.page].verifyChooseJobStatus(jobOrderData);
    await browser.pause(8000);
  }
);

//Updating Job Status Scenario
When(/^I click on (\w+) tab$/, async (tab) => {
  this.page = tab;
  await pages[this.page].gotoJobSearchTab();
});

When(/^I search for the Update Job Status under job search tab$/, async () => {
  await pages[this.page].updateJobStatus();
});
Then(
  /^I verify Update  Job Status  exists in the search results page$/,
  async () => {
    let jobOrderData = jobsearchData.or;
    await pages[this.page].verifyChooseJobStatus(jobOrderData);
    await browser.pause(8000);
  }
);
