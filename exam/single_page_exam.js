 function routeFunc(event){

    event=event||window.event;
    event.preventDefault();
    window.history.pushState({},"",event.target.href);
    locationHandle();
 }

 const routes={
    
    "/":"./home.html",
    "/about":"./about.html",
    "/contact":"./contact.html",
    404:"./404.html",
 }
 
 const locationHandle= async ()=>{

    const  templet=window.location.pathname;
    const routeValidation=routes[templet]||routes[404];

    const info= await fetch(routeValidation).then((res)=>res.text());
    document.getElementById("main_content").innerHTML=info;

 }
 window.onpopstate=locationHandle
 window.route=routeFunc;
 locationHandle();

 