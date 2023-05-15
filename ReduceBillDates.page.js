const Page = require('./page');

//const { assert } = require('chai');
//const assert = require('assert');
       class ReduceBill{

       
         get clickonLocationtext() {

         return $("//input[@title='Click Here to Change Location']")
         }
         get locationSearch(){
         return $("//input[@id='txtLocationSearch']")
         }
         get SelectingItems(){
         return $("//div[@class='btn-toolbar btn-group-sm']//input[@id='searchOrder']")
         }
          
         get ClassicOrder (){
            return $("(//a[contains(text(),'Feuji_Automation_001')])[4]")
         }
          
         get JobsTab()
        {
       return $("//a[normalize-space()='Jobs']")
       } 

       get ClickOnItemsTab(){
        return $("//a[normalize-space()='Items']")
     }

     get ClickOnPackage(){
        return $("//span[@class=' glyphicon glyphicon-gift']")
     }

    async SetLocation(){
   
        await this.clickonLocationtext.click()
        await browser.pause(2000);
        await this.locationSearch.setValue("9016")
         await browser.keys("\uE007")
         await browser.pause(4000);
       
         await this.SelectingItems.click()
         await browser.pause(1000);


    }

     async SelectingClassicOrder(){
     await this.ClassicOrder.click()
    
     await browser.pause(15000);
     }

     async Job(){

        await this.JobsTab.click()
       
        await browser.pause(3000);
    }
    async ItemsTab(){

        await this.ClickOnItemsTab.click()
        await this.ClickOnPackage.click()
        await browser.pause(10000);
    }
}
module.exports = new ReduceBill();