let   login_Data = JSON.parse(localStorage.getItem("loginData"))||[];

document.getElementById("CreateAccountBtn").addEventListener("click",()=>{
    document.getElementById("signin").style.display="none";
    
    document.getElementById("createAccountContainer").style.display="block"
})
document.getElementById("button2").addEventListener("click",()=>{
    document.getElementById("signin").style.display="block";
    document.getElementById("createAccountContainer").style.display="none"
})
document.getElementById("button1").addEventListener("click",()=>{
    let userInfo = {
        Email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        ConfirmedPassword: document.getElementById("confirmedPass").value
    }
    if(userInfo.password === userInfo.ConfirmedPassword){
        login_Data.push(userInfo);
        localStorage.setItem("loginData",JSON.stringify(login_Data))
        alert("login successful")
    }
    else{
        alert("please check your entered password");
    }
})

document.getElementById("siginBtn").addEventListener("click",()=>{
    console.log("working")
})