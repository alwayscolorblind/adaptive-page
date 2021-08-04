const sliders = document.querySelectorAll('.slider');

sliders.forEach(slider => {
    const buttonNext = slider.querySelector('.slider__button_direction_right');
    const buttonPrev = slider.querySelector('.slider__button_direction_left');
    const itemCount = slider.querySelectorAll('.slider__item-link').length;
    const paginationBullets = slider.querySelectorAll('.slider__pagination-bullet');
    let currentItemIndex = 0;

    setActivePaginationBullet(currentItemIndex);

    buttonNext.addEventListener('click', (event) => {
        event.preventDefault();
        changeSlide('next', itemCount);
    });

    buttonPrev.addEventListener('click', (event) => {
        event.preventDefault();
        changeSlide('prev', itemCount);
    });

    paginationBullets.forEach((bullet, index) => {
        bullet.addEventListener('click', () => {
            changeSlideByIndex(index);
        });
    })

    function changeSlide(direction, itemCount) {
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
        slider.querySelector('.slider__wrapper').style.transform = `translateX(-${currentItemIndex * 100}%)`;
    }

    function setActivePaginationBullet(index) {
        paginationBullets.forEach(bullet => {
            bullet.classList.remove('slider__pagination-bullet_state_active');
        });

        paginationBullets[index].classList.add('slider__pagination-bullet_state_active');
    }

    function changeSlideByIndex(index) {
        currentItemIndex = index;
        slider.querySelector('.slider__wrapper').style.transform = `translateX(-${currentItemIndex * 100}%)`;
        setActivePaginationBullet(index);
    }
});