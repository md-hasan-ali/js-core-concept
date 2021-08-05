function getGrade(number) {
    if ((number >= 80) && (number <= 100)) {
        console.log("A+");
    }
    else if ((number >= 70) && (number < 80)) {
        console.log("A");
    }
    else if ((number >= 60) && (number < 70)) {
        console.log("A-");
    }
    else {
        console.log("Felto member !!!")
    }

}

const myNumber = getGrade(69);
console.log(myNumber);