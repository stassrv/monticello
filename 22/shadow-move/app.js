"use strict";

let hero = document.querySelector('.ba-hero'),
    text = document.querySelector('.ba-cool-title');

    let walk = 80; //80px
function shadowMove(event) {
    let x = event.clientX,
    y = event.clientY;

    let width = hero.offsetWidth,
    height = hero.offsetHeight;

    let xWalk = x / width * walk - walk / 2;
    let yWalk = y / height * walk - walk / 2;

    xWalk = Math.round(xWalk);

    //make 4 shadows form use coorinates
    let shadow = xWalk + 'px ' + yWalk +'px 0 rgba(255,0,255,0.6), ';

    shadow += -xWalk + 'px ' + -yWalk +'px 0 rgba(0,255,255,0.6), ';
    shadow += yWalk + 'px ' + xWalk +'px 0 rgba(255,255,0,0.6), ';
    shadow += -yWalk + 'px ' + -xWalk +'px 0 rgba(0,0,255,0.6) ';

    // Set shadow style to the title
    text.style.textShadow = shadow;
}

hero.addEventListener('mousemove', shadowMove);

