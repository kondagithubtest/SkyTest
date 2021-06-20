class HomePage {

    acceptCookies(){
        const frameId = $('//*[@id="sp_message_iframe_474555"]');
        browser.switchToFrame(frameId);
        browser.pause(3000);
        const acceptCookiesId = $('/html/body/div/div[2]/div[3]/button[2]');
        acceptCookiesId.click();
        browser.switchToParentFrame();
    }

    clickDeals(){
        const deals = $('=Deals');
        deals.click();
        browser.pause(2000);
    }

    getUrl(){
        var url = browser.getUrl();
        console.log(url);
        return url
    }

    open () {
        browser.url("https://www.sky.com/");
        browser.maximizeWindow();
     }
}

module.exports = new HomePage();