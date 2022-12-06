
var btn= document.getElementById("btnn");
var inp =document.getElementsByClassName(".input").value;
var img=document.querySelectorAll(".im");	
var publish =document.querySelectorAll(".publisher");
var titl =document.querySelectorAll(".title"); 
var block=document.querySelector("image");
var selected=10;	 
 var pagenumber=0;
	 function sidebar(list)
	 {	 
		  for(let i=0;i<selected;i++)
		 {
	       
              titl[i].innerHTML=list.recipes[i].title;
  		  
			    publish[i].innerHTML=list.recipes[i].publisher;
				 			
			     img[i].src=list.recipes[i].image_url;	
					
		}
		  
	 }	     
		  
	sidebar(list);
	 
		 document.querySelector(".button2").addEventListener("click",next);
		  function next()
		  {
			 
               for( let i=1; i<selected;i++){
				   titl[i-1].innerHTML=list.recipes[i*selected].title;
				   publish[i-1].innerHTML=list.recipes[i*selected].publisher;
                    img[i-1].src=list.recipes[i*selected].image_url;				   
					   
					   }	  
		  }
		 
			 
			 
		 
	
		 
		
		 
		 
	 
		 
		 
		 
		 
	 
 