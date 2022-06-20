const {Builder, By,Key,until} = require("selenium-webdriver");
const expect = require("chai").expect;

describe("Verify Text",function(){
    it("Create a test that finds an element with Welcome... text.", async function(){

        const driver = new Builder().forBrowser("firefox").build();
        await driver.get("http://uitestingplayground.com/verifytext");

        let text = await driver.findElement(By.xpath("//span[normalize-space(.)='Welcome UserName!']")).getText();

        console.log(await text);

        expect(await text).equal("Welcome UserName!");

 
    
    });
})