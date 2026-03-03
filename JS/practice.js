// let num = parseInt(prompt("Enter any integer value"));

// if(num % 10 === 0) console.log("Good");
// else console.log("Bad");


// let name = prompt("Enter your name");
// let age = prompt("Enter your age");

// alert(`${name} is ${age} year old!`);


// let quat = parseInt(prompt("Enter the quarter (1-4)"));

// switch(quat) {
//     case 1:
//         console.log("January\nFebruary\nMarch");
//         break;
//     case 2:
//         console.log("April\nMay\nJune");
//         break;
//     case 3:
//         console.log("July\nAugust\nSeptember");
//         break;
//     case 4:
//         console.log("October\nNovember\nDecember");
//         break;
//     default:
//         console.log("Out of range");
// }


// let str = prompt("Enter any string");

// if((str[0] === 'j' || str[0] === 'J') && (str.length >= 8)) console.log("Golden String");
// else console.log("Not a Golden string");


// let num1 = parseInt(prompt("Enter 1st integer"));
// let num2 = parseInt(prompt("Enter 2nd integer"));
// let num3 = parseInt(prompt("Enter 3rd integer"));

// let max = (num1 > num2)?((num1 > num3)? num1: num2):((num2 > num3)?num2:num3);
// console.log(`Largest number: ${max}`);


// let num1 = parseInt(prompt("Enter 1st numbers"));
// let num2 = parseInt(prompt("Enter 2nd numbers"));

// if(num1 % 10 === num2 % 10) console.log("Same last digit");
// else console.log("Not same");


// let arr = [7, 9, 0, -2, 4, 8, 10];
// let n = 5;
// console.log(arr.slice(-n));


// let str = " ";
// if(str === " ") console.log("Blank string");
// else console.log("Not blank");


// let str = "dreAmers";
// let idx = 3;
// if(str[idx] === str[idx].toLowerCase()) console.log("Lower case");
// else console.log("Not lower");


// let arr = [7, 9, 0, -2, 4, 8, 10];
// let rand = 4;
// if(arr.includes(rand)) console.log("Exists in an array");
// else console.log("Doesn't exists in an array");


// let arr = [1,2,3,4,5,6,2,3];
// let num = parseInt(prompt("Enter a element"));

// for(let i =0; i < arr.length; i++) {
//     if(arr[i] === num) arr.splice(i, 1);
// }

// console.log("Array after deleting all occurrences of given element");
// console.log(arr);


// let num = parseInt(prompt("Enter a number"));
// let count = 0;

// while(num > 0) {
//     count++;
//     num = Math.floor(num / 10);
// }

// console.log(`Number of digits: ${count}`);


// let num = parseInt(prompt("Enter a number"));
// let sum = 0;

// while(num > 0) {
//     let lastDigit = num % 10;
//     sum += lastDigit;
//     num = Math.floor(num / 10);
// }

// console.log(`Sum of digits: ${sum}`);


// let num = parseInt(prompt("Enter a number"));
// let fact = 1;

// for(let i=1; i <= num; i++) {
//     fact *= i;
// }

// console.log(`Factorial of a number: ${fact}`);


// let arr=[1,2,3,4,5,6,2,3];
// let max = 0;

// for(elt of arr) {
//     if(elt > max) max = elt;
// }

// console.log(`Largest element in an array: ${max}`);


// console.log(Math.floor((Math.random() * 6) + 1));


// let loid = {
//     name: "Loid Foger",
//     codeword: "Twilight",
//     age: 29,
//     gender: "Male",
//     1: "Spy"
// }
// console.log(loid);


// let person = {
//     name: "Johan",
//     age: 25,
//     nickname: "Jo",
//     field: "Medical",
//     category: "Sugar Daddy",
//     gender: "Male"
// }
// person.category = "Super Rich";
// person.country = "Thai Land";
// console.log(person);


// let favChar = "sukuna";
// let guess = prompt("Guess my fav character from Jujustu Kaisen");

// while(true) {
//     if(guess.toLocaleLowerCase() == favChar || guess.toLocaleLowerCase() == 'quit' || guess.toLocaleLowerCase() == 'q') break;

//     guess = prompt("Oops, Wrong guess! Try again");
// }

// if(guess.toLocaleLowerCase() == favChar) console.log("Congrats! Right guess");
// else console.log("Out of the game");


// let random = Math.floor(Math.random() * 100) + 1;
// let guess = parseInt(prompt("Guess the random number"));

// while(true) {
//     if(random == guess) break;

//     if(guess > random) {
//         guess = parseInt(prompt("Try to guess lower number"));
//     } else if (guess < random) {
//         guess = parseInt(prompt("Try to guess greater number"));
//     }
// }

// if(guess == random) console.log("Congrats! Right guess");
// else console.log("Out of game");


