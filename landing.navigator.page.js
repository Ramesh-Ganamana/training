const NavigatorLoginPage = require('./navigator.page');
const { assert } = require('chai');
const { expect } = require('chai');

class LandingNavigatorPage extends NavigatorLoginPage {

  async navigatorLandingPageValidation() {
    await browser.pause(30000);
    assert.isTrue(await $('#optSite').isDisplayed(), 'Logo is successfully displayed on landing page')
  }
}
module.exports = new   LandingNavigatorPage();