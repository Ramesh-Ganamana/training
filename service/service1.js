var table=document.querySelector(".info");


async function table_data(){

    let t_data= await fetch('http://localhost:3000/cms_data');
    let data_getting= await t_data.json();
    console.log(data_getting);
   for(let i=0;i<data_getting.length;i++){
    table.innerHTML+=`<tr>
     <td>${i+1}</td>
     <td><img src="${data_getting[i].image_url}"></td>
     <td>${data_getting[i].course}</td>
     <td>${data_getting[i].sub}</td>
     <td>${data_getting[i].content}</td>
    <td> status</td>
     <td><button ${data_getting[i]}>Delete </button>
    
     
    
    
    
    </tr>`
    
   }
}
table_data();