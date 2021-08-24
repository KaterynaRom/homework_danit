const carousel = {
    mainContainer: document.querySelector('.photo'),
    textContainer: document.querySelector('.carousel_text-container'),
    paginationContainer: document.querySelector('.people-gallery'),
    buttons: {},
    imageURLs: [
        './img/people/people1.jpg',
        './img/people/people2.jpg',
        './img/people/people3.jpg',
        './img/people/people4.jpg',
    ],
    titles: [
        'Hasan Ali',
        'Aboo Assan',
        'Bakr Nasat',
        'Kate Rony',
    ],
    descriptions: [
        'The greatest glory in living lies not in never falling, but in rising every time we fall.',
        'Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma – which is living with the results of other people\'s thinking.',
        'If life were predictable it would cease to be life, and be without flavor.',
        'If you set your goals ridiculously high and it\'s a failure, you will fail above everyone else\'s success.',
    ],
    authors: [
        'UX Designer',
        'Programmer',
        'Web Designer',
        'Software Tester',
    ],
    slideWidth: 60,
    currentSlide: 0,
    render(){
        const imgArr = this.imageURLs.map(e => {
            return `<div class="slide" style="background: url('${e}')">
        <div class="slide_shadow"></div>     
    </div>`
        })
        this.mainContainer.innerHTML = imgArr.join(' ');
        this.addEventListeners();
    },
    translate(){
        this.mainContainer.style.transform = `translateY(-40px)`
    },
    nextSlide (){
        console.log(this);
        if (this.currentSlide >= this.imageURLs.length-1){
            return;
        }
        this.currentSlide = this.currentSlide + 1;
        this.translate();
    },
    prevSlide(){
        if (this.currentSlide === 0){
            return;
        }
        this.currentSlide = this.currentSlide - 1;
        this.translate();
    },

    btnNext: document.querySelector('.buttonN'),
    btnPrew: document.querySelector('.buttonP'),

    addEventListeners(){
        this.btnPrew.addEventListener('click', this.prevSlide.bind(this));
        this.btnNext.addEventListener('click', this.nextSlide.bind(this));
    }
};

carousel.render();
carousel.translate();
carousel.nextSlide();


