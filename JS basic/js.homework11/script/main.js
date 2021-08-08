const buttonList = document.querySelector('.btn-wrapper');


buttonList.addEventListener('keyup', (event) =>{

    const button = document.querySelectorAll('.bth');
    button.forEach(elem => {
        elem.classList.remove('active');
        elem.classList.add('standartBg');
        if ("обратиться к нажатой кнопке code=Key...") {
            elem.classList.add('active');
            elem.classList.remove('standartBg');
        }
    });

});