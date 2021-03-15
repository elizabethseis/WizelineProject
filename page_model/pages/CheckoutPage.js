import {Selector, t} from 'testcafe'

class CheckoutPage{

    constructor(){
        this.CheckoutLabel = Selector('div.subheader');
        this.ContinueBtn= Selector('input.btn_primary.cart_button');
        this.WarningMsj= Selector('h3:nth-child(1)')
        this.NameField= Selector('#first-name')
        this.LastNameField= Selector('#last-name')
        this.ZipCodeField= Selector('#postal-code')
        this.OverviewLabel= Selector('div.subheader')

    }

    async clickOnContinueBtn(){
        await t
        .click(this.ContinueBtn);
    }

    async setUserName(userName){
        await t
        .typeText(this.NameField, userName)
    }
    async setLastName(lastName){
        await t
        .typeText(this.LastNameField, lastName)
    }
    async setZipCode(zipCode){
        await t
        .typeText(this.ZipCodeField, zipCode)
    }



}

    export default new CheckoutPage();