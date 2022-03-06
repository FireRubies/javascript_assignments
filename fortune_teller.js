// TODO: Create a variable called "fortune" and assign a number between 0 - 10.
// YOUR CODE GOES HERE


// TODO: Create a fortune teller game using conditional statements and comparison operators.
// Conditions
// 1. If fortune is greater than or equal to 0 and less than or equal to 3, then you have a low fortune.
// 2. If fortune is greater than 3 and less than or equal to 7, then you have an average fortune.
// 3. If fortune is greater than 7 and less than or equal to 10, then you have a good fortune.
// 4. If the fortune is out of range, then the fortune can't be read correctly.

//Variables
var fortune = 5

//Fortunes
var lowFortunes = ["You will die soon", "You will get sick soon", "You will become broke soon"];
var averageFortunes = ["You will have a glass of milk tomorrow", "You will die someday", "You will randomly find a stapler under your desk within the next month", "A thief will steal a pineapple from your house but leave two pineapples"];
var goodFortunes = ["You will be happy", "You will become rich", "You will become extremely lucky"];

//Logic
if (fortune >= 0 && fortune <= 3) {
    console.log(getFortune("low"));
} else if (fortune > 3 && fortune <= 7) {
    console.log(getFortune("average"));
} else if (fortune > 7 && fortune <= 10) {
    console.log(getFortune("good"));
} else {
    console.log("Fortune can't be read correctly!");
}

function getFortune(luck) {
    switch (luck) {
        case "low":
            return lowFortunes[Math.floor(Math.random()*lowFortunes.length)];
        case "average":
            return averageFortunes[Math.floor(Math.random()*averageFortunes.length)];
        case "good":
            return goodFortunes[Math.floor(Math.random()*goodFortunes.length)];
        default:
            console.log(`Unknown getFortune parameter: ${luck}`);
    }
}