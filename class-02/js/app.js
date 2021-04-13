'use strict';
let score = 0;
let userName = prompt('Hello, What is your name?');

alert('Hello ' + userName + ', Lets play Yes or No game ^_^');

let answer1 = prompt('Do you think I have a twin?').toLowerCase();
while (answer1 !== 'yes' && answer1 !== 'y' && answer1 !== 'no' && answer1 !== 'n') {
    answer1 = prompt('please enter yes or no, Do you think I have a twin?').toLowerCase();
}
if (answer1 == 'yes' || answer1 == 'y') {
    alert('Unfortunately, but I do not');
} else {
    alert('correct, I do not');
}

if (answer1 == 'no' || answer1 == 'n') {
    score = score + 1;

}

// console.log('Do you think I have a twin? Your answer is ' + answer1);


let answer2 = prompt('Do I love movies?').toLowerCase();
while (answer2 !== 'yes' && answer2 !== 'y' && answer2 !== 'no' && answer2 !== 'n') {
    answer2 = prompt('please enter yes or no, Do I love movies?').toLowerCase();
}
if (answer2 == 'yes' || answer2 == 'y') {
    alert('You are right, who dont :D');
} else {
    alert('Sorry, But I do :D');
}
if (answer2 == 'yes' || answer2 == 'y') {
    score = score + 1;

}

// console.log('Do I love movies? Your answer is ' + answer2);


let answer3 = prompt('Do you think i am Healthy and sporty?').toLowerCase();
while (answer3 !== 'yes' && answer3 !== 'y' && answer3 !== 'no' && answer3 !== 'n') {
    answer3 = prompt('please enter yes or no, Do you think i am Healthy and sporty?').toLowerCase();
}
if (answer3 == 'yes' || answer3 == 'y') {
    alert('Unfortunately, still tring :( ');
} else {
    alert('Unfortunately, you are right :( ');
}
if (answer3 == 'no' || answer3 == 'n') {
    score = score + 1;

}

// console.log('Do you think i am Healthy and sporty? Your answer is ' + answer3);


let answer4 = prompt('Do you think I travel before?').toLowerCase();
while (answer4 !== 'yes' && answer4 !== 'y' && answer4 !== 'no' && answer4 !== 'n') {
    answer4 = prompt('please enter yes or no, Do you think I travel before?').toLowerCase();
}
if (answer4 == 'yes' || answer4 == 'y') {
    alert('Yes, Just once');
} else {
    alert('I did, Just once');
}
if (answer4 == 'yes' || answer4 == 'y') {
    score = score + 1;

}

//console.log('Do you think I travel before? Your answer is ' + answer4);


let answer5 = prompt('Do you think I believe in ghosts?').toLowerCase();
while (answer5 !== 'yes' && answer5 !== 'y' && answer5 !== 'no' && answer5 !== 'n') {
    answer5 = prompt('please enter yes or no, Do you think I believe in ghosts?').toLowerCase();
}
if (answer5 == 'yes' || answer5 == 'y') {
    alert('No for sure, what makes you think so :D');
} else {
    alert('Sure i dont');
}
if (answer5 == 'no' || answer5 == 'n') {
    score = score + 1;

}

// console.log('Do you think I believe in ghosts? Your answer is ' + answer5);

alert('Thank you ' + userName + ', Here is one more game ^_^');

let guessNumber = prompt('Can you guess the number of my Nephews?');
let c;
for (c = 0; c < 3; c++) {
    if (guessNumber == 3) {
        alert('That is correct ^-^');
        c = c + 3;
    } else if (guessNumber >= 6) {
        guessNumber = prompt('too high, try again..');
    } else if (guessNumber <= 1) {
        guessNumber = prompt('too low, try again..');
    } else if (guessNumber < 6 && guessNumber > 1) {
        guessNumber = prompt('So close, try again..');
    } else {
        guessNumber = prompt('Please enter a number');
    }
}

if (c == 3) {
    if (guessNumber == 3) {
        alert('That is correct ^-^');
    } else {
        alert('The right answer is 3, Good luck next time.');
    }
}

if (guessNumber == 3) {
    score = score + 1;
}

// console.log('Can you guess the number of my Nephews? Your answer is ' + guessNumber);

let guessName = prompt('I have 3 favorite months, Can you guess one of them?').toLowerCase();
let d;
let months = ['april', 'september', 'november'];

for (d = 0; d < 5; d++) {
    if (guessName == 'april' || guessName == 'september' || guessName == 'november') {
        alert('That is correct ^-^, My favorite months are, April, September & November');
        d = d + 5;
    } else {
        guessName = prompt('Not really, try again').toLowerCase();
    }
}

if (d == 5) {
    if (guessName == 'april' || guessName == 'september' || guessName == 'november') {
        alert('That is correct ^-^, My favorite months are, April, September & November');
    } else {
        alert('Unfortunately, But My favorite months are, April, September & November');
    }
}

if (guessName == 'april' || guessName == 'september' || guessName == 'november') {
    score = score + 1;
}

// console.log('Can you guess the number of my Nephews? Your answer is ' + guessName);

alert('your score is : ' + score + '/7');