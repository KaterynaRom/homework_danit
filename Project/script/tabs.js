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
                     <div class="work-icon">
                        <div class="icon">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9131 2.72817L12.0948 0.891285C11.2902 0.0808612 9.98305 0.0759142 9.17681 0.882615L7.15921 2.89256C6.35161 3.69885 6.34818 5.01032 7.15051 5.82074L8.30352 4.68897C8.18678 4.32836 8.33041 3.9153 8.61593 3.62946L9.89949 2.35187C10.3061 1.94624 10.9584 1.94913 11.3595 2.35434L12.4513 3.45805C12.8528 3.86283 12.8511 4.51713 12.447 4.92318L11.1634 6.20241C10.8918 6.47296 10.4461 6.62168 10.1002 6.52626L8.97094 7.65887C9.77453 8.47177 11.0803 8.47466 11.8889 7.66837L13.9039 5.65924C14.7141 4.85254 14.7167 3.53983 13.9131 2.72817ZM6.52613 10.0918C6.62191 10.4441 6.46857 10.8997 6.19093 11.1777L4.99227 12.3752C4.58074 12.7845 3.91595 12.7833 3.50671 12.369L2.39297 11.2475C1.98465 10.8349 1.98729 10.1633 2.39824 9.75473L3.59804 8.55769C3.89032 8.26607 4.31044 8.12025 4.67711 8.24375L5.83354 7.0715C5.01493 6.2462 3.68249 6.24207 2.86059 7.06324L0.915197 9.0042C0.0922615 9.8266 0.0883685 11.1629 0.90651 11.9886L2.75817 13.8618C3.57595 14.6846 4.90724 14.6912 5.73111 13.8701L7.67649 11.9287C8.49852 11.1054 8.5024 9.77166 7.68553 8.9443L6.52613 10.0918ZM6.25787 9.56307C5.98013 9.84189 5.53427 9.84105 5.26179 9.55812C4.98792 9.27434 4.9901 8.82039 5.26613 8.53993L8.59075 5.16109C8.86679 4.88227 9.31174 4.88311 9.58513 5.16398C9.86048 5.44569 9.85876 5.90088 9.5817 6.18299L6.25787 9.56307Z" fill="#1FDAB5"/>
                            </svg>
                        </div>
                        <div class="icon">
                            <div class="icon-k"></div>
                        </div>
                        
                     </div>
                  
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