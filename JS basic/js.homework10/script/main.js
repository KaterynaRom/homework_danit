
const inputPassword = document.querySelector('.password');
const inputShowPassword = document.querySelector('#password');

inputShowPassword.addEventListener('click', (e) => {
    if (inputPassword.type === 'text') {
        inputPassword.type = "password";
        inputShowPassword.classList.add('fa-eye-slash');
        inputShowPassword.classList.remove('fa-eye');
    } else {
        inputPassword.type = 'text';
        inputShowPassword.classList.add('fa-eye');
        inputShowPassword.classList.remove('fa-eye-slash');
    }

});

const inputPasswordRepeat = document.querySelector('.passwordRepeat');
const inputShowPasswordRepeat = document.querySelector('#passwordRepeat');

inputShowPasswordRepeat.addEventListener('click', (e) => {
    if (inputPasswordRepeat.type === 'text') {
        inputPasswordRepeat.type = "password";
        inputShowPasswordRepeat.classList.add('fa-eye-slash');
        inputShowPasswordRepeat.classList.remove('fa-eye');
    } else {
        inputPasswordRepeat.type = 'text';
        inputShowPasswordRepeat.classList.add('fa-eye');
        inputShowPasswordRepeat.classList.remove('fa-eye-slash');
    }
});

const button = document.querySelector('.btn');
const error = document.querySelector('#error');
const warning = document.querySelector('#warning');

button.addEventListener('click', (event) => {
    event.preventDefault();
    const password = inputPassword.value;
    const passwordRepead = inputPasswordRepeat.value;

    if (password !=='' && passwordRepead !=='' && password === passwordRepead){
        alert('You are welcome');
    } else if(password ==='' || passwordRepead ===''){
        warning.classList.remove('error');
        warning.classList.add('errorShow');
    } else {
        error.classList.remove('error');
        error.classList.add('errorShow');
    }
});

button.addEventListener('blur', () => {
    error.classList.remove('errorShow');
    error.classList.add('error');
    warning.classList.remove('errorShow');
    warning.classList.add('error');
});












