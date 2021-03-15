import {ClientFunction} from 'testcafe'
import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import CartPage from '../pages/CartPage'
import CheckoutPage from '../pages/CheckoutPage'
import OrderPage from '../pages/OrderPage'
import {CREDENTIALS} from '../data/Constants'



const url = 'https://www.saucedemo.com/'
const getUrl = ClientFunction(() => window.location.href);
fixture('Order Page')
.page(url)
.beforeEach(async t => {
    await t

    .expect(getUrl()).contains(url)
    .expect(LoginPage.loginBtn.exists).ok();
    LoginPage.setUserName(CREDENTIALS.VALID_USER.USERNAME);
    LoginPage.setPassword(CREDENTIALS.VALID_USER.PASSWORD);
    LoginPage.clickOnLoginButton();

});
   
test

    ('9. Final order items', async t => {     
        await t
        await t.expect(ProductsPage.CartBtn.exists).ok();
        CartPage.clickOnLinkItem1(); 
        await t.expect(CartPage.AddtoCartBtn.exists).ok();
        ProductsPage.clickOnCartBtn();
        await t.expect(CartPage.CartQuantity.exists).ok();
        const quantity = await CartPage.CartQuantity.count; 
        console.log("Total Products: "+ quantity);
        CartPage.clickOnCheckoutBtn();
        await t.expect(CheckoutPage.CheckoutLabel.exists).ok();
        await t.expect (CheckoutPage.CheckoutLabel.innerText).eql('Checkout: Your Information');
        await t.expect(CheckoutPage.ContinueBtn.exists).ok();
        CheckoutPage.setUserName(CREDENTIALS.VALID_USER.NAME);
        CheckoutPage.setLastName(CREDENTIALS.VALID_USER.LASTNAME);
        CheckoutPage.setZipCode(CREDENTIALS.VALID_USER.ZIPCODE);
        CheckoutPage.clickOnContinueBtn();
        await t.expect(CheckoutPage.OverviewLabel.exists).ok();
        await t.expect(CheckoutPage.OverviewLabel.innerText).eql('Checkout: Overview');
        await t.expect (OrderPage.SummaryQuantity.count).eql(quantity);
      

});

test
  
    ('10. Complete a Purchase', async t => {     
        await t
        await t.expect(ProductsPage.CartBtn.exists).ok();
        CartPage.clickOnLinkItem1(); 
        await t.expect(CartPage.AddtoCartBtn.exists).ok();
        ProductsPage.clickOnCartBtn();
        await t.expect(CartPage.CartQuantity.exists).ok();
        CartPage.clickOnCheckoutBtn();
        await t.expect(CheckoutPage.CheckoutLabel.exists).ok();
        await t.expect (CheckoutPage.CheckoutLabel.innerText).eql('Checkout: Your Information');
        await t.expect(CheckoutPage.ContinueBtn.exists).ok();
        CheckoutPage.setUserName(CREDENTIALS.VALID_USER.NAME);
        CheckoutPage.setLastName(CREDENTIALS.VALID_USER.LASTNAME);
        CheckoutPage.setZipCode(CREDENTIALS.VALID_USER.ZIPCODE);
        CheckoutPage.clickOnContinueBtn();
        await t.expect(CheckoutPage.OverviewLabel.exists).ok();
        await t.expect(CheckoutPage.OverviewLabel.innerText).eql('Checkout: Overview');
        OrderPage.clickOnFinishBtn();
        await t.expect(OrderPage.OrderMsj.innerText).eql('Your order has been dispatched, and will arrive just as fast as the pony can get there!')
      
});