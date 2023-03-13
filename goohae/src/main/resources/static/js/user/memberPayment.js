"use strict";

const main = document.querySelector("main"),
  requiredInputTagWrap = main.querySelectorAll(".memPayOrderInfo"), // 필수정보 입력 묶음
  [
    memPayOrderName,
    firstPhoneNum,
    secondPhoneNum,
    thirdPhoneNum,
    postNum,
    basicAddress,
    detailedAddress,
  ] = main.querySelectorAll(".memPayOrderInfo input"),
  fixedPayment = main.querySelector(".memberPayMentFinPrice"), //최종결제금액창
  [totalAgree, paymentAgree1, paymentAgree2, paymentAgree3] =
    fixedPayment.querySelectorAll("input[type = checkbox]"),
  [
    totalAgreeCheckBox,
    paymentAgree1CheckBox,
    paymentAgree2CheckBox,
    paymentAgree3CheckBox,
  ] = fixedPayment.querySelectorAll("label > img"),
  paymentOrderBtn = fixedPayment.querySelector(".PpymentOrderBtn"),
  memOrderPostMemoWrap = main.querySelector(".postMemoInput"), // 배송메모
  [postMemoSelect, postMemoInput] =
    memOrderPostMemoWrap.querySelectorAll(".postMemo"),
  postMemoOption = postMemoSelect.querySelectorAll("option"),
  memPayOrderMeth = main.querySelector(".memPayOrderPayMethBtn"),
  [cardBtn, accountBtn, mobileBtn, kakaoPayBtn] =
    memPayOrderMeth.querySelectorAll(".memPayOrderPayMethBtn>label"),
  payBoxWrap = main.querySelector(".payBoxWrap"),
  [memPayOrderCardPaymentBox, accountDepositeBox, mobilePayBox, kakaoPayBox] =
    payBoxWrap.querySelectorAll(".payBoxWrap>div");

cardBtn.style.border = "1px solid #505DD0";
cardBtn.lastElementChild.style.color = "#505DD0";
cardBtn.children[0].style.filter =
  "invert(34%) sepia(69%) saturate(1087%) hue-rotate(208deg)";

console.log(paymentOrderBtn);
console.log(paymentAgree1CheckBox);
console.log(paymentAgree2CheckBox);
console.log(paymentAgree3CheckBox);

let flag = false;

function isCorrect(asValue) {
  //한글 영문
  const regExp = /^[a-zA-Zㄱ-힣][a-zA-Zㄱ-힣 ]*$/;
  return regExp.test(asValue);
}
//--------------------------------------------------------
//배송메모 선택 직접 선택하기 눌렀을 떄 입력값 넘ㄴ어가게 
const deliveryMemo = document.getElementById("memOrderPostMemo");
const memOrderPostMemoInput = document.getElementById("memOrderPostMemoInput");

deliveryMemo.addEventListener("change", function() {
    if (deliveryMemo.value === "6") {
      deliveryMemo.style.display = "none";
      memOrderPostMemoInput.style.display = "inline-block";
    } else {
      deliveryMemo.style.display = "inline-block";
      memOrderPostMemoInput.style.display = "none";
    }
});

memOrderPostMemoInput.addEventListener("input", function() {
  deliveryMemo.value = memOrderPostMemoInput.value;
});



//--------------------------------------------------------
totalAgree.addEventListener("change", function () {
  if (totalAgree.checked == true) {
    paymentAgree1.checked = true;
    paymentAgree2.checked = true;
    paymentAgree3.checked = true;
    totalAgreeCheckBox.setAttribute("src", "./checked.png");
    paymentAgree1CheckBox.setAttribute("src", "./checked.png");
    paymentAgree2CheckBox.setAttribute("src", "./checked.png");
    paymentAgree3CheckBox.setAttribute("src", "./checked.png");
  } else {
    paymentAgree1.checked = false;
    paymentAgree2.checked = false;
    paymentAgree3.checked = false;
    totalAgreeCheckBox.setAttribute("src", "./unChecked.png");
    paymentAgree1CheckBox.setAttribute("src", "./unChecked.png");
    paymentAgree2CheckBox.setAttribute("src", "./unChecked.png");
    paymentAgree3CheckBox.setAttribute("src", "./unChecked.png");
  }
});

paymentAgree1.addEventListener("change", function (e) {
  if (e.target.checked == false) {
    totalAgree.checked = false;
    totalAgreeCheckBox.setAttribute("src", "./unChecked.png");
    paymentAgree1CheckBox.setAttribute("src", "./unChecked.png");
  } else {
    paymentAgree1.checked = true;
    paymentAgree1CheckBox.setAttribute("src", "./checked.png");
  }
});

