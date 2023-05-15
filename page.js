/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        browser.maximizeWindow();
        return browser.url(`https://psavcustomersqa.crm.dynamics.com/`+path);
    }

    // open1() {
    //     return browser.url(`https://navigator.training.psav.com/#!/orderNew/9016/%7B322F20C0-AFFC-4221-8661-C6425BC7BF54%7D`)
    // }
}
