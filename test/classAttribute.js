const {Builder, By,until} = require("selenium-webdriver");
const expect = require("chai").expect;

describe("Class Attribute",function(){
    it.skip("Primary button", async function(){
        const driver = new Builder().forBrowser("firefox").build();
        await driver.get("http://uitestingplayground.com/classattr");

        driver.findElement(By.xpath("//button[contains(concat(' ', normalize-space(@class), ' '), ' btn-primary ')]")).click();
        await driver.wait(until.alertIsPresent(),10000);

        let alert = await driver.switchTo().alert();

        let alertText = await alert.getText();

        await alert.accept();
        expect(alertText).equal("Primary button pressed");
        driver.quit();
    });
})