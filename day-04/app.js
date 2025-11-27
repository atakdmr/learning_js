//? Class 01 - Functions

function greet(mesaj){
    console.log(mesaj);
}

greet('hello');
greet(10);

function calculateAge(bornYear){
    let now = new Date().getFullYear();
    return now - bornYear;
}

let final = calculateAge(2008);
console.log(final);

function retirementAge(bornYear, isim){
    let age = calculateAge(bornYear);

    let year_left = 65 - age;

    if(year_left > 0){
        console.log(year_left + ' year(s) left to retire.')
    }
    else {
        console.log('you are already retired');
    }
}

// retirementAge(2000, 'ada');

//todo // Application: Functions

// 1- Write a function that prints the word sent to it on the screen for the specified number of times. 
function sayItBaby(word,times){
    for(let i = 0;i<times;i++){
        console.log(word);
    }
}

sayItBaby("hi alabama",10);

// 2- Write a function that calculates the area and perimeter of a rectangle.
//todo area formula = length * width
function calculateArea(length, width){
    return (length * width); 
}
console.log('here is the area of rectangle: ' + calculateArea(3,5) + ' cm^2');

//todo perimeter formula = 2 x (l + w)
function calculatePerimeter(length, width){
    return (2 * (length + width))
}
console.log('here is the perimeter of rectangle: ' + calculatePerimeter(3, 5) + ' cm');

//todo 3- Create a coin toss application using a function.
function flipCoin(){
    return Math.random() < 0.5 ? 'heads' : 'tails';
}
console.log('flip coin result: ' + flipCoin());

// 4- Write a function that returns the divisors of a number sent to it as an array.
function divisyBoy(num) {
    let mod = [];
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            mod.push(i);
        }
    }
    return mod;
}

console.log(divisyBoy(44));


// 5- Define a function named 'total' that takes a variable number of parameters.
function total(...numbers) {
    return numbers.reduce((total, currentNumber) => total + currentNumber, 0);
}

console.log(total(10, 5, 20));

//! i get chat gpt help here cuz idk what else to do.