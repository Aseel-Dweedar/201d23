'use strict';


let score = 0;
let userName = prompt('Hello, What is your name?');

alert('Hello ' + userName + ', Lets play Yes or No game ^_^');

function twinQ() {
    let answer1 = prompt('Do you think I have a twin?').toLowerCase();
    while (answer1 !== 'yes' && answer1 !== 'y' && answer1 !== 'no' && answer1 !== 'n') {
        answer1 = prompt('please enter yes or no, Do you think I have a twin?').toLowerCase();
    }
    if (answer1 == 'yes' || answer1 == 'y') {
        alert('Unfortunately, but I do not');
    } else {
        alert('correct, I do not');
        score++;
    }
}
twinQ();


function moviesQ() {
    let answer2 = prompt('Do I love movies?').toLowerCase();
    while (answer2 !== 'yes' && answer2 !== 'y' && answer2 !== 'no' && answer2 !== 'n') {
        answer2 = prompt('please enter yes or no, Do I love movies?').toLowerCase();
    }
    if (answer2 == 'yes' || answer2 == 'y') {
        alert('You are right, who dont :D');
        score++;
    } else {
        alert('Sorry, But I do :D');

    }
}

moviesQ();


function healthQ() {
    let answer3 = prompt('Do you think i am Healthy and sporty?').toLowerCase();
    while (answer3 !== 'yes' && answer3 !== 'y' && answer3 !== 'no' && answer3 !== 'n') {
        answer3 = prompt('please enter yes or no, Do you think i am Healthy and sporty?').toLowerCase();
    }
    if (answer3 == 'yes' || answer3 == 'y') {
        alert('Unfortunately, still tring :( ');
    } else {
        alert('Unfortunately, you are right :( ');
        score++;
    }
}
healthQ();


function travelQ() {
    let answer4 = prompt('Do you think I travel before?').toLowerCase();
    while (answer4 !== 'yes' && answer4 !== 'y' && answer4 !== 'no' && answer4 !== 'n') {
        answer4 = prompt('please enter yes or no, Do you think I travel before?').toLowerCase();
    }
    if (answer4 == 'yes' || answer4 == 'y') {
        alert('Yes, Just once');
        score++;
    } else {
        alert('I did, Just once');
    }
}
travelQ();

function ghostsQ() {
    let answer5 = prompt('Do you think I believe in ghosts?').toLowerCase();
    while (answer5 !== 'yes' && answer5 !== 'y' && answer5 !== 'no' && answer5 !== 'n') {
        answer5 = prompt('please enter yes or no, Do you think I believe in ghosts?').toLowerCase();
    }
    if (answer5 == 'yes' || answer5 == 'y') {
        alert('No for sure, what makes you think so :D');
    } else {
        alert('Sure i dont');
        score++;
    }
}
ghostsQ();


alert('Thank you ' + userName + ', Here is one more game ^_^');

function numQ() {
    let guessNumber = prompt('Can you guess the number of my Nephews?');
    let c;
    for (c = 0; c < 3; c++) {
        if (guessNumber == 3) {
            alert('That is correct ^-^');
            score++;
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
            score++;
        } else {
            alert('The right answer is 3, Good luck next time.');
        }
    }
}
numQ();


function monthQ() {
    let guessName = prompt('I have 3 favorite months, Can you guess one of them?').toLowerCase();
    let d;
    let months = ['april', 'september', 'november'];

    for (d = 0; d < 5; d++) {
        if (guessName == 'april' || guessName == 'september' || guessName == 'november') {
            alert('That is correct ^-^, My favorite months are, April, September & November');
            score++;
            d = d + 5;
        } else {
            guessName = prompt('Not really, try again').toLowerCase();
        }
    }

    if (d == 5) {
        if (guessName == 'april' || guessName == 'september' || guessName == 'november') {
            alert('That is correct ^-^, My favorite months are, April, September & November');
            score++;
        } else {
            alert('Unfortunately, But My favorite months are, April, September & November');
        }
    }
}
monthQ();

alert('your score is : ' + score + '/7');