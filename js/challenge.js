const playerName = document.getElementById("playerName");

const startGameBtn = document.getElementById("startGameBtn");

const userData = JSON.parse(localStorage.getItem("timerGameUser"));

if (userData) {

    playerName.textContent = userData.name;

} else {

    playerName.textContent = "Guest";

}

startGameBtn.addEventListener("click", function () {

    const selectedMode = document.querySelector(
        'input[name="mode"]:checked'
    );

    const gameMode = selectedMode.value;

    localStorage.setItem(
        "timerGameMode",
        gameMode
    );

    let targetTime = 10;

    if (gameMode === "easy") {

        targetTime = 10;

    }

    if (gameMode === "medium") {

        targetTime = 15;

    }

    if (gameMode === "hard") {

        targetTime = 20;

    }

    if (gameMode === "extreme") {

        targetTime = 30;

    }

    localStorage.setItem(
        "targetTime",
        targetTime
    );

    window.location.href = "index.html";

});
