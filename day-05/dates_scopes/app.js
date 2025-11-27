//? Class 01 - Dates and Times

let now = new Date();

//* get methods
let final = now;
final = now.getDate(); //! day of the month
final = now.getDay(); //! day of the week
final = now.getFullYear();

//* set methods
now.setFullYear(2026);
now.setMonth(5);
now.setDate(20);

let dateOfBirth = new Date(2025, 10, 27);

final = dateOfBirth;
final = now.getFullYear() - dateOfBirth.getFullYear();

let millisecond = now - dateOfBirth;
let second = millisecond / 1000;
let minute = second / 60;
let hour = minute / 60;
let day = hour / 24; //! tyt..


// console.log(day);

//? Class 02 - Scopes
//! scopes -> let, const
let u_name = 'ada'; //! global scope
let age = 17;


function print() {
    console.log(u_name); //! this will look outside of the function to find variable named 'isim'
    console.log(age);
}

if(true){
    let u_name = 'rick';
    // console.log(u_name);
}

//! functions will create their own scope fields.
//! if/for/while blocks cannot create their own scope fields.

// print();
// console.log(u_name);
// console.log(age);