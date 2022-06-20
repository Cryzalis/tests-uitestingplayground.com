const {Builder, By,Key,until} = require("selenium-webdriver");
const expect = require("chai").expect;

describe("Scrollbars",function(){
    it("Find a button in the scroll view and record button click.", async function(){

        const driver = new Builder().forBrowser("firefox").build();
        await driver.get("http://uitestingplayground.com/scrollbars");
        let button = driver.findElement(By.css("#hidingButton"));
        let query = driver.wait(until.elementIsVisible(button));
        console.log(await query.getText());
        await driver.actions().sendKeys(Key.chord(Key.TAB,Key.TAB,Key.TAB,Key.TAB,Key.RIGHT,Key.RIGHT,Key.RIGHT,Key.DOWN,Key.DOWN)).perform();

       
    });
})