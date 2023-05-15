const LandingNavigatorPage = require('./navigator.page');
const { assert } = require('chai');
const { expect } = require('chai');
const { assignIn } = require('lodash');
require('dotenv').config();
/**
 * sub page containing specific selectors and methods for a specific page
 */
class OrderSearchNavigatorPage extends LandingNavigatorPage {
  /**
   * define selectors using getter methods
   */
  orderSearchTab() {
    return $('//span[text()="Order Search"]');
  }

  orderNumberField() {
    return $('input[name="searchOrderNumber"]');
  }

  orderNameParamField() {
    return $('#OrderNameParam');
  }

  droIdField() {
    return $('input[name="searchDroId"]');
  }

  invoiceNumberField() {
    return $('input[name="searchInvoiceNumber"]');
  }

  accountNameField() {
    return $('//input[@name="searchInvoiceNumber"]/following::input[1]');
  }

  billToContactNameField() {
    return $('//div[contains(text(),"Bill To Contact Name")]/input');
  }

  statusDropDown() {
    return $('//input[@name="searchInvoiceNumber"]/following::select[1]');
  }

  orderTypeDropDown() {
    return $('//input[@name="searchInvoiceNumber"]/following::select[3]');
  }

  searchOrderButton() {
    return $('#searchOrder');
  }
  resultsOrderIdRow(colNum) {
    return $('//div[@id="orderGridResults"]/descendant::span[@title="Order"][1]/../following-sibling::div[' + colNum + ']')
  }



  resetBtn() {
    return $("(//input[@title='Reset Search Filters to User Defaults'])[1]");
  }

  dateRangeCheckbox() {
    return $("//input[@name='searchInvoiceNumber']/following::label[2]")
  }

  changeLocationHeader() {
    return $('//input[@title="Click Here to Change Location"]')
  }

  inputSeacrchLocation() {
    return $("//input[@id='txtLocationSearch']")
  }

  verifyTitleLocation() {
    return $("//input[@title='Click Here to Change Location']");
  }

  searchResultvalue(locationData) {
    return $("//div[@id='LocationFilterPanel']/following::div[text()='" + locationData + "']")
  }

  btnLocationSelect() {
    return $("//button[contains(text(),'Select')]");
  }

  droHeaderInJobsPage() {
    return $("(//a[contains(text(),'DRO')])[3]");
  }

  verifyDroResult() {
    return $("//div[@id='droGridResults']/descendant::span[contains(.,'Order:')][1]");
  }

  resultsPlusBtn() {
    return $('//div[@id="orderGridResults"]/descendant::span[@title="Order"][1]');
  }

  updateOrderShortBtn() {
    return $("//button[contains(text(),'New Internal Order')]/following-sibling::button[2]");
  }
  orderShortsresults() {
    return $("//div[@class='modal-content']//div[contains(text(),'Order shorts updated as')]");
  }

  btnOk() {
    return $("//button[contains(text(),'OK')]");
  }

  btnNewInternalOrder() {
    return $("//button[contains(text(),'New Internal Order')]");
  }

  inputOrderName() {
    return $("//input[@id='Text1']");
  }

  invoiceCurrency() {
    return $("//select[@name='InvoiceCurrency']");
  }

  get printDropdown() {
    return $("(//button[@data-toggle='dropdown'])[1]")
  }

  selectValueInPrintDropdown(dropdownVal) {
    return $("//a[normalize-space()='" + dropdownVal + "']")
  }
  get selectCurrencyVal() {
    return $("//form[@id='ProductionQuote']//select[@id='Currency']")
  }
  get selectConsolidatedCurrencyVal() {
    return $("//form[@id='QuoteV1GSO']//select[@id='Currency']")
  }
  get selectEventBillingCurrencyVal() {
    return $("//form[@id='EventBillingQuote']//select[@id='Currency']")
  }

  get selectLangVal() {
    return $(`select[ng-model='selectedVal']`)
  }
  get printPreviewBtn() {
    return $("//span[@class='glyphicon glyphicon-file']")
  }
  get InvoiceValidation() {
    return $("//title[contains(text(),'ActiveReports Document')]/parent::div/div/div/span[2]");
  }