paymentAgree2.addEventListener("change", function (e) {
  if (e.target.checked == false) {
    totalAgree.checked = false;
    totalAgreeCheckBox.setAttribute("src", "./unChecked.png");
    paymentAgree2CheckBox.setAttribute("src", "./unChecked.png");
  } else {
    paymentAgree2.checked = true;
    paymentAgree2CheckBox.setAttribute("src", "./checked.png");
  }
});

paymentAgree3.addEventListener("change", function (e) {
  if (e.target.checked == false) {
    totalAgree.checked = false;
    totalAgreeCheckBox.setAttribute("src", "./unChecked.png");
    paymentAgree3CheckBox.setAttribute("src", "./unChecked.png");
  } else {
    paymentAgree3.checked = true;
    paymentAgree3CheckBox.setAttribute("src", "./checked.png");
  }
});

fixedPayment.addEventListener("change", function () {
  if (
    paymentAgree1.checked == true &&
    paymentAgree2.checked == true &&
    paymentAgree3.checked == true
  ) {
    totalAgree.checked = true;
    totalAgreeCheckBox.setAttribute("src", "./checked.png");
    paymentOrderBtn.classList.remove("btnDisable");
  } else {
    totalAgree.checked = false;
    totalAgreeCheckBox.setAttribute("src", "./unChecked.png");
    paymentOrderBtn.classList.add("btnDisable");
  }
});

postMemoSelect.addEventListener("change", function () {
  postMemoInput.value = postMemoOption[postMemoSelect.value - 1].innerHTML;
});

let beforePaymentMethBox = memPayOrderCardPaymentBox,
  beforePaymentMethBtnOj = cardBtn;

memPayOrderMeth.addEventListener("click", function (e) {
  const eventOj = e.target.closest("label"); // 잘 나옴,
  if (beforePaymentMethBtnOj != eventOj) {
    if (eventOj.className == "cardPayBtn") {
      memPayOrderCardPaymentBox.classList.remove("displayNone");
      memPayOrderCardPaymentBox.classList.add("displayFlex");
      beforePaymentMethBox.classList.remove("displayFlex");
      beforePaymentMethBox.classList.add("displayNone");
      beforePaymentMethBtnOj.children[0].style.filter =
        "invert(6%) sepia(7%) saturate(2950%) hue-rotate(195deg)";
      eventOj.children[0].style.filter =
        "invert(34%) sepia(69%) saturate(1087%) hue-rotate(208deg)";
      eventOj.style.border = "1px solid #505DD0";
      eventOj.lastElementChild.style.color = "#505DD0";
      beforePaymentMethBtnOj.style.border = "1px solid #1A1B23";
      beforePaymentMethBtnOj.lastElementChild.style.color = "#1A1B23";
      beforePaymentMethBox = memPayOrderCardPaymentBox;
      beforePaymentMethBtnOj = eventOj;
    }
    if (eventOj.className == "accountPayBtn") {
      accountDepositeBox.classList.remove("displayNone");
      accountDepositeBox.classList.add("displayFlex");
      beforePaymentMethBox.classList.remove("displayFlex");
      beforePaymentMethBox.classList.add("displayNone");
      beforePaymentMethBtnOj.children[0].style.filter =
        "invert(6%) sepia(7%) saturate(2950%) hue-rotate(195deg)";
      eventOj.children[0].style.filter =
        "invert(34%) sepia(69%) saturate(1087%) hue-rotate(208deg)";
      eventOj.style.border = "1px solid #505DD0";
      eventOj.lastElementChild.style.color = "#505DD0";
      beforePaymentMethBtnOj.style.border = "1px solid #1A1B23";
      beforePaymentMethBtnOj.lastElementChild.style.color = "#1A1B23";
      beforePaymentMethBox = accountDepositeBox;
      beforePaymentMethBtnOj = eventOj;
    }
    if (eventOj.className == "mobilePayBtn") {
      mobilePayBox.classList.remove("displayNone");
      mobilePayBox.classList.add("displayFlex");
      beforePaymentMethBox.classList.remove("displayFlex");
      beforePaymentMethBox.classList.add("displayNone");
      beforePaymentMethBtnOj.children[0].style.filter =
        "invert(6%) sepia(7%) saturate(2950%) hue-rotate(195deg)";
      eventOj.children[0].style.filter =
        "invert(34%) sepia(69%) saturate(1087%) hue-rotate(208deg)";
      eventOj.style.border = "1px solid #505DD0";
      eventOj.lastElementChild.style.color = "#505DD0";
      beforePaymentMethBtnOj.style.border = "1px solid #1A1B23";
      beforePaymentMethBtnOj.lastElementChild.style.color = "#1A1B23";
      beforePaymentMethBox = mobilePayBox;
      beforePaymentMethBtnOj = eventOj;
    }
    if (eventOj.className == "kakaoPayBtn") {
      kakaoPayBox.classList.remove("displayNone");
      kakaoPayBox.classList.add("displayFlex");
      beforePaymentMethBox.classList.remove("displayFlex");
      beforePaymentMethBox.classList.add("displayNone");
      beforePaymentMethBtnOj.children[0].style.filter =
        "invert(6%) sepia(7%) saturate(2950%) hue-rotate(195deg)";
      eventOj.children[0].style.filter =
        "invert(34%) sepia(69%) saturate(1087%) hue-rotate(208deg)";
      eventOj.style.border = "1px solid #505DD0";
      eventOj.lastElementChild.style.color = "#505DD0";
      beforePaymentMethBtnOj.style.border = "1px solid #1A1B23";
      beforePaymentMethBtnOj.lastElementChild.style.color = "#1A1B23";
      beforePaymentMethBox = kakaoPayBox;
      beforePaymentMethBtnOj = eventOj;
    }
  }
});

