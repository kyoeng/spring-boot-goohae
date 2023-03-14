'use strict'


let allCheckBtn = document.getElementById("allCheck");
let checkBtn = document.getElementsByClassName("shoppingCartTableCheck");
let shoppinCartTableBtn = document.getElementsByClassName("shoppingCartTableBtn");
let shoppingCartAllOrderButton = document.querySelector(".shoppingCartAllOrderButton");
let shoppingCartCheckedOrderButton = document.querySelector(".shoppingCartCheckedOrderButton");
console.log(shoppingCartAllOrderButton)
console.log(shoppingCartCheckedOrderButton)
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
            }
        })
    })
}

for(let i=0; i<shoppinCartTableBtn.length; i++){
    shoppinCartTableBtn[i].addEventListener("click", function (e) {
        let productCode = e.target.getAttribute("productCode");
        $.ajax("/logined-user/mycart/delete",{
            type: "post",
            data:{
                productCode:productCode
            },
            success: (res)=>{
                window.location.reload(true);
            }
        })

    })
}

shoppingCartAllOrderButton.addEventListener('click', function (e){
    let orderProduct;
    for(let i = 0; i < checkBtn; i++){

    }
    $.ajax("")
})
