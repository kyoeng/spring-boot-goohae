'use strict'


let allCheckBtn = document.getElementById("allCheck");
let checkBtn = document.getElementsByClassName("shoppingCartTableCheck");

allCheckBtn.addEventListener('click',function (){

    for (let i = 0; i<=checkBtn.length; i++){
        checkBtn[i].checked = !checkBtn[i].checked;
    }
})

let productEaInput = document.getElementsByClassName("shoppingCartProductEa");
console.log(productEaInput);

for( let i = 0; i<4; i++){
    console.log(
        "이벤트 핸들러"
    )
    productEaInput.addEventListener("onchange",function (e){
        console.log("발생")
        setTimeout(()=>{
            e.target().disable(true);
        },500)
    })
}

