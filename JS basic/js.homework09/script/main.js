
let selectedTab = 'akali';

const navMenu = document.querySelector('.tabs');

navMenu.addEventListener('click', (event) => {
    selectedTab = event.target.dataset.category;

    const items = document.querySelectorAll('.content-item');
    items.forEach(elem => {
        elem.classList.remove('visible');

        if (elem.dataset.category === selectedTab) {
            elem.classList.add('visible');
        }
    });

    const tabs = document.querySelectorAll('.tabs-title');
    tabs.forEach(elem => {
        elem.classList.remove('active');

        if (elem.dataset.category === selectedTab) {
            elem.classList.add('active');
        }
    });

});

