'use strict';
const form=document.querySelector('form');
const signUpId = document.querySelector('.signUpId');
const signUpPw = document.querySelector('.pwInput');
const signUpPwConfirm = document.querySelector('.pwConfirmInput');
const signUpName = document.querySelector('.signUpName');
const signUpPhone = document.querySelector('.signUpPhone');
const signUpAddressNumber = document.querySelector('.signUpAddressNumber');
const signUpAddress = document.querySelector('.signUpAddress');
const signUpButton = document.querySelector('.signUpSubmitBtn');
const checkBox = document.querySelectorAll('input[type=checkBox]');



//아이디 영문과 한글만 적용
function regExpId(event) {
  const regExp = /[^0-9a-zA-Z]/g; // 숫자와 영문자만 허용
  const signUpId = event.target;
  if (regExp.test(signUpId.value)) {
    signUpId.value = signUpId.value.replace(regExp, '');
  }
     console.log('아이디:'+signUpId.value);
};


//이름 한글만 적용
function regExpName(event) {
  const regExp = /[^ㄱ-ㅎ|가-힣]/g; // 한글만 허용
  const signUpName = event.target;
  if (regExp.test(signUpName.value)) {
    signUpName.value = signUpName.value.replace(regExp, '');
  }
   console.log('이름:'+signUpName.value);
};

//비밀번호
function regExpPw(event) {
//  const regExp = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]$/;
  const signUpPw = event.target;
//if (!regExp.test(signUpPw.value)) {
//    alert("비밀번호는 최소 1개의 알파벳, 숫자, 특수문자가 포함되어야 합니다.");
//    signUpPw.value = ""; // 입력된 값을 초기화
//    return false;
//  }
//signUpPw=regExp.test(signUpPw);
  console.log('비밀번호:'+signUpPw.value);
};

//비밀번호 확인
function regExpPwConform(event) {
  const regExp = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/;
  const signUpPwConfirm = event.target;

   console.log('비밀번호확인 :'+signUpPwConfirm.value);
};

//전화 번호 확인
function regExpPhone(event) {
  const regExp = /[^0-9]/g;
  const signUpPhone = event.target;
  if (regExp.test(signUpPhone.value)) {
    signUpPhone.value = signUpPhone.value.replace(regExp, '');
  }
   console.log('전화번호확인 :'+signUpPhone.value);
};

//우편번호 확인
function regExpAddressNumber(event) {
  const regExp = /[^0-9]/g;
  const signUpAddressNumber = event.target;
  if (regExp.test(signUpAddressNumber.value)) {
    signUpAddressNumber.value = signUpAddressNumber.value.replace(regExp, '');
  }
  console.log('우편번호 확인 :'+signUpAddressNumber.value);
};

// 위의 정규식 함수 적용
signUpId.addEventListener('keyup', regExpId);
signUpName.addEventListener('keyup', regExpName);
signUpPw.addEventListener('keyup', regExpPw);
signUpPwConfirm.addEventListener('keyup', regExpPwConform);
signUpPhone.addEventListener('keyup', regExpPhone);
signUpAddressNumber.addEventListener('keyup', regExpAddressNumber);
//signUpAddress.addEventListener('keyup', regExpAddress);
//signUpButton.addEventListener('click', btnDisabled);
////주소입력확인
//function regExpAddress(event) {
//  const signUpAddress = event.target
//   console.log('주소:'+signUpAddress.value);
//
//};
//------------------------------------------------------------
// --- 미입력 경고

function signUpIdCheck() {
    const signUpErrorMassage=document.querySelector('.signUpErrorMassage');
    if (signUpId.value == "") {
        signUpErrorMassage.classList.remove('hidden');
        signUpId.classList.add('redInputBox');
        return false;
    } else {
        signUpErrorMassage.classList.add('hidden');
        signUpId.classList.remove('redInputBox');
        return true;
    }
}

