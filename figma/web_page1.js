// const API='http://localhost:3000/';
// const USER_API=`${API}cms_data`;

let  user_data=[];
async function Getting_UserAPI(){

    let response=await fetch('http://localhost:3000/cms_data');
       user_data=await response.json();
       let list=document.querySelector(".user");
    console.log(  user_data);
    for(i in user_data){
         list.innerHTML+=
` 
        <div class="col-4">
        <div class="column mt-4 mx-2 px-1">
        <img src="${user_data[i].image_url}" alt=" image" class="img-fluid">
        
        <img src="${user_data[i].number_url}" class="Sec-img number">
        <h3 class="mt-1"> ${user_data[i].course}</h3>
       
        <h6 class="mt-3 "style="color:silver">${user_data[i].sub}</h6>
        <h5 class="mt-2"style="color:silver">${user_data[i].content} </h5>
        </div> 
        </div>`

    }

}
Getting_UserAPI();



async function testimonial(){
    let data=await fetch('http://localhost:3000/testi-monial');
    let response_getting=await data.json();
    let listElement=document.querySelector(".ram");
    console.log(response_getting);

    for(let i in response_getting){
        listElement.innerHTML+=`
      <div class="col-md-4">
      <div class="card">
          <img src=${response_getting[i].im_url}  class="card-img-top im mx-2">
          <div class="card-body">
             
              <div class="card-text"> ${response_getting[i].content}</div>
               <img src=${response_getting[i].img2_url}
                class="my-2">
               <img src=${response_getting[i].img3_url}
               class="quote">
          </div>

      </div>
  </div>`
    }
}
testimonial();

async function casestudy(){
    let images_info= await fetch(' http://localhost:3000/photos');
    let images_info_getting= await images_info.json();
    console.log(images_info_getting);
    let ImagesElement=document.querySelector(".information"); 

    for(let i in images_info_getting){
        ImagesElement.innerHTML+=`
        <div class="col-4  ">
        <img src=${images_info_getting[i].image}>
        </div>`

    }

}
casestudy()


async function blog(){

    let blog_data= await fetch(' http://localhost:3000/blog');
    let blog_data_getting= await blog_data.json();
    console.log(blog_data_getting);
    let blog_info=document.querySelector(".our_blog");

    for(let i in blog_data_getting){

        blog_info.innerHTML+=


    `<div class="col-md-4 my-5">
        <div class="card">
            <img src=${blog_data_getting[i].img_url}>
            <div class="card-body">
                <div class="card-text ">
                ${blog_data_getting[i].content}
                </div>
                <h6 class=my-2>
                ${blog_data_getting[i].sub_content}
                </h6>
            </div>
    </div>
</div>`

    }

}
blog();