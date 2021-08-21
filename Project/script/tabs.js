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


const workContainer = document.querySelector('.work-container');
const workTabs = document.querySelector('.work-tabs');
const button = document.querySelector('.button-load');

let perPage = 12;
let category = 'All';

const showTab = () => {

    if (category !== 'All') {
        workContainer.innerHTML = content(filterArr(images, category));
    } else {
        workContainer.innerHTML = content(images);
    }

    const tabs = document.querySelectorAll('.work-tabs-title');
    tabs.forEach(elem => {
        elem.classList.remove('active');

        if (elem.dataset.work === category) {
            elem.classList.add('active');
        }
    });
}

const content = (arr) => {
    return arr.map(elem => {
        return `
               <div class="work-card slow">
                   <img class="work-img" src="${elem.src}" alt="">
                   <div class="work-item">
                   
                     <h1 class="color-text card-title">creative design</h1>
                     <p class="fw300">${elem.category}</p>
                   </div>
               </div>
               `
    }).slice(0, perPage).join(' ');
};

const filterArr = (arr, category) => {
    return arr.filter((e) => e.category === category)
}

workTabs.addEventListener('click', e => {
    if (e.target.tagName === 'LI') {
        category = e.target.dataset.work;
        showTab();
    }
});

button.addEventListener('click', e => {
    perPage = perPage + 12;
    showTab();
    if (perPage >= 36) {
        button.classList.add('invisible');
    } else {
        button.classList.remove('invisible');
    }
});

showTab();