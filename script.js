const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//Show success outline

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isValidEmail(input) {
    const re = /^(([^<>()[]\\.,;:\s@\"]+(\.[^<>()[]\\.,;:\s@\"]+)*)|(\".+\"))@(([[0-9]{1,3}\‌​.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'not a valid email');
     }
}

// Check required Fields
function checkingField(inputArr) {
    inputArr.forEach(input => {
        if (input.value.trim() === '') {
            console.log(input.id);
            showError(input, `${getName(input)} is Required`);
        } else {
            showSuccess(input);
       }
    });
}

function checkPassword(pass1, pass2) {
    if (pass1.value !== pass2.value) {
        showError(pass2, 'Password do not match')
    }
}

function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getName(input)} must be at leat ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${getName(input)} must be less then ${max} characters`);
    } else {
        showSuccess(input)
    }
}

// Obtaining field names
function getName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listners
form.addEventListener('submit', function (e) {
    e.preventDefault();

    checkingField([username, email, password, password2]);
    checkLength(username, 5, 15);
    checkLength(password, 5, 21);
    isValidEmail(email);
    checkPassword(password, password2);
});