  get consolidatedInvoiceVal() {
    return $("(//title[contains(text(),'ActiveReports Document')]/parent::div/div/div/span[4])[1]");
  }

  startDateInput() {
    return $("//input[@name='searchInvoiceNumber']/following::input[7]");
  }
  endDateInput() {
    return $("//input[@name='searchInvoiceNumber']/following::input[8]");
  }


  /**
   * a method to encapsule automation code to interact with the page
   */

  async gotoOrderSearchTab() {
    await this.orderSearchTab().click();
    assert.isTrue(await this.orderNameParamField().isClickable(),
      'navigated successfully to order search tab')
  }

  async searchOrder(orderId) {
    await browser.pause(process.env.small_wait);
    await this.orderNumberField().click();
    await this.orderNumberField().setValue(orderId);
    await this.searchOrderButton().click();
    await browser.pause(process.env.small_wait);
  }

  async verifySearchResults(orderSearchVal, colNum) {
    let resultOrderVal = await this.resultsOrderIdRow(colNum).getText();
    assert.equal(resultOrderVal, orderSearchVal);

  }

  async verifyDropdownResults(orderSearchVal, colNum) {
    let resultOrderVal = await this.resultsOrderDropdown(colNum).getText();
    assert.equal(resultOrderVal, orderSearchVal);
  }
  async resetSearchResults() {
    await this.resetBtn().click();
    assert.isTrue(await this.orderNameParamField().isClickable(),
      'Reset search tab results successfully in order search')
    await browser.pause(process.env.small_wait);
    await this.dateRangeCheckbox().click();
    await browser.pause(process.env.small_wait);
  }

  async searchOrderByName(orderName) {
    await this.dateRangeCheckbox().click();
    await browser.pause(process.env.small_wait);
    await this.orderNameParamField().click();
    await this.orderNameParamField().setValue(orderName);
    await this.searchOrderButton().click();
    await browser.pause(process.env.small_wait);
  }

  async searchOrderByStatus(orderByStatus) {
    await browser.pause(process.env.small_wait);
    await this.statusDropDown().click();
    await this.statusDropDown().selectByIndex(orderByStatus);
    assert.isTrue(await this.droIdField().isClickable(),
      'successfully selected status in order status field');
    await this.searchOrderButton().click();
    await browser.pause(process.env.small_wait);
  }
  async searchOrderByOrderType(orderTypeData) {
    await browser.pause(process.env.small_wait);
    await this.orderTypeDropDown().selectByIndex(orderTypeData);
    assert.isTrue(await this.droIdField().isClickable(),
      'successfully entered the ordre id in order number field');
    await this.searchOrderButton().click();
    await browser.pause(process.env.small_wait);
  }

  async searchByDRONumber(droNum) {
    await this.droIdField().click();
    await browser.pause(process.env.small_wait);
    await this.droIdField().setValue(droNum);
    await browser.pause(process.env.small_wait);
    await this.searchOrderButton().click();
    await browser.pause(process.env.medium_wait);
  }

  async clickOnTheJob() {
    await this.resultsOrderIdRow(2).click();
    await browser.pause(process.env.large_wait);
    await browser.refresh();
    await browser.pause(process.env.medium_wait);
    await this.droHeaderInJobsPage().click();
    await browser.pause(process.env.medium_wait);
  }

  async verifyDroSearchResults(droNumData) {

    await browser.pause(process.env.small_wait);
    let resultOrderVal = await this.verifyDroResult().getText();
    let resultOrderVal1 = resultOrderVal.substring(6, 11);
    assert.equal(resultOrderVal1, droNumData);

  }

  async changeLocation(locationData) {
    await browser.pause(process.env.small_wait);
    await this.changeLocationHeader().click();
    await this.inputSeacrchLocation().setValue(locationData);
    await browser.pause(process.env.large_wait);
    assert.isTrue(await this.searchResultvalue(locationData).isClickable(),
      'able to select location sucessfully');
    browser.keys('Tab');
    browser.keys('Tab');
    browser.keys('Tab');
    browser.keys('Enter');
    //await this.searchResultvalue(locationData).doubleClick();
    await browser.pause(process.env.small_wait);
  }

