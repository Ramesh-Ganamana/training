            
            
            
               var account=[12345678,87654321];
	       var pas    =[8765,1234];
	       var balance=[20000,30000];
	       var hist=[[],[],[]];
	       
	       function validation()
	       {
	       var acc=prompt("Enter the account number");
	       var pwd=prompt("Enter password");
	       
	      var i=0;
	      while(i<account.length){
	        if(account[i]==acc){
	          
	         if(pas[i]==pwd){
	          alert("alert you are login successfully");
	          option(i);
	          }
	          else{
	          alert("your credientials are wrong");
	          }
	          }
	          else{
	          if(i<account.length-1){
	          i++;
	          } 
	          
	          else
	          {
	            alert("your credientials are wrong");
	             validation();
	          }
	          }
	         }
                }                
                
                
                  function option(w){
                    var types=(prompt("choose your options \n 1.enquiry \n 2.withdrawal \n 3.deposit \n 4.history \n 5.exit"));

                    switch(types){

                      case "1":
                    enquiry(w);
                    break;
                case "2":
                    withdrawal(w);
                    break;
                case "3":
                    deposit(w);
                    break;
                 case"4":
                      history(w);   
                      break;
                case "5":
                    exit();
                    break;
                    }
                    }
                    
             function enquiry(w)
             {
             alert ("avaliable balance"+balance[w]);
             
             }
             
             function withdrawal(w)
             {
              var withdrawalAmount = parseInt(prompt("How much do you want to withdraw? \n" ));

            if (withdrawalAmount <=balance[w] )
             {
            
                balance[w] -= withdrawalAmount;
                alert("Transaction successful!");
                alert("Your remaining balance is "+  balance[w]);
                  hist[w].push({type:" withdrawal",amount:withdrawalAmount});
                  option(w);
            }
            else {
                alert("You do not have sufficient funds!");
                withdrawal(w);
            }
            }
             

              function deposit(w)
      {
     var depositAmount=parseInt(prompt("How much money you want to add"));
     balance[w]=depositAmount+  balance[w];
      alert("your adding amount:"+depositAmount);
      alert("your total amount:"+balance[w]);
      hist[w].push({type:"deposit",amount:depositAmount});
      option(w);
     }
     
          
     function history(w)
     {
       let v="";
              for(var i=0; i<hist[w].length;i++)
            {
            let r="type - "+ hist[w][i].type +"amount-" + hist[w][i].amount ;
             console.log(r);
             v+=r+"\n";
            }
            alert(v);
            option(w);
            }
          function exit()
          {
         alert("thanks for visiting our ATM");
          }
          validation();
