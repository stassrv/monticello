"use strict";
; (function () {
    let btn = document.querySelector('.ba-random-btn'),
        simpleEl = document.querySelector('.ba-random__result'),
        inputNumber = document.querySelector('[name="number"]');

        function showSimpleNumbers() {
            let min = inputNumber.value;
            let max = inputNumber.value;
    
    
            nextPrime:
  for (var i = min; i <= max; i++) {

    for (var j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert( i );
    simpleEl.textContent = i
  }
            
            // for (var i = min; i <= max; i++) {
            //     var count = 0;
            //     for (var j = min; j < i; j++) {
            //       if (i % j) {continue;} 
            //     }
            //     count += 1;
            // }
            // if (count == 1)  simpleEl.textContent = i;
        }
        btn.addEventListener('click', showSimpleNumbers);
    
})();