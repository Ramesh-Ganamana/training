
const { log } = require('console');
const Page = require('./page');

//const { assert } = require('chai');
const assert = require('assert');
       class ImpliedDscount{

       
         get clickonLocationtext() {

         return $("//input[@title='Click Here to Change Location']")
         }
         get locationSearch(){
         return $("//input[@id='txtLocationSearch']")
         }
         get SelectingItems(){
         return $("//div[@class='btn-toolbar btn-group-sm']//input[@id='searchOrder']")
         }
          
         get ClickOnClassicOrder (){
            return $("//a[normalize-space()='DDW 2023']")
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
     get DoubleClickPackage(){
        return $("//*[@id='oePackagesGrid']/div[4]/div[3]/div/div[4]/div[1]/div")
     }
    async discount(){
        return parseInt(await $(`//div[@class='slick-cell l5 r5 cellNumber'][normalize-space()='655.00']`).getText())
     }
    async updatedDiscount(){
        return parseInt(await $(`//div[@class='slick-cell l10 r10 cellNumber selected'][normalize-space()='524.00']`).getText())
    }


        async SetLocation(){
   
            await this.clickonLocationtext.click()
            await browser.pause(2000);
            await this.locationSearch.setValue("1121")
             await browser.keys("\uE007")
             await browser.pause(4000);
           
             await this.SelectingItems.click()
             await browser.pause(1000);


        }

         async SelectingClassicOrder(){
         await this.ClickOnClassicOrder.click()
        
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
        async duobleClickOnPackage(){
        
            await this.DoubleClickPackage.doubleClick()
        }
      async Validation(){

        // const specialRateButton = browser.$(`.//div[@class='slick-cell l7 r7 cellNumber selected active']`);
        // const isDisabled = specialRateButton.getAttribute('disabled');
        // console.log(isDisabled);
        // assert(isDisabled, 'Special rate button is enabled when it should be disabled');
   const price=await this.discount()
   console.log(price);
  const DiscountPrice=(price*80)/100;
  console.log(DiscountPrice);
const lastPrice=await this.updatedDiscount()
console.log(lastPrice);
assert.equal(DiscountPrice,lastPrice 
    )

      }
    }
    module.exports = new ImpliedDscount();
//div[@class='slick-cell l7 r7 cellNumber selected active']