"use strict";
; (function (){
    let btn = document.querySelector('.ba-random-btn'),
        randomEl = document.querySelector('.ba-random__result'),
    inputNumber = document.querySelector('[name="number"]');

   function showRandom() {
       let random1, random2;

        let userNumber = inputNumber.value;

       random1 = Math.random() * 6;
        random1 = Math.floor(random1) + 1;

        random2 = Math.random() * 6;
        random2 = Math.floor(random2) + 1; 
       randomEl.textContent = random1 + ' : ' + random2;
   }

   function showUserRandom() {
    let random;

    let userNumber = inputNumber.value;

    random = Math.random() * userNumber;
     random = Math.floor(random) + 1;

    randomEl.textContent = random;
}          
//    btn.addEventListener('click', showUserRandom);

function showUserRandom() {
    let num1 = +document.getElementById('min').value;
    let num2 = +document.getElementById('max').value;

    let min, max;

    let random;

    if (min > max) {
        min = num2;
        max = num1;
    }else {
        min = num1;
        max = num2;
    }

    random = min + Math.random() * (max - min + 1);
     random = Math.floor(random);

    randomEl.textContent = random;
}          
// btn.addEventListener('click', showUserRandom);

function TwoBeerOrNotTwoBeer() {
    let numberOfBeer;

    let reshka = Math.round(Math.random());
    if(reshka){
        numberOfBeer = "1";
    } else{
        numberOfBeer = "2";
    }

    randomEl.textContent = numberOfBeer;
}          
// btn.addEventListener('click', TwoBeerOrNotTwoBeer);

function checkYourJS() {
    let answer = prompt('Каково «официальное» название JavaScript?');

    if (answer !==null && answer.toLowerCase === 'ecmascript') {
        answer = "Молодец, тебе 2 пива";
    }else{
        answer = "Не верно";
    }

    randomEl.textContent = answer;
}
// btn.addEventListener('click', checkYourJS);


function checkLogin() {
    let answer1 = prompt('Кто пришел?', '');

    if (answer1 == "Админ") {
        let answer2 = prompt('Какой пароль?', '');

        if (answer2 == 'Чёрный Властелин') {
            alert('Добро пожаловать!');
        }else if (answer2 == null) {
            alert('Вход отменён');
        }else {
            alert('Пароль не верен');
        }
    }else if (answer1 == null) {
        alert('Вход отменён');
    }else{
        alert('Я вас не знаю');
    }

}
btn.addEventListener('click', checkLogin);



})();