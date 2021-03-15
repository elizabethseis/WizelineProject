import {Selector, t} from 'testcafe'

class ProductsPage{

    constructor(){
        this.ProductsLabel = Selector('div.product_label');
        this.burgerBtn = Selector('#react-burger-menu-btn');
        this.LogOutBtn = Selector('#logout_sidebar_link');
        this.CartBtn = Selector('#shopping_cart_container')

    }

    async clickOnburgerBtn(){
        await t
        .click(this.burgerBtn);
    }
    
    async clickOnLogOutBtn(){
        await t
        .click(this.LogOutBtn);
    }
    async clickOnCartBtn(){
        await t
        .click(this.CartBtn);
    }
}

export default new ProductsPage();

