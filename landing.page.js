const Page = require('./page');


class LandingPage extends Page {

  get clickonCompass() {
    return $("a[title='Compass']")
  }

  async compassValidation() {

    await browser.pause(30000);
    const iframe = await browser.findElement('css selector', "iframe");
    await browser.pause(2000);
    await browser.switchToFrame(iframe);
    await browser.pause(1000);
    await this.clickonCompass.click();
    await browser.pause(20000);

  }


}

module.exports = new LandingPage();