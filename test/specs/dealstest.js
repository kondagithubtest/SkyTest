const HomePage = require('../pageobjects/home.page');

describe("Offers page url check test", function(){

    it("I am on the home page", function(){
        HomePage.open();
        HomePage.acceptCookies();
    });

    it("I navigate to Deals", function(){
        HomePage.clickDeals();
    });

    it("the user should be on the https://www.sky.com/shop/offers page", function(){

        expect(HomePage.getUrl()).to.equal('https://www.sky.com/deals');
    });

});