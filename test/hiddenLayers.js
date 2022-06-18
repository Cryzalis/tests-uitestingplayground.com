const {Builder, By,until} = require("selenium-webdriver");
const expect = require("chai").expect;

describe("Hidden Layers",function(){
    it("Second button", async function(){
        const driver = new Builder().forBrowser("firefox").build();
        await driver.get("http://uitestingplayground.com/hiddenlayers");

        driver.findElement(By.id("greenButton")).click();

        let query =  driver.wait(until.elementLocated(By.id("blueButton")),10000);

        expect(await query.getText()).equal("Button");
        driver.quit();
    });
})