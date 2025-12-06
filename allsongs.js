// allsongs.js
let lyrics = [
  //AC/DC
  {
    text: "(AC/DC) You've been ____",
    correct: "thunderstruck"
  },
  {
    text: "(AC/DC) Back in black, I hit the ____ ",
    correct: "sack"
  },
  {
    text: "(AC/DC) I'm on a highway ____",
    correct: "to hell"
  },
  {
    text: "(AC/DC) Cause I'm T.N.T., I'm ____",
    correct: "dynamite"
  },
  { text: "(AC/DC) You shook me _____",
    correct: "all night long"
  },
  {
    text: "(AC/DC) ____ train, Runnin' right off the track",
    correct: "Runaway"
  },
  {
    text: "(AC/DC) You got me ringin', ____",
    correct: "Hells Bells"
  },
  {
    text: "(AC/DC) Dirty deeds done ____",
    correct: "dirt cheap"
  },
  {
    text: "(AC/DC) Who made who? Who turned the ____?",
    correct: "screw"
  },
  {
    text: "(AC/DC) It's a ____ to the top",
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
  {
    text: "(Cannibal Corpse) Dead in a grave, your final place, ____",
    correct: "Maggots infest disfigured face"
  },
  {
    text: "(Cannibal Corpse) If you want to live you have to ____",
    correct: "kill or become"
  },
  {
    text: "(Cannibal Corpse) Death walking terror, ____",
    correct: "Slow mental torture"
  },

  //Dire Straits
  {
    text: "(Dire Straits) That ain't workin', that's the way you do it, ____",
    correct: "Money for nothin' and your chicks for free"
  },
  {
    text: "(Dire Straits) With the Sultans, ____",
    correct: "With the Sultans of Swing yeah"
  },
  {
    text: "(Dire Straits) We're fools to make war, ____",
    correct: "On our brothers in arms"
  },
  {
    text: "(Dire Straits) You're so far away from me, ____",
    correct: "You're so far, I just can't see"
  },
  {
    text: "(Dire Straits) Come on and take a low ride with me girl, ____",
    correct: "On the tunnel of love, yeah, love"
  },
  {
    text: "(Dire Straits) Juliet, when we made love, you used to cry, ____",
    correct: "You said 'I love you like the stars above, I'll love you 'til I die'"
  },
  {
    text: "(Dire Straits) Will you and your friend come around? ____",
    correct: "Or are you and your friend gonna get on down"
  },
  {
    text: "(Dire Straits) Why worry, ____",
    correct: "There should be laughter after pain"
  },
  {
    text: "(Dire Straits) He do the walk, do the walk of life, ____",
    correct: "Yeah, he do the walk of life"
  },
  {
    text: "(Dire Straits) Scarred for life, no compensation, ____",
    correct: "Private investigations"
  },

  //Green Day
  {
    text: "(Green Day) Don't wanna be ____",
    correct: "American idiot"
  },
  {
    text: "(Green Day) This is the dawning of the rest of our lives ____",
    correct: "On holiday"
  },
  {
    text: "(Green Day) I walk this empty street ____",
    correct: "On the Boulevard of Broken Dreams"
  },
  {
    text: "(Green Day) Do you have the time ____ ?",
    correct: "to listen to me whine"
  },
  {
    text: "(Green Day) Cause you know where I'll be found, ____",
    correct: "When I come around"
  },
  {
    text: "(Green Day) But never forgets what I lost, ____",
    correct: "Wake me up when September ends"
  },
  {
    text: "(Green Day) Lay down your arms, give up the fight ____",
    correct: "One twenty one guns"
  },
  {
    text: "(Green Day) Do you know the enemy? ____?",
    correct: "Do you know your enemy"
  },
  {
    text: "(Green Day) I wanna be the minority, ____",
    correct: "I don't need your authority"
  },
  {
    text: "(Green Day) Warning, live without warning ____",
    correct: "I say warning live without warning"
  },
  //Judas Priest
  {
    text: "(Judas Priest) Breaking the law, ____",
    correct: "Breaking the law"
  },
  {
    text: "(Judas Priest) ____, Rocking to the dawn",
    correct: "Living after midnight"
  },
  {
    text: "(Judas Priest) He is the Painkiller, ____",
    correct: "This is the Painkiller"
  },
  {
    text: "(Judas Priest) I'm elected electric spy, ____",
    correct: "I'm protected electric eye"
  },
  {
    text: "(Judas Priest) Hell bent, hell bent for leather",
    correct: "Hell bent hell bent for leather"
  },
  {
    text: "(Judas Priest) If you think I'll let it go, you're mad, ____",
    correct: "You've got another thing comin"
  },
  {
    text: "(Judas Priest) ____, Tell me there's no other",
    correct: "I'm your turbo lover"
  },
  {
    text: "(Judas Priest) All hear my warning, ____",
    correct: "Never turn your back on the Ripper"
  },
  {
    text: "(Judas Priest) Keep the world with all its sin, ____",
    correct: "It's not fit for living in"
  },
  {
    text: "(Judas Priest) Changes! Changes! Changes! Changes! ____!",
    correct: "Victim of changes"
  },

  //KISS
  {
    text: "(KISS) You keep on shoutin', you keep on shoutin', ____",
    correct: "I wanna rock and roll all night and party every day"
  },
  {
    text: "(KISS) Get up! Everybody's gonna move their feet. Get down! Everybody's gonna leave their seat, ____",
    correct: "You gotta lose your mind in Detroit Rock City"
  },
  {
    text: "(KISS) You know your man is workin' hard ____",
    correct: "He's worth a deuce"
  },
  {
    text: "(KISS) God of thunder and rock and roll, ____",
    correct: "The spell you're under"
  },
  {
    text: "(KISS) You pull the trigger of my, ____",
    correct: "Love gun"
  },
  {
    text: "(KISS) I think I hear them calling, ____?",
    correct: "Oh Beth what can I do"
  },
  {
    text: "(KISS) You know she's gonna leave you well-done, ____",
    correct: "Hot hot hotter than hell"
  },
  {
    text: "(KISS) Everybody's got to rock and roll, whoa, whoa, ____",
    correct: "Shout it, shout it, shout it out loud"
  },
  {
    text: "(KISS) Got you under their thumb, ____",
    correct: "Woo-ooh black diamond"
  },
  {
    text: "(KISS) I was made for lovin' you, baby ____",
    correct: "You were made for lovin me"
  },
  //Lorna Shore

  {
    text: "(Lorna Shore) My final breath, ____",
    correct: "Swallowed by the womb of death"
  },
  {
    text: "(Lorna Shore) The weakest are doomed to its wicked possession, ____",
    correct: "Your own mind is the King ov Deception"
  },
  {
    text: "(Lorna Shore) My own two hands, the destroyer of man, ____",
    correct: "I have become one with the damned"
  },
  {
    text: "(Lorna Shore) This is the end of times, ____",
    correct: "This is the darkest spawn"
  },
  {
    text: "(Lorna Shore) The truth of it all, ____",
    correct: "We're dead inside"
  },
  {
    text: "(Lorna Shore) I am imprisoned to the shadows of a different realm, ____",
    correct: "Realize that this is Hell"
  },
  {
    text: "(Lorna Shore) We're dancing like flames flickering in the night, ____",
    correct: "We sway in time with the wind before melting away"
  },
  {
    text: "(Lorna Shore) Even inside a dream, this world, ____",
    correct: "Has no meaning"
  },
  {
    text: "(Lorna Shore) Bring me back to where it all began in the fall, ____",
    correct: "Wake me up before I lose it all"
  },
  {
    text: "(Lorna Shore) Envelope my withered bones.. ____",
    correct: "I am a hideous soul"
  },
  
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