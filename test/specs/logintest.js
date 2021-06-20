const HomePage = require('../pageobjects/home.page');
const LoginPage = require('../pageobjects/login.page');

describe("Invalid credentials test", function(){

    it("I am on the home page", function(){
        HomePage.open();
        HomePage.acceptCookies();
    });

    it("I try to sign in with invalid credentials", function(){
        LoginPage.clickSign();
        LoginPage.login('InavlieUser1','InavlidPassword1');
    });

    it("I should see a text saying that ‘Sorry, we did not recognise either your username or password'", function(){
        expect(LoginPage.getError()).to.equal('Sorry, we did not recognise either your username or password');
    });
})