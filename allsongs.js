// index.js
let lyrics = [
  {
    text: "You've been ____",
    correct: "thunderstruck"
  },
  {
    text: "Nothing else ____ ",
    correct: "matters"
  },
  {
    text: "We're not gonna ____ it (Twisted Sister - We're Not Gonna Take It)",
    correct: "take"
  },
  {
    text: "You give love a bad ____ (Bon Jovi - You Give Love a Bad Name)",
    correct: "name"
  }
];


let currentLyric;


function generateLyric() {
  const randomIndex = Math.floor(Math.random() * lyrics.length);
  currentLyric = lyrics[randomIndex];
  document.getElementById("lyric").textContent = currentLyric.text;
  document.getElementById("message").textContent = "";
  document.getElementById("answer").value = "";
}


function checkAnswer() {
  const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
  const message = document.getElementById("message");


  if (!currentLyric) {
    message.textContent = "Click 'Next Lyric' to start!";
    return;
  }


  if (userAnswer === currentLyric.correct.toLowerCase()) {
    message.textContent = "🔥 Correct! You rock! 🔥";
    message.style.color = "limegreen";
  } else {
    message.textContent = `Uh oh! Try again with this"${currentLyric.correct}".`;
    message.style.color = "red";
  }
}