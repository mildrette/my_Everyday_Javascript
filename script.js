console.log('welcome to learning Javascript');
// javascript practive area here the kelvin weather forcast
// this variable is constand thats why i use const instead of the other
const kelvin = 0;
/*i subtract celsius from kelvin */
const celsius = kelvin - 273;
// converting celsius to fehrenheit
let fahrenheit = celsius * (9/5) + 32;
// the use of floor formula
fahrenheit = Math.floor(fahrenheit);
console.log('The Temperature is ${fahrenheit} degrees Fahrenheit.');

// dog year project
// this first line the a variable
var myAge = 20;
// here is another variable
let earlyYears = 2;

earlyYears *= 10.5;
// laterYears is the age ahead and we can calculate that by subtracting myage by 2;
let laterYears = myAge -= 2;
// i multipled laterYears by 4 here
laterYears *= 4;
console.log(earlyYears);
console.log(laterYears);
// here is my age in doy years
myAgeInDogYears = earlyYears + laterYears;
// this will print the name i lowercase
var myName = 'mildred'.toLowerCase();
// i used interpolation here
console.log('My name is ${myName}. i am ${myAge} years old in human years which is ${myAgeInDogYears} years old in doy years.')
