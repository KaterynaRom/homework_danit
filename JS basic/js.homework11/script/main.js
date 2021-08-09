const workField = document.body;

workField.addEventListener('keyup', (e) => {

    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(elem => {
        elem.classList.remove('active');
        let selectedEl = e.code;
        if (selectedEl === elem.innerText){
            elem.classList.add('active');
        } else if (elem.innerText === selectedEl.slice(3)) {
            elem.classList.add('active');
            console.log(selectedEl);
        }
    });
});