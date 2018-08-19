const headerCarouselItems = document.querySelectorAll('.carousel__item');
const headerCarouselNavigationItems = [...document.querySelectorAll('.navigation__title')];
const navBar = document.querySelectorAll('.navigation__bar');
const opinionsCarouselItems = document.querySelectorAll('.opinions-carousel--1 > .opinions-carousel__item');
const opinionsArrowLeft = document.querySelector('.opinions-carousel--1 > .opinions-carousel__arrow--left');
const opinionsArrowRight = document.querySelector('.opinions-carousel--1 > .opinions-carousel__arrow--right');
const opinionsCarouselItems2 = document.querySelectorAll('.opinions-carousel--2 > .opinions-carousel__item');
const opinionsArrowLeft2 = document.querySelector('.opinions-carousel--2 > .opinions-carousel__arrow--left');
const opinionsArrowRight2 = document.querySelector('.opinions-carousel--2 > .opinions-carousel__arrow--right');

const startHeaderCarousel = (items, navigationItems, arrowLeft, arrowRight, navigationBar) => {
    let currentItem = 0;
    let isEnabled = true;

    window.addEventListener('keyup', (e) => {
        if (e.keyCode == 9) {
            console.log('otline11');
            headerCarouselNavigationItems.forEach((item) => {
                item.classList.add('carousel-outline');
                console.log('otline');
            })
        }
    })

    headerCarouselNavigationItems.forEach(el => {
        el.addEventListener('blur', () => {
            console.log('blur');
            headerCarouselNavigationItems.forEach(el => {
                el.classList.remove('carousel-outline');
            })
        })
    })

    const changeCurrentSlide = (n) => {
        currentItem = (n + items.length) % items.length;
    }

    const hideSlide = (direction) => {
        clearInterval(cartouselInterval);
        isEnabled = false;
        items[currentItem].classList.add(direction);
        if (navigationBar !== undefined) {
            navigationBar[currentItem].classList.remove('animate');
        }
        items[currentItem].addEventListener('animationend', function () {
            this.classList.remove('active', direction);
        });
        cartouselInterval = setInterval(autoCarousel, 4000);
    }

    const showSlide = (direction) => {
        clearInterval(cartouselInterval);
        items[currentItem].classList.add(direction);
        items[currentItem].classList.add('next');
        if (navigationBar !== undefined) {
            navigationBar[currentItem].classList.add('animate');
        }
        items[currentItem].addEventListener('animationend', function () {
            this.classList.remove('next', direction);
            this.classList.add('active');
            isEnabled = true;
        });
        cartouselInterval = setInterval(autoCarousel, 4000);
    }

    const nextItem = (n) => {
        hideSlide('to-left');
        changeCurrentSlide(n + 1);
        showSlide('from-right');
    }

    const previousItem = (n) => {
        hideSlide('to-right');
        changeCurrentSlide(n - 1);
        showSlide('from-left');
    }

    const goToItem = (n) => {
        if (n < currentItem) {
            hideSlide('to-right');
            currentItem = n;
            showSlide('from-left');
        } else {
            hideSlide('to-left');
            currentItem = n;
            showSlide('from-right');
        }
    }

    if (navigationItems !== undefined) {

        navigationItems.forEach((item, index) => item.addEventListener('click', function (event) {
            if (index !== currentItem && index < navigationBar.length) {
                goToItem(index);
            }
        }));
    }

    if (navigationItems !== undefined) {

        navigationItems.forEach((element, index) => {
            element.addEventListener('keypress', (event) => {
                if (event.key === " " || event.key === "Enter") {
                    event.preventDefault();
                    goToItem(index)
                }
            })
        });
    }

    if (arrowLeft !== undefined) {
        arrowLeft.addEventListener('click', () => {
            previousItem(currentItem);
        })
    }

    if (arrowRight !== undefined) {
        arrowRight.addEventListener('click', () => {
            nextItem(currentItem);
        })
    }

    function autoCarousel() {
        if (isEnabled) {
            nextItem(currentItem);
        }
    }
    let cartouselInterval = setInterval(autoCarousel, 5000);
}

startHeaderCarousel(headerCarouselItems, headerCarouselNavigationItems, undefined, undefined, navBar);

startHeaderCarousel(opinionsCarouselItems, undefined, opinionsArrowLeft, opinionsArrowRight, undefined);

startHeaderCarousel(opinionsCarouselItems2, undefined, opinionsArrowLeft2, opinionsArrowRight2, undefined);