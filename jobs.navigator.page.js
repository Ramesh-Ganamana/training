const { assert } = require("chai");
const { expect } = require("chai");
const LandingNavigatorPage = require("./navigator.page");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class JobNavigatorPage extends LandingNavigatorPage {
    jobHeader() {
        return $("//button[@id='Home']/ancestor::ul/following::li[3]")
    }
    clickOnItems() {
        return $("//a[contains(text(),'Items')]")
    }
    clickOnHotList() {
        return $("//span[@class='glyphicon glyphicon-fire']")
    }
    clickOnSections() {
        return $("//span[@class=' glyphicon glyphicon-picture']")
    }
    clickOnFreight() {
        return $("//span[@class='glyphicon glyphicon-plane']")
    }
    clickOnPackage() {
        return $("//span[@class=' glyphicon glyphicon-gift']")
    }
    clickOnSubClass() {
        return $("//span[@class=' glyphicon glyphicon-list']")
    }
    clickOnItem() {
        return $("//span[@class=' glyphicon glyphicon-th-list']")
    }
    selectAnItemInHotList() {
        return $('//div[@title="Dual 10x1 Borderle Screen Package- 14Ks"]')
    }
    clickOnSections() {
        return $()
    }






}