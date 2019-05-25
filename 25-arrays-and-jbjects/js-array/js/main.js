; (function () {
    // let playlist = [
    //     'we',
    //     'you',
    //     'me',
    //     'he',
    //     'she'
    // ];

    // let playlistElement = document.querySelector('.ba-playlist');

    // for (let index = 0; index < playlist.length; index++) {
    //     const element = playlist[index];
    //     playlistElement.innerHTML += '<li>' + element + '</li>';
    // }

    // playlist.forEach(song => {
    //     playlistElement.innerHTML += '<li>' + element + '</li>';
    // })
    // playlistElement.textContent += playlist[4];

    // var salaries = {
    //     "Вася": 100,
    //     "Петя": 300,
    //     "Даша": 250,
    //     "Даша": 500
    // };

    // console.log('Петя');

    // console.log(item, ' : ', salaries[name]);

    // let summ = 0;
    // for (const name in salaries) {
    //     summ >= salaries[name];

    // }
    // console.log(summ);

    // var max = 0;
    // var maxName = "";
    // for (var name in salaries) {
    //     if (max < salaries[name]) {
    //         max = salaries[name];
    //         maxName = name;
    //     }
    // }
    // console.log(max);


    // const quiz = [
    //     ['Сколько областей в Украине', 27],
    //     ['Сколько население в Украине', 48000000],
    //     ['Число независимости Украины', 24],
        // ['Столица Украины', 'Киев'],
        // ['Президент Украины', 'Вакарчук'],
        // ['Валюта Украины', 'UAH']
//    ];

//    let quizList = document.querySelector('.ba-quiz');

//    let countFake = 0;
//     let countTrue = 0;

//    quiz.forEach(question => {
//        let answer = prompt(question[0]);
//         let vernoneverno;
//        if(answer == question[1]){
//         vernoneverno = 'Верно';
//         countTrue++;
//        } else {
//            vernoneverno = 'Неверно';
//         countFake++;
//        }

       

//        quizList.innerHTML += '<li>' + question[0] + ' - ' + vernoneverno + '</li>';
//    });
//    console.log(countFake, countTrue);



    // let styles = ['Джаз','Блюз'];
    // styles.push('Рок-н-Ролл');
    // styles[styles.length - 2] = 'Классика';
    // styles.shift();
    // styles.unshift('Рэп', 'Регги');



//     let number = prompt('Enter number');
//     let array = [];
//     console.log(parseInt(number));
   
//     do {
        

//    } while(number !== null && parseInt(number) !== NaN){
//     number = prompt('Enter number');
    
//     array.push(+number);
//    ;
//    }

var menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
  
  function multiplyNumeric(menu) {
    for (var key in menu) {
      if (isNumeric(menu[key])) {
        menu[key] *= 2;
      }
    }
  }
  
  multiplyNumeric(menu);
  
  alert( "menu width=" + menu.width + " height=" + menu.height + " title=" + menu.title );
})();