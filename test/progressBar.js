const {Builder, By,Key,until} = require("selenium-webdriver");
const expect = require("chai").expect;

describe("Progress Bar",function(){
    it("Create a test that clicks Start button and then waits for the progress bar to reach 75%. Then the test should click Stop. ", async function(){

        const driver = new Builder().forBrowser("firefox").build();
        await driver.get("http://uitestingplayground.com/progressbar");

        await driver.findElement(By.id("startButton")).click();

        var progressBar = driver.findElement(By.id("progressBar"));

        await driver.wait(until.elementTextContains( progressBar, "75%"),10000).then(async function(){
            console.log('test');
            await driver.findElement(By.id("stopButton")).click();
            
        });
        driver.quit();
    });
})
