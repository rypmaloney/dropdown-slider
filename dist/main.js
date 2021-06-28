/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/menus.js":
/*!**********************!*\
  !*** ./src/menus.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuController);

/***/ }),

/***/ "./src/slider.js":
/*!***********************!*\
  !*** ./src/slider.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

function sliderController(){
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
    setInterval(function(){ moveRight(); }, 3000);

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderController);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menus.js */ "./src/menus.js");
/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider.js */ "./src/slider.js");



console.log('If you see me, everything is A O K')

;(0,_slider_js__WEBPACK_IMPORTED_MODULE_1__.default)()

;(0,_menus_js__WEBPACK_IMPORTED_MODULE_0__.default)()



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYW1wbGUtZHJvcGRvd24vLi9zcmMvbWVudXMuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLWRyb3Bkb3duLy4vc3JjL3NsaWRlci5qcyIsIndlYnBhY2s6Ly9zYW1wbGUtZHJvcGRvd24vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2FtcGxlLWRyb3Bkb3duL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zYW1wbGUtZHJvcGRvd24vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zYW1wbGUtZHJvcGRvd24vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zYW1wbGUtZHJvcGRvd24vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLG9CQUFvQjtBQUN4QztBQUNBO0FBQ0EscUVBQXFFLDRDQUE0Qzs7QUFFakg7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG1CQUFtQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9EQUFvRCxHQUFHO0FBQ3ZEO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixtQkFBbUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDs7QUFFQSxpRUFBZSxjQUFjLEU7Ozs7Ozs7Ozs7Ozs7OztBQzNEN0I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7O0FBRUEsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7OztBQUdBOzs7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBOzs7QUFHQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUNBQXlDLGFBQWE7QUFDdEQsU0FBUztBQUNULHdDQUF3QywrQkFBK0I7QUFDdkU7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBLHVEQUF1RDs7QUFFdkQ7QUFDQTs7Ozs7QUFLQTtBQUNBLDJCQUEyQixhQUFhLEVBQUU7O0FBRTFDOztBQUVBLGlFQUFlLGdCQUFnQixFQUFDOzs7Ozs7O1VDN0doQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7QUNOdUM7QUFDRzs7QUFFMUM7O0FBRUEsb0RBQWdCOztBQUVoQixtREFBYyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5mdW5jdGlvbiBtZW51Q29udHJvbGxlcigpe1xuICAgIC8vRXhwYW5kIHNlbGVjdGVkIG1lbnUgaXRlbSdzIHN1Ym1lbnVcbiAgICAoZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgbWVudUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtaXRlbScpO1xuXG4gICAgICAgIGZvcihsZXQgaT0wOyBpPG1lbnVJdGVtcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAvL1Bhc3NlcyBJZCBvZiBob3ZlcmVkIG1lbnUtaXRlbSBpbnRvIHRoZSByZXZlYWxEb3duIGZ1bmN0aW9uLT5rbm93cyB3aGljaCBtZW51IGl0ZW0gdG8gb3BlblxuICAgICAgICAgICAgbGV0IGNpZD0gbWVudUl0ZW1zW2ldLmdldEF0dHJpYnV0ZSgnaWQnKVxuICAgICAgICAgICAgbWVudUl0ZW1zW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGZ1bmN0aW9uKGNpZCl7cmV2ZWFsRG93bihtZW51SXRlbXNbaV0uZ2V0QXR0cmlidXRlKCdpZCcpKX0pXG4gICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmdW5jdGlvbiByZXZlYWxEb3duKGlkKSB7XG4gICAgICAgICAgICAvL0Nsb3NlIGFsbCBtZW51IGRyb3Bkb3ducyBiZWZvcmUgb3BlbmluZyBhIG5ldyBvbmUgLS1rZWVwcyBmcm9tIGhhdmluZyB0d28gb3BlbiBzaW11bHRhbmVvdXNseVxuICAgICAgICAgICAgbGV0IGRyb3Bkb3duID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZG93bi1jb250ZW50Jyk7XG4gICAgICAgICAgICBmb3IobGV0IGk9MDsgaTxkcm9wZG93bi5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgaWYgKGRyb3Bkb3duW2ldLmNsYXNzTGlzdC5jb250YWlucygnc2hvdycpKXtcbiAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25baV0uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAvL1Nob3cgdGhlIGFwcHJvcHJvYXRlIG1lbnUgZHJvcGRvd25cbiAgICAgICAgICAgIGNvbnN0IGRvd24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpZH1Db250ZW50YClcbiAgICAgICAgICAgIGRvd24uY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpXG4gICAgICAgIH1cbiAgICB9KSgpO1xuXG4gICAgLy9DbGljayBhd2F5IGZyb20gdGhlIG1lbnUgdG8gbWFrZSBpdCBkaXNhcHBlYXJcbiAgICAoZnVuY3Rpb24oKXtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGNsaWNrQXdheSk7XG4gICAgICAgIGZ1bmN0aW9uIGNsaWNrQXdheShlKXtcbiAgICAgICAgICAgIGlmICghZS50YXJnZXQubWF0Y2hlcygnLm1lbnUtaXRlbScpICYmICFlLnRhcmdldC5tYXRjaGVzKCcuZG93bi1pdGVtJykpe1xuICAgICAgICAgICAgICAgIGxldCBkcm9wZG93biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Rvd24tY29udGVudCcpO1xuICAgICAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPGRyb3Bkb3duLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRyb3Bkb3duW2ldLmNsYXNzTGlzdC5jb250YWlucygnc2hvdycpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pKCk7XG5cbiAgICAvL01vYmlsZSBtZW51IGV4cGFuZFxuICAgIChmdW5jdGlvbigpe1xuICAgICAgICBsZXQgbWVudUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51Jyk7XG5cbiAgICAgICAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGV4cGFuZE1lbnUoKSlcblxuXG4gICAgICAgIGZ1bmN0aW9uIGV4cGFuZE1lbnUoKXtcbiAgICAgICAgICAgIGxldCBtZW51SXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtZW51LWl0ZW0nKTtcblxuICAgICAgICAgICAgQXJyYXkuZnJvbShtZW51SXRlbXMpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ3Nob3dNb2JpbGUnKTtcbiAgICAgICAgICAgIH0pXG4gICAgfVxuICAgIH0pKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbnVDb250cm9sbGVyOyIsIlxuZnVuY3Rpb24gc2xpZGVyQ29udHJvbGxlcigpe1xuICAgIGNvbnN0IGltYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ltYWdlJyk7XG5cbiAgICBsZXQgYXJyb3dSaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcnJvd1JpZ2h0JylcbiAgICBhcnJvd1JpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiBtb3ZlUmlnaHQoKSlcblxuICAgIGxldCBhcnJvd0xlZnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXJyb3dMZWZ0JylcbiAgICBhcnJvd0xlZnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IG1vdmVMZWZ0KCkpXG5cblxuXG4gICAgbGV0IGN1cnJlbnROdW1iZXIgPSAwO1xuICAgIGZ1bmN0aW9uIG1vdmVSaWdodCgpe1xuICAgICAgICBjdXJyZW50TnVtYmVyKytcblxuICAgICAgICBpZiAoY3VycmVudE51bWJlciA+IGltYWdlcy5sZW5ndGggLSAxKXtjdXJyZW50TnVtYmVyID0gMH1cbiAgICAgICAgY2hhbmdlQWN0aXZlKGN1cnJlbnROdW1iZXIpXG4gICAgICAgIHJldHVybiBjdXJyZW50TnVtYmVyXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbW92ZUxlZnQoKXtcbiAgICAgICAgY3VycmVudE51bWJlci0tXG4gICAgICAgIGlmIChjdXJyZW50TnVtYmVyIDwgMCl7Y3VycmVudE51bWJlciA9IDZ9XG4gICAgICAgIGNoYW5nZUFjdGl2ZShjdXJyZW50TnVtYmVyKVxuICAgICAgICByZXR1cm4gY3VycmVudE51bWJlclxuICAgIH1cblxuXG5cbiAgICBmdW5jdGlvbiBjbGVhclNsaWRlcigpe1xuICAgICAgICBmb3IobGV0IGk9MDsgaTxpbWFnZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgaWYgKGltYWdlc1tpXS5jbGFzc0xpc3QuY29udGFpbnMoJ2xlZnQnKSl7XG4gICAgICAgICAgICAgICAgaW1hZ2VzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2xlZnQnKVxuICAgICAgICAgICAgfWVsc2UgaWYgKGltYWdlc1tpXS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKXtcbiAgICAgICAgICAgICAgICBpbWFnZXNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgICAgICAgIH1lbHNlIGlmIChpbWFnZXNbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdyaWdodCcpKXtcbiAgICAgICAgICAgICAgICBpbWFnZXNbaV0uY2xhc3NMaXN0LnJlbW92ZSgncmlnaHQnKVxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgfVxuICAgICAgICBcblxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gY2hhbmdlQWN0aXZlKGFjdGl2ZUluZGV4KXtcbiAgICAgICAgY2xlYXJTbGlkZXIoKVxuICAgICAgICBsZXQgbGVmdFxuICAgICAgICBsZXQgcmlnaHRcbiAgICAgICAgaWYgKGFjdGl2ZUluZGV4ID09PSAwKXtcbiAgICAgICAgICAgIGxlZnQgPSBpbWFnZXMubGVuZ3RoIC0gMVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGxlZnQgPSBhY3RpdmVJbmRleCAtIDFcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhY3RpdmVJbmRleCA9PT0gaW1hZ2VzLmxlbmd0aCAtIDEpe1xuICAgICAgICAgICAgcmlnaHQgPSAwXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByaWdodCA9IGFjdGl2ZUluZGV4ICsgMVxuICAgICAgICB9XG5cbiAgICAgICAgaW1hZ2VzW2xlZnRdLmNsYXNzTGlzdC5yZW1vdmUoJ25vbmUnKTtcbiAgICAgICAgaW1hZ2VzW2FjdGl2ZUluZGV4XS5jbGFzc0xpc3QucmVtb3ZlKCdub25lJyk7XG4gICAgICAgIGltYWdlc1tyaWdodF0uY2xhc3NMaXN0LnJlbW92ZSgnbm9uZScpO1xuXG4gICAgICAgIGltYWdlc1tsZWZ0XS5jbGFzc0xpc3QuYWRkKCdsZWZ0Jyk7XG4gICAgICAgIGltYWdlc1thY3RpdmVJbmRleF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIGltYWdlc1tyaWdodF0uY2xhc3NMaXN0LmFkZCgncmlnaHQnKTtcblxuXG4gICAgICAgIGNoYW5nZU1hcmdpbihhY3RpdmVJbmRleClcblxuICAgICAgICB1cGRhdGVNYXJrZXIoYWN0aXZlSW5kZXgpXG5cblxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gY2hhbmdlTWFyZ2luKGFjdGl2ZUluZGV4KXtcbiAgICAgICAgbGV0IG1hcmdpbkZhY3RvciA9IDEyNVxuICAgICAgICBsZXQgbW92ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW92ZXInKVxuXG4gICAgICAgIGlmIChhY3RpdmVJbmRleCA9PSAwKXtcbiAgICAgICAgICAgIG1vdmVyLnN0eWxlLm1hcmdpbkxlZnQgPSAgYCR7bWFyZ2luRmFjdG9yfXB4YFxuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBtb3Zlci5zdHlsZS5tYXJnaW5MZWZ0ID0gYCR7bWFyZ2luRmFjdG9yIC0gNDU1KmFjdGl2ZUluZGV4fXB4YCBcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gdXBkYXRlTWFya2VyKGFjdGl2ZUluZGV4KXtcbiAgICAgICAgbGV0IG1hcmtzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2xpZGVNYXJrJyk7XG5cbiAgICAgICAgQXJyYXkuZnJvbShtYXJrcykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yPSAnZ2FpbnNib3JvJ30pXG5cbiAgICAgICAgbWFya3NbYWN0aXZlSW5kZXhdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdibGFjayc7XG4gICAgfVxuXG5cblxuXG4gICAgY2hhbmdlQWN0aXZlKGN1cnJlbnROdW1iZXIpXG4gICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXsgbW92ZVJpZ2h0KCk7IH0sIDMwMDApO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHNsaWRlckNvbnRyb2xsZXI7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBtZW51Q29udHJvbGxlciBmcm9tICcuL21lbnVzLmpzJ1xuaW1wb3J0IHNsaWRlckNvbnRyb2xsZXIgZnJvbSAnLi9zbGlkZXIuanMnXG5cbmNvbnNvbGUubG9nKCdJZiB5b3Ugc2VlIG1lLCBldmVyeXRoaW5nIGlzIEEgTyBLJylcblxuc2xpZGVyQ29udHJvbGxlcigpXG5cbm1lbnVDb250cm9sbGVyKClcblxuXG4iXSwic291cmNlUm9vdCI6IiJ9