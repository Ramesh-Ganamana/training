const { When, Then } = require("@wdio/cucumber-framework");

const ReducedDiscount=require("../pageobjects/ReduceBillDates.page")







When(/^Setup location$/, async() => {
    await ReducedDiscount.SetLocation()
});




When(/^Selecting  Order From Search Results$/, async() => {
    await ReducedDiscount.SelectingClassicOrder()
});




When(/^Selecting  the jobs Tab$/, async() => {
    await ReducedDiscount.Job()
    await ReducedDiscount.ItemsTab()
    //await ReducedDiscount.duobleClickOnPackage()
});
