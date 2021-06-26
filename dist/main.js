/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYW1wbGUtZHJvcGRvd24vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7O0FBR0E7OztBQUdBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZygnSWYgeW91IHNlZSBtZSwgZXZlcnl0aGluZyBpcyBBIE8gSycpXG5cblxuY29uc3QgbWVudUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtaXRlbScpO1xuXG5cbkFycmF5LmZyb20obWVudUl0ZW1zKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4gcmV2ZWFsRG93bigpKVxufSk7XG5cbmZ1bmN0aW9uIHJldmVhbERvd24oKSB7XG4gICAgY29uc29sZS5sb2coJ2ltIHRyeWluZyEnKVxuICAgIGNvbnN0IGRvd24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG93bi1jb250ZW50JylcblxuICAgIGRvd24uY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpXG5cblxufVxuXG5cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGNsaWNrQXdheSk7XG5cbmZ1bmN0aW9uIGNsaWNrQXdheShlKXtcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldClcbiAgICBpZiAoIWUudGFyZ2V0Lm1hdGNoZXMoJy5tZW51LWl0ZW0nKSAmJiAhZS50YXJnZXQubWF0Y2hlcygnLmRvd24taXRlbScpKXtcbiAgICAgICAgbGV0IGRyb3Bkb3duID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rvd24tY29udGVudCcpO1xuICAgICAgICBpZiAoZHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93Jykpe1xuICAgICAgICAgICAgZHJvcGRvd24uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgICAgICB9XG5cbiAgICB9XG59XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==