const buttonNext = document.querySelector('.slider__button_direction_right');
const buttonPrev = document.querySelector('.slider__button_direction_left');
const itemCount = document.querySelectorAll('.slider__item-link').length;
let currentItemIndex = 0;

buttonNext.addEventListener('click', () => {
    changeSlide('next');
});

buttonPrev.addEventListener('click', () => {
    changeSlide('prev');
});


function changeSlide(direction) {
    if (direction === 'next') {
        currentItemIndex++;
        if (currentItemIndex === itemCount) {
            currentItemIndex = 0;
        }
    }
    if (direction === 'prev') {
        currentItemIndex--;
        if (currentItemIndex < 0) {
            currentItemIndex = itemCount - 1;
        }
    }

    document.querySelector('.slider__wrapper').style.transform = `translateX(-${currentItemIndex * 100}%)`;
}