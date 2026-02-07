let arrayAverage = (arr) => {
    let sum = 0;
    for(i of arr) {
        sum += i;
    }
    return sum/arr.length;
};

let arr = [54, 48, 62, 35, 97];

console.log("Average: " , arrayAverage(arr));

let isEven = (num) => {
    if(num % 2 == 0) console.log("Even");
    else console.log("Not Even");
}
isEven(20);


// const object = {
// message: 'Hello, World!',
// logMessage() {
// console.log(this.message);
// }
// };
// setTimeout(object.logMessage, 1000);


let length = 4;
function callback() {
    console.log(this.length);
}
const object = {    
    length: 5,
    method(callback) {
        callback();
    },
};
object.method(callback, 1, 2);