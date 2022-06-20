const {Builder, By,Key,until} = require("selenium-webdriver");
const expect = require("chai").expect;

describe("Dynamic Table",function(){
    it.skip("For Chrome process get value of CPU load.  Compare it with value in the yellow label.", async function(){

        const driver = new Builder().forBrowser("firefox").build();
        await driver.get("http://uitestingplayground.com/dynamictable");
        let rows = await driver.findElements(By.xpath("//div[@role='rowgroup']/div[@role='row']"));
        let cpuData = await driver.findElement(By.css("p.bg-warning")).getText();
        let data=[];
        for (const row of rows) {
            let rowData = await row.getText();
            let reg1 = '/\n/';
            let browser = rowData.split();

            data.push(rowData);
    
        }

        var pattern = /Chrome.{1,}([1-9][0-9]*)+(.[0-9]{1,2})?/;
        var cpu = /([1-9][0-9]*)+(.[0-9]{1,2})?%/;

        for(const el of await data){
            if(el.match(pattern)!==null){
                let result = el.match(cpu);
                expect(result[0]).equal(cpuData.slice(-4))
            }
 
        }
    });
})