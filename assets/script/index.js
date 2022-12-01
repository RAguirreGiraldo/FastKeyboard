'use strict';
/* 
document.getElementById("buttonstart").addEventListener("click", startgame)


function sumarscore() {

}


// codigo de funcion decrementar tiempo

let seconds = 99;
      let timer = setInterval(function () {
        seconds--;
        if (seconds == 0) {
          stoptimer();
        }
        document.getElementById("timeremainder").innerHTML=seconds;
      }, 1000);

      function stoptimer() {
        clearInterval(timer);
      }






function startgame() {
    alert('hola');
    if ("buttonstart" = true) {

    }
}


*/















/* constante palabras */ /*

const keys = [
        "dinosaur",
        "love",
        "pineapple",
        "calendar",
        "robot",
        "building",
        "population",
        "weather",
        "bottle",
        "history",
        "dream",
        "character",
        "money",
        "absolute",
        "discipline",
        "machine",
        "accurate",
        "connection",
        "rainbow",
        "bicycle",
        "eclipse",
        "calculator",
        "trouble",
        "watermelon",
        "developer",
        "philosophy",
        "database",
        "periodic",
        "capitalism",
        "abominable",
        "component",
        "future",
        "pasta",
        "microwave",
        "jungle",
        "wallet",
        "canada",
        "coffee",
        "beauty",
        "agency",
        "chocolate",
        "eleven",
        "technology",
        "alphabet",
        "knowledge",
        "magician",
        "professor",
        "triangle",
        "earthquake",
        "baseball",
        "beyond",
        "evolution",
        "banana",
        "perfumer",
        "computer",
        "management",
        "discovery",
        "ambition",
        "music",
        "eagle",
        "crown",
        "chess",
        "laptop",
        "bedroom",
        "delivery",
        "enemy",
        "button",
        "superman",
        "library",
        "unboxing",
        "bookstore",
        "language",
        "homework",
        "fantastic",
        "economy",
        "interview",
        "awesome",
        "challenge",
        "science",
        "mystery",
        "famous",
        "league",
        "memory",
        "leather",
        "planet",
        "software",
        "update",
        "yellow",
        "keyboard",
        "window",
      ];

    document.getElementById("inputypeword").addEventListener("keyup",comparewords);
    
    let score = 0;

    function comparewords(){
        let currentword = document.getElementById("showWords").textContent.toUpperCase();
        console.log(currentword);
        let typegamer = document.getElementById("inputypeword").value.toUpperCase();
        console.log(" type Gamer " + typegamer);
        if (currentword == typegamer ) {
            console.log(" Palabra Igual ");
            score++;
            document.getElementById("pointscore").innerHTML=score;
            randomizewords();
            document.getElementById("inputypeword").value="";
        } else{
            console.log(" Sigue Intentando ");
        }
    }


      function randomizewords() {
        let originalLen = keys.length;

        const obj = {};

        for (let i = 0; i < originalLen; i++) {
          let k = Math.floor(Math.random() * keys.length);
          //console.log(k + " Palabras Aletorias: " + keys[k]);
          document.getElementById("showWords").innerHTML = keys[k];
        }
        console.log(obj);
      }

      randomizewords();


*/