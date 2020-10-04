// zadanie 1

let p1 = 2;
let p2 = 6;
if(p1>p2) {
  console.log(p1);  
} else if(p1==p2) {
  console.log("Sa rowne");  
} else {
  console.log(p2);  
} 

// zadanie 2

let firstNumber = 111;
let secondNumber = 222;
let thirdNumber = 3;

if (firstNumber > secondNumber && firstNumber > thirdNumber) {
  console.log(firstNumber);
} else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
  console.log(secondNumber);    
} else {
  console.log(thirdNumber);
}

// zadanie 3

for (var step = 0; step < 10; step++) {
    console.log('Lubię JavaScript');
}

// zadanie 4

let result = 0;

for(let i = 1; i<=10; i++){
    result += i;
}

console.log(result);

// zadanie 5

var a = 5;
for( var n = 0; n < a; n++) {
    Console.log(n + (n%2===0? "Nieparzysta":"Parzysta"));
}
console.log(n + n%2? "Nieparzysta":"Parzysta")

// zadanie 6

for(var i= 0; i< 10; i++) {
    for(var j=-; i<10; i++) {
        console.log("i= " + i + ", j= " + j);
    }
}

// zadanie 7

for (var i=1; i < 101; i++){
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}

// zadanie 8

// a)
const star = '*'
for (let i = 0; i < 5; i++) {
    let result = '';
    for (let j = 0; j < i; j++) {
        result += star;
    }
    console.log(result)
}