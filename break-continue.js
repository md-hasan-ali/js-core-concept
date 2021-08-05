// var i = 0;
// while (i <= 10) {
//     console.log(i);
//     if (i == 4) {
//         break;
//     }
//     i++;
// }

// for (var i = 1; i < 10; i++) {
//     console.log(i);
//     if (i == 5) {
//         break;
//     }
// }
var numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];
for (var i = 0; i < numbers.length; i++) {
    number = numbers[i];
    if (number > 50) {
        continue;
    }
    console.log(number);
}