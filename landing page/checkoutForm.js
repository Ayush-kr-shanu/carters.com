let orderButton = document.querySelector('#placeOrder');
orderButton.addEventListener("click",function(){
    let orderAddress = {
        FirstName: document.getElementById("FirstName").value,
        LastName: document.getElementById("LastName").value,
        Address: document.getElementById("Address").value,
        Emal: document.getElementById("email").value,
        Phone:document.getElementById("phone").value,
        LandMark:document.getElementById("landmark").value,
    }
    alert("Order Placed");
})