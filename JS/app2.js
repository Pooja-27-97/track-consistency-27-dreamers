let arr = [5, 15, 2, 9, 65, 35, 18];
// let num = prompt("Enter any integer number");
// num = parseInt(num);

function printLarge(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            console.log(arr[i]);
        }
    }
}

// printLarge(arr, num);

let str = "lkjhhjkluiytr";

function uniqueChar(str) {
    let ans = "";
    for (let i = 0; i < str.length; i++) {
        let count = str[i];
        if (ans.indexOf(count) == -1) {
            ans += count;
        }
    }
    console.log(ans);
}
// uniqueChar(str);


let country = ["Australia", "Germany", "India", "Thailand", "Japan", "United states of America"];

function countryName(country) {
    let count = country[0].length;
    let ans = country[0];
    for (let i = 1; i < country.length; i++) {
        if (country[i].length > count) {
            count = country[i].length;
            ans = country[i];
        }
    }
    return ans;
}

// console.log(countryName(country));

let argu = "lkjaikjhaikjoai";

let vowelCount = function (argu) {
    let count = 0;
    let vowel = "aeiou";
    for (let i = 0; i < argu.length; i++) {
        for (let j = 0; j < vowel.length; j++) {
            if (argu[i] == vowel[j]) {
                count++;
            }
        }
    }
    return count;
}
// console.log(vowelCount(argu));

let start = 5;
let end = 100;

let printRandom = function (start, end) {
    let diff = end - start;
    let random = Math.floor(Math.random() * diff) + start;
    return random;
}
console.log(printRandom(start, end));