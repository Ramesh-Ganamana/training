 var hist=[[],[]];
 var cUser=0;

  var amount=[30000,40000];
var login=document.getElementById("logs");
var lo=document.getElementById("raj");
var second=document.getElementById("sece");
var third=document.getElementById("tdp");
var fourth=document.getElementById("frth")
function ram(){

login.style.display="block";
lo.style.display="none";


}
function validation(){
var account=[12345678, 87654321];
  var password=[8765,1234];



 var acc=document.querySelector(".account").value;
 var psd=document.querySelector(".pass").value;

// var acc=prompt  ("enter your accountnumber");
// var psd=prompt("enter your password");

 var i=0;

 while(i<account.length)
 {
 if(acc==account[i])
 {
 //alert("your welcome");

 if(psd==password[i]){
 cUser=i;
 alert("your login successfull");
 second.style.display="block";
 login.style.display="none";
 break;

   }
    else
  {
  alert("your credentials are wrong");
   second.style.display="none";
  break;
  
  }}
   else
   {
    if(i<account.length-1 )
    {
     i++;
    }

 else
 {
 alert("your credentials are wrong");
  second.style.display="none";
 break;
 }
  }
  }
  }
document.querySelector(".button").addEventListener("click",validation);
second.style.dispaly="block";

  function withdraw(){
  
  third.style.display="block";
  second.style.display="none";
  }
  
function deposit(){
fourth.style.display="block";
second.style.display="none";
}

function withdrw1(){

 var dra= document.querySelector(".number").value;

  if(dra>=amount){ 
 amount[cUser]-=(dra);
 alert("Transaction successful!:"+ amount[cUser]);
  // alert("Your remaining balance is "+amount);
   second.style.display="block";
  third.style.display="none";
 
  }
  else
  {
  alert("you have insufficient funds")
second.style.display="block";
 third.style.display="none";
 
  } 
}

function deposit1(){

var dep= document.querySelector(".num").value;
amount[cUser]+=parseInt(dep);
alert ("your transaction successfull:"+dep);
alert("your amount:"+amount[cUser]);

second.style.display="block";
fourth.style.display="none";
}

function history()
{

let r="";
let i=0;
 for(i=0;i<hist[cUser].length;i++)
 {
 let v="typeof-"+hist[cUser][i].type + "amount" + hist[cUser][i].type;
 r=v;
 }
 alert(r);
 }

















