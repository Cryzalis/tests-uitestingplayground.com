const {Builder, By,until} = require("selenium-webdriver");
const expect = require("chai").expect;

describe("Text Input",function(){
    it("Record setting text into the input field and pressing the button", async function(){

        const driver = new Builder().forBrowser("firefox").build();
        await driver.get("http://uitestingplayground.com/textinput?");

        let = text = "New text button";

        await driver.findElement(By.id("newButtonName")).sendKeys(text);
        await driver.findElement(By.id("updatingButton")).click();

        let query =  driver.wait(until.elementTextIs(driver.findElement(By.id("updatingButton")),text),20000);

        expect(await query.getText()).equal(text);
        console.log(await query.getText());
        driver.quit();
    });
})