let first = document.querySelectorAll(".box");
const arr = ["Stone", "Paper", "Scissors"];
let stopp = document.querySelector("#stop");
let second = document.querySelector("#start");
let pa = document.querySelector("#pa");
let tr = false;

second.addEventListener("click", () => {
    pa.innerText = "Game Started";
    console.log("Game Started");
    tr = true;
});

stopp.addEventListener("click", () => {
    pa.innerText = "Game Stopped";
    console.log("Game Stopped, click start to play again");
    tr = false;
});


first.forEach((box) => {
    box.addEventListener("click", () => {
        if (!tr) return;

        let nu = Math.floor(Math.random() * 3);
        let computerchoice = arr[nu];
        let userchoice = box.innerText;

        if (userchoice === computerchoice) {
            pa.innerText = "Tie!";
            console.log("It's a Tie!");
        } else if (
            (userchoice === "Stone" && computerchoice === "Scissors") ||
            (userchoice === "Scissors" && computerchoice === "Paper") ||
            (userchoice === "Paper" && computerchoice === "Stone")
        ) {
            pa.innerText = "You Won!";
            console.log("You Won!");
        } else {
            pa.innerText = "Try again, Answer was " + computerchoice;
            console.log("You Lose! Answer was", computerchoice);
        }
    });
});


