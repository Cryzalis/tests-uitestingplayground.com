const {Builder, By,until} = require("selenium-webdriver");
const expect = require("chai").expect;

describe("Client Side Delay",function(){
    it.skip("Data calculated on the client side.", async function(){
        const driver = new Builder().forBrowser("firefox").build();
        await driver.get("http://uitestingplayground.com/clientdelay");

        await driver.findElement(By.id("ajaxButton")).click();

        let query =  driver.wait(until.elementLocated(By.css("#content>p")),20000);

        expect(await query.getText()).equal("Data calculated on the client side.");
        driver.quit();
    });
})