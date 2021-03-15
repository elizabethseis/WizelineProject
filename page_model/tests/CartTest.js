import {ClientFunction} from 'testcafe'
import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import CartPage from '../pages/CartPage'
import {CREDENTIALS} from '../data/Constants'

const url = 'https://www.saucedemo.com/'
const getUrl = ClientFunction(() => window.location.href);
fixture('Cart Page')
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
    ('4. Navigate to the shopping cart', async t => {     
    await t
    await t.expect(ProductsPage.CartBtn.exists).ok();
    ProductsPage.clickOnCartBtn();
    await t.expect(CartPage.CheckoutBtn.exists).ok();

    

});
test
    ('5. Add a single item to the shopping cart', async t => {     
    await t
    await t.expect(ProductsPage.CartBtn.exists).ok();
    CartPage.clickOnLinkItem1(); 
    await t.expect(CartPage.AddtoCartBtn.exists).ok();
    ProductsPage.clickOnCartBtn();
    await t.expect(CartPage.CartQuantity.exists).ok();
    await t.expect (CartPage.CartQuantity.count).eql(1);
    
});

test
    ('6. Add multipple items to the shopping cart', async t => {     
    await t
    await t.expect(ProductsPage.CartBtn.exists).ok();
    CartPage.clickOnLinkItem1(); 
    CartPage.clickOnLinkItem2(); 
    await t.expect(CartPage.AddtoCartBtn.exists).ok();
    ProductsPage.clickOnCartBtn();
    await t.expect(CartPage.CartQuantity.exists).ok();
    await t.expect (CartPage.CartQuantity.count).eql(2);

    
});
