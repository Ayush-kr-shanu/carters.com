let data1;
let x=fetch("https://carters-com-data-base.onrender.com/baby-girl");
x.then((res)=> {
  return res.json()
})
.then((actualData)=>{
  data1=actualData;
  rendercard(data1);
  

});

let lsdata=JSON.parse(localStorage.getItem("fav_data")) || [];
let cartdata=JSON.parse(localStorage.getItem("cart_data")) || [];
let container=document.getElementById("listedproduct");
let count=document.getElementById("total");

window.addEventListener("load",()=>{
    collap();
    
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


function rendercard(data){

    count.innerText=`${data.length} items`;
    data.forEach(element => {
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
    let button=document.createElement("button");
    button.setAttribute("class","addtofav")
    button.innerText="❤️";

    button.addEventListener("click",(e)=>{
     e.preventDefault();
     let added= false;
     for(let i=0;i<lsdata.length;i++){
      if(element.id==lsdata[i].id){
        added= true;
        break;
      }
     }
     if(added==true){
      alert("PRODUCT ALREADY ADDED TO FAVORITE")
     }else{
      lsdata.push(element);
      localStorage.setItem("fav_data",JSON.stringify(lsdata));
      alert("PRODUCT ADDED TO FAVORITE SUSSFULLY");
     }
       
        
    })

    div1.append(div4,button);

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
       alert("PRODUCT ADDED TO CART SUSSFULLY");
      }
    })
    
    div2.append(p1,p2);

    card.append(img,div1,div2,btn);
    container.append(card);
});
}
  
   