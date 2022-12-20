
var ud;
async function buttons(){

    let user=await fetch('http://localhost:3000/items');
    let getting=await user.json();
    console.log(getting);
    ud=getting;
 
 for(let i=0;i<getting.length;i++){
   document.querySelector(".kim").innerHTML+=`
   <li onclick="show(${getting[i].id})"><h2>${getting[i].name}<h2>
   <h3>${getting[i].price}</h3</li>`
  
 }
  
}
buttons();

async function show(id){
    console.log(id);
    console.log(ud);
    let info=await fetch('http://localhost:3000/new',
    {
        method:'POST',
        headers:{'content-type':"application/json"},
        body:JSON.stringify({
            "name":ud.name,
            "price":ud.price
        })
      });
      let data= await info.json();
      console.log(data);
}