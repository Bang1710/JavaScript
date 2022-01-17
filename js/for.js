/*
For
For/im
For/ of
While
do/ while
*/

let myString = 'Bang'

let languages = [
    'Javascript',
    'Java',
    'Ruby',
    'C#'
]

let arrLength = languages.length;

for (let i = 0; i < arrLength; i++) {
    console.log(languages[i]);
}

let myObject = {
    name: 'Van Bang',
    age: 20,
    address: 'BR - VT'
}

console.log('For/in trong Object')

for (let key in myObject) {
    console.log(`${key}: ${myObject[key]}`)
}

console.log('For/in trong array')

for (let key in languages) {
    console.log(`${key}: ${languages[key]}`)
}

console.log('For/in trong string')

for (let key in myString) {
    console.log(`${key}: ${myString[key]}`);
}

// For/of
for (let value of myString) {
    console.log(`For/ of in string get value: ${value}`);
}

for (let value of languages) {
    console.log(`For/ of in array get value: ${value}`);
}

console.log(Object.keys(myObject));

for (let value of Object.keys(myObject)) {
    console.log(`For/ of in Object get value: ${value}: ${myObject[value]}`);
}

// While
let i = 0;
// while (i <= 5) {
//     console.log(i)
//     i++;
// }

// Nested loop

let arr = [
    ['heloo', 3],
    ['My name', 5],
    [7, 'age']
]

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j])
    }
}

// Đệ quy
// Viết hàm tính giai thừa của một số sử dụng đệ quy.
// Đã cho trước hàm factorial và tham số number

function factorial(number) {
    if (number > 0) {
        return number * factorial(number - 1)
    }
    return 1;
}

console.log(factorial(3))
console.log(factorial(6))
console.log(factorial(5))

// Viết hàm đệ quy trả lại mảng gồm các giá trị số nằm trong khoảng cho trước.
// Đã cho hàm run và tham số x, y
// run(1, 5)

// function run(x, y) {
//     if (x < y - 2) {
//         return `${x + 1} ${run(x + 1, y)}`
//     }
//     return `${y - 1}`
// }

function run(x, y) {
    if (x < y - 2) {
        return [x + 1].concat(run(x + 1, y))
    }
    return [x + 1]
}

console.log(run(1, 5))
console.log(run(4, 10))
console.log(run(100, 104))

