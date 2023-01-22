let cartdata=JSON.parse(localStorage.getItem("cart_data")) || [];
let Total_item = document.querySelector(".totalItem").innerHTML=cartdata.length;

let totalprice = localStorage.getItem("total_price")||null;
document.querySelectorAll(".Amount")[0].textContent = `$${totalprice}.00`;

let paymentBtn = document.querySelector('.btn');
paymentBtn.addEventListener("click",function(e){
    e.preventDefault();
    alert("payment accepted");

    let CongoPage = document.getElementById("popup");
    CongoPage.style.display="block";
   let billingForm  = document.querySelector(".container");
   billingForm.style.display="none";
    let amountSection  = document.querySelector(".col-25");
    amountSection.style.display="none";
    localStorage.removeItem("cart_data");
   
})

let CancelButton = document.getElementById("cancel").addEventListener("click",()=>{
    let CongoPage = document.getElementById("popup");
    CongoPage.style.display="none";
    let billingForm  = document.querySelector(".container");
   billingForm.style.display="block";
    let amountSection  = document.querySelector(".col-25");
    amountSection.style.display="block";

    //making Zero after Payment;
    
    document.querySelector(".totalItem").innerHTML ="0";
    document.querySelector(".Amount").innerHTML = "0";
})

let shoppingButton = document.querySelector("#congoButton");

shoppingButton.addEventListener("click",()=>{
    window.location.assign("/index.html");
})