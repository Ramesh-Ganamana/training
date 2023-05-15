const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    inputUsername() {
        return $('input[name="loginfmt"]');
    }

    inputPassword() {
        return $('#passwordInput');
    }

    btnSubmit() {
        return $('//input[@type="submit"]');
    }

    btnSignIn() {
        return $('#submitButton');
    }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login(username, password) {
        await this.inputUsername().setValue(username);
        await this.btnSubmit().click()
        await this.inputPassword().setValue(password);
        await this.btnSignIn().click();
        // setTimeout(done, 3000);
        await this.btnSubmit().click();
    }


    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('');
    }
}

module.exports = new LoginPage();
