const HomePage = require('../pageobjects/home.page');
const OffersPage = require('../pageobjects/offers.page');

describe("Verify offers price test",function(){

    it("I  am on the https://www.sky.com/shop/offers page", function(){
        HomePage.open();
        HomePage.acceptCookies();
        HomePage.clickDeals();
    });

    it("Then I see a list of offers with a price to it", function(){
        expect(OffersPage.ultiMateTVOfferPriceCheck("27")).to.equal(true);
        expect(OffersPage.dealSkyTVAndSkySportsPriceCheck("45")).to.equal(true);
        expect(OffersPage.dealSkyTVAndNetflixCinemaPriceCheck("38")).to.equal(true);
    });

});