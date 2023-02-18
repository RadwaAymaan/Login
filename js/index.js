var emailInput = document.getElementById('email');
var passwordInput = document.getElementById('password');
var loginBtn = document.getElementById('login');
var signupBtn = document.getElementById('Signup')
var nameInput = document.getElementById('name');
var newEmailInput = document.getElementById('newEmail');
var newPasswordInput = document.getElementById('newPassword');
var userName = document.getElementById('userName');
// var c = 0;
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
function signUp() {

    if (nameInput.value == "" && newEmailInput.value == "" && newPasswordInput.value == "") {
        document.getElementById('emptyInputs').innerHTML = 'All inputs is required';
        emptyInputs.classList.replace('d-none', 'd-block');
    }
    else if (nameInput.value != "" && newEmailInput.value != "" && newPasswordInput.value != "") {
        emptyInputs.classList.replace('d-block', 'd-none');
        var info = {
            name: nameInput.value,
            newEmail: newEmailInput.value,
            newPassword: newPasswordInput.value
        }
        if (isexist() == true) {
            document.getElementById('emptyInputs').innerHTML = 'email already exists';
            emptyInputs.classList.replace('d-none', 'd-block');
            emptyInputs.classList.add('text-danger');

        }
        else {
            container.push(info);
            localStorage.setItem("data", JSON.stringify(container));
            clearInputs();
        }


    }

}
// var count = 0;
function isexist() {
    if (localStorage.getItem("data")) {

        for (var i = 0; i < container.length; i++) {
            if (newEmailInput.value.toLowerCase() == container[i].newEmail.toLowerCase()) {
                console.log('error');
                // count++;
                return true;
            }
        }
    }

}
if (loginBtn !== null) {
    // console.log(loginBtn.value);
    loginBtn.addEventListener('click', function () {
        login();
    });

}

function login() {

    if (emailInput.value == "" && passwordInput.value == "") {
        console.log(emailInput.value);
        document.getElementById('emptyInputs').innerHTML = 'All inputs is required';
        emptyInputs.classList.replace('d-none', 'd-block');
    }
    else if (emailInput.value != "" && passwordInput.value == "") {
        document.getElementById('emptyInputs').innerHTML = 'All inputs is required';
        emptyInputs.classList.replace('d-none', 'd-block');
    }
    else if (emailInput.value == "" && passwordInput.value != "") {
        document.getElementById('emptyInputs').innerHTML = 'All inputs is required';
        emptyInputs.classList.replace('d-none', 'd-block');
    }
    else {
        // for (i = 0; i<container.length; i++) {
        //     if (emailInput.value.toLowerCase() == container[i].newEmail.toLowerCase() && passwordInput.value.toLowerCase() == container[i].newPassword.toLowerCase()) {
        //         localStorage.setItem("name", JSON.stringify(container[i].name));
        //         location.href = "home.html";
        //     }
        //     else {
        //     alert("error")
        // }
        // }
        console.log(check())
        if (check() == true) {
            location.href = "home.html";
            // c = 0;
        }
        else {
            console.log('check error');
        }

    }
}
function check() {
    var i;
    for (i = 0; i<container.length; i++) {
        if (emailInput.value.toLowerCase() == container[i].newEmail.toLowerCase() && passwordInput.value.toLowerCase() == container[i].newPassword.toLowerCase()) {
            localStorage.setItem("name", JSON.stringify(container[i].name));
            return true;
        }
        
    }
   
}
function addName(){
    var Name = JSON.parse(localStorage.getItem("name"));
    userName.innerHTML = `Welcome ${Name}`;
}
// userName.innerHTML = `Welcome ${container[0].name}`;


function clearInputs() {
    nameInput.value = "";
    newEmailInput.value = "";
    newPasswordInput.value = "";
}

