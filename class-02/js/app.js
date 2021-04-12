'use strict';

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
// console.log('Do you think I travel before? Your answer is ' + answer4);


let answer5 = prompt('Do you think I believe in ghosts?').toLowerCase();
while (answer5 !== 'yes' && answer5 !== 'y' && answer5 !== 'no' && answer5 !== 'n') {
    answer5 = prompt('please enter yes or no, Do you think I believe in ghosts?').toLowerCase();
}
if (answer5 == 'yes' || answer5 == 'y') {
    alert('No for sure, what makes you think so :D');
} else {
    alert('Sure i dont');
}
// console.log('Do you think I believe in ghosts? Your answer is ' + answer5);

alert('Thank you ' + userName + ', more about me in the website ^_^');