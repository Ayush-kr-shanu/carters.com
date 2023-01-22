let form =document.querySelector("form")
form.addEventListener("submit",function(e){
    e.preventDefault()
    let formObj={
        image:form.img.value,
        name:form.name.value,
        price:form.price.value,
        brand:form.brand.value,
        category:form.category.value,
    }
    if(formObj.category=="Category"){
        alert("Please select category")
    }else{
        fetch(`https://carters-com-data-base.onrender.com/${formObj.category}`,{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            }, 
            body:JSON.stringify(formObj),
        })
    }
})

let del=document.querySelector("#del")
del.addEventListener("submit",function(e){
    e.preventDefault()
    let delObj={
        id:form.id.value,
        category:form.category.value,
    }
    if(delObj.category=="Category"){
        alert("Please select category")
    }else{
        fetch(`https://carters-com-data-base.onrender.com/${delObj.category}/${delObj.id}`,{
            method: "DELETE",
            headers:{
                "Content-Type": "application/json",
            }, 
            body:JSON.stringify(delObj),
        })
        alert("Delete sucessfull")
    }
})


let btn=document.querySelector("#logout")
btn.addEventListener("click",function(){
    window.location.assign("./admin.html")
})