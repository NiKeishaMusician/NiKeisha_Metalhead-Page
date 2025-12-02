// allsongs.js
let lyrics = [
  //AC/DC
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

  //Black Sabbath
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
},

  //Cannibal Corpse
  {
    text: "(Cannibal Corpse) Brutality becomes my appetite, ____",
    correct: "Violence is now a way of life"
  },
  {
    text: "(Cannibal Corpse) I cum blood, from my erection ____ ",
    correct: "I feel it run, down her throat swallow"
  },
  {
    text: "(Cannibal Corpse) Make them suffer! ____",
    correct: "Make them suffer!"
  },
  {
    text: "(Cannibal Corpse) Beg for your life, you won't escape the knife ____",
    correct: "Your fate was sealed today"
  },
  {
    text: "(Cannibal Corpse) She was so beautiful, ____",
    correct: "I had to kill her"
  },
  {
    text: "(Cannibal Corpse) ____, Gnawing away your flesh",
    correct: "Devoured by vermin"
  },
  {
    text: "(Cannibal Corpse) Warfare begins, cities are ablaze. ____",
    correct: "Tortured screams, skin turning black"
  },
  //Dire Straits
  //Green Day
  //Judas Priest
  //KISS
  //Lorna Shore
  //Mayhem
  //Metallica
  //Pink Floyd
  //QUEEN
  //Radiohead
  //Red Hot chilli Peppers
  //Rob Zombie
  //Slipknot
  //System Of a Down
  //The Beatles
  //The Smiths
  //Type O Negative

  



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