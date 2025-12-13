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
  {
    text: "(Mayhem) Follow its call, ____",
    correct: "Follow the freezing moon"
  },
  {
    text: "(Mayhem) Welcome to the elder ruins again, ____",
    correct: "The wind whispers"
  },
  {
    text: "(Mayhem) Only dead trees are growing here, ____",
    correct: "Funeral fog"
  },
  {
    text: "(Mayhem) Pagan fears, ____",
    correct: "The past is alive"
  },
  {
    text: "(Mayhem) To release the soul, one must die, ____",
    correct: "To find peace inside, you must get eternal"
  },
  {
    text: "(Mayhem) Tell me - what did you see there, ____",
    correct: "In the darkness of the past"
  },
  {
    text: "(Mayhem) No one knows my grave, ____",
    correct: "Buried by time and dust"
  },
  {
    text: "(Mayhem) I come forward, ____!",
    correct: "Deathcrush"
  },
  {
    text: "(Mayhem) Chainsaw in my bleeding hands, ____",
    correct: "As I start to cut you in two"
  },
  {
    text: "(Mayhem) Command for blood, command for war, ____",
    correct: "Command for Satan command for Hell"
  },

  //Metallica
  {
    text: "(Metallica) I tuck you in, warm within, keep you free from sin, ____",
    correct: "'Til the sandman he comes"
  },
  {
    text: "(Metallica) Master of puppets, I'm pulling your strings, ____",
    correct: "Twisting your mind and smashing your dreams"
  },
  {
    text: "(Metallica) Hold my breath as I wish for death, ____",
    correct: "Oh please God wake me"
  },
  {
    text: "(Metallica) Life, it seems, will fade away, ____",
    correct: "Drifting further every day"
  },
  {
    text: "(Metallica) All these words, I don't just say, ____",
    correct: "And nothing else matters"
  },
  {
    text: "(Metallica) Dyin', one thousand deaths, ____",
    correct: "Searchin, seek and destroy"
  },
  {
    text: "(Metallica) Time marches on, ____",
    correct: "For whom the bell tolls"
  },
  {
    text: "(Metallica) Smashing through the boundaries, lunacy has found me, ____",
    correct: "Cannot stop the battery"
  },
  {
    text: "(Metallica) Flash before my eyes, ____",
    correct: "Now it's time to die"
  },
  {
    text: "(Metallica) Never free, never me, ____",
    correct: "So I dub thee unforgiven"
  },

  //Pink Floyd
  {
    text: "(Pink Floyd) Running over the same old ground, what have we found? ____",
    correct: "The same old fears wish you were here"
  },
  {
    text: "(Pink Floyd) The child is grown, the dream is gone, ____",
    correct: "I have become comfortably numb"
  },
  {
    text: "(Pink Floyd) And there is time to kill today, ____",
    correct: "And then one day you find"
  },
  {
    text: "(Pink Floyd) Money, it's a hit, ____",
    correct: "Don't give me that do goody good bullshit"
  },
  {
    text: "(Pink Floyd) You cried for the Moon, ____",
    correct: "Shine on you crazy diamond"
  },
  {
    text: "(Pink Floyd) Us, and them, ____",
    correct: "And after all we're only ordinary men"
  },
  {
    text: "(Pink Floyd) All in all, it's just ____",
    correct: "Another brick in the wall"
  },
  {
    text: "(Pink Floyd) And no one sings me lullabies, ____",
    correct: "And no one makes me close my eyes"
  },
  {
    text: "(Pink Floyd) And I am not frightened of dying you know, ____",
    correct: "Any time will do I don't mind"
  },
  {
    text: "(Pink Floyd) Who was fitted with collar and chain? ____?",
    correct: "Who was given a pat on the back"
  },

  //QUEEN
  {
    text: "(QUEEN) Mama, ooh (any way the wind blows), I don't wanna die, ____",
    correct: "I sometimes wish I'd never been born at all"
  },
  {
    text: "(QUEEN) Don't stop me now, ____",
    correct: "I'm having such a good time"
  },
  {
    text: "(QUEEN) Hey, I'm gonna get you, too, ____",
    correct: "Another one bites the dust"
  },
  {
    text: "(QUEEN) Kicking your can all over the place, singin' ____",
    correct: "We will, we will rock you"
  },
  {
    text: "(QUEEN) We are the champions, No time for losers, ____",
    correct: "'Cause we are the champions of the world"
  },
  {
    text: "(QUEEN) Can anybody find me, ____?",
    correct: "Somebody to love"
  },
  {
    text: "(QUEEN) All we hear is radio ga ga, ____",
    correct: "Radio goo goo"
  },
  {
    text: "(QUEEN) She's a Killer Queen, ____",
    correct: "Gunpowder, gelatine"
  },
  {
    text: "(QUEEN) Pressure, Pushing down on me, _____",
    correct: "Pressing down on you"
  },
  {
    text: "(QUEEN) The show must go on, yeah, ____",
    correct: "Inside my heart is breaking"
  },

  //Radiohead
  {
    text: "(Radiohead) But I'm a creep, ____",
    correct: "I'm a weirdo"
  },
  {
    text: "(Radiohead) Karma police, arrest this girl, ____",
    correct: "Her Hitler hairdo is making me feel ill"
  },
  {
    text: "(Radiohead) And no alarms and no surprises, ____",
    correct: "No alarms and no surprises"
  },
  {
    text: "(Radiohead) What's that? ____",
    correct: "I may be paranoid, but not an android"
  },
  {
    text: "(Radiohead) Don't leave me high, ____",
    correct: "Don't leave me dry"
  },
  {
    text: "(Radiohead) Her green plastic watering can, ____",
    correct: "For her fake, Chinese rubber plant"
  },
  {
    text: "(Radiohead) Everything, Everything, Everything, ____",
    correct: "In its right place"
  },
  {
    text: "(Radiohead) Rows of houses all bearing down on me, ____",
    correct: "I can feel their blue hands touching me"
  },
  {
    text: "(Radiohead) There, there, ____",
    correct: "Why so green"
  },
  {
    text: "(Radiohead) Reckoner, ____",
    correct: "Take me with you"
  },

  //Red Hot chilli Peppers
  {
    text: "(Red Hot Chilli Peppers) Hardcore soft porn, ____",
    correct: "Dream of Californication"
  },
  {
    text: "(Red Hot Chilli Peppers) Under the bridge downtown, ____",
    correct: "Is where I drew some blood"
  },
  {
    text: "(Red Hot Chilli Peppers) Scar tissue that I wish you saw, ____",
    correct: "Sarcastic mister know it all"
  },
  {
    text: "(Red Hot Chilli Peppers) Mmm, pull the trigger and I pull the thread, ____",
    correct: "I gotta take it on the otherside"
  },
  {
    text: "(Red Hot Chilli Peppers) By the way, I tried to say, ____",
    correct: "I'd be there waiting for"
  },
  {
    text: "(Red Hot Chilli Peppers) Give it away, give it away, give it away now, ____",
    correct: "I can't tell if I'm a kingpin or a pauper"
  },
  {
    text: "(Red Hot Chilli Peppers) Deep beneath the cover of another perfect wonder, ____",
    correct: "Where it's so white as snow"
  },
  {
    text: "(Red Hot Chilli Peppers) The world I love, the tears I drop, ____",
    correct: "To be part of the wave can't stop"
  },
  {
    text: "(Red Hot Chilli Peppers) California, rest in peace, ____",
    correct: "Simultaneous release"
  },
  {
    text: "(Red Hot Chilli Peppers) When I find my peace of mind, ____",
    correct: "I'm gonna give you some of my good time"
  },

  //Rob Zombie
  {
    text: "(Rob Zombie) Dig through the ditches and burn through the witches, ____",
    correct: "I slam in the back of my Dragula"
  },
  {
    text: "(Rob Zombie) Crawl on me, sink into me, ____",
    correct: "Die for me, a living dead girl"
  },
  {
    text: "(Rob Zombie) Hey, yeah, I'm the one that you wanted, ____",
    correct: "Hey, yeah, I'm your superbeast"
  },
  {
    text: "(Rob Zombie) Never gonna stop me, never gonna stop, ____",
    correct: "Never gonna stop me, never gonna stop"
  },
  {
    text: "(Rob Zombie) More human than human, more human than human, ____",
    correct: "Yeah, I am the jigsaw man"
  },
  {
    text: "(Rob Zombie) This is the house, ____",
    correct: "Built on sin"
  },
  {
    text: "(Rob Zombie) 1965, yeah, wow, ____",
    correct: "Five, yeah, wow"
  },
  {
    text: "(Rob Zombie) Blacken the sun. What have I done? ____",
    correct: "I feel so good, I feel so numb, yeah"
  },
  {
    text: "(Rob Zombie) Demonoid phenomenon, ____",
    correct: "Get it out, get it on"
  },
  {
    text: "(Rob Zombie) We listen to the radio",
    correct: "Dead radio"
  },

  //Slipknot
  {
    text: "(Slipknot) ",
    correct: ""
  },
  {
    text: "(Slipknot) ",
    correct: ""
  },
  {
    text: "(Slipknot) ",
    correct: ""
  },
  {
    text: "(Slipknot) ",
    correct: ""
  },
  {
    text: "(Slipknot) ",
    correct: ""
  },
  {
    text: "(Slipknot) ",
    correct: ""
  },
  {
    text: "(Slipknot) ",
    correct: ""
  },
  {
    text: "(Slipknot) ",
    correct: ""
  },
  {
    text: "(Slipknot) ",
    correct: ""
  },
  {
    text: "(Slipknot) ",
    correct: ""
  },

  //System Of a Down
  {
    text: "(System Of a Down) ",
    correct: ""
  },
  {
    text: "(System Of a Down) ",
    correct: ""
  },
  {
    text: "(System Of a Down) ",
    correct: ""
  },
  {
    text: "(System Of a Down) ",
    correct: ""
  },
  {
    text: "(System Of a Down) ",
    correct: ""
  },
  {
    text: "(System Of a Down) ",
    correct: ""
  },
  {
    text: "(System Of a Down) ",
    correct: ""
  },
  {
    text: "(System Of a Down) ",
    correct: ""
  },
  {
    text: "(System Of a Down) ",
    correct: ""
  },
  {
    text: "(System Of a Down) ",
    correct: ""
  },

  //The Beatles
  {
    text: "(The Beatles) ",
    correct: ""
  },
  {
    text: "(The Beatles) ",
    correct: ""
  },
  {
    text: "(The Beatles) ",
    correct: ""
  },
  {
    text: "(The Beatles) ",
    correct: ""
  },
  {
    text: "(The Beatles) ",
    correct: ""
  },
  {
    text: "(The Beatles) ",
    correct: ""
  },
  {
    text: "(The Beatles) ",
    correct: ""
  },
  {
    text: "(The Beatles) ",
    correct: ""
  },
  {
    text: "(The Beatles) ",
    correct: ""
  },
  {
    text: "(The Beatles) ",
    correct: ""
  },

  //The Smiths
  {
    text: "(The Smiths) ",
    correct: ""
  },
  {
    text: "(The Smiths) ",
    correct: ""
  },
  {
    text: "(The Smiths) ",
    correct: ""
  },
  {
    text: "(The Smiths) ",
    correct: ""
  },

  {
    text: "(The Smiths) ",
    correct: ""
  },
  {
    text: "(The Smiths) ",
    correct: ""
  },

  {
    text: "(The Smiths) ",
    correct: ""
  },
  {
    text: "(The Smiths) ",
    correct: ""
  },

  //Type O Negative
  {
    text: "(Type O Negative) ",
    correct: ""
  },
  {
    text: "(Type O Negative) ",
    correct: ""
  },
  {
    text: "(Type O Negative) ",
    correct: ""
  },

  {
    text: "(Type O Negative) ",
    correct: ""
  },

  {
    text: "(Type O Negative) ",
    correct: ""
  },

  {
    text: "(Type O Negative) ",
    correct: ""
  },

  {
    text: "(Type O Negative) ",
    correct: ""
  },

  {
    text: "(Type O Negative) ",
    correct: ""
  },

  {
    text: "(Type O Negative) ",
    correct: ""
  },

  {
    text: "(Type O Negative) ",
    correct: ""
  },

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