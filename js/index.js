'use strict'
// var allowdAnswers = ['y','n','yes','no'];

var name = prompt('What is your name?');

while (name === '') {
    name = prompt('Your name please.');
}

alert(name + ', welcome to my site!')

var seattleAns = prompt('Were you born in the Seattle aera?');
var responce;

seattleAns = seattleAns.toLocaleLowerCase();
console.log('User entered: ' + seattleAns);

if (seattleAns === 'y' || seattleAns === 'yes') {

    responce = 'Wow so was I!';

} else if (seattleAns === 'n' || seattleAns === 'no') {

    responce = 'So you moved here later in life';

} else {

    responce = 'You didn\'t enter a valid responce';
    console.log('User put in invalid entry');

}

alert(responce);

var travel = prompt('Have you ever left the country?');
var responce2;

travel = travel.toLocaleLowerCase();
console.log('User entered: ' + travel);

if (travel === 'y' || travel === 'yes') {

    responce2 = 'It\'s always nice to get out and see the world';

} else if (travel === 'n' || travel === 'no') {

    responce2 = 'Take a weekend! Canada is so close!';

} else {

    responce2 = 'You didn\'t enter a valid responce';
    console.log('User put in invalid entry');

}

alert(responce2);

var code = prompt('Do you have expierence coding?');
var responce3;

code = code.toLocaleLowerCase();
console.log('User entered: ' + code);

if (code === 'y' || code === 'yes') {

    responce3 = 'Well I\'m looking forward to what we can learn!';

} else if (code === 'n' || code === 'no') {

    responce3 = 'If you need help feel free to ask me!';

} else {

    responce3 = 'You didn\'t enter a valid responce';
    console.log('User put in invalid entry');

}

alert(responce3);

var dog = prompt('Do you like cats?');
var responce4;

dog = dog.toLocaleLowerCase();
console.log('User entered: ' + dog);


if (dog === 'y' || dog === 'yes') {

    responce4 = 'Good prepare to be dissapointed.';

} else if (dog === 'n' || dog === 'no') {

    responce4 = 'Well I hope you like dogs instead.';

} else {

    responce4 = 'You didn\'t enter a valid responce';
    console.log('User put in invalid entry');

}

alert(responce4);

var douglasFern = prompt('Have you ever seen a douglas fern?');
douglasFern = douglasFern.toLocaleLowerCase();
console.log('User entered: ' + douglasFern);
var responce5;

if (douglasFern === 'y' || douglasFern === 'yes') {

    responce5 = 'I don\'t think you read the question closely...';

} else if (douglasFern === 'n' || douglasFern === 'no') {

    responce5 = 'You chose wisely.';

} else {

    responce5 = 'You didn\'t enter a valid responce';
    console.log('User put in invalid entry');

}

alert(responce5);