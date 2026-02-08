// let num = 20;
// if(num % 10 == 0) console.log("Good");
// else console.log("Bad");

// let name = prompt("Enter your name");
// let age = prompt("Enter your age");
// alert(`${name} is ${age} years old.`);

// let str = prompt("Please enter any string");
// if(str[0] === 'a'|| str[0] === 'A' && str.length > 5) console.log("Golden");
// else console.log("Not golden");

// let a = 80;
// let b = 10;
// let c = 70;

// if(a > b && a > c) console.log(a);
// else if (b > c) console.log(b);
// else console.log(c);

// let num1 = 1259;
// let num2 = 45895;

// if((num1 % 10) === (num2 % 10)) console.log("Same");
// else console.log("Not same");

// let arr = [7, 9, 0, -2];
// let n = 3;

// console.log(arr.slice(0, n));
// console.log(arr.slice(arr.length-n));

// let str = " ";

// if(str === "") console.log("Empty string");
// else console.log("Not empty string");

// let str = "HellO";
// let n = 0;
// if(str[n] === str[n].toLocaleLowerCase()) console.log("Lower case");
// else console.log("No");

// let str = "     hello         ";
// console.log(str.trim());

// let arr = [7, 9, 0, -2];
// console.log(arr.includes(-2));

// let arr = [4, 8, 6, 2, 8, 7, 6, 2, 3, 0, 1];
// let num = 8;
// for(let i=0; i <arr.length; i++) {
//     if(arr[i] === num) arr.splice(i, 1);
// }
// console.log(arr);

// let num = 6478413;
// let count = 0;

// while(num > 0) {
//     let last = num % 10;
//     count += last;
//     num = Math.floor(num/10);
// }
// console.log(count);

// let n = 5;
// let fact = 1;
// for(let i=1; i <= n; i++) {
//     fact *= i;
// }
// console.log(fact);

// let arr = [4, 8, 16, 2, 9, 7, 6, 2, 3, 0, 1];
// let large = arr[0];
// for(let i =1; i < arr.length; i++) {
//     if(arr[i] > large) large = arr[i];
// }
// console.log(large);

// let student = {
//     name: "Muzan",
//     gender: "Male",
//     age: 27,
//     title: "Creator of demons",
//     city: "Kyoto"
// }

// let arr = [4, 8, 16, 2, 9, 7, 6, 2, 3, 0, 1];
// let num = 25;

// function largest(arr) {
//     for(let i =0; i < arr.length; i++) {
//         if(arr[i] > num) console.log(arr[i]);
//     }
// }

// largest(arr);

// let og = "poojakandypoojakandy";
// let uni = "";

// let unique = function(og, uni) {
//     for(let i=0; i < og.length; i++) {
//         if(!(uni.includes(og[i]))) uni+=og[i];
//     }
//     console.log(uni);
// }

// unique(og, uni);

// let country = ["Australia", "Germkjjhkhgyfghjiuytfdghjiuytfggfhjkljhgany", "United States of America"];

// let largest = (country) => {
//     let max = country[0].length;
//     let idx = 0;
//     for(let i=1; i < country.length; i++) {
//         if(country[i].length > max) {
//             max = country[i].length;
//             idx = i;
//         }
//     }
//     console.log(country[idx]);
// }

// largest(country);

// let str = "aeiouhgfaeiou";
// let vow = "aeiouAEIOU";
// let count = 0;

// for(let i=0; i < str.length; i++) {
//     for(let j=0; j < vow.length; j++) {
//         if(str[i] == vow[j]) {
//             count++;
//         }
//     }
// }
// console.log(count);

// let start = 5;
// let end = 15;

// let random = (s, e) => (
//     Math.floor(Math.random() * (e-s+1)) + s
// )

// console.log(random(start, end));


// let arr = [4, 8, 16, 2, 9, 7, 6, 2, 3, 0, 1];
// let arrayAvg = (arr) => {
//     let sum = 0;
//     for(let i=0; i < arr.length; i++) {
//         sum += arr[i];
//     }   
//     return sum/arr.length;
// }

// console.log(arrayAvg(arr));


// let isEven = (num) => {
//     if(num % 2 == 0) return "Even";
//     else return "False";
// }
// console.log(isEven(7));


// const object = {
// message: 'Hello, World!',
// logMessage() {
// console.log(this.message);
// }
// };
// setTimeout(object.logMessage, 1000);

// let arrayFunc = (arr) => {
//     let sqr = [];
//     let sum = 0;
//     for(let i=0; i < arr.length; i++) {
//         sqr.push(arr[i] * arr[i]);
//         sum += arr[i];
//     }
//     console.log(sqr);
//     console.log(sum);
//     console.log(sum/arr.length);
// }
// let arr = [4, 8, 16, 2, 9, 7, 6, 2, 3, 0, 1];
// console.log(arrayFunc(arr));

// let nums = [ 3, 0, 5, 1];

// const square = nums.map((num) => num * num);
// console.log(square);

// let sum = square.reduce((acc, cur) => acc + cur, 0);
// console.log(sum);

// let avg = sum / nums.length;
// console.log(avg);

// let arr = [4, 8, 16, 2, 9, 7, 6, 2, 3, 0, 1];
// const newArr = arr.map((num) => num+5);
// console.log(newArr);

// let str = ["apple", "banana", "grapes", "orange"];
// console.log(str.map((fruit) => fruit.toUpperCase()));


// const doubleAndReturnArgs = (arr, ...args) => [...arr,...args.map((v) => v * 2)];

// console.log(doubleAndReturnArgs([1, 2, 3], 4, 4)); // [1,2,3,8,8]
// console.log(doubleAndReturnArgs([2], 10, 3, 4)); // [2, 20, 8]


// const mergeObjects = (arg1, arg2) => ({...arg1, ...arg2});

// let arg1 = {
//     name: "Muzan",
//     age: 27
// };

// let arg2 = {
//     city: "Tokyo",
//     country: "Japan"
// };

// console.log(mergeObjects(arg1, arg2));