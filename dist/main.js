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


function clearSlider(){
    for(let i=0; i<images.length; i++){
        if (images[i].classList.contains('left')){
            images[i].classList.remove('left')
        }else if (images[i].classList.contains('active')){
            images[i].classList.remove('active')
        }else if (images[i].classList.contains('right')){
            images[i].classList.remove('right')
        }

        images[i].classList.add('none')
    }
    

}


function makeSlider(activeIndex){
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
}

makeSlider(5)




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYW1wbGUtZHJvcGRvd24vLi9zcmMvbWVudXMuanMiLCJ3ZWJwYWNrOi8vc2FtcGxlLWRyb3Bkb3duL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NhbXBsZS1kcm9wZG93bi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc2FtcGxlLWRyb3Bkb3duL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc2FtcGxlLWRyb3Bkb3duL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc2FtcGxlLWRyb3Bkb3duLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixvQkFBb0I7QUFDeEM7QUFDQTtBQUNBLHFFQUFxRSw0Q0FBNEM7O0FBRWpIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixtQkFBbUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvREFBb0QsR0FBRztBQUN2RDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUJBQW1CO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsaUVBQWUsY0FBYyxFOzs7Ozs7VUM1RDdCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7O0FDTnVDOztBQUV2Qzs7QUFFQSxtREFBYzs7O0FBR2Q7OztBQUdBO0FBQ0EsZ0JBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZnVuY3Rpb24gbWVudUNvbnRyb2xsZXIoKXtcbiAgICAvL0V4cGFuZCBzZWxlY3RlZCBtZW51IGl0ZW0ncyBzdWJtZW51XG4gICAgKGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IG1lbnVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LWl0ZW0nKTtcblxuICAgICAgICBmb3IobGV0IGk9MDsgaTxtZW51SXRlbXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgLy9QYXNzZXMgSWQgb2YgaG92ZXJlZCBtZW51LWl0ZW0gaW50byB0aGUgcmV2ZWFsRG93biBmdW5jdGlvbi0+a25vd3Mgd2hpY2ggbWVudSBpdGVtIHRvIG9wZW5cbiAgICAgICAgICAgIGxldCBjaWQ9IG1lbnVJdGVtc1tpXS5nZXRBdHRyaWJ1dGUoJ2lkJylcbiAgICAgICAgICAgIG1lbnVJdGVtc1tpXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBmdW5jdGlvbihjaWQpe3JldmVhbERvd24obWVudUl0ZW1zW2ldLmdldEF0dHJpYnV0ZSgnaWQnKSl9KVxuICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZnVuY3Rpb24gcmV2ZWFsRG93bihpZCkge1xuICAgICAgICAgICAgLy9DbG9zZSBhbGwgbWVudSBkcm9wZG93bnMgYmVmb3JlIG9wZW5pbmcgYSBuZXcgb25lIC0ta2VlcHMgZnJvbSBoYXZpbmcgdHdvIG9wZW4gc2ltdWx0YW5lb3VzbHlcbiAgICAgICAgICAgIGxldCBkcm9wZG93biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Rvd24tY29udGVudCcpO1xuICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8ZHJvcGRvd24ubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGlmIChkcm9wZG93bltpXS5jbGFzc0xpc3QuY29udGFpbnMoJ3Nob3cnKSl7XG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgLy9TaG93IHRoZSBhcHByb3Byb2F0ZSBtZW51IGRyb3Bkb3duXG4gICAgICAgICAgICBjb25zdCBkb3duID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aWR9Q29udGVudGApXG4gICAgICAgICAgICBkb3duLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKVxuICAgICAgICB9XG4gICAgfSkoKTtcblxuICAgIC8vQ2xpY2sgYXdheSBmcm9tIHRoZSBtZW51IHRvIG1ha2UgaXQgZGlzYXBwZWFyXG4gICAgKGZ1bmN0aW9uKCl7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBjbGlja0F3YXkpO1xuICAgICAgICBmdW5jdGlvbiBjbGlja0F3YXkoZSl7XG4gICAgICAgICAgICBpZiAoIWUudGFyZ2V0Lm1hdGNoZXMoJy5tZW51LWl0ZW0nKSAmJiAhZS50YXJnZXQubWF0Y2hlcygnLmRvd24taXRlbScpKXtcbiAgICAgICAgICAgICAgICBsZXQgZHJvcGRvd24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkb3duLWNvbnRlbnQnKTtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGk9MDsgaTxkcm9wZG93bi5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkcm9wZG93bltpXS5jbGFzc0xpc3QuY29udGFpbnMoJ3Nob3cnKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBkcm9wZG93bltpXS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KSgpO1xuXG4gICAgLy9Nb2JpbGUgbWVudSBleHBhbmRcbiAgICAoZnVuY3Rpb24oKXtcbiAgICAgICAgbGV0IG1lbnVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpO1xuXG4gICAgICAgIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBleHBhbmRNZW51KCkpXG5cblxuICAgICAgICBmdW5jdGlvbiBleHBhbmRNZW51KCl7XG4gICAgICAgICAgICBsZXQgbWVudUl0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWVudS1pdGVtJyk7XG5cbiAgICAgICAgICAgIEFycmF5LmZyb20obWVudUl0ZW1zKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdzaG93TW9iaWxlJyk7XG4gICAgICAgICAgICB9KVxuICAgIH1cbiAgICB9KSgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtZW51Q29udHJvbGxlcjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBtZW51Q29udHJvbGxlciBmcm9tICcuL21lbnVzLmpzJ1xuXG5jb25zb2xlLmxvZygnSWYgeW91IHNlZSBtZSwgZXZlcnl0aGluZyBpcyBBIE8gSycpXG5cbm1lbnVDb250cm9sbGVyKClcblxuXG5jb25zdCBpbWFnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbWFnZScpO1xuXG5cbmZ1bmN0aW9uIGNsZWFyU2xpZGVyKCl7XG4gICAgZm9yKGxldCBpPTA7IGk8aW1hZ2VzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgaWYgKGltYWdlc1tpXS5jbGFzc0xpc3QuY29udGFpbnMoJ2xlZnQnKSl7XG4gICAgICAgICAgICBpbWFnZXNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnbGVmdCcpXG4gICAgICAgIH1lbHNlIGlmIChpbWFnZXNbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSl7XG4gICAgICAgICAgICBpbWFnZXNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgICAgfWVsc2UgaWYgKGltYWdlc1tpXS5jbGFzc0xpc3QuY29udGFpbnMoJ3JpZ2h0Jykpe1xuICAgICAgICAgICAgaW1hZ2VzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3JpZ2h0JylcbiAgICAgICAgfVxuXG4gICAgICAgIGltYWdlc1tpXS5jbGFzc0xpc3QuYWRkKCdub25lJylcbiAgICB9XG4gICAgXG5cbn1cblxuXG5mdW5jdGlvbiBtYWtlU2xpZGVyKGFjdGl2ZUluZGV4KXtcbiAgICBjbGVhclNsaWRlcigpXG4gICAgbGV0IGxlZnRcbiAgICBsZXQgcmlnaHRcbiAgICBpZiAoYWN0aXZlSW5kZXggPT09IDApe1xuICAgICAgICBsZWZ0ID0gaW1hZ2VzLmxlbmd0aCAtIDFcbiAgICB9ZWxzZXtcbiAgICAgICAgbGVmdCA9IGFjdGl2ZUluZGV4IC0gMVxuICAgIH1cblxuICAgIGlmIChhY3RpdmVJbmRleCA9PT0gaW1hZ2VzLmxlbmd0aCAtIDEpe1xuICAgICAgICByaWdodCA9IDBcbiAgICB9IGVsc2Uge1xuICAgICAgICByaWdodCA9IGFjdGl2ZUluZGV4ICsgMVxuICAgIH1cblxuICAgIGltYWdlc1tsZWZ0XS5jbGFzc0xpc3QucmVtb3ZlKCdub25lJyk7XG4gICAgaW1hZ2VzW2FjdGl2ZUluZGV4XS5jbGFzc0xpc3QucmVtb3ZlKCdub25lJyk7XG4gICAgaW1hZ2VzW3JpZ2h0XS5jbGFzc0xpc3QucmVtb3ZlKCdub25lJyk7XG5cbiAgICBpbWFnZXNbbGVmdF0uY2xhc3NMaXN0LmFkZCgnbGVmdCcpO1xuICAgIGltYWdlc1thY3RpdmVJbmRleF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgaW1hZ2VzW3JpZ2h0XS5jbGFzc0xpc3QuYWRkKCdyaWdodCcpO1xufVxuXG5tYWtlU2xpZGVyKDUpXG5cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9