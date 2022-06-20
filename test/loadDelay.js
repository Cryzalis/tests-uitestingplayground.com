const {Builder, By,until} = require("selenium-webdriver");
const expect = require("chai").expect;

describe("Load Delay",function(){
    it("wait to load", async function(){
        const driver = new Builder().forBrowser("firefox").build();
        await driver.get("http://uitestingplayground.com/");

        driver.findElement(By.linkText("Load Delay")).click();

        let query =  driver.wait(until.elementLocated(By.css("button.btn-primary")),20000);

        expect(await query.getText()).equal("Button Appearing After Delay");
        driver.quit();
    });
})