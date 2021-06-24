/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYW1wbGUtZHJvcGRvd24vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7O0FBR0E7OztBQUdBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0Esb0JBQW9CLHNCQUFzQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUMsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coJ0lmIHlvdSBzZWUgbWUsIGV2ZXJ5dGhpbmcgaXMgQSBPIEsnKVxuXG5cbmNvbnN0IG1lbnVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LWl0ZW0nKTtcblxuXG5BcnJheS5mcm9tKG1lbnVJdGVtcykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcmV2ZWFsRG93bigpKVxufSk7XG5cbmZ1bmN0aW9uIHJldmVhbERvd24oKSB7XG4gICAgY29uc29sZS5sb2coJ2ltIHRyeWluZyEnKVxuICAgIGNvbnN0IGRvd24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG93bi1jb250ZW50JylcblxuICAgIGRvd24uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpXG59XG5cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgaWYgKCFlLnRhcmdldC5tYXRjaGVzKCcubWVudS1pdGVtJykpXG4gICAgICAgIGZvcihsZXQgaT0wOyBpIDwgbWVudUl0ZW1zLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGxldCBkcm9wID0gbWVudUl0ZW1zW2ldO1xuICAgICAgICAgICAgaWYgKCFkcm9wLmNsYXNzTGlzdC5jb250YWlucygnaGlkZScpKXtcbiAgICAgICAgICAgICAgICBkcm9wLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==