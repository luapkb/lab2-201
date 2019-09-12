'use strict';
// var allowdAnswers = ['y','n','yes','no']

var name = prompt('What is your name?');

while (name === '') {
  name = prompt('Your name please.');
}

alert(name + ', welcome to my site! Are you ready for a quize about me? (You don\'t actually have a choice)');

var correct = 0;

var yesNoQuestion = [
  //Questions
  [
    'Yes or no, have I only lived in Seattle?',
    'Do you think I have ever left the continent?',
    'Do you belive I\'ve had 5 run-ins with bears while camping',
    'Do you think I prefer dogs over cats?',
    'Do you think I\'ve ever competed in a national championship?'
  ],
  //Yes responces
  [
    'Yes, I\'ve never lived outside the city, and only in two neighborhoods at that.',
    'Yes I have, but only to Europe and I still want to travel more.',
    'Actually it\'s only been 4 times, 2 grizzlies in Cananda and 2 black bears here in Washington',
    'Only slightly my reference is a lovable idot vs a right fine b****.',
    'My favorite bit of trivia. I competed in lightweight rowing durring my one year at Seattle U.'
  ],
  //No Responces
  [
    'I\'ve actually only ever lived in Magnolia and Capital Hill',
    'Actually I\'ve been to europe twice and still desire to travel more.',
    'Correct it\'s only happened 4 time, and two instences were this summer!',
    'Would probably be a coin flip if my famliey\'s cat wasn\'t so rude.',
    'Surprisingly, I actually have for LightWeight Rowing in 2016.'
  ],
  //Correct answers. true = yes, false = no
  [true, true, false, true, true]
];

//accadently have my cordenates on my array swapped, still works
for (var i = 0; i < yesNoQuestion[0].length; i++) {

  var responce = prompt(yesNoQuestion[0][i]);

  responce = responce.toLocaleLowerCase();
  console.log('User entered: ' + responce);

  if (responce === 'y' || responce === 'yes') {

    alert(yesNoQuestion[1][i]);

    if (yesNoQuestion[3][i]) {

      correct++;
      console.log('Correct answers: ' + correct);

    }

  } else if (responce === 'n' || responce === 'no') {

    alert(yesNoQuestion[2][i]);

    if (!yesNoQuestion[3][i]) {

      correct++;
      console.log('Correct answers: ' + correct);

    }

  } else {

    alert('You didn\'t enter a valid responce');
    console.log('User put in invalid entry');

  }

}

var chances = 4;
var found = false;
var secretNumber = Math.round(Math.random() * 10);

console.log(secretNumber);

do {

  var guess = prompt('Can you guess my favorite random number between 1 and 10? You have ' + chances +  ' remaining');
  var guessNum = parseInt(guess);

  console.log('The user guessed ' + guessNum);

  if (guessNum !== NaN) {

    if (guessNum > secretNumber) {

      alert('You guessed too high, try again.');
      chances--;

    } else if (guessNum < secretNumber) {

      alert('You guessed too low, try again.');
      chances--;

    } else {

      found = true;

      if (chances === 4) {

        alert('First try that\'s impressive!');
        correct++;
        console.log('Correct answers: ' + correct);

      } else {

        alert('Nice Job you found the number!');
        correct++;
        console.log('Correct answers: ' + correct);

      }
    }
  
  } else {

    alert('Your entery was not a number that will cost you a guess.');

  }

} while (!found && chances > 0);

//Dog nicknames for the next quesition
var possibleAnswers = [
  'bax',
  'mr bax',
  'stupid',
  'rug',
  'smiley',
  'the rodent',
  'ever hopeful',
  'baxter b banana brains stanley'
];

var guesses = 6;
found = false;

while (!found && guesses > 0) {

  var guess = prompt('Can you guess any of my familey\'s dog\'s nicknames? (His name is Baxter)');
  var guessLowerCase = guess.toLocaleLowerCase();

  for (var i = 0; i < possibleAnswers.length; i++) {

    if (guessLowerCase === possibleAnswers[i]) {

      found = true;

    }
  }

  if (!found) {

    guesses--;

    alert(
      'That\'s not one of the possible answers. you have ' + guesses + ' guesses remaining.');
  } else {

    alert('yes ' + guess + ' is a valid answer');
    correct++;
    console.log('Correct answers: ' + correct);

  }

  if (guesses === 0) {

    alert('You ran out of guesses...');

  }
}

var printAnswers = '';

for (var i = 0; i < possibleAnswers.length; i++) {

  if (i === 0) {

    printAnswers = possibleAnswers[i];

  } else if (i + 1 === possibleAnswers.length) {

    printAnswers = printAnswers + ' and ' + possibleAnswers[i];

  } else {

    printAnswers = printAnswers + ', ' + possibleAnswers[i];

  }
}

alert('All possible answers were ' + printAnswers);

alert(name + ', you got ' + correct + ' answers in this quiz correct.');
