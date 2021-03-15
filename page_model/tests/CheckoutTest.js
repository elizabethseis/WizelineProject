import {ClientFunction} from 'testcafe'
import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import CartPage from '../pages/CartPage'
import CheckoutPage from '../pages/CheckoutPage'
import {CREDENTIALS} from '../data/Constants'

const url = 'https://www.saucedemo.com/'
const getUrl = ClientFunction(() => window.location.href);
fixture('Checkout Page')
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
 
    ('7. Continue with missing mail information', async t => {     
        await t
        await t.expect(ProductsPage.CartBtn.exists).ok();
        CartPage.clickOnLinkItem1(); 
        await t.expect(CartPage.AddtoCartBtn.exists).ok();
        ProductsPage.clickOnCartBtn();
        await t.expect(CartPage.CheckoutBtn.exists).ok();
        CartPage.clickOnCheckoutBtn();
        await t.expect(CheckoutPage.CheckoutLabel.exists).ok();
        await t.expect (CheckoutPage.CheckoutLabel.innerText).eql('Checkout: Your Information');
        await t.expect(CheckoutPage.ContinueBtn.exists).ok();
        CheckoutPage.clickOnContinueBtn();
        await t.expect(CheckoutPage.WarningMsj.innerText).eql('Error: First Name is required')  

});


test
  
    ('8. Fill User Information', async t => {     
        await t
        await t.expect(ProductsPage.CartBtn.exists).ok();
        CartPage.clickOnLinkItem1(); 
        await t.expect(CartPage.AddtoCartBtn.exists).ok();
        ProductsPage.clickOnCartBtn();
        await t.expect(CartPage.CheckoutBtn.exists).ok();
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

});
