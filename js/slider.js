const buttonNext = document.querySelector('.slider__button_direction_right');
const buttonPrev = document.querySelector('.slider__button_direction_left');
const itemCount = document.querySelectorAll('.slider__item-link').length;
const paginationBullets = document.querySelectorAll('.slider__pagination-bullet');
let currentItemIndex = 0;

setActivePaginationBullet(currentItemIndex);

buttonNext.addEventListener('click', () => {
    changeSlide('next');
});

buttonPrev.addEventListener('click', () => {
    changeSlide('prev');
});

paginationBullets.forEach((bullet, index) => {
    bullet.addEventListener('click', () => {
        changeSlideByIndex(index);
    });
})

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

    setActivePaginationBullet(currentItemIndex);
    document.querySelector('.slider__wrapper').style.transform = `translateX(-${currentItemIndex * 100}%)`;
}

function setActivePaginationBullet(index) {
    paginationBullets.forEach(bullet => {
        bullet.classList.remove('slider__pagination-bullet_state_active');
    });

    paginationBullets[index].classList.add('slider__pagination-bullet_state_active');
}

function changeSlideByIndex(index) {
    document.querySelector('.slider__wrapper').style.transform = `translateX(-${index * 100}%)`;
    setActivePaginationBullet(index);
}