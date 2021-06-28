import menuController from './menus.js'

console.log('If you see me, everything is A O K')

menuController()


const images = document.getElementsByClassName('image');


function clearSlider(){
    for(let i=0; i<images.length; i++){
        if (images[i].classList.contains('left')){
            images[i].classList.remove('left')
        }else if (images[i].classList.contains('active')){
            images[i].classList.remove('active')
        }else if (images[i].classList.contains('right')){
            images[i].classList.remove('right')
        }

        images[i].classList.add('none')
    }
    

}


function makeSlider(activeIndex){
    clearSlider()
    let left
    let right
    if (activeIndex === 0){
        left = images.length - 1
    }else{
        left = activeIndex - 1
    }

    if (activeIndex === images.length - 1){
        right = 0
    } else {
        right = activeIndex + 1
    }

    images[left].classList.remove('none');
    images[activeIndex].classList.remove('none');
    images[right].classList.remove('none');

    images[left].classList.add('left');
    images[activeIndex].classList.add('active');
    images[right].classList.add('right');
    
}

//makeSlider(5)



