const {Builder, By,Key,until} = require("selenium-webdriver");
const expect = require("chai").expect;

describe("Sample App",function(){
    it("Fill in and submit the form. For successfull login use any non-empty user name and `pwd`", async function(){

        const driver = new Builder().forBrowser("firefox").build();
        await driver.get("http://uitestingplayground.com/sampleapp");

        await driver.findElement(By.xpath("//input[@name='UserName']")).sendKeys("user");
        await driver.findElement(By.xpath("//input[@name='Password']")).sendKeys("pwd");
        await driver.findElement(By.id("login")).click();

        let status = driver.findElement(By.id("loginstatus"));
        await driver.wait(until.elementTextContains( status, "Welcome" ),10000).then(async function(element){
            expect(await element.getText()).equal("Welcome, user!");
        });
        driver.quit();
    });
})
