

        var score=20;
        var highscore=0;
        var random=Math.floor(Math.random()*20)+1;
        
          console.log(random);
        
       function validation()
       {
       var input=document.getElementById("input").value;
             
               if(input=="") 
             {
             
              document.getElementById("guessing").innerHTML="enter a number";
              
            }  
            else if(random==input)
             {
              document.getElementById("guessing").innerHTML="you won the game";
            
             document.querySelector("body").style.background="green";
              document.getElementById("guessedvalue").innerHTML=random;
              highscore=highscore>score?highscore:score;
              document.getElementById("score").innerHTML="💯 Score :"+ score;
                 document.getElementById("highscore").innerHTML="🥇 highscore :"+ highscore;  
                document.querySelector(".bb").addEventListener(`click`,message);
                
                                          
             }
           
            
            else if(input>random)
             {
            score=score-1;
           
          document.getElementById("guessing").innerHTML="Too high";
          document.getElementById("score").innerHTML="💯 Score :"+ score;
             
             
             }
             else if(input<random)
             {
             score=score-1;
              document.getElementById("score").innerHTML="💯 Score :"+ score;
                document.getElementById("guessing").innerHTML="Too low";
               clear();
              }
              else if (isNaN(input))
              {
               document.getElementById("guessing").innerHTML="Enter number";
               clear();
              }
                else
             {
               clear();
             } 
          }
       
      
       
       function clear()
       {
         document.getElementById("input").value="";
       }
      function again()
      {
      score=20;
       random=Math.floor(Math.random()*20)+1;
       console.log(random);
       
          document.getElementById("score").innerHTML="💯 Score :"+score;  
        document.querySelector("body").style.background="black";
         document.getElementById("guessing").innerHTML="start guessing...";
         document.getElementById("guessedvalue").innerHTML="?";
         document.querySelector(".bb").removeEventListener(`click`,message);
                
         clear();
        
       }
       
       function message(){
       
         alert("If you want to countinue plz click again button" );
      }
      
       
      
        
       
        
        
        
        
