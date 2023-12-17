const img = document.querySelectorAll('.slider .slider__image img');
const sliderLine = document.querySelector('.slider__image');
const imageBtn = document.querySelectorAll('.image__btn')
let count = 0;
let width;


function init() {

    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width * img.length + 'px';
    img.forEach((item) => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider()
}

window.addEventListener('resize', init);
init();

document.querySelector('.slider__item-left').addEventListener('click', () => {
    count--;
    if (count < 0) {
        count = img.length - 1;
    }
    rollSlider();
    thisSlide(count);
});

document.querySelector('.slider__item-rigth').addEventListener('click', () => {
    count++;
    if (count >= img.length) {
        count = 0;
    }
    rollSlider();
    thisSlide(count);
});

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';
};

function thisSlide(index) {
    imageBtn.forEach((item) => item.classList.remove('active'));
    imageBtn[index].classList.add('.active');
};

imageBtn.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        count = index;
        rollSlider();
        thisSlide(count);
    })
})