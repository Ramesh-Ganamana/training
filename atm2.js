
	  
		/* var accountbalance1=1000;
		 var accountbalance2=2000;
		 
	       var accountnumber1=12345678;
	       var password1=8765;
	       
	       var accountnumber2=87654321;
	       var password2=1234;*/
	       var account=[12345678,87654321];
	       var pas    =[8765,1234];
	       var balance=[20000,30000];
	      
	       function dataValidation()
	       {
	            alert("please login to your account")
	            var acc=prompt("enter your accountnumber");
	            var pwd=prompt("enter your password");
	                   if (accountnumber1==acc && password1==pwd ||accountnumber2==acc && password2==pwd)
	                      {
	                         alert("you are login succesfully");
	                      }
	                else
	                 {
	                       alert("your credientials are wrong");
	                 }
	        
	     }
	      
		 dataValidation();
	        function selectFunction() 
	        {
		     var choice = (prompt("choose your option \n 1. enquiry \n 2. Withdrawal \n 3. Deposit \n 4. Exit "));
		     
		      
		       switch ( choice)
	                  {
				case "1":
					enquiry();
					break;
				case "2":
					withdrawal();
					break;
				case "3":
					deposit();
					break;
				case "4":
					exit();
					break;
				default:
				alert("Please make a valid selection");
					
        	           }     		
		}
		selectFunction();
		
	             function enquiry()
	             {
	                     alert("your avalible balance"+accountbalance1);
	                     
	                     
	                      selectFunction();
		
		
	             }
		          
		
	             function withdrawal()
	             { 
	                    var withdrawalAmount = (prompt("How much do you want to withdraw? " ));
	
		
			if (withdrawalAmount <= accountbalance1) 
			    {
				accountbalance1 -= withdrawalAmount;
				alert("Transaction successful!");
				alert("Your remaining balance is " + accountbalance1);
				
			   } 
			else 
			     {
				alert("You do not have sufficient funds");
				withdrawal();
			    }
			  selectFunction();
		     
		   }
	
       	
             function deposit()
               {
                 var depositamount= parseInt(prompt("how much money do you want to deposit"));	
		 
		accountbalance1=depositamount+accountbalance1;
		 alert("amount successfully deposited"+ accountbalance1);
		  selectFunction();
               }
               
               
	  function exit() 
	     {
	        alert("Thank you for wisiting our ATM machine");
	     }	
