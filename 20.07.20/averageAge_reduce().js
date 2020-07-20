let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

// function getAverageAge(array) {
//     let sumAges = 0;
//     for (item of array) {
//         sumAges += item.age;
//     }
//     return sumAges / array.length;
// }

function getAverageAge(array) {
    return array.reduce((prev, item) => prev + item.age, 0) / array.length;
}

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28