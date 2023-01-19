fetch("https://carters-com-data-base.onrender.com/baby-boy")
.then(res=> res.json())
.then(data => {
    // console.log(data)
    displayData(data)
})

// fetch("https://carters-com-data-base.onrender.com/baby-girl")
// .then(res => res.json())
// .then(dta => {
//     displayData(dta)
// })

function displayData(data){
    document.querySelector("tbody").innerHTML=""

    data.forEach((el,i) => {
        let row= document.createElement("tr")
        
        let td1=document.createElement("td")
        td1.textContent=el.id

        let td2=document.createElement("td")
        td2.textContent=el.image

        let td3=document.createElement("td")
        td3.textContent=el.name

        let td4=document.createElement("td")
        td4.textContent=el.price

        let td5=document.createElement("td")
        td5.textContent=el.brand

        let td6=document.createElement("td")
        td6.textContent=el.category

        let td7=document.createElement("td")
        td7.textContent=el.ProdCategory

        let td8=document.createElement("td")
        td8.textContent="Delete"
        td8.addEventListener("click",function(){
            data.slice(i,1)
        })


        row.append(td1,td2,td3,td4,td5,td6,td7,td8)
        document.querySelector("tbody").append(row)
    });
}