const cardPaymentSelect = payBoxWrap.querySelector(".cardPaymentSelect"),
  cardPaymentHalbuOption = payBoxWrap.querySelector(".halbuMonth");

cardPaymentSelect.addEventListener("change", function (e) {
  cardPaymentHalbuOption.disabled = false;
});

const cashBillWrap = payBoxWrap.querySelector(".cashBillInputWrap"),
  cashBillTypeWrap = cashBillWrap.querySelector(".cashBillTypeWrap"),
  [cashBillTypeIncome, cashBillTypeProve, cashBillTypeNo] =
    cashBillWrap.querySelectorAll(".cashBillTypeWrap>span"),
  cashBillTypeIncomeNum = cashBillWrap.querySelector(".cashBillTypeIncomeNum"),
  cashBillTypeProveNumWrap = cashBillWrap.querySelector(
    ".cashBillTypeProveNumwrap"
  );

let beforeBillTypeBtn = cashBillTypeIncome;

cashBillTypeWrap.addEventListener("click", function (e) {
  if (e.target != beforeBillTypeBtn) {
    switch (e.target.className) {
      case "cashBillTypeIncome":
        e.target.style.border = "1px solid #505DD0";
        e.target.style.backgroundColor = "white";
        e.target.style.color = "#505DD0";
        beforeBillTypeBtn.style.backgroundColor = "#F5F5F5";
        beforeBillTypeBtn.style.border = "1px solid #1A1B23";
        beforeBillTypeBtn.style.color = "#1A1B23";
        cashBillTypeProveNumWrap.classList.remove("displayBlock");
        cashBillTypeProveNumWrap.classList.add("displayNone");
        cashBillTypeIncomeNum.classList.remove("displayNone");
        cashBillTypeIncomeNum.classList.add("displayBlock");
        beforeBillTypeBtn = e.target;
        break;

      case "cashBillTypeProve":
        e.target.style.border = "1px solid #505DD0";
        e.target.style.backgroundColor = "white";
        e.target.style.color = "#505DD0";
        beforeBillTypeBtn.style.backgroundColor = "#F5F5F5";
        beforeBillTypeBtn.style.border = "1px solid #1A1B23";
        beforeBillTypeBtn.style.color = "#1A1B23";
        cashBillTypeProveNumWrap.classList.remove("displayNone");
        cashBillTypeProveNumWrap.classList.add("displayBlock");
        cashBillTypeIncomeNum.classList.remove("displayBlock");
        cashBillTypeIncomeNum.classList.add("displayNone");
        beforeBillTypeBtn = e.target;
        break;

      case "cashBillTypeNo":
        e.target.style.border = "1px solid #505DD0";
        e.target.style.backgroundColor = "white";
        e.target.style.color = "#505DD0";
        beforeBillTypeBtn.style.backgroundColor = "#F5F5F5";
        beforeBillTypeBtn.style.border = "1px solid #1A1B23";
        beforeBillTypeBtn.style.color = "#1A1B23";
        cashBillTypeProveNumWrap.classList.remove("displayBlock");
        cashBillTypeProveNumWrap.classList.add("displayNone");
        cashBillTypeIncomeNum.classList.remove("displayBlock");
        cashBillTypeIncomeNum.classList.add("displayNone");
        beforeBillTypeBtn = e.target;
        break;

      default:
        break;
    }
  }
});

