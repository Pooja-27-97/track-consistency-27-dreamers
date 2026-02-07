const student = {
    name: "kandy",
    math: 99,
    phy: 94,
    chem: 96,
    getAvg() {
        console.log(this);
        let avg = (this.math + this.phy + this.chem) / 3;
        console.log(`${this.name} got average marks of ${avg}`);
    }
}

const sum = (a, b) => {
    console.log(a + b);
}

const mul = (a, b) => (
    a * b
)

const cube = (a) => a * a * a;
const hello = () => "Hello";


// console.log("Alola");
// setTimeout(() => {
//     console.log("Alola Island");
// }, 5000);
// console.log("Welcome to ");


// let id = setInterval(() => {
//     console.log("Welcome to Alola");
// }, 2000);


const arro = {
    name: "Sukuna",
    math: 99,
    prop: this, //global scope
    getName() {
        console.log(this);
    },
    getMarks: () => console.log(this),

    getInfo1: function () {
        console.log(this);
        setTimeout(function () {
            console.log(this);
        }, 2000);
    },
    getInfo2: function () {
        console.log(this);
        setTimeout(() => {
            console.log(this);
        }, 3000);
    }
}

// let id = setInterval(() => {
//     console.log("Hello");
// }, 2000);

// setTimeout(() => {
//     clearInterval(id);
//     console.log("Cleared");
// }, 10000);