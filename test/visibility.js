const {Builder, By} = require("selenium-webdriver");
const expect = require("chai").expect;

describe("Visibility",function(){
    it("In your testing scenario press Hide button. Determine if other buttons visible or not.", async function(){

        const driver = new Builder().forBrowser("firefox").build();
        await driver.get("http://uitestingplayground.com/visibility");
        await driver.findElement(By.id("hideButton")).click();

        let hideButtons = await driver.findElements(By.css("table button"));
        for (const button of hideButtons) {
            if( button.isDisplayed()){
                console.log(await button.getText());
            }
        }

    });
})
