const peopleObj = {

    people: [
        {
            text: 'Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.',
            name: 'Hasan Ali',
            profession: 'UX Designer',
            src: './img/people/people1.jpg',
            slide: 0
        }, {
            text: 'Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem',
            name: 'Aboo Assan',
            profession: 'Programmer',
            src: './img/people/people2.jpg',
            slide: 1
        }, {
            text: 'Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.',
            name: 'Bakr Nasat',
            profession: 'Web Designer',
            src: './img/people/people3.jpg',
            slide: 2
        }, {
            text: 'Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, o eget aliquam facilisis.',
            name: 'Kate Rony',
            profession: 'Software Tester',
            src: './img/people/people4.jpg',
            slide: 3
        }

    ],

    slideWidth: 150,
    currentSlide: 0,

    photoContainer: document.querySelector('.clients-bigpics'),

    selectedPhotoSmall: document.querySelectorAll('.clients-smallpic'),

    text: document.querySelector('.people-text'),
    name: document.querySelector('.name'),
    profession: document.querySelector('.profession'),




    render() {
        const imgArr = this.people.map(e => `<li class="clients-bigpics-li">
      <img class="clients-bigpics-pic" src="${e.src}" alt="client face">
      </li>
    `);
        this.photoContainer.innerHTML = imgArr.join(' ');
        this.addEventListeners();
    },

    translate() {
        this.photoContainer.style.transform = `translateX(-${this.slideWidth * this.currentSlide}px)`
    },

    get currentSlide() {
        return this._currentSlide;
    },

    set currentSlide(x) {
        if (x > this.people.length - 1 || x < 0 || isNaN(x)) return;
        this._currentSlide = x;
        this.translate();
        this.activAdd();
    },
    nextSlide() {
        this.currentSlide++
        // this.translate();
    },
    prevSlide() {
        this.currentSlide--
        // this.translate();
    },

    // nextSlide() {
    //     // this.currentSlide = this.people.slide;
    //     if (this.currentSlide >= this.people.length - 1) {
    //         return;
    //     }
    //     this.currentSlide = this.currentSlide + 1;
    //     // this.activAdd();
    //     this.translate();
    // },
    //
    // prevSlide() {
    //     // this.currentSlide = this.people.slide;
    //     if (this.currentSlide === 0) {
    //         return;
    //     }
    //     this.currentSlide = this.currentSlide - 1;
    //     // this.activAdd();
    //     this.translate();
    // },

    activAdd(){
        this.selectedPhotoSmall.forEach(el => {
            el.classList.remove('active-slide');
            if (el.dataset.slide === this.currentSlide) {
                el.classList.add('active-slide');
            }
        });
    },

    photosSmallGallery(){
        this.photosSmall.innerHTML = this.people.map(e => {
            `<img data-slide="${e.slide}" class="clients-smallpic" src="${e.src}" alt="client face">`}).join('');

        // this.photosSmall.innerHTML = `
        //       <img data-slide="0" class="clients-smallpic" src="./img/people/people1.jpg" alt="client face">
        //       <img data-slide="1" class="clients-smallpic" src="./img/people/people2.jpg" alt="client face">
        //       <img data-slide="2" class="clients-smallpic active-slide" src="./img/people/people3.jpg" alt="client face">
        //       <img data-slide="3" class="clients-smallpic" src="./img/people/people4.jpg" alt="client face">
        // `;
    },
    photosSmall: document.querySelector('.clients-selectors'),
    photosSmallAdd(){
        this.photosSmall.innerHTML = photosSmallGallery();
    },





    btnNext: document.querySelector('.buttonN'),
    btnPrew: document.querySelector('.buttonP'),


    addEventListeners() {
        this.btnPrew.addEventListener('click', this.prevSlide.bind(this));
        this.btnNext.addEventListener('click', this.nextSlide.bind(this));

        this.photosSmall.addEventListener('click', e => {
            this.currentSlide = e.target.dataset.slide;
            this.activAdd();
        });


    },

}

peopleObj.photosSmallAdd()
peopleObj.photoGalleryAdd();
peopleObj.render();
peopleObj.translate();
