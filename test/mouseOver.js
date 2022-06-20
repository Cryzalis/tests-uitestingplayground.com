const {Builder, By} = require("selenium-webdriver");
const expect = require("chai").expect;

describe("Mouse Over",function(){
    it("Record 2 consecutive link clicks. Execute the test and make sure that click count is increasing by 2.", async function(){

        const driver = new Builder().forBrowser("firefox").build();
        await driver.get("http://uitestingplayground.com/mouseover");

        await driver.findElement(By.css(".container>div>a")).click();
        await driver.findElement(By.css(".container>div>a")).click();

        let clicks = await driver.findElement(By.css(".container>div>p>span")).getText();
        expect(clicks).equal("2");

        driver.quit();
    });
})