function signUpPwCheck() {
    const regExp = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[`~!@#$%^&*|\\\'\";:\/?])[A-Za-z\d`~!@#$%^&*|\\\'\";:\/?]{8,16}$/;
    const signUpPwErrorMassage=document.querySelector('.signUpPwErrorMassage');
        const signUpPwErrorMsg=document.querySelector('.signUpPwErrorMsg');
    if (signUpPw.value == "") {
        signUpPwErrorMassage.classList.remove('nonDisplay');
         signUpPwErrorMsg.classList.add('hidden');
        signUpPw.classList.add('redInputBox');
        return false;
    }else if (regExp.test(signUpPw.value) == true){
        signUpPwErrorMassage.classList.add('nonDisplay');
        signUpPwErrorMsg.classList.add('hidden');
        signUpPw.classList.remove('redInputBox');
        return true;
    } else {
      signUpPwErrorMassage.classList.add('nonDisplay');
        signUpPwErrorMsg.classList.remove('hidden');
        signUpPw.classList.add('redInputBox');
        return false;
    }
}

function signUpPwConfirmCheck() {
    const signUpPwConfirmErrorMassage=document.querySelector('.signUpPwConfirmErrorMassage');
    const signUpPwConfirmErrorMsg=document.querySelector('.signUpPwConfirmErrorMsg');
    if (signUpPwConfirm.value == "") {
        signUpPwConfirmErrorMassage.classList.remove('nonDisplay');
          signUpPwConfirmErrorMsg.classList.add('hidden');
        signUpPwConfirm.classList.add('redInputBox');
        return false;
    }else if (signUpPwCheck.value==signUpPwConfirm.value){
        signUpPwConfirmErrorMassage.classList.add('nonDisplay');
        signUpPwConfirmErrorMsg.classList.add('hidden');
        signUpPwConfirm.classList.remove('redInputBox');
         return true;
    } else {
//        signUpPwConfirmErrorMassage.classList.add('nonDisplay');
//        signUpPwConfirmErrorMsg.classList.remove('hidden');
//        signUpPwConfirm.classList.add('redInputBox');
//        return false;
    }
}

function signUpNameCheck() {
    const signUpNameErrorMassage=document.querySelector('.signUpNameErrorMassage');
    if (signUpName.value == "") {
        signUpNameErrorMassage.classList.remove('hidden');
        signUpName.classList.add('redInputBox');
        return false;
    } else {
        signUpNameErrorMassage.classList.add('hidden');
        signUpName.classList.remove('redInputBox');
        return true;
    }
}
function signUpPhoneCheck() {
    const signUpPhoneErrorMassage=document.querySelector('.signUpPhoneErrorMassage');
    if (signUpPhone.value.length>=10 ) {
         signUpPhoneErrorMassage.classList.add('hidden');
             signUpPhone.classList.remove('redInputBox');
             return true;
    } else {
           signUpPhoneErrorMassage.classList.remove('hidden');
                signUpPhone.classList.add('redInputBox');
                return false;
    }
}

function signUpAddressNumberCheck() {
   const signUpAddressNumberErrorMassage=document.querySelector('.signUpAddressNumberErrorMassage');
    if (signUpAddressNumber.value == "") {
        signUpAddressNumberErrorMassage.classList.remove('hidden');
        signUpAddressNumber.classList.add('redInputBox');
        return false;
    } else {
        signUpAddressNumberErrorMassage.classList.add('hidden');
        signUpAddressNumber.classList.remove('redInputBox');
        return true;
    }
}

function signUpAddressCheck() {
   const signUpAddressErrorMassage=document.querySelector('.signUpAddressErrorMassage');
    if (signUpAddress.value == "") {
        signUpAddressErrorMassage.classList.remove('hidden');
        signUpAddress.classList.add('redInputBox');
        return false;
    } else {
        signUpAddressErrorMassage.classList.add('hidden');
        signUpAddress.classList.remove('redInputBox');
        return true;
    }
}
//
function signUpAddressCheck() {
   const signUpAddressErrorMassage=document.querySelector('.signUpAddressErrorMassage');
    if (signUpAddress.value == "") {
        signUpAddressErrorMassage.classList.remove('hidden');
        signUpAddress.classList.add('redInputBox');
        return false;
    } else {
        signUpAddressErrorMassage.classList.add('hidden');
        signUpAddress.classList.remove('redInputBox');
        return true;
    }
}

//function signUpCheckBox(){
//const signUpCheckErrorMassage=document.querySelector('.signUpCheckErrorMassage');
//if( checkBox[0].checked == true&&
//    checkBox[1].checked == true){
//        signUpCheckErrorMassage.classList.add('hidden');
//          return true;
//    } else {
//        signUpCheckErrorMassage.classList.remove('hidden');
//        return false;
//    }
////}
//signUpButton.addEventListener('click', function (e) {
//    e.preventDefault();
//    signUpIdCheck();
//    signUpPwCheck();
//    signUpPwConfirmCheck();
//    signUpNameCheck();
//    signUpPhoneCheck();
//    signUpAddressNumberCheck();
//    signUpAddressCheck();
////    signUpCheckBox();
//    if (signUpIdCheck()
//    &&signUpNameCheck()&&
//    signUpPwCheck()&&
//    signUpPwConfirmCheck()&&
//    signUpPhoneCheck() &&
//      signUpAddressNumberCheck()&&
//      signUpAddressCheck()&&
//      signUpCheckBox()
//      ) {
//        // if (form) {
//            form.submit();
//        // }
//        console.console("all true");
//    }
//});
//console.log(signUpAddressCheck)
//console.log(form)




//signUpButton.disabled=true;
////버튼활성화
//function btnDisabled(){
//  if(!(signUpAddress.value==''  && signUpAddressNumber.value=='' && signUpPhone.value=='' &&
//   signUpPwConfirm.value==''  && signUpPw.value=='' && signUpName.value=='' && signUpId.value=='')) {
//        signUpButton.disabled = false;
//    }else{
//        signUpButton.disabled = true;
//  }
//}
//

//function(e) {
////  e.preventDefault();
//form.submit();
//  alert('회원가입이 완료되었습니다.');
//});


// console.log(signUpPw.value);
// console.log(signUpPwConfirm.value);
// console.log(signUpName.value);
// console.log(signUpPhone.value);
// console.log(signUpAddressNumber.value);

// const pwRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/;
// const phoneRegex = /^[0-9]{10,11}$/;
// const postalRegex = /^\d{5}$/;


// // Disable the button by default
// signUpButton.disabled = true;

// // Add event listeners to the input fields to validate user input and enable/disable the button accordingly
// signUpId.addEventListener('input', validateSignUpInputs);
// signUpPw.addEventListener('input', validateSignUpInputs);
// signUpPwConfirm.addEventListener('input', validateSignUpInputs);
// signUpName.addEventListener('input', validateSignUpInputs);
// signUpPhone.addEventListener('input', validateSignUpInputs);
// signUpAddressNumber.addEventListener('input', validateSignUpInputs);
// signUpAddress.addEventListener('input', validateSignUpInputs);

// function validateSignUpInputs() {
//   const signUpIdValue = signUpId.value.trim()
//   const signUpPwValue = signUpPw.value.trim();
//   const signUpPwConfirmValue = signUpPwConfirm.value.trim();
//   const signUpNameValue = signUpName.value.trim();
//   const signUpPhoneValue = signUpPhone.value.trim();
//   const signUpAddressNumberValue = signUpAddressNumber.value.trim();
//   const signUpAddressValue = signUpAddress.value.trim();

//   const isSignUpIdValid = idRegex.test(signUpIdValue);
//   const isSignUpPwValid = pwRegex.test(signUpPwValue);
//   const isSignUpPwConfirmValid = signUpPwValue === signUpPwConfirmValue && signUpPwValue.length > 0;
//   const isSignUpNameValid = signUpNameValue.length > 0;
//   const isSignUpPhoneValid = phoneRegex.test(signUpPhoneValue);
//   const isSignUpAddressNumberValid = postalRegex.test(signUpAddressNumberValue);
//   const isSignUpAddressValid = signUpAddressValue.length > 0;


//   // Disable the button if any of the input fields is invalid
//   if (!(isSignUpIdValid && isSignUpPwValid && isSignUpPwConfirmValid && isSignUpNameValid && isSignUpPhoneValid && isSignUpAddressNumberValid && isSignUpAddressValid)) {
//     signUpButton.disabled = true;
//     return;
//   }

//   // Enable the button if all input fields are valid
//   signUpButton.disabled = false;
// }

// // ________________________________________________________________________________________________________________________
// const
//     body = document.querySelector('body'),
//     infoForm = document.querySelector('.InfoForm'),
//     signUpId = infoForm.querySelector('.signUpId'),
//     signUpName = infoForm.querySelector('.signUpName'),
//     signUpPw = infoForm.querySelector('.signUpPw'),
//     signUpPwConfirm = infoForm.querySelector('.signUpPwConfirm'),
//     signUpPhone = infoForm.querySelector('.signUpPhone '),
//     signUpAddressNumber = infoForm.querySelector('.signUpAddressNumber'),
//     signUpAddress = infoForm.querySelector('.signUpAddress'),

//     signUpSubmitBtn = infoForm.querySelector('.signUpSubmitBtn'),
//     checkBox = infoForm.querySelectorAll('input[type=checkBox]');



// checkBox[0].addEventListener('change', function (e) {
//     if (isId(signUpId.value) &&
//         isPassword(signUpPw.value) &&
//         isPassword(signUpPwConfirm.value) &&
//         isName(signUpName.value) &&
//         isPhoneNumber(signUpPhone.value) &&
//         isAddressNumber(signUpAddressNumber.value) &&
//         // isSignUpAddress() &&
//         // isPhoneNumber(lastPhoneNum.value)&&
//         checkBox[0].checked == true &&
//         checkBox[1].checked == true) {
//         signUpSubmitBtn.classList.remove('btnDisable')
//     } else {
//         signUpSubmitBtn.classList.add('btnDisable')
//     }
// })
// checkBox[1].addEventListener('change', function (e) {
//     if (isId(signUpId.value) &&
//         isPassword(signUpPw.value) &&
//         isPassword(signUpPwConfirm.value) &&
//         isName(signUpName.value) &&
//         isPhoneNumber(signUpPhone.value) &&
//         isAddressNumber(signUpAddressNumber.value) &&
//         // isSignUpAddress() &&

//         // isPhoneNumber(lastPhoneNum.value)&&
//         checkBox[0].checked == true &&
//         checkBox[1].checked == true) {
//         signUpSubmitBtn.classList.remove('btnDisable')
//     } else {
//         signUpSubmitBtn.classList.add('btnDisable')
//     }
// })

// infoForm.addEventListener('keyup', function (e) {
//     confirm(e.target)
//     if (isId(signUpId.value) &&
//         isPassword(signUpPw.value) &&
//         isPassword(signUpPwConfirm.value) &&
//         isName(signUpName.value) &&
//         isPhoneNumber(signUpPhone.value) &&
//         isAddressNumber(signUpAddressNumber.value) &&
//         // isSignUpAddress() &&
//         checkBox[0].checked == true &&
//         checkBox[1].checked == true) {
//         signUpSubmitBtn.classList.remove('btnDisable')
//     } else {
//         signUpSubmitBtn.classList.add('btnDisable')
//     }
// })

// // function isEmailDomain(asValue) {
// //     const regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;;
// //     return regExp.test(asValue);
// // }

// function isId(asValue) { //영문 대문자, 소문자, 숫자, 문자 사이 공백 및 특수문자 -_/,.
//     const regExp = /^[a-z]+[a-z0-9]{5,19}$/g;
//     if (asValue == "") return false;
//     return regExp.test(asValue);
// }

// function isPassword(asValue) { //8 ~ 16자 영문, 숫자, 특수문자를 최소 한가지씩 조합
//     const regExp = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
//     return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
// }

// function isPhoneNumber(asValue) {
//     const regExp = /^\d{11}$/;
//     return regExp.test(asValue);
// }

// // function isCorrect(asValue) { //한글 영문
// //     const regExp = /^[a-zA-Zㄱ-힣][a-zA-Zㄱ-힣 ]*$/;
// //     return regExp.test(asValue);
// // }

// function isName(asValue) {
//     const regExp = /^[가-힣]{2,4}$/;
//     return regExp.test(asValue);
// }


// function isAddressNumber(asValue) {
//     const regExp = /^[0-9]{5}$/;
//     return regExp.test(asValue);
// }

// function isSignUpAddress() {
//     if (signUpAddress.value) {
//         return true;
//     } else {
//         return false;
//     }
// }

// emailSelectTag.addEventListener('change',function (e) {
//     let target = e.target.previousElementSibling;;

//     let flag,
//     infoGuide;

//     infoGuide = e.target.parentNode.nextElementSibling;
//     flag = isEmailDomain(target.value);
//     inputEffect(target, flag, infoGuide);

//     if(isEmailDomain(emailDomainInput.value) && isId(emailsignUpId.value)){
//         emailCertificationBtn.classList.remove('btnDisable')
//     }else {
//         emailCertificationBtn.classList.add('btnDisable')
//     }
// })
//---------------------------------------------------------------------------
// function confirm(target) {

//     let flag,
//         infoGuide;

//     switch (target.className) {
//         case 'signUpId':
//             infoGuide = target.nextElementSibling;
//             flag = isId(target.value);
//             inputEffect(target, flag, infoGuide)
//             break;

//         // case 'emailsignUpId':
//         //     infoGuide = target.parentNode.nextElementSibling;
//         //     flag = isId(target.value)
//         //     inputEffect(target, flag, infoGuide);
//         //     if(isEmailDomain(emailDomainInput.value) && isId(emailsignUpId.value)){
//         //         emailCertificationBtn.classList.remove('btnDisable')
//         //     }else {
//         //         emailCertificationBtn.classList.add('btnDisable')
//         //     }
//         //     break;
//         // case 'emailDomainInput':
//         //     infoGuide = target.parentNode.nextElementSibling;
//         //     flag = isEmailDomain(target.value);
//         //     inputEffect(target, flag, infoGuide);
//         //     if(isEmailDomain(emailDomainInput.value) && isId(emailsignUpId.value)){
//         //         emailCertificationBtn.classList.remove('btnDisable')
//         //     }else {
//         //         emailCertificationBtn.classList.add('btnDisable')
//         //     }
//         //     break;
//         case 'signUpId':
//             infoGuide = target.nextElementSibling;
//             flag = isId(target.value)
//             inputEffect(target, flag, infoGuide);
//             break;
//         case 'signUpPw':
//             infoGuide = target.nextElementSibling;
//             flag = isPassword(target.value)
//             inputEffect(target, flag, infoGuide);
//             if (!(signUpPwConfirm.value == '')) { inputEffect(signUpPwConfirm, flag && signUpPw.value == signUpPwConfirm.value, signUpPwConfirm.nextElementSibling); }
//             break;
//         case 'signUpPwConfirm':
//             infoGuide = target.nextElementSibling;
//             flag = (signUpPw.value == signUpPwConfirm.value && isPassword(signUpPwConfirm.value));
//             inputEffect(target, flag, infoGuide);
//             break;
//         case 'signUpPhone':
//             // infoGuide = target.parentNode.nextElementSibling;
//             flag = isPhoneNumber(signUpPhone.value);
//             if (flag) target.style.border = '1px solid var(--PurpleBlue)';
//             else target.style.border = '1px solid var(--CoralRed)';
//             break;
//         // case 'lastPhoneNum':
//         //     infoGuide = target.parentNode.nextElementSibling;
//         //     flag = isPhoneNumber(signUpPhone.value) && isPhoneNumber(lastPhoneNum.value)
//         //     inputEffect(target, flag, infoGuide);
//         //     break;
//         case 'signUpName':
//             infoGuide = target.nextElementSibling;
//             flag = isName(target.value);
//             inputEffect(target, flag, infoGuide);
//             break;

//         default: break;
//     }
// }

// function inputEffect(target, flag, infoGuide) {
//     if (flag) {
//         target.style.border = '1px solid var(--PurpleBlue)'
//         if (!target.className.includes('email') || (isEmailDomain(emailDomainInput.value) && isId(emailsignUpId.value))) {
//             infoGuide.style.visibility = 'visible';
//             infoGuide.style.color = 'blue';
//             infoGuide.innerHTML = '맞게 입력하셨습니다.'
//         }
//     } else {
//         target.style.border = '1px solid var(--CoralRed)'
//         if (!target.className.includes('email') || emailsignUpId.value && emailDomainInput.value && (!isEmailDomain(emailDomainInput.value) || !isId(emailsignUpId.value))) {
//             infoGuide.style.visibility = 'visible';
//             infoGuide.style.color = 'red';
//             infoGuide.innerHTML = '다시 입력해주세요.'
//         }
//     }

// }