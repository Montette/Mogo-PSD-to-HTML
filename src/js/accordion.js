
    const accTitle = [...document.querySelectorAll(".accordion__header")];
    const clickedEl= [...document.querySelectorAll(".accordion__clickEl")];
    const accContent = [...document.querySelectorAll(".accordion__body")];


    window.onload = function () {
        accTitle[0].click();
    }

    window.addEventListener('keyup', (e)=> {
        if(e.keyCode == 9){
            accTitle.forEach((item)=> {
                item.classList.add('accordion__header--outline');
            })
        }
    }) 

    accTitle.forEach((acc, index) => {
        acc.addEventListener("click", (e) => {
            console.log('aa');
                for (var i = 0; i < accContent.length; i++) {
                    accContent[i].classList.remove('accordion__body--open');
                    accTitle[i].classList.remove('rotate');
                }
                accContent[index].classList.add('accordion__body--open');
                accTitle[index].classList.add('rotate');        
            }
        )

        acc.addEventListener('blur', ()=> {
            console.log('blur');
            accTitle.forEach(el => {
                el.classList.remove('accordion__header--outline');
            })
        })
    })

    accTitle.forEach((acc, index) => {

        acc.addEventListener("keypress", (event) => {
            if (event.key === " " || event.key === "Enter") {
                event.preventDefault();
                for (var i = 0; i < accContent.length; i++) {
                    accContent[i].classList.remove('accordion__body--open');
                    accTitle[i].classList.remove('rotate');
                }
                accContent[index].classList.add('accordion__body--open');
                accTitle[index].classList.add('rotate');
            }
            }
        )
    })


