var itaration=[]; 
var ud;
var total=0;
var dat= document.querySelector(".insert");
var revive;
var discount;
var tax;
var lastbill;
var dis=document.querySelector(".i");
var GST=document.querySelector(".inp");
var GrandTotal=document.querySelector(".coniform_order");
var submit = document.querySelector(".submit_order");
var data;
var ord= document.querySelector(".tab");
var inputting_value=document.querySelector(".inputting");
var customer_details_getting;
    //ord.style.display="none";
var t_hide=document.querySelector(".view_table");  
//t_hide.style.display="none";

async function infoGetting(){

    let user=await fetch('http://localhost:3000/items');
    let getting=await user.json();
    console.log(getting);
    ud=getting;
 
 for(let i=0;i<getting.length;i++){
   document.querySelector(".tableList").innerHTML+=`
   <li onclick="show(${getting[i].id})"><h5>${getting[i].name}<h5>
   <h6>${getting[i].price}</h6</li>`
  
 }
 
}
infoGetting();

 function show(id){

  dat.innerHTML="";
  itaration.push({
    name:ud[id-1].name,
    price:ud[id-1].price,
    quantity:1

  })
  console.log(itaration);
  displaytable();
  
  
}
    
   
    function displaytable(){
      
      dat.innerHTML="";
      total=0;
      for(let i=0;i<itaration.length;i++){
      dat.innerHTML+=
      `<td>${itaration[i].name}</td>
      <td><input type="numeric" onchange="retrive(${i})"  class="quantity" value=${itaration[i].quantity}></td>
     <td> ${itaration[i].price*itaration[i].quantity}</td>`
     total+=parseInt(itaration[i].price*itaration[i].quantity);
     console.log(total);
     discount=(total/100)*4;
      console.log(discount);
     dis.value=discount;
    tax=(total/100)*3;
    
    GST.value=tax;
    lastbill=total-discount+tax;
    
    GrandTotal.value=lastbill;
     
      }
     
}
function retrive(s){
  

  var quan=document.querySelectorAll(".quantity");
  console.log(quan[s].value);
  itaration[s].quantity=quan[s].value;
  displaytable();
 
  
  }
  submit.addEventListener("click",list);
  async function list(id){
    console.log(itaration);

    
    let info=await fetch('http://localhost:3000/new',
    {
        method:'POST',
        headers:{'Content-Type':"application/json"},
        body:JSON.stringify({

        
          "username":inputting_value.value,
          "GrandTotal":GrandTotal.value,
          "Gst":GST.value,
          "tax":dis.value,
          "orders":itaration
          

        })
        
      });
       data= await info.json();
      
      console.log(data);
    }
    function order(){
      /*var table=document.querySelector(".orderList");
      table.innerHTML+=`<td>${inputting_value.value}</td>
                        <td>${GrandTotal.value}</td>
                        <td> <button onclick="">view</button></td>`*/
                        //dataPosting();
                        customer_details();
                            
    }
    

    async function customer_details(){
     
      let customer =await fetch('http://localhost:3000/new');
       customer_details_getting=await customer.json();
      var table=document.querySelector(".orderList");
      for( let i=0;i<customer_details_getting.length;i++){

       
        
           
          table.innerHTML+=`<td>${customer_details_getting[i].username}</td>
                           <td>${customer_details_getting[i].GrandTotal}</td>
                           <td> <button onclick="view_box(${i})">view</button></td>`
        
      }
    
    }
      function view_box(i){
        var view= document.querySelector(".view_details");
        view.innerHTML+="";
        console.log(customer_details_getting);
        for(let i=0;i<customer_details_getting.length;i++){

          view.innerHTML+=`
          
          <tr>
          <td>${i+1}</td>
          <td>${customer_details_getting[i].username}</td>
          
          <td>${customer_details_getting[i].Gst}</td>
          <td>${customer_details_getting[i].tax}</td>
          <td>${customer_details_getting[i].GrandTotal}</td>
          </tr>`
          


        }

      }

   
      