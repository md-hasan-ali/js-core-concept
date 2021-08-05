// // inch to feet

// function getFeet(inch) {
//     var feet = inch / 12;
//     return feet;
// }
// var myInch = getFeet(124);
// console.log(myInch);

// var dadiInch = 500;
// var result = getFeet(dadiInch);
// console.log(result);


// function getMile(mile) {
//     var km = mile * 1.60934;
//     return km;
// }

// var myMile = 2;
// var result = getMile(myMile);
// console.log(result);

// // even number 

// function getEven(number) {
//     if (number % 2 == 0) {
//         return true;
//     }
//     else {
//         return false;
//     }

// }

// var myNumber = getEven(5);
// console.log(myNumber);


// // odd number
// function getOdd(num) {
//     if (num % 2 != 0) {
//         return true;
//     }
//     return false;
// }
// var myNum = getOdd(5);
// console.log(myNum);

// // leap year 

// function getYear(year) {
//     if (year % 400 == 0) {
//         return true;
//     }
//     else if (year % 100 == 0) {
//         return false;
//     }
//     else if (year % 4 == 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// var myYear = getYear(1800);
// console.log(myYear);

// var factorial = 1;
// function getFactorial(number) {
//     for (var i = 1; i < number; i++) {
//         factorial = factorial * i;
//     }
//     return factorial;
// }
// const myFactorial = getFactorial(7);
// console.log(myFactorial);

// function getFactorial(number) {
//     let factorial = 1;
//     for (let i = number; i >= 1; i--) {
//         factorial = factorial * i;
//     }
//     return factorial
// }
// const myNumber = getFactorial(6);
// console.log(myNumber);


// function getFactorial(number) {
//     let factorial = 1;
//     let i = number;
//     while (i >= 1) {
//         factorial = factorial * i;
//         i--;
//     }
//     return factorial;
// }
// const myFactorial = getFactorial(6);
// console.log(myFactorial);


// function getCelcious(number) {
//     var celcious = (number * 9 / 5)+32;
//     return celcious;
// }
// const mycelciousNumber = getCelcious(0);
// console.log(mycelciousNumber);

function getFernhight(number) {
    var fren = (number - 32)*(5/9);
    return fren;
}
const myNum = getFernhight(40);
console.log(myNum);