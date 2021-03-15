
import {ClientFunction} from 'testcafe'
import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import {CREDENTIALS} from '../data/Constants'

const url = 'https://www.saucedemo.com/'
const getUrl = ClientFunction(() => window.location.href);
fixture('Logout Page')
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
    ('3. Logout Test', async t => {     
    await t
    await t.expect(ProductsPage.ProductsLabel.exists).ok();
    await t.expect (ProductsPage.ProductsLabel.innerText).eql('Products');
    ProductsPage.clickOnburgerBtn();
    await t.expect(ProductsPage.LogOutBtn.exists).ok();
    ProductsPage.clickOnLogOutBtn();
    await t.expect(LoginPage.loginBtn.exists).ok('Login page displayed');


});