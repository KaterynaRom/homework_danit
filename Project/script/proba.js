let perPage = 12;
let currentCategory=`All`;

const render = (arr) => {
    const mainContainer = document.querySelector('.work-container');
    const sliceArray = arr.slice(0, perPage);
    const htmlArray = sliceArray.map((element) => {
        return `<img class="grid-item" src="${element.src}">`
    });
    mainContainer.innerHTML = htmlArray.join(' ');
    const btn = document.querySelector('.button-load');

    if (perPage >= arr.length) {
        btn.classList.remove(`invisible`);
    } else {
        btn.classList.add(`visible`);
    };
}
// render(images);
workContainer.innerHTML = content(images);

const filteredArr = (arr, category) => {
    return arr.filter((e)=> e.category === category)
}

console.log(filteredArr(images))

const tabsContainer = document.querySelector('.work-tabs');

tabsContainer.addEventListener('click', (event) => {
    const category = event.target.dataset.work;
    currentCategory = category;
    perPage = 12;
    if (category === "all" && event.target !== event.currentTarget) {
        render(images);
    } else if (event.target !== event.currentTarget) {
        const newArr = filteredArr(images, category);
        render(newArr);}
    const tabs = document.querySelectorAll('.work-tabs-title');
    tabs.forEach(e => {
        e.classList.remove('active');
    });
    event.target.classList.add('active');
});

const button = document.querySelector(".load-more");
button.addEventListener(`click`, () => {
    perPage = perPage+12;
    if(currentCategory===`all`){
        render(images);
    }else{
        render(filteredArr (images, currentCategory));
    }
})

