console.log('If you see me, everything is A O K')


const menuItems = document.querySelectorAll('.menu-item');


Array.from(menuItems).forEach(element => {
    element.addEventListener('click', () => revealDown())
});

function revealDown() {
    console.log('im trying!')
    const down = document.getElementById('down-content')

    down.classList.toggle('hide')
}


window.addEventListener('click', function(e){
    if (!e.target.matches('.menu-item'))
        for(let i=0; i < menuItems.length; i++){
            let drop = menuItems[i];
            if (!drop.classList.contains('hide')){
                drop.classList.add('hide')
            }
        }

})