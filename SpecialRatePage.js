const Page = require('./page');

const { assert } = require('chai');
// class SpecialRatePage extends Page {

//        get ClickOrder(){
//        return $("//input[@value='Create Order']")

//        }
       class SpecialRatePage{

       
         get clickonLocationtext() {

         return $("//input[@title='Click Here to Change Location']")
         }
        get locationSearch(){
        return $("//input[@id='txtLocationSearch']")
        }
       get StartDate(){
       return $("//*[@id='mainLandingPage']/div/div/div[1]/div[1]/div[2]/div/div/div/div/div[14]/div[2]/div[1]/div[1]/label/input")
      } 

      get SelectingItems(){
      return $("//div[@class='btn-toolbar btn-group-sm']//input[@id='searchOrder']")
      }
      get Ordername(){
      return $("//*[@id='orderGridResults']/div[4]/div[3]/div/div[4]/div[4]/a")
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
        return $("//*[@id='oePackagesGrid']/div[4]/div[3]/div/div[5]/div[1]/div")
     }
      
     SpecialRate(){
        return $(`//div[contains(text(),"Dress Kit Black")]/following-sibling::div[2]`)
     }
    //     get SetValueForSpecialRate(){
    //    return(`//div[contains(text(),"Dress Kit Black")]/following-sibling::div[2]`)
    //     }
    
// async ReloginNavitation(){

//     await this.ClickOrder.click()
//       await browser.pause(30000);
// }

  async LocationChange(){
   
    await this.clickonLocationtext.click()
    await browser.pause(2000);
    await this.locationSearch.setValue("9016")
     await browser.keys("\uE007")
    await browser.pause(4000);
   await this.StartDate.click() 
   await this.SelectingItems.click()
   await browser.pause(1000);
}

 async OrderClicking(){

await this.Ordername.click()
await browser.pause(10000);

 }
async ClickOnJobs(){

    await this.JobsTab.click()

    await browser.pause(6000);

}
async ItemTab(){

    await this.ClickOnItemsTab.click()
    await this.ClickOnPackage.click()
    await browser.pause(10000);
}
async duobleClickOnSubPackage(){

    await this.DoubleClickPackage.doubleClick()
    assert.isTrue(await this.SpecialRate().isClickable(),
 'successfully selected status in order status field');
    await this.SpecialRate().click()
    await this.SpecialRate().clear()
    await browser.pause(10000);
    console.log("%&$&$>>>>>>>>>>>>>>>");
  const SpecialValue=355
    await this.SpecialRate().setValue(SpecialValue)
    await browser.pause(5000);
    console.log("%&$&$>>>>>>>>>>>>>>>343434");
   //  await browser.keys("\uE007");


}
// async EnterSpecialRate(){

//     await this.SpecialRate.click()
//    await this.SetValueForSpecialRate.setValue("300")
//     await browser.keys("\uE007")
// }

       }
module.exports = new SpecialRatePage();
//*[@id="oePackagesGrid"]/div[4]/div[3]/div/div[5]/div[1]/div
//*[@id="oeOrderLinesGrid"]/div[4]/div[3]/div/div[3]/div[7]/input

//*[@id="oePackagesGrid"]/div[4]/div[3]/div/div[3]/div[1]/div
//*[@id="oeOrderLinesGrid"]/div[4]/div[3]/div/div[5]/div[7]/input