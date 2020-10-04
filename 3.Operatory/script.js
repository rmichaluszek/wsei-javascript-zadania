// zadanie 1

let isEmpty = false;
let isGold = true;

console.log(isEmpty == isGold);
// false

// zadanie 2

let firstVariable = 4;
let secondVariable = 3;
let moduloResult = 0;

moduloResult = firstVariable % secondVariable;

console.log(moduloResult);

// zadanie 3

var someNumber = "4";
var someString = "425";
let stringsResult = ""
stringsResult = someNumber + someString;
console.log(stringsResult);

// zadanie 4

var someNumber = 425;
var someString = "425";
console.log(someNumber == someString) // true ta sama wartość
console.log(someNumber === someString) // false, inne typy

// zadanie 5 

let counter = 30;

console.log(counter);

counter++;

console.log(counter);

counter--;

console.log(counter);


// zadanie 6

var firstVariable = 30;
var secondVariable = 50;
var result = firstVariable > secondVariable? true : false;
console.log(result);