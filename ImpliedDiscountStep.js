
const { When, Then } = require("@wdio/cucumber-framework");

const ImpliedDiscount=require("../pageobjects/ImpliedDiscount.page")






When(/^Set location$/,async () => {
	await ImpliedDiscount.SetLocation()
});

When(/^Selecting Classic Order From Search Results$/, async() => {
    await ImpliedDiscount.SelectingClassicOrder()
});



When(/^Select the jobs Tab$/,async() => {
    await ImpliedDiscount.Job()
    await ImpliedDiscount.ItemsTab()
    await ImpliedDiscount.duobleClickOnPackage()
});


Then(/^validating Classic orders should not Allow special rates on all items$/, async() => {
    await ImpliedDiscount. Validation()
});

