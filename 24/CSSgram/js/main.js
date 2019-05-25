;(function () {
    'use strict';

    let inputs = document.querySelectorAll('.range, #base');

    function setCssVar(varName, varValue) {
        document.documentElement.style.setProperty('--' + varName, varValue);
    }
    function setFiltertextValue(varName, varValue) {
        let el = document.getElementById(varName + '-label');
        if (el == null) return; // If no such el g out function
        el.textContent = varValue;
    }
    function changeStyleElement(el) {
        let range = el;
        let cssName =  range.name,
            cssValue = range.value,
            prefix = range.dataset.prefix || ''
            ;
            cssValue += prefix;
        // if(range.name == 'blur' || range.name == 'spacing'){
        //     cssValue += 'px';
        // }
     setCssVar(cssName, cssValue);
     setFiltertextValue(cssName, cssValue);         
    }
    function changeStyle() {
        changeStyleElement(this);
    }
    inputs.forEach(function(element) {
        element.addEventListener('change', changeStyle);
        element.addEventListener('input', changeStyle);
    });

    let clearBtn = document.querySelector('[data-clear]');

    clearBtn.addEventListener('click', function (e) {
        inputs.forEach(function(element) {
            let defaultValue = element.getAttribute('value');
            element.value = defaultValue; // Reset
            changeStyleElement(element); // Reset all css var to default
        });
    })
})();

// let borderRange = document.querySelector('#spacing'),
//     colorRange = document.querySelector('#base'),
//     blurRange = document.querySelector('#blur');

//     function SetCssVar(varName, varValue) {
//         document.documentElement.style.setProperty(varName, varValue);
//     }

//     function changeBorder() {
//         // let borderSize = borderRange.value;
//         // imgWrap.style.borderWidth = borderSize + 'px';
//         SetCssVar('--spacing', borderRange.value + 'px');
//     }
//     borderRange.addEventListener('change', changeBorder);
//     borderRange.addEventListener('input', changeBorder);

//     function changeColor() {
//     //    imgWrap.style.borderColor = color.Range.value;
//     SetCssVar('--base', colorRange.value);
//     }
//     colorRange.addEventListener('change', changeColor);
//     colorRange.addEventListener('input', changeColor);

//     function blurValue() {
//         SetCssVar('--blur', blurRange.value + 'px');
//     }

//     blurRange.addEventListener('change', blurValue);
//     blurRange.addEventListener('input', blurValue);