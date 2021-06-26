console.log('If you see me, everything is A O K')

const menuItems = document.querySelectorAll('.menu-item');


Array.from(menuItems).forEach(element => {
    element.addEventListener('mouseover', () => revealDown())
});

function revealDown() {
    console.log('im trying!')
    const down = document.getElementById('down-content')
    down.classList.toggle('show')
}


window.addEventListener('mouseover', clickAway);

function clickAway(e){
    console.log(e.target)
    if (!e.target.matches('.menu-item') && !e.target.matches('.down-item')){
        let dropdown = document.getElementById('down-content');
        if (dropdown.classList.contains('show')){
            dropdown.classList.remove('show');
        }

    }
}


