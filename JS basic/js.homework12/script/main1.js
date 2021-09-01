const autoSlider = {
    images: [
        './img/1.jpg',
        './img/2.jpg',
        './img/3.jpg',
        './img/4.png',
    ],

    interval: null,
    currentSlide: 0,
    container: document.querySelector('.images-wrapper'),
    imageElem: document.querySelector('.images-wrapper img'),
    stopButton: document.querySelector('.stop-show'),
    runButton: document.querySelector('.run-show'),

    start() {
        this.change();
        this.interval = setInterval(this.change.bind(this), 1500)
    },

    change(){
        if (this.currentSlide < this.images.length) {
            this.imageElem.src = this.images[this.currentSlide];
            this.currentSlide++;
        } else {
            this.currentSlide = 0;
            clearInterval(this.interval);
            this.start();
        }
    },

    stopSlide(){
        this.stopButton.addEventListener('click', e => {
            clearInterval(this.interval);
        });
    },

    runSlide(){
        this.runButton.addEventListener('click', e => {
            clearInterval(this.interval);
            this.start();
        });
    },
};

autoSlider.start();
autoSlider.runSlide();
autoSlider.stopSlide();