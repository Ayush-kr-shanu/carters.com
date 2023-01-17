let form = document.querySelector("form")
form.addEventListener("submit",function(e){
    e.preventDefault()
    let formObj={
        name:form.name.value,
        pass:form.pass.value
    }

    if(formObj.name=="admin" && formObj.pass=="admin"){
        window.location.assign("./productAdd.html")
    }else{
        alert("Contact to tech team for acess")
    }
})