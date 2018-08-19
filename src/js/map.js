const map = document.querySelector('.map');
const iframe = document.querySelector('.map__iframe');
const mapText = document.querySelector('.map__open');

map.addEventListener('click', () => {
    map.classList.add('open-map');
    iframe.classList.add('open-iframe');
    mapText.classList.add('open-text');
})

map.addEventListener('mouseleave', () => {
    map.classList.remove('open-map');
    iframe.classList.remove('open-iframe');
    mapText.classList.remove('open-text');
})