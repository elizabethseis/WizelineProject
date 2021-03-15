import {ClientFunction} from 'testcafe'
import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import {CREDENTIALS} from '../data/Constants'

const url = 'https://www.saucedemo.com/'
const getUrl = ClientFunction(() => window.location.href);

fixture('Login Page')
.page(url)
   
    test
    ('Loading Login Page', async t => {     
    await t
    .expect(getUrl()).contains(url)
    .expect(LoginPage.loginBtn.exists).ok();

}); 


    test
    ('1. Login with a Valid User', async t => {
        LoginPage.setUserName(CREDENTIALS.VALID_USER.USERNAME);
        LoginPage.setPassword(CREDENTIALS.VALID_USER.PASSWORD);
        LoginPage.clickOnLoginButton();
        await t.expect(ProductsPage.ProductsLabel.exists).ok();
        await t.expect (ProductsPage.ProductsLabel.innerText).eql('Products');

    });

    test
    ('2. Login with a Invalid User', async t => {
        LoginPage.setUserName(CREDENTIALS.INVALID_USER.USERNAME);
        LoginPage.setPassword(CREDENTIALS.INVALID_USER.PASSWORD);
        LoginPage.clickOnLoginButton();
        await t.expect(LoginPage.errorMsj.exists).ok();
        await t.expect (LoginPage.errorMsj.innerText).eql('Epic sadface: Username and password ' +
  'do not match any user in this service');

    });