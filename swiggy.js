
var btn= document.getElementById("btnn");
var inp =document.getElementsByClassName(".input").value;
var img=document.querySelectorAll(".im");	
var publish =document.querySelectorAll(".publisher");
var title =document.querySelectorAll(".title"); 
var block=document.querySelector("image");
var selected=10;	 
 var pagenumber=0;
	 function sidebar(list)
	 {	 
		  for(let i=0;i<10;i++)
		 {
	       
              title[i].innerHTML=list.recipes[i].title;
  		  
			    publish[i].innerHTML=list.recipes[i].publisher;
				 			
			     img[i].src=list.recipes[i].image_url;	
					
		}
		  
	 }	     
		  
	sidebar(list);
	 
		 document.querySelector(".button2").addEventListener("click",next);
		  function next()
		  {
			 alert("hi");
               for( let i=10; i<20;i++){
				   title[i-10].innerHTML=list.recipes[i].title;
				   publish[i-10].innerHTML=list.recipes[i].publisher;
                    img[i-10].src=list.recipes[i].image_url;				   
					   
					   }	  
		  }
		 /* document.querySelector(".button2").addEventListener("click",alter);
		  function alter()
		  
		  {
			  alert("hlo");
			  for(let i=20;i<27;i++){
				   title[i-20].innerHTML=list.recipes[i].title;
				   publish[i-20].innerHTML=list.recipes[i].publisher;
                    img[i-20].src=list.recipes[i].image_url;				
			  }
		  }*/
			 
			 
		 
	
		 
		
		 
		 
	 
		 
		 
		 
		 
	 
 