const { When, Then } = require("@wdio/cucumber-framework");

const Import = require("../pageobjects/SameLocationImportsJob");

When(/^Setupping location$/, async () => {
  await Import.SetuppingLocation();
  await Import.SelectingOrder();
});

When(/^jobActions Implementation$/, async () => {
  await Import.jobsTabs();
  await Import.jobActionsClicking();
});

Then(/^validating the  importjobs$/, async () => {
  await Import.ValidationOfImports();
});

When(
  /^Click on the Search button Waiting for the new location jobs$/,
  async () => {
    await Import.ClickActioinOnSearch();
  }
);

Then(/^Validating the NewJobs Button is enabled$/, async () => {
  await Import.VerifyJobsButtonEnabled();
});

Then(/^verifying done button is enabled$/, async () => {
  await Import.doneButtonValidation();
  await Import.saveButtonClicking();
});

Then(/^OrderNumer Validation$/, async () => {
  await Import.OrderNumberGeneration();
});
