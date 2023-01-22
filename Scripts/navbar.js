let nameList= JSON.parse(localStorage.getItem("loginData"))||[];


   let userName = (nameList[nameList.length-1].fullName);
    document.querySelector("#user-name").textContent=userName;
