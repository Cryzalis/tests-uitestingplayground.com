const {Builder, By,Key} = require("selenium-webdriver");
const expect = require("chai").expect;

describe("Overlapped Element",function(){
    it("Record setting text into the Name input field (scroll element before entering the text).", async function(){

        const driver = new Builder().forBrowser("firefox").build();
        await driver.get("http://uitestingplayground.com/overlapped");
        await driver.actions().sendKeys(Key.TAB,Key.TAB,Key.TAB,Key.TAB,Key.TAB,Key.TAB,Key.TAB).perform();

        await driver.findElement(By.id("name")).sendKeys("Test Name");
        
        let val = await driver.findElement(By.id("name")).getAttribute("value");
        
        expect(val).equal("Test Name")

    });
})
