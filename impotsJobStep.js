const { When, Then } = require("@wdio/cucumber-framework");

const location = require("../pageobjects/ImportsJob.page");

When(/^location setup$/, async () => {
  await location.LocationSetup();
  await location.OrderSelection();
});

When(/^Implementing jobActions$/, async () => {
  await location.jobs();
  await location.jobActions();
});

Then(/^validating the  import jobs$/, async () => {
  await location.ImportsValidation();
  // await location.validatingCheckBoxes();
});

When(/^Setuping another Location$/, async () => {
  await location.AnotherLocationSetting();
});

When(
  /^Click on the Search button Wait for the new location jobs$/,
  async () => {
    await location.ClickActioinOnSearch();
  }
);

Then(/^verifying the NewJobs Button is enabled$/, async () => {
  await location.VerifyJobsButtonEnabled();
});

Then(/^verifying done button$/, async () => {
  await location.doneButtonValidation();
});

Then(/^RoomBooth validation$/, async () => {
  //await location.saveButtonClicking();
  await location.RoomBoothValidation();
});
