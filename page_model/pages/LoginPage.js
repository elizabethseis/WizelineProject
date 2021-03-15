import {Selector, t} from 'testcafe'

class LoginPage{

    constructor(){
        this.userNameInput = Selector('input#user-name');
        this.passwordInput = Selector('input#password');
        this.loginBtn = Selector('input#login-button');
        this.errorMsj = Selector('h3:nth-child(4)')
    }

    async setUserName(userName){
        await t
        .typeText(this.userNameInput, userName)
    }

    async setPassword(password){
        await t
        .typeText(this.passwordInput, password);
    }

    async clickOnLoginButton(){
        await t
        .click(this.loginBtn);
    }

}

export default new LoginPage();

