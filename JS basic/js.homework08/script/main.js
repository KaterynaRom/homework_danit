
const inputField = document.querySelector('#number');
const  inputError = document.querySelector('.error');

inputField.addEventListener('focus', (event) => {
    inputField.classList.add('number');
});

inputField.addEventListener('blur', (event) => {
    inputField.classList.add('text');
    let value = event.target.value;

    if (value >= 0) {
        inputField.classList.remove('number');
        const span = document.createElement('span');
        span.innerText = `Текущая цена: ${value}`;
        document.body.before(span);
        const button = document.createElement('button');
        button.innerText = 'х';
        span.append(button);
        button.addEventListener('click', (event) => {
            span.remove();
            button.remove();
            inputField.value = ' ';
        });
    } else {
        inputField.classList.add('numberInvalid');
        inputError.innerText = 'Please enter correct price';
    }

});













