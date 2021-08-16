// ***************** # 1 ***********

let selectedTab = 'web';

const servicesTabs = document.querySelector('.services-tabs');

servicesTabs.addEventListener('click', (event) => {
    selectedTab = event.target.dataset.category;
    const items = document.querySelectorAll('.services-content-item');
    items.forEach(elem => {
        elem.classList.remove('visible');
        if (elem.dataset.category === selectedTab) {
            elem.classList.add('visible');
        }
    });

    const tabs = document.querySelectorAll('.services-tabs-title');
    tabs.forEach(elem => {
        elem.classList.remove('active');

        if (elem.dataset.category === selectedTab) {
            elem.classList.add('active');
        }
    });

});




const link = document.querySelectorAll('.link');
link.addEventListener('click', e => {
    e.preventDefault();
});