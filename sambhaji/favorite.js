let main=document.getElementById("listedproduct");
let count=document.getElementById("total");

let favData= JSON.parse(localStorage.getItem("fav_data")) || [];

let cartdata= JSON.parse(localStorage.getItem("cart_data")) || [];
//let favData = JSON.parse(localStorage.getItem("fav_data")) || [];

window.addEventListener("load",()=>{
    collap();
    showData(favData);
})
function collap(){
    let coll = document.getElementsByClassName("collapsible");
    var i;
    for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
        content.style.maxHeight = null;
        } else {
        content.style.maxHeight = content.scrollHeight + "px";
        } 
    });
    }
}

function showData(data){
    main.innerHTML=null;
    
    count.innerText=`${data.length} items`;
    data.forEach((element,index) => {
    let card=document.createElement("div");
    card.setAttribute("class", "imgdiv");

    let img=document.createElement("img");
    img.src=element.image;

    let div1=document.createElement("div");
    div1.setAttribute("class", "pricediv");
    let div4=document.createElement("div");
    let h3=document.createElement("h2");
    h3.innerText="$ "+element.price;

    let div5=document.createElement("div");
    div5.setAttribute("class","offdiv");
    let p0=document.createElement("s");
    p0.innerText="$"+Math.floor(element.price+11);
    let off=document.createElement("p");
     if(element.price>1 && element.price<=10){
        off.innerText="10%off"
    }else if(element.price>10 && element.price<=20){
        off.innerText="16%off"
    }else if(element.price>20 && element.price<=25){
        off.innerText="21%off"
    }else{
        off.innerText="37%off"
    }

    div5.append(p0,off)
    div4.append(h3,div5);

    div1.append(div4);

    let div2=document.createElement("div");
    div2.setAttribute("class","description");
    let p1=document.createElement("p");
    p1.innerText=element.name;
    let p2=document.createElement("p");
    p2.innerText=element.ProdCategory;

    let btn=document.createElement("button");
    btn.setAttribute("class","buyitem");
    btn.innerText="Buy Now";
    btn.addEventListener("click",(e)=>{
      e.preventDefault();
      let added1= false;
      for(let i=0;i<cartdata.length;i++){
       if(element.id==cartdata[i].id){
         added1= true;
         break;
       }
      }
      if(added1==true){
       alert("PRODUCT ALREADY ADDED TO CART")
      }else{
       cartdata.push(element);
       localStorage.setItem("cart_data",JSON.stringify(cartdata));
       favData.splice(index,1);
       localStorage.setItem("fav_data",JSON.stringify(favData));
       alert("PRODUCT ADDED TO CART SUSSFULLY");
       showData(favData);
      }
    })
    
    

    let remove = document.createElement("button");
    remove.setAttribute("class","deletBtn");
    remove.innerText="remove";
    remove.addEventListener("click",()=>{
        favData.splice(index,1);
        localStorage.setItem("fav_data",JSON.stringify(favData));
        showData(favData);
    })
    div2.append(p1,p2);
    card.append(img,div1,div2,btn,remove);
    main.append(card);
});

}
