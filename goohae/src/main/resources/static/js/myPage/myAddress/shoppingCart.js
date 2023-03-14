'use strict'


let allCheckBtn = document.getElementById("allCheck");
let checkBtn = document.getElementsByClassName("shoppingCartTableCheck");
let shoppinCartTableBtn = document.getElementsByClassName("shoppingCartTableBtn");

allCheckBtn.addEventListener('click',function (){

    for (let i = 0; i<=checkBtn.length; i++){
        checkBtn[i].checked = true;
    }

})

let productEaInput = document.getElementsByClassName("shoppingCartProductEa");
console.log(productEaInput);

for( let i = 0; i<productEaInput.length; i++){
    productEaInput[i].addEventListener("change", function(e){
        let productCode = e.target.getAttribute("productCode");
        let productEa = e.target.value;
        $.ajax("/logined-user/mycart/changeea",{
            type:"post",
            data : {
                productCode: productCode,
                productEa : productEa,
            },
            success: (res)=>{
                console.log(res)
            }
        })
    })
}

for(let i=0; i<shoppinCartTableBtn.length; i++){
    shoppinCartTableBtn[i].addEventListener("click", function (e) {
        let productCode = e.target.getAttribute("productCode");
        $.{}
    })
}

