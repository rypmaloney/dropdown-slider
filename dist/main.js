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


console.log('If you see me, everything is A O K')

;(0,_menus_js__WEBPACK_IMPORTED_MODULE_0__.default)()


const images = document.getElementsByClassName('image');

let currentNumber = 0;

let arrowRight = document.getElementById('arrowRight')
arrowRight.addEventListener('click', ()=> moveRight())

let arrowLeft = document.getElementById('arrowLeft')
arrowLeft.addEventListener('click', ()=> moveLeft())

function moveRight(){
    currentNumber++
    changeActive(currentNumber)
    return currentNumber
}

function moveLeft(){
    currentNumber--
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

    let marginFactor = 125
    let mover = document.getElementById('mover')

    if (activeIndex == 0){
        mover.style.marginLeft =  `${marginFactor}px`
    }else {
        mover.style.marginLeft = `${marginFactor - 455*activeIndex}px` 
    }


}




changeActive(currentNumber)




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYW1wbGUtZHJvcGRvd24vLi9zcmMvbWVudXMuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLWRyb3Bkb3duL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NhbXBsZS1kcm9wZG93bi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc2FtcGxlLWRyb3Bkb3duL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc2FtcGxlLWRyb3Bkb3duL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc2FtcGxlLWRyb3Bkb3duLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixvQkFBb0I7QUFDeEM7QUFDQTtBQUNBLHFFQUFxRSw0Q0FBNEM7O0FBRWpIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixtQkFBbUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvREFBb0QsR0FBRztBQUN2RDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUJBQW1CO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsaUVBQWUsY0FBYyxFOzs7Ozs7VUM1RDdCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7O0FDTnVDOztBQUV2Qzs7QUFFQSxtREFBYzs7O0FBR2Q7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0EsZ0JBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7OztBQUdBOzs7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQyxhQUFhO0FBQ2xELEtBQUs7QUFDTCxvQ0FBb0MsK0JBQStCO0FBQ25FOzs7QUFHQTs7Ozs7QUFLQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5mdW5jdGlvbiBtZW51Q29udHJvbGxlcigpe1xuICAgIC8vRXhwYW5kIHNlbGVjdGVkIG1lbnUgaXRlbSdzIHN1Ym1lbnVcbiAgICAoZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc3QgbWVudUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtaXRlbScpO1xuXG4gICAgICAgIGZvcihsZXQgaT0wOyBpPG1lbnVJdGVtcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAvL1Bhc3NlcyBJZCBvZiBob3ZlcmVkIG1lbnUtaXRlbSBpbnRvIHRoZSByZXZlYWxEb3duIGZ1bmN0aW9uLT5rbm93cyB3aGljaCBtZW51IGl0ZW0gdG8gb3BlblxuICAgICAgICAgICAgbGV0IGNpZD0gbWVudUl0ZW1zW2ldLmdldEF0dHJpYnV0ZSgnaWQnKVxuICAgICAgICAgICAgbWVudUl0ZW1zW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGZ1bmN0aW9uKGNpZCl7cmV2ZWFsRG93bihtZW51SXRlbXNbaV0uZ2V0QXR0cmlidXRlKCdpZCcpKX0pXG4gICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmdW5jdGlvbiByZXZlYWxEb3duKGlkKSB7XG4gICAgICAgICAgICAvL0Nsb3NlIGFsbCBtZW51IGRyb3Bkb3ducyBiZWZvcmUgb3BlbmluZyBhIG5ldyBvbmUgLS1rZWVwcyBmcm9tIGhhdmluZyB0d28gb3BlbiBzaW11bHRhbmVvdXNseVxuICAgICAgICAgICAgbGV0IGRyb3Bkb3duID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZG93bi1jb250ZW50Jyk7XG4gICAgICAgICAgICBmb3IobGV0IGk9MDsgaTxkcm9wZG93bi5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgaWYgKGRyb3Bkb3duW2ldLmNsYXNzTGlzdC5jb250YWlucygnc2hvdycpKXtcbiAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25baV0uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAvL1Nob3cgdGhlIGFwcHJvcHJvYXRlIG1lbnUgZHJvcGRvd25cbiAgICAgICAgICAgIGNvbnN0IGRvd24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpZH1Db250ZW50YClcbiAgICAgICAgICAgIGRvd24uY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpXG4gICAgICAgIH1cbiAgICB9KSgpO1xuXG4gICAgLy9DbGljayBhd2F5IGZyb20gdGhlIG1lbnUgdG8gbWFrZSBpdCBkaXNhcHBlYXJcbiAgICAoZnVuY3Rpb24oKXtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGNsaWNrQXdheSk7XG4gICAgICAgIGZ1bmN0aW9uIGNsaWNrQXdheShlKXtcbiAgICAgICAgICAgIGlmICghZS50YXJnZXQubWF0Y2hlcygnLm1lbnUtaXRlbScpICYmICFlLnRhcmdldC5tYXRjaGVzKCcuZG93bi1pdGVtJykpe1xuICAgICAgICAgICAgICAgIGxldCBkcm9wZG93biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Rvd24tY29udGVudCcpO1xuICAgICAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPGRyb3Bkb3duLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRyb3Bkb3duW2ldLmNsYXNzTGlzdC5jb250YWlucygnc2hvdycpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pKCk7XG5cbiAgICAvL01vYmlsZSBtZW51IGV4cGFuZFxuICAgIChmdW5jdGlvbigpe1xuICAgICAgICBsZXQgbWVudUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51Jyk7XG5cbiAgICAgICAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGV4cGFuZE1lbnUoKSlcblxuXG4gICAgICAgIGZ1bmN0aW9uIGV4cGFuZE1lbnUoKXtcbiAgICAgICAgICAgIGxldCBtZW51SXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtZW51LWl0ZW0nKTtcblxuICAgICAgICAgICAgQXJyYXkuZnJvbShtZW51SXRlbXMpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ3Nob3dNb2JpbGUnKTtcbiAgICAgICAgICAgIH0pXG4gICAgfVxuICAgIH0pKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbnVDb250cm9sbGVyOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IG1lbnVDb250cm9sbGVyIGZyb20gJy4vbWVudXMuanMnXG5cbmNvbnNvbGUubG9nKCdJZiB5b3Ugc2VlIG1lLCBldmVyeXRoaW5nIGlzIEEgTyBLJylcblxubWVudUNvbnRyb2xsZXIoKVxuXG5cbmNvbnN0IGltYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ltYWdlJyk7XG5cbmxldCBjdXJyZW50TnVtYmVyID0gMDtcblxubGV0IGFycm93UmlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXJyb3dSaWdodCcpXG5hcnJvd1JpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiBtb3ZlUmlnaHQoKSlcblxubGV0IGFycm93TGVmdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcnJvd0xlZnQnKVxuYXJyb3dMZWZ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiBtb3ZlTGVmdCgpKVxuXG5mdW5jdGlvbiBtb3ZlUmlnaHQoKXtcbiAgICBjdXJyZW50TnVtYmVyKytcbiAgICBjaGFuZ2VBY3RpdmUoY3VycmVudE51bWJlcilcbiAgICByZXR1cm4gY3VycmVudE51bWJlclxufVxuXG5mdW5jdGlvbiBtb3ZlTGVmdCgpe1xuICAgIGN1cnJlbnROdW1iZXItLVxuICAgIGNoYW5nZUFjdGl2ZShjdXJyZW50TnVtYmVyKVxuICAgIHJldHVybiBjdXJyZW50TnVtYmVyXG59XG5cblxuXG5mdW5jdGlvbiBjbGVhclNsaWRlcigpe1xuICAgIGZvcihsZXQgaT0wOyBpPGltYWdlcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGlmIChpbWFnZXNbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdsZWZ0Jykpe1xuICAgICAgICAgICAgaW1hZ2VzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2xlZnQnKVxuICAgICAgICB9ZWxzZSBpZiAoaW1hZ2VzW2ldLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpe1xuICAgICAgICAgICAgaW1hZ2VzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICAgIH1lbHNlIGlmIChpbWFnZXNbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdyaWdodCcpKXtcbiAgICAgICAgICAgIGltYWdlc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdyaWdodCcpXG4gICAgICAgIH1cblxuXG4gICAgfVxuICAgIFxuXG59XG5cblxuZnVuY3Rpb24gY2hhbmdlQWN0aXZlKGFjdGl2ZUluZGV4KXtcbiAgICBjbGVhclNsaWRlcigpXG4gICAgbGV0IGxlZnRcbiAgICBsZXQgcmlnaHRcbiAgICBpZiAoYWN0aXZlSW5kZXggPT09IDApe1xuICAgICAgICBsZWZ0ID0gaW1hZ2VzLmxlbmd0aCAtIDFcbiAgICB9ZWxzZXtcbiAgICAgICAgbGVmdCA9IGFjdGl2ZUluZGV4IC0gMVxuICAgIH1cblxuICAgIGlmIChhY3RpdmVJbmRleCA9PT0gaW1hZ2VzLmxlbmd0aCAtIDEpe1xuICAgICAgICByaWdodCA9IDBcbiAgICB9IGVsc2Uge1xuICAgICAgICByaWdodCA9IGFjdGl2ZUluZGV4ICsgMVxuICAgIH1cblxuICAgIGltYWdlc1tsZWZ0XS5jbGFzc0xpc3QucmVtb3ZlKCdub25lJyk7XG4gICAgaW1hZ2VzW2FjdGl2ZUluZGV4XS5jbGFzc0xpc3QucmVtb3ZlKCdub25lJyk7XG4gICAgaW1hZ2VzW3JpZ2h0XS5jbGFzc0xpc3QucmVtb3ZlKCdub25lJyk7XG5cbiAgICBpbWFnZXNbbGVmdF0uY2xhc3NMaXN0LmFkZCgnbGVmdCcpO1xuICAgIGltYWdlc1thY3RpdmVJbmRleF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgaW1hZ2VzW3JpZ2h0XS5jbGFzc0xpc3QuYWRkKCdyaWdodCcpO1xuXG4gICAgbGV0IG1hcmdpbkZhY3RvciA9IDEyNVxuICAgIGxldCBtb3ZlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb3ZlcicpXG5cbiAgICBpZiAoYWN0aXZlSW5kZXggPT0gMCl7XG4gICAgICAgIG1vdmVyLnN0eWxlLm1hcmdpbkxlZnQgPSAgYCR7bWFyZ2luRmFjdG9yfXB4YFxuICAgIH1lbHNlIHtcbiAgICAgICAgbW92ZXIuc3R5bGUubWFyZ2luTGVmdCA9IGAke21hcmdpbkZhY3RvciAtIDQ1NSphY3RpdmVJbmRleH1weGAgXG4gICAgfVxuXG5cbn1cblxuXG5cblxuY2hhbmdlQWN0aXZlKGN1cnJlbnROdW1iZXIpXG5cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9