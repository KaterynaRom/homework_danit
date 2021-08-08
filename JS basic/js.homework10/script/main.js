//
//
// const inputPassword = document.querySelector('.password');
// const inputShowPassword = document.querySelector('#password');
//
// inputShowPassword.addEventListener('click', (e) => {
//     if (inputPassword.type === 'text') {
//         inputPassword.type = "password";
//         inputShowPassword.classList.add('fa-eye-slash');
//         inputShowPassword.classList.remove('fa-eye');
//     } else {
//         inputPassword.type = 'text';
//         inputShowPassword.classList.add('fa-eye');
//         inputShowPassword.classList.remove('fa-eye-slash');
//     }
//
// })
//
//
//
// const inputPasswordRepeat = document.querySelector('.passwordRepeat');
// const inputShowPasswordRepeat = document.querySelector('#passwordRepeat');
//
//
// inputShowPasswordRepeat.addEventListener('click', (e) => {
//     if (inputPasswordRepeat.type === 'text') {
//         inputPasswordRepeat.type = "password";
//         inputShowPasswordRepeat.classList.add('fa-eye-slash');
//         inputShowPasswordRepeat.classList.remove('fa-eye');
//     } else {
//         inputPasswordRepeat.type = 'text';
//         inputShowPasswordRepeat.classList.add('fa-eye');
//         inputShowPasswordRepeat.classList.remove('fa-eye-slash');
//     }
//
// })


// попытка

const icons = document.querySelector('.password-form');
const inputPassword = document.querySelectorAll('.passwordAll');

icons.addEventListener('click', (event) => {
    // let selectedInput = event.target.dataset.password;
    let selectedIcon = event.target.dataset.icon;

    if (inputPassword.type === 'text') {
        inputPassword.type = "password";
        selectedIcon.classList.add('fa-eye-slash');
        selectedIcon.classList.remove('fa-eye');
    } else {
        inputPassword.type = 'text';
        selectedIcon.classList.add('fa-eye');
        selectedIcon.classList.remove('fa-eye-slash');
    }
});















