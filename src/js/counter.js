const container = document.querySelector('.counter');
const counter = [...document.querySelectorAll('.counter__number')];


const counterStart = ()=> {
    counter.forEach(element => {
        let amount = 0;
        let topPosition = (container.offsetTop + element.offsetHeight) / 2;
            if((topPosition) <= Math.round(scrollY)) {
          
            let goCounter = setInterval(function(){
                if(amount <= element.dataset.max) {
                    element.textContent = amount++;
                } else {
                    clearInterval(goCounter);
                    document.removeEventListener('scroll', counterStart);
                }
            }, 100);
        }      
    })
}


document.addEventListener('scroll', counterStart);