import { registerPage } from "../../pages/registerPage";
const registerObj = new registerPage();
import registerData from "../../fixtures/registerData.json";

describe('Test', () => {
    it('Register Test', () => {
        registerObj.openURL();
        registerObj.enterFirstName(registerData.firstName);
        registerObj.enterlastName(registerData.lastName);
        registerObj.enterEmail(registerData.email);
        registerObj.enterTelephone(registerData.telephone);
        registerObj.enterPassword(registerData.password);
        registerObj.selectCheckbox();
        registerObj.clickOnContinue();
    });

});

