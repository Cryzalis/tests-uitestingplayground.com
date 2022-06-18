const {Builder, By,until} = require("selenium-webdriver");
const expect = require("chai").expect;

describe("AJAX",function(){
    it("Data loaded with AJAX", async function(){
        const driver = new Builder().forBrowser("firefox").build();
        await driver.get("http://uitestingplayground.com/ajax");

        await driver.findElement(By.id("ajaxButton")).click();

        let query =  driver.wait(until.elementLocated(By.css("#content>p")),20000);

        expect(await query.getText()).equal("Data loaded with AJAX get request.");
        driver.quit();
    });
})