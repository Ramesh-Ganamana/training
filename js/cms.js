  var images= document.querySelectorAll(".ux_image");
  var tit=document.querySelectorAll(".title");
  var small_text=document.querySelectorAll(".small_text");
  var cont=document.querySelectorAll(".content");
  var number_img =document.querySelectorAll(".number_image")
  async function content(){
     
    var data_getting= await fetch('http://localhost:3000/cms_data');
    var getting=await data_getting.json();
    console.log(getting);

    for(let i=0;i<getting.length;i++){
      small_text[i].innerHTML=getting[i].sub;
       cont[i].innerHTML=getting[i].content;
      tit[i].innerHTML=getting[i].course;
      images[i].src=getting[i].image_url;  
      number_img[i].src =getting[i].number_url;
      
    }

  }
  content();