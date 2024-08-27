var username = document.getElementById('usename')
var email = document.getElementById('email')
var passwword = document.getElementById('password')
var confirmpassword = document.getElementById('confirm-password')
var form = document.querySelector('form')

function showerror(input , message){
    let parent = input.parentElement;
    let small = parent.querySelector('small')
    parent.classList.add('error')
    small.innerText = message ;
}
function showesuccess(input ){
    let parent = input.parentElement;
    let small = parent.querySelector('small')
    parent.classList.remove('error')
    small.innerText ='' ;
}
 function checkemptyerror(listInput){
    let iseptyerror = false;
    listInput.forEach(input => {
        input.value= input.value.trim();

        if(!input.value){
            iseptyerror=true ;
            showerror(input,'khong dc de trong')
        }
        else{
            showesuccess(input)
        }
        return iseptyerror;
    });
 }

//  function checkemail(input){
//     const regag =
//     input.value = input.value.trim()
//     let isemaileorro = !regag.test(input.value)
//     if(regag.test(input.value)){
//         showesuccess(input)
//     }
//     else{
//         showerror(input,'ko hop le')
//     }
//     return isemaileorro
//  }
function checklengtherror(input ,min , max){
    input.value = input.value.trim()

    if(input.value.length < min ){
        showerror(input , `phai nhiều hơn ${min} kí tự`)
        return true
    }
    if(input.value.length > max){
        showerror(input , `ko vượt quá ${max} kí tự ` )
        return true
    }
    showesuccess
    return false
}
function checkpasscungnhau(passwordinput , passwordinput1){
    if(passwordinput.value !== passwordinput1.value){
        showerror(passwordinput1, 'mat khau ko trung khop')
    }
}
  form.addEventListener('submit' , function(e){
    e.preventDefault()

   let checkas= checkemptyerror([username,email,passwword,confirmpassword])
    // let checkemail= checkemail([email]);
    let checklengthusername = checklengtherror(username,7,9)
    let checklengthpassword = checklengtherror(passwword,7,9)
    let checkpass = checkpasscungnhau(passwword ,confirmpassword)
})


