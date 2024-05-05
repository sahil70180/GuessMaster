"use-strict";

const randomNumbergenerator = function () {
  return Math.round(Math.random() * 20) + 1;
};
let randomNumber = randomNumbergenerator();
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage("⛔ OOPS..No Number!");
  } else if (guess === randomNumber) {
    document.querySelector(".number").textContent = guess;
    displayMessage("You Guess Correctly🤗");
    document.body.style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== randomNumber) {
    if (score > 1) {
      displayMessage(guess > randomNumber ? "Too HIGH🤥" : "Too Low!");
      document.body.style.backgroundColor = "#222";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You Lost the game");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  randomNumber = randomNumbergenerator();
  document.querySelector(".number").textContent = "?";
  document.body.style.backgroundColor = "#222";
  displayMessage("Start guessing...");
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".score").textContent = 20;
  score = 20;
});
