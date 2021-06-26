
function menuController(){
    //Expand selected menu item's submenu
    (function(){
        const menuItems = document.querySelectorAll('.menu-item');

        for(let i=0; i<menuItems.length; i++){
            //Passes Id of hovered menu-item into the revealDown function->knows which menu item to open
            let cid= menuItems[i].getAttribute('id')
            menuItems[i].addEventListener('mouseover', function(cid){revealDown(menuItems[i].getAttribute('id'))})
        
        }
        
        function revealDown(id) {
            //Close all menu dropdowns before opening a new one --keeps from having two open simultaneously
            let dropdown = document.getElementsByClassName('down-content');
            for(let i=0; i<dropdown.length; i++){
                if (dropdown[i].classList.contains('show')){
                    dropdown[i].classList.remove('show');
                }
            }
        
            //Show the approproate menu dropdown
            const down = document.getElementById(`${id}Content`)
            down.classList.toggle('show')
        }
    })();

    //Click away from the menu to make it disappear
    (function(){
        window.addEventListener('mouseover', clickAway);
        function clickAway(e){
            if (!e.target.matches('.menu-item') && !e.target.matches('.down-item')){
                let dropdown = document.getElementsByClassName('down-content');
                for(let i=0; i<dropdown.length; i++){
                    if (dropdown[i].classList.contains('show')){
                        dropdown[i].classList.remove('show');
                    }
                }
            }
        }
    })();

    //Mobile menu expand
    (function(){
        let menuBtn = document.getElementById('menu');

        menuBtn.addEventListener('click', () => expandMenu())


        function expandMenu(){
            let menuItems = document.getElementsByClassName('menu-item');

            Array.from(menuItems).forEach(element => {
            element.classList.toggle('showMobile');
            })
    }
    })();
}

export default menuController;