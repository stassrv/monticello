; (function () {



  const peopleInSpace = {
    "message": "success",
    "number": 6,
    "crew": [
        { "craft": "ISS", "name": "Oleg Kononenko" },
        { "craft": "BA", "name": "David Saint-Jacques" },
        { "craft": "FBI", "name": "Anne McClain" },
        { "craft": "SBU", "name": "Alexey Ovchinin" },
        { "craft": "BA", "name": "Nick Hague" },
        { "craft": "ISS", "name": "Christina Koch" }
    ]
};

  let peopleNumberEl = document.querySelector('[data-number]');
  let spacemanList = document.querySelector('.ba-spaceman-list');

  peopleNumberEl.textContent = peopleInSpace.number; // or peopleNumberEl.textContent = peopleInSpace.crew.length;

  let liTmpl = document.getElementById('li-tmpl');
  liTmpl = liTmpl.innerHTML;

  spacemanList.innerHTML = '';
  
  for (let index = 0; index < peopleInSpace.crew.length; index++) {
    // let crewmanHtml = liTmpl.replace('ISS', peopleInSpace.crew[index].craft);
    let crewmanHtml = liTmpl
    .replace(/{{craft}}/ig, peopleInSpace.crew[index].craft)
    .replace(/{{name}}/ig, peopleInSpace.crew[index].name)
    .replace(/{{index}}/ig, index + 1)
    ;
    spacemanList.innerHTML += crewmanHtml;
  }


})();