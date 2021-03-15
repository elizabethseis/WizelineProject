import {Selector, t} from 'testcafe'

class CartPage{

    constructor(){
        this.CheckoutBtn = Selector('a.btn_action');
        this.LinkItem1= Selector('div.inventory_item:nth-child(1) div.pricebar > button.btn_primary.btn_inventory')
        this.LinkItem2= Selector('div.inventory_item:nth-child(4) div.pricebar > button.btn_primary.btn_inventory')
        this.AddtoCartBtn= Selector('.btn_primary')
        this.CartQuantity= Selector('div.cart_quantity')
  
    }
    async clickOnLinkItem1(){
        await t
        .click(this.LinkItem1);
    }
    async clickOnLinkItem2(){
        await t
        .click(this.LinkItem2);
    }
    async clickOnAddtoCartBtn(){
        await t
        .click(this.AddtoCartBtn);
    }
    async clickOnCheckoutBtn(){
        await t
        .click(this.CheckoutBtn);
    }
    
}

export default new CartPage();

