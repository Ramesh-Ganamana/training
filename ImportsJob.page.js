const Page = require("./page");
const { expect } = require("chai");

const { assert } = require("chai");

class importsJob {
  clickonLocationtext() {
    return $("//input[@title='Click Here to Change Location']");
  }

  locationSearch() {
    return $("//input[@id='txtLocationSearch']");
  }
  StartDate() {
    return $(
      "//div[@class='checkbox mt-0 mb-0']//label[@class='ng-binding']/input"
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
  selectingAnotherLocation() {
    return $("(//div[@class='ng-binding']/select)[2]");
  }
  ClickiActionAnotherLocation() {
    return $(
      "(//div[@class='ng-binding']/select)[2]/option[@value='string:1137']"
    );
  }
  // checkBox1() {
  //   return $(
  //     "(//input[@class='ng-pristine ng-valid ng-not-empty ng-touched'])[1]"
  //   );
  // }

  // checkBox2() {
  //   return $("//input[@type='checkbox'])[3]");
  // }

  // checkBox3() {
  //   return $("//input[@type='checkbox'])[4]");
  // }
  SearchButtonClick() {
    return $("//input[@type='submit']");
  }
  clickOnAnotherLocationOrder() {
    return $(
      "(//div[@class='slick-cell l4 r4'][normalize-space()='Classic'])[7]"
    );
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

  roomBooth() {
    return $("(//div[@class='slick-cell l7 r7 selected'])[1]");
  }

  async LocationSetup() {
    await this.clickonLocationtext().click();
    await browser.pause(2000);
    await this.locationSearch().setValue("1121");
    await browser.keys("\uE007");
    await browser.pause(4000);
    await this.StartDate().click();
    await this.searchingItems().click();
    await browser.pause(20000);
  }
  async OrderSelection() {
    let val = await this.selectingClassicOrder().isExisting();
    assert.isTrue(val, "All orders diaplayed");
    console.log("__________________________________________________________");
    console.log(val);
    await this.selectingClassicOrder().click();
    await browser.pause(20000);
  }
  async jobs() {
    await this.jobsTab().click();
    await browser.pause(8000);
  }
  async jobActions() {
    await this.jobactions().click();
    await this.importJobs().click();
    await browser.pause(10000);
  }
  async ImportsValidation() {
    let Import = await this.validateImportjobs().isExisting();
    assert.isTrue(Import, "ImportJobs is there");
    console.log("**********************************************");
    console.log(Import);
  }

  async AnotherLocationSetting() {
    await this.selectingAnotherLocation().click();
    console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
    await this.ClickiActionAnotherLocation().click();
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
    await browser.pause(10000);
  }
  // async validatingCheckBoxes() {
  //   await this.checkBox1().click();
  //   await this.checkBox1().toBeChecked();
  //   console.log("$$$$$$$$$$$$$$$$$$$$");

  // await this.checkBox2().click();
  // await this.checkBox2().toBeChecked();
  // console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");

  // await this.checkBox3().click();
  // await this.checkBox3().toBeChecked();
  // console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
  //}

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
    await this.saveButton().click();
  }

  async RoomBoothValidation() {
    let empty = await this.roomBooth().getText();
    console.log(empty);
    assert.equal(empty, "");
    console.log("###########******************");
  }
}
module.exports = new importsJob();
// const elem = await $('#elem')
// await expect(elem).toBeChecked()
