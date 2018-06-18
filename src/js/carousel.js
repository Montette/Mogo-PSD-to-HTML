// const items = document.querySelectorAll('.carousel__item');
// const navigationItems = [...document.querySelectorAll('.navigation__item')];
// const navigationBar = document.querySelectorAll('.navigation__bar');

const headerCarouselItems = document.querySelectorAll('.carousel__item');
const headerCarouselNavigationItems = [...document.querySelectorAll('.navigation__title')];


const startHeaderCarousel = (items, navigationItems) => {
let currentItem = 0;
let isEnabled = true;
const navigationBar = document.querySelectorAll('.navigation__bar');



const changeCurrentSlide = (n) => {
    currentItem = (n + items.length) % items.length;
}

const hideSlide = (direction) => {
    clearInterval(cartouselInterval);
    isEnabled = false;
    items[currentItem].classList.add(direction);
    navigationBar[currentItem].classList.remove('animate');
    items[currentItem].addEventListener('animationend', function () {
        this.classList.remove('active', direction);
    });
    cartouselInterval = setInterval(autoCarousel, 4000);
}

const showSlide = (direction) => {
    clearInterval(cartouselInterval);
    items[currentItem].classList.add(direction);
    items[currentItem].classList.add('next');
    navigationBar[currentItem].classList.add('animate');
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


// navigationItems.forEach((item, index) => item.addEventListener('click', function (event) {
//     if (index !== currentItem && index < navigationBar.length && event.target == item.children[1]) {
//         goToItem(index);
//     }
// }));

navigationItems.forEach((item, index) => item.addEventListener('click', function (event) {
    if (index !== currentItem && index < navigationBar.length ) {
        goToItem(index);
    }
}));


navigationItems.forEach((element, index) => {
    element.addEventListener('keypress', (event) =>{
        if (event.key === " " || event.key === "Enter") {
            event.preventDefault();
            goToItem(index)
        }
    })
    
});

// const nav = document.querySelector('.navigation');

// nav.addEventListener('click', (event)=> {

    
//             let clickedIndex = [...event.currentTarget.children].indexOf(event.target) >= 0 ? [...event.currentTarget.children].indexOf(event.target):[...event.currentTarget.children].indexOf(event.target);
//             if (clickedIndex !== currentItem && clickedIndex < navigationBar.length && event.target != event.currentTarget ) {
//                 console.log(clickedIndex);
//             goToItem(clickedIndex);
//             }

    
//     console.log(event.currentTarget);
//     console.log(event.target)
// })

function autoCarousel() {
    if (isEnabled) {
        nextItem(currentItem);
    }
}

let cartouselInterval = setInterval(autoCarousel, 5000);

}

startHeaderCarousel(headerCarouselItems, headerCarouselNavigationItems)