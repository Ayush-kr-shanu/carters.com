let   login_Data = JSON.parse(localStorage.getItem("loginData"))||[];

let Create_Account_Button = document.getElementById("CreateAccountBtn").addEventListener("click",()=>{
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
        fullName: document.getElementById("User_fullName").value,
        password: document.getElementById("password").value,
        ConfirmedPassword: document.getElementById("confirmedPass").value
    }
    
    if(userInfo.Email !== ""|| userInfo.fullName !== ""|| userInfo.password !== ""||       userInfo.ConfirmedPassword !== ""){
        let emailRegisterd = false;
        for(let i=0;i<=login_Data.length-1;i++){
            if(login_Data[i].Email === userInfo.Email){
                alert("This Email is already registered");
                emailRegisterd=true;
            }
            
        }
        
        if(emailRegisterd==false){
            if(userInfo.password === userInfo.ConfirmedPassword ){
                login_Data.push(userInfo);
                localStorage.setItem("loginData",JSON.stringify(login_Data))
                alert("Account created successfully");
                window.location.assign("/index.html");
            }
            else{
                alert("please check your entered password");
            }
        }
    }
   else{
    alert("Please fill all the Details");
   }
    
})

let SignIn_Button = document.getElementById("siginBtn").addEventListener("click",()=>{
    let EnteredEmail = document.getElementById("loginName").value;
    let EnteredPassword = document.getElementById("loginPassword").value;
    
    if(EnteredEmail!=="" && EnteredPassword!==""){
        if(login_Data.length<=0){
            alert("Please Create Account");
        }
        for(let i=0;i<=login_Data.length-1;i++){
            if(login_Data[i].Email === EnteredEmail){
                if(login_Data[i].password === EnteredPassword){
                    alert("Sign in successfully")
                    window.location.assign("/index.html");
                }
                else {
                    alert("Invalid Password");
                }
            }
            
        }
    }
    else{
        alert("Please fill all the details")
    }
    
    

})
document.querySelector("#orders").addEventListener("click",()=>{
    window.location.assign("/checkoutForm.html");
})