  async orderShorts() {
    await this.searchOrderButton().click();
    await browser.pause(process.env.small_wait);
    await browser.pause(process.env.medium_wait);
    await this.resultsPlusBtn().click();
    await browser.pause(process.env.small_wait);
    await this.updateOrderShortBtn().click();
    await browser.pause(process.env.long_wait);
  }

  async verifyOrderShots(actualData) {

    await browser.pause(process.env.long_wait);
    let resultVal = await this.orderShortsresults().getText();
    let resultVal1 = resultVal.substring(0, 23);
    assert.equal(resultVal1, actualData);
    await this.btnOk().click();
  }
  async clickOnNewInternalOrder() {
    await browser.pause(process.env.small_wait);
    await this.searchOrderButton().click();
    await browser.pause(process.env.large_wait);
    await this.btnNewInternalOrder().click();
    await browser.pause(process.env.large_wait);
  }

  async verifyNewInternalOrder() {
    await this.invoiceCurrency().selectByIndex(1);
  }

  async selectTopRowInResults() {
    await this.dateRangeCheckbox().click();
    await this.searchOrderButton().click();
    await browser.pause(process.env.large_wait);
    await this.resultsPlusBtn().click();
    await browser.pause(process.env.medium_wait);;
  }

  async printConsolidatedProdQuote(dropdownVal) {
    await this.printDropdown.click()
    await this.selectValueInPrintDropdown(dropdownVal).click()
    await browser.pause(process.env.medium_wait);
    await this.selectCurrencyVal.selectByIndex(1);
    await this.selectLangVal.selectByIndex(1)
    await this.printPreviewBtn.click()
    await browser.pause(process.env.medium_wait);
  }
  async validatePrintConsolidatedProdQuote(actualData) {
    await browser.pause(process.env.medium_wait);
    let resultVal = await this.InvoiceValidation.getText();
    assert.equal(resultVal, actualData);

  }

  async printConsolidatedQuote(dropdownVal) {
    await this.printDropdown.click()
    await this.selectValueInPrintDropdown(dropdownVal).click()
    await browser.pause(process.env.medium_wait);
    await this.selectConsolidatedCurrencyVal.selectByIndex(1);
    await this.selectLangVal.selectByIndex(1)
    await this.printPreviewBtn.click()
    await browser.pause(process.env.medium_wait);
  }

  async validatePrintConsolidatedQuote(actualData) {
    await browser.pause(process.env.medium_wait);
    browser.keys('Down');
    await browser.pause(process.env.small_wait);
    let resultVal = await this.consolidatedInvoiceVal.getText();
    assert.equal(resultVal, actualData);

  }
  async printEventBillingQuote(dropdownVal) {
    await this.printDropdown.click()
    await this.selectValueInPrintDropdown(dropdownVal).click()
    await browser.pause(process.env.medium_wait);
    await this.selectEventBillingCurrencyVal.selectByIndex(1);
    await this.selectLangVal.selectByIndex(1)
    await this.printPreviewBtn.click()
    await browser.pause(process.env.medium_wait);
  }
  async selectUseDateRange(startDateVal, endDateVal) {
    await browser.pause(process.env.small_wait);
    await this.startDateInput().clearValue();
    await this.startDateInput().setValue(startDateVal);
    await this.endDateInput().clearValue();
    await this.endDateInput().setValue(endDateVal);
    await browser.pause(process.env.small_wait);
    await this.searchOrderButton().click();
    await browser.pause(process.env.large_wait);
  }

  async validatingUseDateRange(startDateVal, endDateVal) {
    let resultsStartDate = await this.resultsOrderIdRow(4).getText();
    let resultsEndDate = await this.resultsOrderIdRow(5).getText();
    const startDateVal1 = new Date(startDateVal);
    const endDateVal1 = new Date(endDateVal);
    const resultsStartDate1 = new Date(resultsStartDate);
    const resultsEndDate1 = new Date(resultsEndDate);
    // console.log(startDateVal + "________________" + resultsStartDate);
    // console.log(startDateVal1 + "________________" + resultsStartDate1);
    assert.isTrue(resultsStartDate1 >= startDateVal1, "Validated start date successfully");
    assert.isTrue(resultsEndDate1 <= endDateVal1, "Validated end date successfully");
  }

}

module.exports = new OrderSearchNavigatorPage();
