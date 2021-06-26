/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
console.log('If you see me, everything is A O K')

const menuItems = document.querySelectorAll('.menu-item');

/*
Array.from(menuItems).forEach(element => {
    element.addEventListener('mouseover', (e) => revealDown(e))
});

*/

for(let i=0; i<menuItems.length; i++){
    //Passes Id of hovered menu-item into the revealDown function->knows which menu item to open
    let cid= menuItems[i].getAttribute('id')
    menuItems[i].addEventListener('mouseover', function(cid){revealDown(menuItems[i].getAttribute('id'))})

}

function revealDown(id) {
    //Close all menu dropdowns before opening a new one --keeps from having two open simultaneously
    let dropdown = document.getElementsByClassName('down-content');
    for(i=0; i<dropdown.length; i++){
        if (dropdown[i].classList.contains('show')){
            dropdown[i].classList.remove('show');
        }
    }

    //Show the approproate menu dropdown
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


//Mobile menu expand

let menuBtn = document.getElementById('menu');

menuBtn.addEventListener('click', () => expandMenu())


function expandMenu(){
    let menuItems = document.getElementsByClassName('menu-item');

    Array.from(menuItems).forEach(element => {
       element.classList.toggle('showMobile');
    })
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYW1wbGUtZHJvcGRvd24vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBLFlBQVksb0JBQW9CO0FBQ2hDO0FBQ0E7QUFDQSw2REFBNkQsNENBQTRDOztBQUV6Rzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1CQUFtQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QyxHQUFHO0FBQy9DO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixtQkFBbUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKCdJZiB5b3Ugc2VlIG1lLCBldmVyeXRoaW5nIGlzIEEgTyBLJylcblxuY29uc3QgbWVudUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtaXRlbScpO1xuXG4vKlxuQXJyYXkuZnJvbShtZW51SXRlbXMpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoZSkgPT4gcmV2ZWFsRG93bihlKSlcbn0pO1xuXG4qL1xuXG5mb3IobGV0IGk9MDsgaTxtZW51SXRlbXMubGVuZ3RoOyBpKyspe1xuICAgIC8vUGFzc2VzIElkIG9mIGhvdmVyZWQgbWVudS1pdGVtIGludG8gdGhlIHJldmVhbERvd24gZnVuY3Rpb24tPmtub3dzIHdoaWNoIG1lbnUgaXRlbSB0byBvcGVuXG4gICAgbGV0IGNpZD0gbWVudUl0ZW1zW2ldLmdldEF0dHJpYnV0ZSgnaWQnKVxuICAgIG1lbnVJdGVtc1tpXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBmdW5jdGlvbihjaWQpe3JldmVhbERvd24obWVudUl0ZW1zW2ldLmdldEF0dHJpYnV0ZSgnaWQnKSl9KVxuXG59XG5cbmZ1bmN0aW9uIHJldmVhbERvd24oaWQpIHtcbiAgICAvL0Nsb3NlIGFsbCBtZW51IGRyb3Bkb3ducyBiZWZvcmUgb3BlbmluZyBhIG5ldyBvbmUgLS1rZWVwcyBmcm9tIGhhdmluZyB0d28gb3BlbiBzaW11bHRhbmVvdXNseVxuICAgIGxldCBkcm9wZG93biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Rvd24tY29udGVudCcpO1xuICAgIGZvcihpPTA7IGk8ZHJvcGRvd24ubGVuZ3RoOyBpKyspe1xuICAgICAgICBpZiAoZHJvcGRvd25baV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93Jykpe1xuICAgICAgICAgICAgZHJvcGRvd25baV0uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy9TaG93IHRoZSBhcHByb3Byb2F0ZSBtZW51IGRyb3Bkb3duXG4gICAgY29uc3QgZG93biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2lkfUNvbnRlbnRgKVxuICAgIGRvd24uY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpXG59XG5cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGNsaWNrQXdheSk7XG5cbmZ1bmN0aW9uIGNsaWNrQXdheShlKXtcbiAgICBpZiAoIWUudGFyZ2V0Lm1hdGNoZXMoJy5tZW51LWl0ZW0nKSAmJiAhZS50YXJnZXQubWF0Y2hlcygnLmRvd24taXRlbScpKXtcbiAgICAgICAgbGV0IGRyb3Bkb3duID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZG93bi1jb250ZW50Jyk7XG4gICAgICAgIGZvcihpPTA7IGk8ZHJvcGRvd24ubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgaWYgKGRyb3Bkb3duW2ldLmNsYXNzTGlzdC5jb250YWlucygnc2hvdycpKXtcbiAgICAgICAgICAgICAgICBkcm9wZG93bltpXS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLy9Nb2JpbGUgbWVudSBleHBhbmRcblxubGV0IG1lbnVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpO1xuXG5tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZXhwYW5kTWVudSgpKVxuXG5cbmZ1bmN0aW9uIGV4cGFuZE1lbnUoKXtcbiAgICBsZXQgbWVudUl0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWVudS1pdGVtJyk7XG5cbiAgICBBcnJheS5mcm9tKG1lbnVJdGVtcykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ3Nob3dNb2JpbGUnKTtcbiAgICB9KVxufSJdLCJzb3VyY2VSb290IjoiIn0=