const {Builder, By} = require("selenium-webdriver");
const expect = require("chai").expect;

describe("Non-Breaking Space",function(){
    it.skip("Notice that the XPath does not work. Change the space between 'My' and 'Button' to a non-breaking space.", async function(){

        const driver = new Builder().forBrowser("firefox").build();
        await driver.get("http://uitestingplayground.com/nbsp");

        try {
            await driver.findElement(By.xpath("//button[text()='My Button']")).click();
        } catch (error) {
            console.log("not found");
        }
        try {
            await driver.findElement(By.xpath("//button[contains(normalize-space(translate(., '\u00A0\u00A0', ' ')), 'My')]")).click();
        } catch (error) {
            console.log("not found again");
        }
        
        
        

        driver.quit();
    });
})
