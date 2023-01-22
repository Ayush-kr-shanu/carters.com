
let cartData = JSON.parse(localStorage.getItem("cart_data"))||[];
let dataContainer = document.getElementById("append-cart");
let subTotal = document.getElementById("total-amount");
let grandTotal = document.getElementById("grand-total");
let checkOut = document.getElementById("check-out");
let cartContainer = document.getElementById("cart-container")
let cartEmptyCont = document.getElementById("cart-empty-container")
let goHomeBtn = document.getElementById("go-home");

let temp = 0;

emptyCart(cartData);

function emptyCart(data)
{
    if(data.length === 0)
    {
        cartContainer.innerHTML=null;
        cartEmptyCont.style.display ="block";
    }
    else{ cartEmptyCont.style.display ="none"; }
}

goHomeBtn.addEventListener('click',()=>{
    window.location.href="./index.html";
})



displaycart(cartData)


checkOut.addEventListener('click',()=>{
    localStorage.setItem('total_price',temp);
    window.location.href="./checkoutForm.html";
    temp = 0;
})
document.getElementById("baby-girl-img").addEventListener('click',()=>{
    window.location.href = "/product_girl.html"
})
document.getElementById("baby-boy-img").addEventListener('click',()=>{
    window.location.href = "/productpage.html"
})


function displaycart(data)
{
    dataContainer.innerHTML=null;
    temp = 0
    data.forEach((e,i)=>{
        let cartItem = document.createElement("div");
        cartItem.setAttribute('class','cart-item');

        let cartItemImage = document.createElement("div");
        cartItemImage.setAttribute('class','cart-item-image');
        let cartImg = document.createElement("img");
        cartImg.setAttribute('src',e.image);
        cartItemImage.append(cartImg);                      //Image appended

        let cartItemInfo = document.createElement("div");
        cartItemInfo.setAttribute('class','cart-item-info');
        let itemBrand = document.createElement("span");
        itemBrand.setAttribute('class','item-brand');
        itemBrand.innerText = e.brand;
        let itemName = document.createElement("p");
        itemName.setAttribute('class','item-name');
        itemName.innerText = e.name;
        let itemCategory = document.createElement("p");
        itemCategory.setAttribute('class','item-category');
        itemCategory.innerText = e.ProdCategory;
        cartItemInfo.append(itemBrand,itemName,itemCategory);   //Item info appended

        let itemQnt = document.createElement("div");
        itemQnt.setAttribute('class','item-qnt');
        itemQnt.innerText="Qty : ";
        let dec = document.createElement("button");
        dec.setAttribute('class','dec');
        dec.innerText='-';
        let inc = document.createElement("button");
        inc.setAttribute('class','inc');
        inc.innerText='+';
        let itemQuant = document.createElement("span");
        itemQuant.setAttribute('class','item-quant');
        itemQuant.innerText=1;
        itemQnt.append(dec,itemQuant,inc);                     //Quantity appended

        let itemPrice = document.createElement("div");
        itemPrice.setAttribute('class','item-price');
        let price = document.createElement("p");
        price.setAttribute('class','price');
        price.innerText="$"+e.price;
        let remove = document.createElement("button");
        remove.setAttribute('class','remove-item');
        remove.innerText="Remove";
        itemPrice.append(price,remove);                        //price and removebtn appended

        

        inc.addEventListener('click',()=>{                      // Increament Part
            temp = temp - (e.price*itemQuant.innerText);
            itemQuant.innerText++;
            temp =  Math.ceil(temp + (e.price*itemQuant.innerText));
            subTotal.innerText="$"+temp;
            grandTotal.innerText="$"+temp;
        })

        dec.addEventListener('click',()=>{                      // Decreament Part
            if(itemQuant.innerText > 1)
            {
                temp = temp - (e.price*itemQuant.innerText);
                itemQuant.innerText--;
                temp = Math.ceil(temp + (e.price*itemQuant.innerText));
                subTotal.innerText="$"+temp;
                grandTotal.innerText="$"+temp;
            }
        })

        temp = Math.ceil(temp + (e.price*itemQuant.innerText));
        subTotal.innerText="$"+temp;
        grandTotal.innerText="$"+temp;

        remove.addEventListener('click',()=>{                   // Delete Part 
            let removedData = cartData.filter((ele,ind)=>{
                if(ind==i) return false;
                return true;
            })
            cartData = removedData;
            localStorage.setItem('cart_data',JSON.stringify(cartData));
            displaycart(cartData);
            if(removedData.length === 0) {
                subTotal.innerText=0;
                grandTotal.innerText=0;
                cartContainer.innerHTML=null;
                cartEmptyCont.style.display ="block";
            }
        })


            cartItem.append(cartItemImage,cartItemInfo,itemQnt,itemPrice);
            dataContainer.append(cartItem)
            console.log("hi")
       
    })
}