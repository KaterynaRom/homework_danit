
const inputField = document.querySelector('#number');
const  inputError = document.querySelector('.error');
const span = document.createElement('span');
document.body.before(span);


inputField.addEventListener('focus', (event) => {
    inputField.classList.add('number');
    inputField.classList.remove('text');
    inputError.classList.add('error');
    inputField.classList.remove('numberInvalid');
});

inputField.addEventListener('blur', (event) => {
    inputField.classList.add('text');
    let value = event.target.value;

    if (value >= 0 && value !== '') {
        inputField.classList.remove('number');
        inputField.classList.remove('numberInvalid');
        inputError.classList.add('error');
        span.innerText = `Текущая цена: ${value}`;
        const button = document.createElement('button');
        button.innerText = 'х';
        span.append(button);
        button.addEventListener('click', (event) => {
            span.remove();
            button.remove();
            inputField.value = ' ';
        });
    } else {
        span.innerText = '';
        inputError.classList.remove('error');
        inputField.classList.add('numberInvalid');
    }
});














