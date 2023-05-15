const { When, Then } = require("@wdio/cucumber-framework");

const SpecialRate=require("../pageobjects/SpecialRatePage")





When(/^click on the Location Change and set Location$/, async() => {

await SpecialRate.LocationChange()

});

When(/^Click On Ordername$/, async() => {
    await SpecialRate.OrderClicking()
});

When(/^Click On Jobstab$/, async() => {
    await SpecialRate.ClickOnJobs()
});


When(/^click On ItemTab$/, async() => {
    await SpecialRate.ItemTab()
    await SpecialRate.duobleClickOnSubPackage()
});

// When(/^click On Package and subpackage$/, async() => {
//     await SpecialRate.duobleClickOnSubPackage()
//     await SpecialRate.EnterSpecialRate()
// });
