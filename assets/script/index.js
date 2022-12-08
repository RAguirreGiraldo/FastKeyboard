'use strict';

import Score from "./Score.js";

document.getElementById("buttonstart").addEventListener("click", startgame)
let userName ="";
let media=document.getElementById("music");
// I need to add restart button.
function startgame() {
    media.play();
    userName=prompt("Type your Name");  //cambiarlo a que sea un ventana de <dialog></dialog>
    media.play();
    document.getElementById("inputypeword").disabled=false;
    document.getElementById("inputypeword").focus();
    document.getElementById("inputypeword").value="";
    seconds = 15;
    score = 0;
    document.getElementById("pointscore").innerHTML=score;    
    document.getElementById("timeremainder").innerHTML = seconds;
    decrementTimer();
    randomizewords();
}

// logical to decrement time

let seconds = 15; //I need to check, why how some weird behaivor
let timer = '';
let highScoresLocalStorage =localStorage.getItem('score') ? JSON.parse(localStorage.getItem('score')):[];

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
    let percent = ((puntaje.hits/keys.length)*100).toString().substring(0,3) + " % "; 
    document.getElementById("inputypeword").value="";
    cloneRow.removeAttribute("hidden");
    document.getElementById("row").prepend(cloneRow); //When I used prepend show me the list to new to the last player I need to improve this
    highScoresLocalStorage.push({...puntaje , percent: percent})
    if(highScoresLocalStorage.length > 1) {
        highScoresLocalStorage = highScoresLocalStorage.sort(function(scoreA, scoreB) {
            if (scoreA.hits < scoreB.hits) {
                return 1;
            } else {
                return -1;
            }
        })
        highScoresLocalStorage = highScoresLocalStorage.slice(0,9);
    }
    
    localStorage.setItem('scores', JSON.stringify(highScoresLocalStorage));
    
    /*
    highScoresLocalStorage.forEach(function (score) {
        let tr = document.createElement("tr").className("");
        scoreRow.appendChild(tr);

        document.getElementById("tdate").innerHTML = score.date;
        document.getElementById("thits").innerHTML = score.hits;
        document.getElementById("tname").innerHTML = score.person;
        document.getElementById("percent").innerHTML = score.percent;
    }); 

    */
    

    media.pause();

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

