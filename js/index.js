var emailInput = document.getElementById('email');
var passwordInput = document.getElementById('password');
var loginBtn = document.getElementById('login');
var signupBtn = document.getElementById('Signup')
var nameInput = document.getElementById('name');
var newEmailInput = document.getElementById('newEmail');
var newPasswordInput = document.getElementById('newPassword');
var userName = document.getElementById('userName');
var c = 0;
var container = [];


if (localStorage.getItem("data") == null) {
    container = [];
}
else {
    container = JSON.parse(localStorage.getItem("data"));
}
if (signupBtn !== null) {
    signupBtn.addEventListener('click', function () {
        signUp();
    });
   


}

if(loginBtn !== null){
    console.log(loginBtn.value);
loginBtn.addEventListener('click', function(){
    login();
});

}
function signUp() {

    if (nameInput.value == "" && newEmailInput.value == "" && newPasswordInput.value == "") {
        document.getElementById('emptyInputs').innerHTML = 'All inputs is required';
        emptyInputs.classList.replace('d-none', 'd-block');
    }
    else if (nameInput.value != "" && newEmailInput.value != "" && newPasswordInput.value != "") {
        emptyInputs.classList.replace('d-block', 'd-none');
        if (isexist() == false) {
            var info = {
                name: nameInput.value,
                newEmail: newEmailInput.value,
                newPassword: newPasswordInput.value
            }
            container.push(info);
            localStorage.setItem("data", JSON.stringify(container));
            clearInputs();
        }
        else {
            document.getElementById('emptyInputs').innerHTML = 'email already exists';
            emptyInputs.classList.replace('d-none', 'd-block');
            emptyInputs.classList.add('text-danger');
        }
        
        
    }
   
}
function login() {

    if (emailInput.value == "" && passwordInput.value == ""){
        console.log(emailInput.value);
        document.getElementById('emptyInputs').innerHTML = 'All inputs is required';
        emptyInputs.classList.replace('d-none','d-block');
    }
    else if(emailInput.value != "" && passwordInput.value == ""){
        document.getElementById('emptyInputs').innerHTML = 'All inputs is required';
        emptyInputs.classList.replace('d-none','d-block');
    }
    else if(emailInput.value == "" && passwordInput.value != ""){
        document.getElementById('emptyInputs').innerHTML = 'All inputs is required';
        emptyInputs.classList.replace('d-none','d-block');
    }
    else{
        if(check() == true){
            location.href = "home.html";
            c=0;
        }
        else{
            console.log('check error');
        }
    
}
}
userName.innerHTML = `Welcome ${container[0].name}`;
     var count = 0;
function isexist() {
    if(localStorage.getItem("data")){
      
        for (var i = 0; i < container.length; i++) {
            if (newEmailInput.value.toLowerCase() == container[i].newEmail.toLowerCase()) {
                console.log('error');
                count++;
                return true;
            }
        }
        if(count == 0){
            return false;
        }

    }
    else{
        return false;
    }
    
}

function clearInputs() {
    nameInput.value = "";
    newEmailInput.value = "";
    newPasswordInput.value = "";
}
function check(){
    var i;
    for (i = 0; i < container.length; i++) { 
        
        if (emailInput.value == container[i].newEmail && passwordInput.value ==  container[i].newPassword) {
            c++;
            return true;
        }
    }
    if(c == 0){
        console.log('zz');
        return false;
    }
}
