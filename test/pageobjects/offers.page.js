class OffersPage{

    ultiMateTVOfferPriceCheck(value){
        return this.priceCheck('#deal-ultimate-tv', value);
    }

    dealSkyTVAndSkySportsPriceCheck(value){
        return this.priceCheck('#deal-sky-tv-and-sky-sports', value);
    }

    dealSkyTVAndNetflixCinemaPriceCheck(value){
        return this.priceCheck('#deal-sky-tv-netflix-and-cinema', value);
    }

    priceCheck(parentElementId, value){
        const parentElement = $(parentElementId);
        const price = parentElement.$('span').getText();
        console.log(price);
        return price.includes(value);
    }
}

module.exports = new OffersPage();