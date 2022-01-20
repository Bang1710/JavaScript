/*  Array Method
- To string
- Join
- pop / push, shift / unshift
- Splicing
- Concat
- slicing

*/

// ------------------------CÁC CÁCH KHAI BÁO MỘT MẢNG ----------------------

let arr = new Array();
// let arr = []

let fruits = ["Apple", "Orange", "Plum"];
console.log(fruits)

// -------------------- MẢNG CÓ THỂ LƯU TRỮ BẤT KÌ LOẠI DỮ LIỆU NÀO --------------------------

let arr1 = [
    'Apple',
    {
        name: 'John'
    },
    true,
    function () {
        alert('hello');
    }
];

for (let value of arr1) {
    console.log(value)
}

// ---------------------------------------METHOD----------------------------
// ------------------------------------POP-------------------------------
// Trích xuất phần tử cuối cùng của mảng và trả về

let languges = [
    'Javascript',
    'Ruby',
    'Dart',
    'HTML'
]

console.log(languges)
console.log('Phần tử mà phương thức pop() lấy ra: ', languges.pop());
console.log(`Mảng sau khi thực hiện phương thức pop(): ${languges}`)

// -----------------------------------PUSH-----------------------------
// Nối phần tử vào cuối mảng

console.log(languges.push('CSS')); // ==> trả về độ dài của mảng
console.log(languges)

// --------------------------------SHIFT-----------------------------
// Trích xuất phần tử đầu tiên của mảng và trả về nó:

console.log(languges.shift());
console.log(languges)


// ------------------------------UNSHIFT-----------------------
// Thêm phần tử vào đầu mảng

console.log(languges.unshift('PHP & MySQL')) // ==> return length array
console.log(languges)

// Các phương thức pushvà unshift có thể thêm nhiều phần tử cùng một lúc
// ----------------------------------Đối với mảng thì ta có thể dùng vòng lặp For/ For - in/ For - of

// Đoạn mã này sẽ hiển thị gì?

let fruit = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruit;
shoppingCart.push("Banana");

// what's in fruits?
console.log(fruit); // array is four items

// Bài tập 2

let styles = [
    'Jazz',
    'Blues'
]

styles.push('Rock-n-Roll');

styles[Math.floor(styles.length - 1) / 2] = "Classics"

console.log(styles.shift());

styles.unshift('Rap', 'Range');

console.log(styles)

// Kết quả là gì? Tại sao?

let arr2 = ["a", "b"];

arr2.push(function () {
    console.log(this);
})

console.log(arr2[2]()); // a,b, function () {....}

function sumInput() {
    let sum = 0;
    let numbers = [];

    while (true) {

        let value = prompt("A number please?", 0);

        // should we cancel?
        if (value === "" || value === null || !isFinite(value)) break;

        numbers.push(+value);
    }

    for (let key of numbers) {
        sum += key;
    }

    return sum;
}

// console.log(sumInput())

// Bài 3
function getMaxSubSum(arr) {
    let arrLength = arr.length;
    let sumSS = 0;
    for (let i = 0; i < arrLength; i++) {
        let sum = arr[i];
        for (let j = i + 1; j < arrLength; j++) {
            if (sum > sumSS) {
                sumSS = sum;
            }
            sum += arr[j]
        }
    }
    return sumSS;
}

console.log(getMaxSubSum([-1, 2, 3, -9]))
console.log(getMaxSubSum([2, -1, 2, 3, -9]))
console.log(getMaxSubSum([-1, 2, 3, -9, 11]))
console.log(getMaxSubSum([100, -9, 2, -3, 5]))
console.log(getMaxSubSum([-1, -2, -3]))

// -1,2,3,-9






// console.log(languges.toString)



// Cho trước hàm getRequestBodyFromValues và tham số formValues, các test case sẽ gọi hàm này và truyền đối số có định dạng tương tự như sau:

// [
//     { field: 'name', value: 'Sơn Đặng' },
//     { field: 'age', value: 18 },
//     { field: 'address', value: 'Hà Nội' },
//     // ...
// ]
// Như các bạn thấy, formValues là một mảng có thể chứa nhiều objects. Mỗi object chứa 2 keys là field và value.
// Yêu cầu
// Từ array formValues đã cho, hãy trả về một object có các keys tương ứng với các fields của các objects nằm trong array formValues.


function getRequestBodyFromValues(formValues) {
    let arrLength = formValues.length;
    let result = {}
    for (let i = 0; i < arrLength; i++) {
        let key1 = formValues[i].field;
        let value1 = formValues[i].value;
        result[key1] = value1;
    }
    return result
}

let input = [
    { field: 'name', value: 'Sơn Đặng' },
    { field: 'age', value: 18 },
];

let input2 = [
    { field: 'name', value: 'Sơn Đặng' },
    { field: 'age', value: 18 },
    { field: 'address', value: 'Hà Nội' },
]


console.log(getRequestBodyFromValues(input));
console.log(getRequestBodyFromValues(input2));


function checkPositiveNumbers(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] <= 0) {
            return false
            break;
        }
    }
    return true
}

function hasFreeCourses(courses) {
    for (let i = 0; i < courses.length; i++) {
        if (courses[i].vnd === 0) {
            return true;
            break;
        }
    }
    return false;
}

let input3 = [
    { name: 'Javascript', vnd: 1000 },
    { name: 'PHP', vnd: 10000 },
    { name: 'HTML, CSS', vnd: 0 }
    // ...
]

console.log(hasFreeCourses(input3));

function findAMonsterByAttack(monsters) {
    // let arrLength = monsters.length
    // for (let i = 0; i < arrLength; i++) {
    //     if (monsters[i].attack === 150) {
    //         return monsters[i];
    //         break;
    //     }
    // }

    for (let value of monsters) {
        if (value.attack === 150) {
            return value
        }
    }
    return null;

}


let input4 = [
    {
        name: 'Cá heo',
        attack: 50,
        speed: 100,
        hitpoint: 100,
    },
    {
        name: 'Khủng long',
        attack: 100,
        speed: 80,
        hitpoint: 180,
    },
    {
        name: 'Sư tử',
        attack: 150,
        speed: 90,
        hitpoint: 120,
    },
    // ...
]

console.log(findAMonsterByAttack(input4));

function findStringsInArrayByKeyword(keyword, strings) {
    // let result = [];
    // for (let i = 0; i < strings.length; i++) {
    //     if (strings[i].indexOf(keyword) !== -1) {
    //         result[i] = strings[i]
    //     }
    // }
    // return result;
    // let result = [];
    // let valuedelete = []
    let result = []
    for (let i = 0; i < strings.length; i++) {
        if (strings[i].indexOf(keyword) !== -1) {

            result.push(strings[i])
        }
    }
    return result;

}

console.log(findStringsInArrayByKeyword('PHP', ['Javascript', 'PHP']))
console.log(findStringsInArrayByKeyword('Gấu', ['Javascript', 'PHP']))
console.log(findStringsInArrayByKeyword('PHP', ['Học PHP', 'Javascript', 'PHP']))

function findEqualValues(array1, array2) {
    let result = [];
    // for (let i = 0; i < array1.length; i++) {
    //     for (let j = 0; j < array2.length; j++)  {
    //         if( array1[i] === array2[j]) {
    //             result.push(array1[i])
    //         }
    //     }
    // }

    for (let i of array1) {
        for (let j of array2) {
            if (i === j) {
                result.push(i)
            }
        }
    }


    return result
}

console.log(findEqualValues([1, 2, 6, 8], [2, 9, 6]))







