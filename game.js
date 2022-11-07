

        var score=20;
        var highscore=0;
        var random=Math.floor(Math.random()*20)+1;
        
          console.log(random);
        
       function validation()
       {
       var input=document.getElementById("input").value;
             
             if(random==input)
             {
              
             document.getElementById("guessing").innerHTML="you won the game";
             document.querySelector("body").style.background="green";
              document.getElementById("guessedvalue").innerHTML=random;
              highscore=highscore>score?highscore:score;
              document.getElementById("highscore").innerHTML="🥇 highscore :"+ highscore;
             }
             else
             {
             
             
             document.getElementById("score").innerHTML="💯 Score :"+score--;
             
             if(input>random)
             {
            
           
          document.getElementById("guessing").innerHTML="Too high";
             
             
             }
             else
             {
              document.getElementById("guessing").innerHTML="Too low";
               clear();
              }
          }
       }
      
       
       function clear()
       {
         document.getElementById("input").value="";
       }
      function again()
      {
        validation();
          document.getElementById("score").innerHTML="💯 Score :20";  
        document.querySelector("body").style.background="black";
         document.getElementById("guessing").innerHTML="start guessing...";
         document.getElementById("guessedvalue").innerHTML="?";
       }
      
      
       
      
        
       
        
        
        
        
