function printPoem() {
    console.log("A quiet thought drifts through the night,");
    console.log("Soft as stars in borrowed light.");
    console.log("Dreams unfold where fears once lay,");
    console.log("Hope learns how to gently stay.")
}

function rollDice() {
    let dice = Math.floor(Math.random() * 6) + 1;
    return dice;
}

function printGreet(name) {
    console.log(`Welcome ${name}!`);
}

function printAvg(a, b, c) {
    let avg = (a + b + c) / 3;
    return avg;
}

function printTable(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(n + " * " + i + " = " + (n * i));
    }
}

function printSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

function concat(str) {
    let allStr = "";
    for (let i = 0; i < str.length; i++) {
        allStr += str[i];
    }
    return allStr;
}

// let str = ["I", "love", "coding", "!"];
// console.log(concat(str));
// console.log(printSum(10));
// console.log(rollDice());
// printPoem();
// printGreet("kandy");
// console.log(printAvg(2, (4, 8, 7), 8));
// printTable(5);


let sum = function (a, b) {
    return a + b;
}

sum = function (a, b) {
    return a * b;
}
// console.log(sum(4, 5));


let greet = function () {
    console.log("Hello");
}

let countGreet = function (n) {
    for (let i = 1; i <= n; i++) {
        greet();
    }
}

// countGreet(25);

let req = "even";

let isOddEven = function (req) {
    if (req == 'odd') {
        return function (n) {
            console.log(n % 2 != 0);
        }
    } else if (req == 'even') {
        return function (n) {
            console.log(n % 2 == 0);
        }
    } else {
        console.log("Wrong request");
    }
}
// isOddEven(req)(5);

let calc = {
    sum: function (a, b) {
        console.log(a + b);
    },
    diff: function (a, b) {
        console.log(a - b);
    }
};