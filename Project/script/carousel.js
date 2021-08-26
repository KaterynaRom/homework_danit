const peopleObj = {

    people: [
        {
            text:'Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.',
            name:'Hasan Ali',
            profession: 'UX Designer',
            src: './img/people/people1.jpg',
            index: 0
        },  {
            text: 'Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem',
            name:'Aboo Assan',
            profession: 'Programmer',
            src: './img/people/people2.jpg',
            index: 1
        }, {
            text: 'Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.',
            name: 'Bakr Nasat',
            profession:'Web Designer',
            src: './img/people/people3.jpg',
            index: 2
        }, {
            text: 'Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, o eget aliquam facilisis.',
            name: 'Kate Rony',
            profession: 'Software Tester',
            src: './img/people/people4.jpg',
            index: 3
        }

    ],

    slideWidth: 143,
    currentSlide: 0,

    photoContainer: document.querySelector('.clients-bigpics'),
    photoSmall: document.querySelectorAll('.clients-selectors'),

    render(){
        const imgArr = this.people[this.src].map(e => `<li class="clients-bigpics-li">
      <img class="clients-bigpics-pic" src="${e.src}" alt="client face">
      </li>
    `);

        this.photoContainer.innerHTML = imgArr().join(' ');

        // **************
        this.addEventListeners();
    },
    translate(){
        this.photoContainer.style.transform = `translateX(-${this.slideWidth*this.currentSlide}px)`
    },
    nextSlide (){
        if (this.currentSlide >= this.people.length-1){
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
        this.photoSmall.addEventListener('click', this.translate.bind(this));
    },
}

peopleObj.render();
peopleObj.translate();

