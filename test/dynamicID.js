const {Builder, By} = require("selenium-webdriver");
const expect = require("chai").expect;

describe("Dynamic ID",function(){
    it("button with dynamic ID", async function(){
        const driver = new Builder().forBrowser("firefox").build();
        await driver.get("http://uitestingplayground.com/dynamicid");

        let button =  driver.findElement(By.css("div.container>button.btn"));

        expect(await button.getText()).equal("Button with Dynamic ID");

        driver.quit();
    });
})