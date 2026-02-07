// let arr = [1, 5, 8, 7];

// let print = function(el) {
//     console.log(el);
// }

// // arr.forEach(print);

// let obj = [{
//     name: "sukuna",
//     age: 1000
// },
// {
//     name: "muzan",
//     age: 27
// }, 
// {
//     name: "ash",
//     age: 10
// }];

// // obj.forEach((student) => {
// //     console.log(student.name);
// // });


// let double = arr.map((elt) => ( elt*2));

// let gpa = obj.map((elt) => {
//     return elt.age + 10;
// });


// let num = [1, 5, 8, 12, 65, 48, 97, 32, 26, 49];
// let even = num.filter((elt) => {
//     return (elt % 2 == 0);
// });

// // num.every((elt) => elt % 2 == 0);
// // num.some((elt) => elt % 2 == 0);

// // num.reduce((acc, elt) => {
// //     console.log(acc);
// //     return acc+elt;
// // });

// let max = num.reduce((res, elt) => {
//     if(elt > res) return elt;
//     else return res;
// })


// let arr = [10, 20, 50, 40, 5, 97];
// let ans = arr.every((elt) => elt % 10 == 0);
// console.log(ans);

// let min = arr.reduce((acc, elt) => {
//     if (elt < acc) return elt;
//     else return acc;
// });
// console.log(min);


// let arr = [1, 5, 8, 9, 6, -5, 2, 4, 5, 6, 8, 4];
// console.log(Math.min(...arr));

// let newArr = [...arr];
// console.log(newArr);

// let even = [2, 4, 6, 8];
// let odd = [1, 3, 5, 7, 9];
// let num = [...even, ...odd];


// const data = {
//     name: "Sukuna",
//     age: 1000
// };

// const dataCopy = {...data, id: 123, email: "megumi123@gmail.com"};

// let arr = [1, 5, 8, 6];
// let obj = {...arr};


// function total(msg, ...args) {
//     console.log(msg);
//     return args.reduce((sum, elt) => sum+elt);
// }


// let names = ["Ash", "Kiawe", "Lana", "Lilly", "Mallow"];
// let [winner, runnerup, ...others] = names;
// console.log(winner, runnerup, others);


const pokemon = {
    name: "Pikkachu",
    age: 3,
    type: "electric",
    master: "Ash",
    friends: ["Rowlet", "Lycanroc", "Litten"],
    city: "Danto"
};

let {master: guide, name, city= "Alola"} = pokemon;
console.log(guide, name, city);