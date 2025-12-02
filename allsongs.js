// allsongs.js
let lyrics = [
  //ac/dc
  {
    text: "(AC/DC) You've been ____",
    correct: "thunderstruck"
  },
  {
    text: "Back in black, I hit the ____ ",
    correct: "sack"
  },
  {
    text: "I'm on a highway ____",
    correct: "to hell"
  },
  {
    text: "Cause I'm T.N.T., I'm ____",
    correct: "dynamite"
  },
  { text: "You shook me _____",
    correct: "all night long"
  },
  {
    text: "____ train, Runnin' right off the track",
    correct: "Runaway"
  },
  {
    text: "You got me ringin', ____",
    correct: "Hells Bells"
  },
  {
    text: "Dirty deeds done ____",
    correct: "dirt cheap"
  },
  {
    text: "Who made who? Who turned the ____?",
    correct: "screw"
  },
  {
    text: "It's a ____ to the top",
    correct: "long way"
  },

  //blacksabbath
  {
    text: "(Band - Black Sabbath) I am ____",
    correct: "Iron Man"
  },
{
  text: '(Band - Black Sabbath) "Generals gathered in their masses"',
  correct: "War Pigs"
},
{
  text: "(Band - Black Sabbath) Can you help me, ____?",
  correct: "occupy my brain"
},
{
  text: '(Band - Black Sabbath) "My name is Lucifer, ____"',
  correct: "please take my hand"
},
{
  text: '(Band - Black Sabbath) "The lover of life ____"',
  correct: "is not a sinner"
},
{
  text: '(Band - Black Sabbath) "Revolution in their ____"',
  correct: "minds"
},
{
  text: '(Band - Black Sabbath) "Reflex in the sky warns you, ____"',
  correct: "you are gonna die"
},
{
  text: '(Band - Black Sabbath) "What is this that stands ____?"',
  correct: "before me"
},
{
  text: '(Band - Black Sabbath) "____ and you gotta believe me"',
  correct: "Fairies Wear Boots"
},
{
  text: '(Band - Black Sabbath) "Rocket engines ____ so fast"',
  correct: "burning fuel"
}

  //cannibalcorpse

  



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
    message.textContent = "🔥 Correct! You rock!🔥";
    message.style.color = "limegreen";
  } else {
    message.textContent = `Uh oh! Try again with this"${currentLyric.correct}".`;
    message.style.color = "red";
  }
}