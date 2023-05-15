const Page = require("./page");
const { expect } = require("chai");

const { assert } = require("chai");

class sameLocationImportsJob {
  clickonLocationtext() {
    return $("//input[@title='Click Here to Change Location']");
  }

  locationSearch() {
    return $("//input[@id='txtLocationSearch']");
  }
  StartDate() {
    return $(
      "(//div[@class='checkbox mt-0 mb-0']/label[@class='ng-binding']/input)"
    );
  }

  searchingItems() {
    return $(
      "//div[@class='btn-toolbar btn-group-sm']//input[@id='searchOrder']"
    );
  }

  selectingClassicOrder() {
    return $("(//div[@class='slick-cell l3 r3'])[10]/a");
  }

  jobsTab() {
    return $("//a[normalize-space()='Jobs']");
  }
  jobactions() {
    return $("//a[normalize-space()='Job Actions']//b[@class='caret']");
  }
  importJobs() {
    return $("//a[normalize-space()='Import Jobs']");
  }
  validateImportjobs() {
    return $("//h4[normalize-space()='Import Jobs']");
  }

  SearchButtonClick() {
    return $("//input[@type='submit']");
  }
  clickOnAnotherLocationOrder() {
    return $("(//div[@class='slick-cell l4 r4'])[3]");
  }

  Anotherjob() {
    return $(
      "//button[@class='btn btn-success ng-binding'][contains(text(),'Create')]/span"
    );
  }
  doneButton() {
    return $("//button[normalize-space()='Done']");
  }
  saveButton() {
    return $("//input[@value='Save']");
  }
  OrderNumber() {
    return $("(//div[@class='slick-cell l1 r1 selected'])[1]");
  }
  async SetuppingLocation() {
    await this.clickonLocationtext().click();
    await browser.pause(2000);
    await this.locationSearch().setValue("1121");
    await browser.keys("\uE007");
    await browser.pause(4000);
    await this.StartDate().click();
    await this.searchingItems().click();
    await browser.pause(20000);
  }
  async SelectingOrder() {
    let val = await this.selectingClassicOrder().isExisting();
    assert.isTrue(val, "All orders diaplayed");
    console.log("__________________________________________________________");
    console.log(val);
    await this.selectingClassicOrder().click();
    await browser.pause(20000);
  }
  async jobsTabs() {
    await this.jobsTab().click();
    await browser.pause(8000);
  }
  async jobActionsClicking() {
    await this.jobactions().click();
    await this.importJobs().click();
    await browser.pause(10000);
  }
  async ValidationOfImports() {
    let Import = await this.validateImportjobs().isExisting();
    assert.isTrue(Import, "ImportJobs is there");
    console.log("**********************************************");
    console.log(Import);
  }

  async ClickActioinOnSearch() {
    await this.SearchButtonClick().click();
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    await browser.pause(40000);
    await this.clickOnAnotherLocationOrder().click();
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    await browser.pause(10000);
  }
  async VerifyJobsButtonEnabled() {
    let isEnabled = await this.Anotherjob().isEnabled();

    assert.isTrue(isEnabled, "NewJobs button is enabled");

    await this.Anotherjob().click();
    console.log("#########################");
    await browser.pause(10000);
  }
  async doneButtonValidation() {
    let DoneButtonEnabled = await this.doneButton().isEnabled();
    assert.isTrue(DoneButtonEnabled, "done button is enabled");
    await this.doneButton().click();
    console.log("###########%%%%%%%%%%%%");
    await browser.pause(10000);
  }

  async saveButtonClicking() {
    await browser.pause(10000);
    await this.saveButton().click();
    console.log("$%^&*&^%^%");
    await browser.pause(30000);
  }

  async OrderNumberGeneration() {
    console.log(")(*&^%$#@!");
    let GenaratedNumber = await this.OrderNumber().getByText();
    console.log(GenaratedNumber);
    assert.isNumber(GenaratedNumber, "Is number Genarated");
    console.log("*&^%$#@@!");
  }
}

module.exports = new sameLocationImportsJob();
//(//div[@class='slick-cell l4 r4'])[3]
