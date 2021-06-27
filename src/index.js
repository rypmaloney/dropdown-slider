import menuController from './menus.js'

console.log('If you see me, everything is A O K')

menuController()


const images = document.getElementsByClassName('image');


function startSlider(){

    for(let i=0; i<images.length; i++){
        if (images[i].classList.contains('left')){
            images[i].classList.remove('left')
        }else if (images[i].classList.contains('active')){
            images[i].classList.remove('active')
        }else if (images[i].classList.contains('right')){
            images[i].classList.remove('right')
        }
    }



    images[0].classList.add('left');
    images[1].classList.add('active');
    images[2].classList.add('right');
}

function moveRight(){
    
}



startSlider()

