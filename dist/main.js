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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYW1wbGUtZHJvcGRvd24vLi9zcmMvbWVudXMuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLWRyb3Bkb3duL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NhbXBsZS1kcm9wZG93bi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc2FtcGxlLWRyb3Bkb3duL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc2FtcGxlLWRyb3Bkb3duL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc2FtcGxlLWRyb3Bkb3duLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixvQkFBb0I7QUFDcEM7QUFDQTtBQUNBLGlFQUFpRSw0Q0FBNEM7O0FBRTdHOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixtQkFBbUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnREFBZ0QsR0FBRztBQUNuRDtBQUNBO0FBQ0EsQ0FBQzs7Ozs7QUFLRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsbUJBQW1CO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7O0FBUUQ7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUEsQ0FBQzs7QUFFRDs7QUFFQSxpRUFBZSxjQUFjLEU7Ozs7OztVQ3ZFN0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7QUNOdUM7O0FBRXZDO0FBQ0EsbURBQWMsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5mdW5jdGlvbiBtZW51Q29udHJvbGxlcigpe1xuLy9FeHBhbmQgc2VsZWN0ZWQgbWVudSBpdGVtJ3Mgc3VibWVudVxuKGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgbWVudUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtaXRlbScpO1xuXG4gICAgZm9yKGxldCBpPTA7IGk8bWVudUl0ZW1zLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgLy9QYXNzZXMgSWQgb2YgaG92ZXJlZCBtZW51LWl0ZW0gaW50byB0aGUgcmV2ZWFsRG93biBmdW5jdGlvbi0+a25vd3Mgd2hpY2ggbWVudSBpdGVtIHRvIG9wZW5cbiAgICAgICAgbGV0IGNpZD0gbWVudUl0ZW1zW2ldLmdldEF0dHJpYnV0ZSgnaWQnKVxuICAgICAgICBtZW51SXRlbXNbaV0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgZnVuY3Rpb24oY2lkKXtyZXZlYWxEb3duKG1lbnVJdGVtc1tpXS5nZXRBdHRyaWJ1dGUoJ2lkJykpfSlcbiAgICBcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gcmV2ZWFsRG93bihpZCkge1xuICAgICAgICAvL0Nsb3NlIGFsbCBtZW51IGRyb3Bkb3ducyBiZWZvcmUgb3BlbmluZyBhIG5ldyBvbmUgLS1rZWVwcyBmcm9tIGhhdmluZyB0d28gb3BlbiBzaW11bHRhbmVvdXNseVxuICAgICAgICBsZXQgZHJvcGRvd24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkb3duLWNvbnRlbnQnKTtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8ZHJvcGRvd24ubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgaWYgKGRyb3Bkb3duW2ldLmNsYXNzTGlzdC5jb250YWlucygnc2hvdycpKXtcbiAgICAgICAgICAgICAgICBkcm9wZG93bltpXS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLy9TaG93IHRoZSBhcHByb3Byb2F0ZSBtZW51IGRyb3Bkb3duXG4gICAgICAgIGNvbnN0IGRvd24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpZH1Db250ZW50YClcbiAgICAgICAgZG93bi5jbGFzc0xpc3QudG9nZ2xlKCdzaG93JylcbiAgICB9XG59KSgpO1xuXG5cblxuXG4vL0NsaWNrIGF3YXkgZnJvbSB0aGUgbWVudSB0byBtYWtlIGl0IGRpc2FwcGVhclxuKGZ1bmN0aW9uKCl7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGNsaWNrQXdheSk7XG4gICAgZnVuY3Rpb24gY2xpY2tBd2F5KGUpe1xuICAgICAgICBpZiAoIWUudGFyZ2V0Lm1hdGNoZXMoJy5tZW51LWl0ZW0nKSAmJiAhZS50YXJnZXQubWF0Y2hlcygnLmRvd24taXRlbScpKXtcbiAgICAgICAgICAgIGxldCBkcm9wZG93biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Rvd24tY29udGVudCcpO1xuICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8ZHJvcGRvd24ubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGlmIChkcm9wZG93bltpXS5jbGFzc0xpc3QuY29udGFpbnMoJ3Nob3cnKSl7XG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KSgpO1xuXG5cblxuXG5cblxuXG4vL01vYmlsZSBtZW51IGV4cGFuZFxuKGZ1bmN0aW9uKCl7XG4gICAgbGV0IG1lbnVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpO1xuXG4gICAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGV4cGFuZE1lbnUoKSlcblxuXG4gICAgZnVuY3Rpb24gZXhwYW5kTWVudSgpe1xuICAgICAgICBsZXQgbWVudUl0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWVudS1pdGVtJyk7XG5cbiAgICAgICAgQXJyYXkuZnJvbShtZW51SXRlbXMpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvd01vYmlsZScpO1xuICAgICAgICB9KVxufVxuXG59KSgpO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbnVDb250cm9sbGVyOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IG1lbnVDb250cm9sbGVyIGZyb20gJy4vbWVudXMuanMnXG5cbmNvbnNvbGUubG9nKCdJZiB5b3Ugc2VlIG1lLCBldmVyeXRoaW5nIGlzIEEgTyBLJylcbm1lbnVDb250cm9sbGVyKCkiXSwic291cmNlUm9vdCI6IiJ9