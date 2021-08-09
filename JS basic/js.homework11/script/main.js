const buttonList = document.body;


buttonList.addEventListener('keyup', (e) =>{

    const button = document.querySelectorAll('.bth');
    button.forEach(elem => {
        elem.classList.remove('active');
        elem.classList.add('standartBg');
        let selectedEl = e.code;
        if (elem.innerText === selectedEl.slice(3)) {
            elem.classList.add('active');
            elem.classList.remove('standartBg');
            console.log(selectedEl);
        }
    });

});