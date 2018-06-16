const nav = document.querySelector('.nav');
const input = document.querySelector('.nav__input');


window.onscroll = () => {
    if(this.scrollY >= 50)  {
        nav.classList.add('color-nav') 
    } else {
        nav.classList.remove('color-nav') 
    }
  };



