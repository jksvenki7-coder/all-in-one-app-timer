                  /* ==========================================
   TIMER CHALLENGE GAME
   SCRIPT.JS
   PART 9A
========================================== */

const timer = document.getElementById("timer");

const startBtn = document.getElementById("startBtn");

const stopBtn = document.getElementById("stopBtn");

const resetBtn = document.getElementById("resetBtn");

const result = document.getElementById("result");

const playerName = document.getElementById("playerName");

const gameMode = document.getElementById("gameMode");

const targetTime = document.getElementById("targetTime");

const progressBar = document.getElementById("progressBar");

const score = document.getElementById("score");

const stars = document.getElementById("stars");

const coins = document.getElementById("coins");

const lives = document.getElementById("lives");


const userData =
JSON.parse(
localStorage.getItem("timerGameUser")
);

if(userData){

    playerName.textContent = userData.name;

}

const selectedMode =
localStorage.getItem("timerGameMode");

const selectedTarget =
Number(
localStorage.getItem("targetTime")
);

gameMode.textContent =
selectedMode
?
selectedMode.toUpperCase()
:
"EASY";

targetTime.textContent =
selectedTarget + " Seconds";


let time = 0;

let interval = null;

let running = false;

let currentScore = 0;

let currentStars = 0;

let currentCoins = 0;

let currentLives = 3;


timer.textContent = "0.00";

score.textContent = currentScore;

stars.textContent = currentStars;

coins.textContent = currentCoins;

lives.textContent = currentLives;

progressBar.style.width = "0%";

result.textContent =
"Press Start To Play";


startBtn.addEventListener("click",function(){

    if(running){

        return;

    }

    running = true;

    interval =
    setInterval(function(){

        time += 0.01;

        timer.textContent =
        time.toFixed(2);

        let percentage =
        (time / selectedTarget) * 100;

        if(percentage > 100){

            percentage = 100;

        }

        progressBar.style.width =
        percentage + "%";

    },10);

  /* ==========================================
   PART 9B
   STOP BUTTON
   RESULT CALCULATION
========================================== */

stopBtn.addEventListener("click", function () {

    if (!running) {

        return;

    }

    running = false;

    clearInterval(interval);

    const difference = Math.abs(
        time - selectedTarget
    );

    if (difference <= 0.10) {

        result.textContent =
            "🎉 Perfect Timing!";

        currentScore += 100;

        currentStars += 3;

        currentCoins += 50;

    }

    else if (difference <= 0.30) {

        result.textContent =
            "👏 Great Timing!";

        currentScore += 70;

        currentStars += 2;

        currentCoins += 30;

    }

    else if (difference <= 0.50) {

        result.textContent =
            "🙂 Good Try!";

        currentScore += 40;

        currentStars += 1;

        currentCoins += 15;

    }

    else {

        result.textContent =
            "❌ Missed Target";

        currentLives--;

        if (currentLives < 0) {

            currentLives = 0;

        }

    }

    score.textContent =
        currentScore;

    stars.textContent =
        currentStars;

    coins.textContent =
        currentCoins;

    lives.textContent =
        currentLives;

    localStorage.setItem(
        "timerGameScore",
        currentScore
    );

    localStorage.setItem(
        "timerGameStars",
        currentStars
    );

    localStorage.setItem(
        "timerGameCoins",
        currentCoins
    );

    localStorage.setItem(
        "timerGameLives",
        currentLives
    );

    if (currentLives === 0) {

        result.textContent =
            "💀 Game Over";

        startBtn.disabled = true;

        stopBtn.disabled = true;

    }

/* ==========================================
   PART 9C
   RESET BUTTON
   GAME RESET
========================================== */

resetBtn.addEventListener("click", function () {

    clearInterval(interval);

    running = false;

    time = 0;

    timer.textContent = "0.00";

    progressBar.style.width = "0%";

    result.textContent = "Press Start To Play";

});

window.addEventListener("load", function () {

    const savedScore =
        Number(localStorage.getItem("timerGameScore")) || 0;

    const savedStars =
        Number(localStorage.getItem("timerGameStars")) || 0;

    const savedCoins =
        Number(localStorage.getItem("timerGameCoins")) || 0;

    const savedLives =
        Number(localStorage.getItem("timerGameLives"));

    currentScore = savedScore;

    currentStars = savedStars;

    currentCoins = savedCoins;

    currentLives = isNaN(savedLives) ? 3 : savedLives;

    score.textContent = currentScore;

    stars.textContent = currentStars;

    coins.textContent = currentCoins;

    lives.textContent = currentLives;

    if (currentLives === 0) {

        result.textContent = "💀 Game Over";

        startBtn.disabled = true;

        stopBtn.disabled = true;

    }

});

function resetGameData() {

    currentScore = 0;

    currentStars = 0;

    currentCoins = 0;

    currentLives = 3;

    score.textContent = currentScore;

    stars.textContent = currentStars;

    coins.textContent = currentCoins;

    lives.textContent = currentLives;

    localStorage.setItem("timerGameScore", 0);

    localStorage.setItem("timerGameStars", 0);

    localStorage.setItem("timerGameCoins", 0);

    localStorage.setItem("timerGameLives", 3);

    startBtn.disabled = false;

    stopBtn.disabled = false;

    result.textContent = "New Game Started";

}

console.log("Timer Challenge Game Loaded Successfully");
