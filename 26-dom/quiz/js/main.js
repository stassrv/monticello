; (function () {



  const quiz = [
    ['Сколько областей в Украине', 27],
    ['Сколько население в Украине', 48000000],
    // ['Число независимости Украины', 24],
    // ['Столица Украины', 'Киев'],
    // ['Президент Украины', 'Вакарчук'],
    // ['Валюта Украины', 'UAH']
  ];

  let correctNum = 0;
  let wrongNum = 0;

  let quizList = document.createElement('ol');
  let quizForm = document.querySelector('.ba-quiz-form');


  quizList.classList.add('ba-quiz-list');

  quizForm.appendChild(quizList);

  quiz.forEach(question => {
    // Create List Iteam
    let liItem = document.createElement('li');
    let liInput = document.createElement('input');

    quizList.appendChild(liItem); // Add list iteam to the quiz list


    liItem.textContent = question[0] + '?'; // Add question to the list item
    liItem.appendChild(liInput); // Add input iteam to the list
    // Add required and type atributes
    liInput.setAttribute('type', 'text');
    liInput.required = true;// or liInput.setAttribute('required', 'true');
    liInput.classList.add('ba-input-answer');
  });

  quizForm.addEventListener('submit', function (e) {
    e.preventDefault();
    // Select all inputs with user answers
    let answerInputs = quizList.querySelectorAll('.ba-input-answer');
    //Chouse each answer input and check with correct answer
    answerInputs.forEach((input, index) => {
      let userAnswer = input.value;

      let liAnswer = quizList.children[index];
      let resultA = document.querySelector('.ba-result'); 
      if (userAnswer == quiz[index][1]) {
        correctNum++;
        liAnswer  .classList.add('ba-correct');
        
      } else {
        wrongNum++;
        liAnswer.classList.add('ba-wrong');
      }
      console.log(correctNum);
      console.log(wrongNum); 
      resultA.textContent = correctNum + wrongNum; 

    });
  });

})();