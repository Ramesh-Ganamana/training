const { assert } = require("chai");
const { expect } = require("chai");
const LandingNavigatorPage = require("./navigator.page");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class JobSearchNavigatorPage extends LandingNavigatorPage {
  /**
   * define selectors using getter methods
   */

  jobSearchTab() {
    return $('//span[text()="Job Search"]');
  }

  jobNumberField() {
    return $('input[name="searchJobNumber"]');
    //return $('(//input[@name="searchJobNumber"])[1]');
  }

  orderNumberField() {
    //return $('input[name="searchOrderNumber"]');
    return $(
      '//*[@id="mainLandingPage"]/div/div/div[2]/div[1]/div[2]/div/div/div/div/div[2]/input'
    );
  }

  orderNameParamField() {
    return $(
      '//div[@id="mainLandingPage"]/descendant::input[@ng-model="params.OrderName"][2]'
    );
  }

  picklistNumberField() {
    return $('input[name="searchPicklistNumber"]');
  }

  statusDropDown() {
    return $(
      '//div[@id="mainLandingPage"]/descendant::select[@ng-model="params.Status"][2]'
    );
  }

  jobstatusDropdown() {
    return $("(//select[@ng-model='params.Status'])[2]");
  }

  tentitveStatus() {
    //return $('//input[@name="searchInvoiceNumber"]/following::select[1]');
    return $(
      "//div[@id='LandingCtrl']/descendant::select[@ng-model='params.Status'][2]"
    );
    // return $("(//div[contains(text(),'Status')])[2]/select/option[4]");
  }

  jobTypeDropDown() {
    return $('//select[@ng-model="params.JobType"]');
  }

  jobSalesManagerDropDown() {
    return $('//select[@ng-model="params.JobSalesManager"]');
  }
  searchJobButton() {
    return $("#btnSearchJob");
  }
  resetJobButton() {
    return $("#clearJob");
  }
  resultsJobIdRow() {
    return $('//*[@id="jobGridResults"]/div[4]/div[3]/div/div/div[4]');
  }
  resultOrderNumRow() {
    return $('//*[@id="jobGridResults"]/div[4]/div[3]/div/div[1]/div[6]');
  }
  resultOrderNameRow() {
    return $("(//div[@class='slick-cell l6 r6'])[1]");
  }

  resultUpdateStatus() {
    //return $("(//div[@class='slick-cell l7 r7'])[1]");
    return $('//*[@id="jobGridResults"]/div[4]/div[3]/div/div[1]/div[8]');
  }

  dateRangechkBox() {
    return $("(//input[@type='checkbox'])[3]");
  }
  //Update Job Xpaths

  selectjob() {
    return $("//*[@id='jobGridResults']/div[4]/div[3]/div/div[1]");
  }
  updatejobsTab() {
    return $(`(//button[normalize-space()='Update Job Status'])`);
  }

  selectstatus() {
    //return $('select[ng-model="Landing.updateToStatus"]');
    //div[@class='modal-body ng-binding']/select
    return $("/html/body/div[1]/div/div/div/div[2]/select/option[4]");
  }

  saveUpdateStatus() {
    return $("//button[normalize-space()='Save']");
  }

  updateConfirmation() {
    return $("//button[@class='btn btn-primary ng-binding']");
  }

  closebtn() {
    return $("//button[@class='btn btn-warning ng-binding']");
  }

  resultUpdateJobStatus() {
    return $("//div[@class='slick-cell l7 r7 active selected']");
  }
  /**
   * a method to encapsule automation code to interact with the page
   */
  async gotoJobSearchTab() {
    await this.jobSearchTab().click();
    await browser.pause(10000);
  }

  async searchjob(jobId) {
    await this.jobNumberField().setValue(jobId);
    assert.isTrue(
      await this.jobNumberField().isClickable(),
      "successfully entered the Job id in Job number field"
    );
    await this.searchJobButton().click();
    await browser.pause(10000);
  }

  async verifyJobSearchResults(jobId) {
    let resultJobId = await this.resultsJobIdRow().getText();
    assert.equal(resultJobId, jobId);
  }

  async resetjobVal() {
    await this.resetJobButton.click();
  }
  async datRangeChkbox() {
    await this.dateRangechkBox().click();
  }
  async searchOrderNum(orderNum) {
    await this.orderNumberField().setValue(orderNum);
    assert.isTrue(
      await this.orderNumberField().isClickable(),
      "successfully entered then Oredr Num in Order number field"
    );
    await this.searchJobButton().click();
    await browser.pause(10000);
  }

  async verifyOrderSearchResults(orderNum) {
    let resultOrderNum = await this.resultOrderNumRow().getText();
    assert.equal(resultOrderNum, orderNum);
  }
  async searchOrderName(orderName) {
    await this.orderNameParamField().setValue(orderName);
    assert.isTrue(
      await this.orderNameParamField().isClickable(),
      "successfully entered then Oredr Num in Order number field"
    );
    await this.searchJobButton().click();
    await browser.pause(10000);
  }
  async verifyOrderNameSearchResults(orderName) {
    let resultOrderName = await this.resultOrderNameRow().getText();
    assert.equal(resultOrderName, orderName);
  }

  async chooseJobStatus(orderStatusIndex) {
    await browser.refresh();
    let selectText = await this.tentitveStatus().getText();
    console.log("++++++++" + selectText);
    await browser.pause(20000);
    await this.tentitveStatus().selectByIndex(orderStatusIndex);
    assert.isTrue(
      await this.tentitveStatus().isClickable(),
      "successfully entered then Order Num in Order number field"
    );
    await this.datRangeChkbox();
    await this.searchJobButton().click();
    await browser.pause(10000);
  }

  async verifyChooseJobStatus(orderStatus) {
    let updatedjobstatusRes = await this.resultUpdateStatus().getText();
    assert.equal(updatedjobstatusRes, orderStatus);
  }
  async updateJobStatus() {
    await this.datRangeChkbox();
    await this.searchJobButton().click();
    await this.selectjob().click();
    await this.updatejobsTab().click();
    await this.selectstatus().click();
    await browser.pause(5000);
    await this.saveUpdateStatus().click();
    await browser.pause(5000);
    await this.updateConfirmation().click();
    await browser.pause(15000);
    await this.closebtn().click();
    await browser.pause(10000);
  }
  async verifyUpdateJobStatus(orderStatus) {
    let resultUpdatedJob = await this.resultUpdateJobStatus().getText();
    await browser.pause(5000);
    assert.equal(resultUpdatedJob, orderStatus);
  }
}

module.exports = new JobSearchNavigatorPage();
