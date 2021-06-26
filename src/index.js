console.log('If you see me, everything is A O K')

const menuItems = document.querySelectorAll('.menu-item');

/*
Array.from(menuItems).forEach(element => {
    element.addEventListener('mouseover', (e) => revealDown(e))
});

*/

for(let i=0; i<menuItems.length; i++){
    let cid= menuItems[i].getAttribute('id')
    menuItems[i].addEventListener('mouseover', function(cid){revealDown(menuItems[i].getAttribute('id'))})

}

function revealDown(id) {
    const down = document.getElementById(`${id}Content`)
    down.classList.toggle('show')
}


window.addEventListener('mouseover', clickAway);

function clickAway(e){
   
    if (!e.target.matches('.menu-item') && !e.target.matches('.down-item')){
        let dropdown = document.getElementsByClassName('down-content');
        for(i=0; i<dropdown.length; i++){
            if (dropdown[i].classList.contains('show')){
                dropdown[i].classList.remove('show');
            }
        }
    }
}


