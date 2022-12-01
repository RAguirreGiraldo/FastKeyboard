'use strict';

import Score from "./Score.js";

document.getElementById("buttonstart").addEventListener("click", startgame)
let userName ="";

function startgame() {
    userName=prompt("Type your Name");
    document.getElementById("inputypeword").disabled=false;
    document.getElementById("inputypeword").focus();
    document.getElementById("inputypeword").value="";
    seconds = 10;
    score = 0;
    document.getElementById("pointscore").innerHTML=score;    
    document.getElementById("timeremainder").innerHTML = seconds;
    decrementTimer();
    randomizewords();
}

// logical to decrement time

let seconds = 10;
let timer = '';

function decrementTimer() {
    timer = setInterval(function () {
        seconds--;
        if (seconds == 0) {
            stoptimer();
        }
        document.getElementById("timeremainder").innerHTML = seconds;
    }, 1000);
}

function stoptimer() {
    clearInterval(timer); //stop timer
    document.getElementById("inputypeword").disabled=true;
    let newDategame = new Date().toString().substring(0,15);
    let puntaje = new Score(newDategame, score, userName);
    let scoreRow = document.getElementById("tmprow");
    let cloneRow = scoreRow.cloneNode(true);
    cloneRow.removeAttribute("hidden");
    document.getElementById("row").prepend(cloneRow);
    document.getElementById("tdate").innerHTML=puntaje.date;
    document.getElementById("tname").innerHTML=puntaje.person;
    document.getElementById("thits").innerHTML=puntaje.hits; 
} 

const keys = [ 'dinosaur', 'love', 'pineapple', 'calendar', 'robot', 'building', 'population',
'weather', 'bottle', 'history', 'dream', 'character', 'money', 'absolute',
'discipline', 'machine', 'accurate', 'connection', 'rainbow', 'bicycle',
'eclipse', 'calculator', 'trouble', 'watermelon', 'developer', 'philosophy',
'database', 'periodic', 'capitalism', 'abominable', 'component', 'future',
'pasta', 'microwave', 'jungle', 'wallet', 'canada', 'coffee', 'beauty', 'agency',
'chocolate', 'eleven', 'technology', 'alphabet', 'knowledge', 'magician',
'professor', 'triangle', 'earthquake', 'baseball', 'beyond', 'evolution',
'banana', 'perfumer', 'computer', 'management', 'discovery', 'ambition', 'music',
'eagle', 'crown', 'chess', 'laptop', 'bedroom', 'delivery', 'enemy', 'button',
'superman', 'library', 'unboxing', 'bookstore', 'language', 'homework',
'fantastic', 'economy', 'interview', 'awesome', 'challenge', 'science', 'mystery',
'famous', 'league', 'memory', 'leather', 'planet', 'software', 'update', 'yellow',
'keyboard', 'window' ];

function randomizewords() {
    let originalLen = keys.length;

    for (let i = 0; i < originalLen; i++) {
      let k = Math.floor(Math.random() * keys.length);
      document.getElementById("showWords").innerHTML = keys[k];
    }
}

// listen gamer type and compare Words
document.getElementById("inputypeword").addEventListener("keyup",comparewords);

let score = 0;

function comparewords(){
    let currentword = document.getElementById("showWords").textContent.toUpperCase();
    let typegamer = document.getElementById("inputypeword").value.toUpperCase();
    if (currentword == typegamer ) {
        score++;
        document.getElementById("pointscore").innerHTML=score;
        randomizewords();
        document.getElementById("inputypeword").value="";
    } 
}