const memPayOrderMileageWrap = main.querySelector(".memPayOrderMileageWrap"),
  [mileageUseInput, useAllMileage] = memPayOrderMileageWrap.querySelectorAll(
    ".memPayOrderMileageWrap input"
  ),
  couponUseSelect = memPayOrderMileageWrap.querySelector(
    ".memPayOrderMileageWrap select"
  ),
  couponUseOPtion = couponUseSelect.querySelectorAll("option"),
  myMileage = memPayOrderMileageWrap.querySelector(
    ".memPayOrderUserMileageWrap strong"
  );

const memPayDiscountPrice = fixedPayment.querySelector(
    ".memPayDiscountPriceWrap strong"
  ),
  memPayProductPrice = fixedPayment.querySelector(
    ".memPayProductPriceWrap strong"
  ),
  deliveryFee = fixedPayment.querySelector(
    ".memPayDelieveryFeeWrapWrap strong"
  ),
  finPrice = fixedPayment.querySelector(".memPayTotalPriceWrap strong");

makeFinalPrice();

couponUseSelect.addEventListener("change", function (e) {
  if (e.target.value == 0) {
    memPayDiscountPrice.innerHTML = 0;
    return makeFinalPrice();
  }

  const coupon = `${couponUseOPtion[e.target.value].innerHTML}`;

  makeDiscountPrince(memPayProductPrice.innerHTML, coupon);
  makeFinalPrice();
});

// ==========최종 결제금액 란==========

const allInput = requiredInputTagWrap.querySelectorAll("input");

function makeDiscountPrince(fixedPrice, coupon) {
  const calPercentIndex = +coupon.indexOf("%"),
    discountPercent = +coupon.slice(calPercentIndex - 3, calPercentIndex);

  for (let i = 0; i < fixedPrice.length / 3; i++) {
    fixedPrice = fixedPrice.replace(",", "");
  }

  memPayDiscountPrice.innerHTML = (
    (+fixedPrice * +discountPercent) /
    100
  ).toLocaleString();
}

function makeFinalPrice() {
  finPrice.innerHTML = (
    makePriceToNum(memPayProductPrice.innerHTML) +
    makePriceToNum(deliveryFee.innerHTML) -
    makePriceToNum(memPayDiscountPrice.innerHTML)
  ).toLocaleString();
}

function makePriceToNum(price) {
  for (let i = 0; i < price.length / 3; i++) {
    price = price.replace(",", "");
  }
  return +price;
}

//--------------------------------------------------------

 /** 결제 **/
    // 결제 금액, 구매자의 이름, 이메일
    const memPayOrderName = $('#memPayOrderName').val();
    const priceAmount = $('#totalPrice').val();
    const priceAmount = $('#totalPrice').val();
    const priceAmount = $('#totalPrice').val();
    const buyerMemberEmail = $('#memberEmail').val();
    const buyerMemberName = $('#memberName').val();
    // const form = document.getElementById("payment");

    console.log(priceAmount);
    console.log(buyerMemberName);
    console.log(buyerMemberEmail);
    const IMP = window.IMP;
    IMP.init('imp99053400');

    function requestPay() {
        // IMP.request_pay(param, callback) 결제창 호출
        IMP.request_pay({ // param
            pg: "kakaopay.TC0ONETIME",
            pay_method: "card",
            merchant_uid: 'cart_' + new Date().getTime(),
            name: "Helpring 강의",
            amount: priceAmount,
            buyer_email: buyerMemberEmail,
            buyer_name: buyerMemberName,

        }, function (rsp) { // callback

            /** 결제 검증 **/
            $.ajax({
                type: 'POST',
                url: '/verifyIamport/'+rsp.imp_uid,
                beforeSend: function(xhr){
                    xhr.setRequestHeader(header, token);
                }
            }).done(function(result){

                // rsp.paid_amount와 result.response.amount(서버 검증) 비교 후 로직 실행
                if(rsp.paid_amount === result.response.amount){
                    alert("결제가 완료되었습니다.");
                    $.ajax({
                        type:'POST',
                        url:'/lecture/payment',
                        beforeSend: function(xhr){
                            xhr.setRequestHeader(header, token);
                        }
                    }).done(function() {
                        window.location.reload();
                    }).fail(function(error){
                            alert(JSON.stringify(error));
                    })
                } else{
                    alert("결제에 실패했습니다."+"에러코드 : "+rsp.error_code+"에러 메시지 : "+rsp.error_message);

                }
            })
        });
    };