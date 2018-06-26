const nav = document.querySelector('.nav');
const sections = [...document.querySelectorAll("section[id]")];
const menuHeigh = document.getElementById('navigation').getBoundingClientRect().height;
const links = [...document.querySelectorAll('.nav__link')];



window.onscroll = () => {
    if (this.scrollY >= 50) {
        nav.classList.add('color-nav')
    } else {
        nav.classList.remove('color-nav')
    }

    sections.forEach(section => {

        let sectionId = section.getAttribute('id');
        let topPosition = sectionId === 'contact' ? section.offsetTop - menuHeigh * 5 : section.offsetTop - menuHeigh * 2.2;

        if ((topPosition) <= Math.round(window.scrollY)) {

            if (document.querySelector('.active') !== null) {
                document.querySelector('.active').classList.remove('active');
            }
            document.querySelector(`a[href*='${sectionId}']`).classList.add('active')
            
        }
    })
};


const scrollToElement = element => {
    const isSmoothScrollSupported = 'scrollBehavior' in document.documentElement.style;
    let options = {
        behavior: 'smooth',
        left: 0,
        top: element.offsetTop - menuHeigh * 2.2
    }
    isSmoothScrollSupported ? window.scrollTo(options) : window.scrollTo(options.left, options.top);
}


const scrollOnClick = event => {

    event.preventDefault();
  
    let elHref = (event.target).getAttribute('href');
    let elementId = elHref.slice(1, elHref.length);
    let element = document.getElementById(elementId);

    scrollToElement(element)
}



links.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref !== '#') {
        link.addEventListener('click', scrollOnClick.bind(link))
    }
})

const burger = document.querySelector('.nav__burger');
const burgerSpan = document.querySelector('.nav__burgerSpan');
let active = false;


burger.addEventListener('click', ()=> {
    console.log(active);
    if (!active) {
    if(burgerSpan.classList.contains('disActive')) {
        burgerSpan.classList.remove('disActive');
    }   
    burgerSpan.classList.add('active');
    active = true;
} else {
    // burger.classList.remove('active');
    burgerSpan.classList.add('disActive');
    burgerSpan.classList.remove('active');
    active = false;
}


})

