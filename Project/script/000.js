const images = [
    {
        src: './img/graphic%20design/graphic-design1.jpg',
        category: 'Graphic Design',
    }, {
        src: './img/graphic%20design/graphic-design2.jpg',
        category: 'Graphic Design',
    }, {
        src: './img/graphic%20design/graphic-design3.jpg',
        category: 'Graphic Design',
    }, {
        src: './img/graphic%20design/graphic-design4.jpg',
        category: 'Graphic Design',
    }, {
        src: './img/graphic%20design/graphic-design5.jpg',
        category: 'Graphic Design',
    }, {
        src: './img/graphic%20design/graphic-design6.jpg',
        category: 'Graphic Design',
    }, {
        src: './img/graphic%20design/graphic-design7.jpg',
        category: 'Graphic Design',
    }, {
        src: './img/graphic%20design/graphic-design8.jpg',
        category: 'Graphic Design',
    },{
        src: './img/graphic%20design/graphic-design9.jpg',
        category: 'Graphic Design',
    },{
        src: './img/graphic%20design/graphic-design10.jpg',
        category: 'Graphic Design',
    },{
        src: './img/graphic%20design/graphic-design11.jpg',
        category: 'Graphic Design',
    },{
        src: './img/graphic%20design/graphic-design12.jpg',
        category: 'Graphic Design',
    },

    {
        src: './img/web%20design/web-design1.jpg',
        category: 'Web Design',
    }, {
        src: './img/web%20design/web-design2.jpg',
        category: 'Web Design',
    }, {
        src: './img/web%20design/web-design3.jpg',
        category: 'Web Design',
    }, {
        src: './img/web%20design/web-design4.jpg',
        category: 'Web Design',
    }, {
        src: './img/web%20design/web-design5.jpg',
        category: 'Web Design',
    }, {
        src: './img/web%20design/web-design6.jpg',
        category: 'Web Design',
    }, {
        src: './img/web%20design/web-design7.jpg',
        category: 'Web Design',
    },

    {
        src: './img/landing%20page/landing-page1.jpg',
        category: 'Landing Pages',
    }, {
        src: './img/landing%20page/landing-page2.jpg',
        category: 'Landing Pages',
    }, {
        src: './img/landing%20page/landing-page3.jpg',
        category: 'Landing Pages',
    }, {
        src: './img/landing%20page/landing-page4.jpg',
        category: 'Landing Pages',
    }, {
        src: './img/landing%20page/landing-page5.jpg',
        category: 'Landing Pages',
    }, {
        src: './img/landing%20page/landing-page6.jpg',
        category: 'Landing Pages',
    }, {
        src: './img/landing%20page/landing-page7.jpg',
        category: 'Landing Pages',
    },

    {
        src: './img/wordpress/wordpress1.jpg',
        category: 'Wordpress',
    }, {
        src: './img/wordpress/wordpress2.jpg',
        category: 'Wordpress',
    }, {
        src: './img/wordpress/wordpress3.jpg',
        category: 'Wordpress',
    }, {
        src: './img/wordpress/wordpress4.jpg',
        category: 'Wordpress',
    }, {
        src: './img/wordpress/wordpress5.jpg',
        category: 'wordpress',
    }, {
        src: './img/wordpress/wordpress6.jpg',
        category: 'Wordpress',
    }, {
        src: './img/wordpress/wordpress7.jpg',
        category: 'Wordpress',
    }, {
        src: './img/wordpress/wordpress8.jpg',
        category: 'Wordpress',
    }, {
        src: './img/wordpress/wordpress9.jpg',
        category: 'Wordpress',
    }, {
        src: './img/wordpress/wordpress10.jpg',
        category: 'Wordpress',
    },
];
let perPage = 12;
let currentCategory=`All`;



const render = (arr) => {
    const mainContainer = document.querySelector('.work-container');
    const sliceArray = arr.slice(0, perPage);
    const htmlArray = sliceArray.map((element) => {
        return `<img class="work-item" src="${element.src}">`
    });
    mainContainer.innerHTML = htmlArray.join(' ');
    const btn = document.querySelector('.button-load');

    if (perPage >= arr.length) {
        btn.classList.remove(`invisible`);
    } else {
        btn.classList.add(`invisible`);
    }
}

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

const button = document.querySelector(".button-load");
button.addEventListener(`click`, () => {
    perPage = perPage+12;
    if(currentCategory===`All`){
        render(images);
    }else{
        render(filteredArr (images, currentCategory));
    }
})

