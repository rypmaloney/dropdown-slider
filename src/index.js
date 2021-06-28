import menuController from './menus.js'

console.log('If you see me, everything is A O K')

menuController()


const images = document.getElementsByClassName('image');



let arrowRight = document.getElementById('arrowRight')
arrowRight.addEventListener('click', ()=> moveRight())

let arrowLeft = document.getElementById('arrowLeft')
arrowLeft.addEventListener('click', ()=> moveLeft())



let currentNumber = 0;
function moveRight(){
    currentNumber++

    if (currentNumber > images.length - 1){currentNumber = 0}
    changeActive(currentNumber)
    return currentNumber
}

function moveLeft(){
    currentNumber--
    if (currentNumber < 0){currentNumber = 6}
    changeActive(currentNumber)
    return currentNumber
}



function clearSlider(){
    for(let i=0; i<images.length; i++){
        if (images[i].classList.contains('left')){
            images[i].classList.remove('left')
        }else if (images[i].classList.contains('active')){
            images[i].classList.remove('active')
        }else if (images[i].classList.contains('right')){
            images[i].classList.remove('right')
        }


    }
    

}


function changeActive(activeIndex){
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


    changeMargin(activeIndex)

    updateMarker(activeIndex)


}


function changeMargin(activeIndex){
    let marginFactor = 125
    let mover = document.getElementById('mover')

    if (activeIndex == 0){
        mover.style.marginLeft =  `${marginFactor}px`
    }else {
        mover.style.marginLeft = `${marginFactor - 455*activeIndex}px` 
    }
}


function updateMarker(activeIndex){
    let marks = document.getElementsByClassName('slideMark');

    Array.from(marks).forEach(element => {
        element.style.backgroundColor= 'gainsboro'})

    marks[activeIndex].style.backgroundColor = 'black';
}




changeActive(currentNumber)
setInterval(function(){ moveRight(); }, 5000);



