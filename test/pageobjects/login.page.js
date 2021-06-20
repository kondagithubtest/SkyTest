
class LoginPage {

    clickSign(){
        const signInLink = $('=Sign in');
        signInLink.click();
        browser.pause(5000);
    }

    login(usernameParam, passwordParam){
        const username = $('#username');
        const password = $('#password');
        const signInBtn = $('#signinButton');
        username.setValue(usernameParam);
        password.setValue(passwordParam);
        signInBtn.click();
        browser.pause(5000);
    }
    
    getError(){
        const frameId = $('//*[@id="signInPanel"]/div[1]/div[2]/div/ul/li');
        var errorMessage = frameId.getText();
        console.log("errorMessage : "+errorMessage);
        return errorMessage;
    }
    
}

module.exports = new LoginPage();
