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

    index: 0,
    photo: document.querySelector('.photo'),
    name: document.querySelector('.name'),
    profession: document.querySelector('.profession'),
    text: document.querySelector('.people-text'),

    btnPrevious: document.querySelector('.buttonP'),
    btnNext: document.querySelector('.buttonN'),




    selectedPeople(){
        this.text.innerText = this.people[this. index].text;
        this.name.innerText = this.people[this. index].name;
        this.profession.innerText = this.people[this. index].profession;

        this.photo.style.background = this.people[this. index].src;

        // ??????????????

        this.gallery.innerHTML =  this.galleryCarousel(this.carousel(this.people));

    },

    nextP (){
        if(this.index < this.people.length){
            this.index++;
            this.selectedPeople();
        }
    },

    previousP(){
        if(this.index === 0){
            this.index = this.index -1;
            this.selectedPeople();
        }
    },

    carousel(){
        return this.people.map(elem => {
            return `
               <div class="gallery-img"></div>
               `
        }).join(' ');
    },

    addEventListeners(){
        this.btnPrevious.addEventListener('click', this.previousP.bind(this));
        this.btnNext.addEventListener('click', this.nextP.bind(this));

        // ?????????????
        // this.galleryImg.addEventListener('click', this.selectedPeople.bind(this));
    }

}