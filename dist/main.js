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
    let cid= menuItems[i].getAttribute('id')
    menuItems[i].addEventListener('mouseover', function(cid){revealDown(menuItems[i].getAttribute('id'))})

}

function revealDown(id) {
    console.log(`${id}Content`)
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



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYW1wbGUtZHJvcGRvd24vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBLFlBQVksb0JBQW9CO0FBQ2hDO0FBQ0EsNkRBQTZELDRDQUE0Qzs7QUFFekc7O0FBRUE7QUFDQSxtQkFBbUIsR0FBRztBQUN0Qiw0Q0FBNEMsR0FBRztBQUMvQztBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLG1CQUFtQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKCdJZiB5b3Ugc2VlIG1lLCBldmVyeXRoaW5nIGlzIEEgTyBLJylcblxuY29uc3QgbWVudUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtaXRlbScpO1xuXG4vKlxuQXJyYXkuZnJvbShtZW51SXRlbXMpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoZSkgPT4gcmV2ZWFsRG93bihlKSlcbn0pO1xuXG4qL1xuXG5mb3IobGV0IGk9MDsgaTxtZW51SXRlbXMubGVuZ3RoOyBpKyspe1xuICAgIGxldCBjaWQ9IG1lbnVJdGVtc1tpXS5nZXRBdHRyaWJ1dGUoJ2lkJylcbiAgICBtZW51SXRlbXNbaV0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgZnVuY3Rpb24oY2lkKXtyZXZlYWxEb3duKG1lbnVJdGVtc1tpXS5nZXRBdHRyaWJ1dGUoJ2lkJykpfSlcblxufVxuXG5mdW5jdGlvbiByZXZlYWxEb3duKGlkKSB7XG4gICAgY29uc29sZS5sb2coYCR7aWR9Q29udGVudGApXG4gICAgY29uc3QgZG93biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2lkfUNvbnRlbnRgKVxuICAgIGRvd24uY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpXG59XG5cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGNsaWNrQXdheSk7XG5cbmZ1bmN0aW9uIGNsaWNrQXdheShlKXtcbiAgIFxuICAgIGlmICghZS50YXJnZXQubWF0Y2hlcygnLm1lbnUtaXRlbScpICYmICFlLnRhcmdldC5tYXRjaGVzKCcuZG93bi1pdGVtJykpe1xuICAgICAgICBsZXQgZHJvcGRvd24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkb3duLWNvbnRlbnQnKTtcbiAgICAgICAgZm9yKGk9MDsgaTxkcm9wZG93bi5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBpZiAoZHJvcGRvd25baV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93Jykpe1xuICAgICAgICAgICAgICAgIGRyb3Bkb3duW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgXG5cbiAgICB9XG59XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==