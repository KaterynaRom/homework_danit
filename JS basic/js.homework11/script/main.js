const buttonList = document.body;


buttonList.addEventListener('keyup', (e) =>{

    const button = document.querySelectorAll('.bth');
    button.forEach(elem => {
        elem.classList.remove('active');
        elem.classList.add('standartBg');
        let selectedEl = e.code;
        console.log(e)
        selectedEl.classList.add('active');
        selectedEl.classList.remove('standartBg');
    });

});