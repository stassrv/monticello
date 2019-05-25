"use strict";
; (function () {
    let btn = document.querySelector('.ba-random-btn'),
        randomEl = document.querySelector('.ba-random__result'),
        inputNumber = document.querySelector('[name="number"]');

    function getRandom(max) {
        max = max || 0;
        let random = Math.random() * max;
        random = random = Math.floor(random) + 1;

        return random;
    }

    function showRandomDise() {
        let random1, random2;

        random1 = getRandom(20);
        random2 = getRandom(20);

        randomEl.textContent = random1 + ' : ' + random2;

        // randomEl.textContent = getRandom(20) + ' : ' + getRandom(20); так тоже можно
    }
    btn.addEventListener('click', showRandomDise);

    function showUserRandom() {
        let random;

        let userNumber = inputNumber.value;

        random = Math.random() * userNumber;
        random = Math.floor(random) + 1;

        randomEl.textContent = random;
    }
    // btn.addEventListener('click', showUserRandom);

    function showUserRandom() {
        let num1 = +document.getElementById('min').value;
        let num2 = +document.getElementById('max').value;

        let min, max;

        let random;

        if (min > max) {
            min = num2;
            max = num1;
        } else {
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
        if (reshka) {
            numberOfBeer = "1";
        } else {
            numberOfBeer = "2";
        }

        randomEl.textContent = numberOfBeer;
    }
    // btn.addEventListener('click', TwoBeerOrNotTwoBeer);

    function showRandom() {


        randomEl.textContent = getRandom(100);
    }

    function doTask() {
        let select = document.querySelector('.ba-task');
        let taskType = select.value;

        console.log(taskType);

        // if (taskType == 'dise') {
        //     showRandomDise();
        // } else if (taskType == 'headTail') {
        //     TwoBeerOrNotTwoBeer();
        // } else if (taskType == 'random') {
        //     showRandom();
        // }
        // else if (taskType == 'randomMinMax') {
        //     showUserRandom();
        // }
        switch (taskType) {
            case 'dice':
            showRandomDise();
                break;
            case 'headTail':
            TwoBeerOrNotTwoBeer();
                break;
            case 'random':
            showRandom();
                break;
            case 'randomMinMax':
            showUserRandom();
                break;     
            default:
                break;
        }
    }

    btn.addEventListener('click', doTask);

    function checkYourJS() {
        let answer = prompt('Каково «официальное» название JavaScript?');

        if (answer !== null && answer.toLowerCase === 'ecmascript') {
            answer = "Молодец, тебе 2 пива";
        } else {
            answer = "Не верно";
        }

        randomEl.textContent = answer;
    }
    // btn.addEventListener('click', checkYourJS);


    function checkLogin() {
        let answer1 = prompt('Кто пришел?', '');

        if (answer1 == "Админ") {
            let answer2 = prompt('Какой пароль?', '');

            if (answer2 == 'чёрный властелин') {
                alert('Добро пожаловать!');
            } else if (answer2 == null) {
                alert('Вход отменён');
            } else {
                alert('Пароль не верен');
            }
        } else if (answer1 == null) {
            alert('Вход отменён');
        } else {
            alert('Я вас не знаю');
        }

    }
    // btn.addEventListener('click', checkLogin);

})();