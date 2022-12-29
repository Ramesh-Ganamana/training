
 var btn=document.querySelector(".added");
btn.addEventListener('click',dataposting);
var input;
 async function dataposting(){


    var img=document.querySelector(".Image_url").value;
    var title=document.querySelector(".title").value;
    var sub_content=document.querySelector(".Sub_content").value;
    var description=document.querySelector(".Description").value;
    var stat=document.querySelector(".sat").value;

    input={ //"img":image_url,
              "course":title,
              "sub":sub_content,
              "content":description,
              "status":stat
             }

    let posting= await fetch ('http://localhost:3000/cms_data',{

    method:'POST',
    headers:{'content-type':"application/json"},
    body:JSON.stringify(input)

    });
    let getting_posted_data= await posting.json();
    console.log(getting_posted_data);
 }