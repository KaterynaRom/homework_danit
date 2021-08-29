const autoSlider = {
    images: [
        './img/1.jpg',
        './img/2.jpg',
        './img/3.jpg',
        './img/4.png',
    ],

    interval: null,
    currentSlide: -1,
    container: document.querySelector('.images-wrapper'),
    imageElem: document.querySelector('.images-wrapper img'),

    // timerId: setTimeout(function start() {
    //     this.timerId = setTimeout(start, 1500);
    // }, 1500),


    start() {
        autoSlider.change();
        this.interval = setInterval(this.change.bind(this), 1500)
    },

    change(){
        if (this.currentSlide < this.images.length -1) {
            this.currentSlide++;
            this.imageElem.src = this.images[this.currentSlide];
        } else {
            this.currentSlide = -1;
            this.start();
        }
    },
};

// autoSlider.change();
autoSlider.start();
