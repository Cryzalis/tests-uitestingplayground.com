const {Builder, By,until} = require("selenium-webdriver");
const expect = require("chai").expect;

describe("Click",function(){
    it("Bad button", async function(){
        const driver = new Builder().forBrowser("firefox").build();
        await driver.get("http://uitestingplayground.com/click");

        await driver.findElement(By.id("badButton")).click();

        let query =  driver.wait(until.elementLocated(By.css("button.btn-success")),20000);

        expect(await query.getText()).equal("Button That Ignores DOM Click Event");
        driver.quit();
    });
})