// let students = {
//     Muzan: {
//         age: 27,
//         field: "Science"
//     },
//     Sukuna: {
//         age: 1000,
//         field: "Curse"
//     },
//     Loid: {
//         age: 29,
//         field: "Spy"
//     }
// }

// console.log(students);
// console.log(students["Loid"]["age"]);
// console.log(students.Muzan.field);


// let students = [
//     {
//         name: "Johan",
//         partner: "North"
//     },
//     {
//         name: "TonFah",
//         partner: "Typhoon"
//     },
//     {
//         name: "Hill",
//         partner: "Easter"
//     }
// ]

// console.log(students[0]["name"]);
// console.log(students[2].partner);
// console.log(students[1]);


// let arr = [4, 5, 9, 2, 4, 10, 39, 26];
// let num = 10;
// printLargestElement(arr, num);

// function printLargestElement(arr, num) {
//     for(elt of arr) {
//         if(elt > num) console.log(elt);
//     }
// }


// let str = "abcdabcdefgggh";

// let uniqueChar = function(str) {
//     let ans = "";
//     for(char of str) {
//         if(!(ans.includes(char))) ans+=char;
//     }
//     return ans;
// }
// console.log(uniqueChar(str));


// const LongestCountry = function() {
//     let country = [];
//     let max = 0;
//     let maxIdx = 0;
//     let range = parseInt(prompt("Enter the number of countries"));
//     for(let i=1; i <= range; i++) {
//         country.push(prompt(`Enter country ${i}`))
//     }
//     for(let i=0; i < country.length; i++) {
//         if(country[i].length > max) {
//             max = country[i].length;
//             maxIdx = i;
//         }
//     }
//     return country[maxIdx]
// }
// console.log(LongestCountry());


// let str = prompt("Enter any string");

// function countVowels(str) {
//     let newStr = str.toLowerCase();
//     let count=0;
//     for(char of newStr) {
//         if(char == 'a' ||char == 'e' ||char == 'i' ||char == 'o' ||char == 'u') {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countVowels(str));


// let start = parseInt(prompt("Enter the start range"));
// let end = parseInt(prompt("Enter the end range"));
// console.log(printRandom(start, end));

// function printRandom(start, end) {
//     return Math.floor((Math.random() * (end-start+1)) + start);
// }


// try {
//     console.log(a*10);
// } catch(err) {
//     console.log("a is not initialized");
// }


// const greet = () => {
//     console.log("Hello");
// }

// const sum = (a, b) => a+b
// const mul = (a, b) => a*b

// let interval = setTimeout(function greet() {
//     console.log("Alola");
//     console.log("Akala");
// }, 5000);

// let interval = setInterval(function greet() {
//     console.log("Alola");
//     console.log("Akala");
// }, 2000);

// setTimeout(() => {
//     clearInterval(interval);
// }, 10000);

// let students = {
//     anime: "Spy*Family",
//     loid: {
//         age: 29,
//         code: "twilight",
//         inLoid: () => {
//             console.log(this);
//         }
//     },
//     yor: {
//         age: 27,
//         code: "thorn princess",
//         inYor: function() {
//             console.log(this);
//         }
//     }
// }
// console.log(students.map(student => student.code));


// const loid = {
//     age: 29,
//     family: function() {
//         console.log(this);
//         let daughter = () => {
//             console.log(this);
//         }
//         console.log(daughter());
//     }
// }

// let arr = [1, 2, 3, 4, 5];

// const arrayAverage = (arr) => {
//     let sum = 0;
//     for(let elt of arr) {
//         sum += elt;
//     }
//     return (sum / arr.length);
// }
// console.log(arrayAverage(arr));


// const isEven = (num) => (num % 2 == 0);

// const object = {
//     message: 'Hello, World!',
//     logMessage() {
//         console.log(this.message);
//     }
// };
// setTimeout(object.logMessage, 1000);



let arr = [1, 2, 3, 4, 5];
// console.log(arr.every(elt => elt < 0));
// console.log(arr.at(2));
// console.log(arr.fill(7, 2, 3));
// console.log(arr.filter(elt => elt%2 == 0));
// console.log(arr.find(elt => elt > 40));
// arr.forEach(elt => console.log(elt));
// console.log(arr.join("~~"));
// console.log(arr.reduce((sum, elt) => sum+=elt));
// arr.set([29, 30]);
// console.log(arr.map(elt => elt*2));

// let students = [
//     {
//         name: "Loid",
//         age: 29,
//         code: "twilight",
//         inLoid: () => {
//             console.log(this);
//         }
//     },
//     {
//         name: "Yor",
//         age: 27,
//         code: "thorn princess",
//         inYor: function() {
//             console.log(this);
//         }
//     }
// ]
// console.log(students.map(student => student.code));