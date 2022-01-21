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
console.log(fruits);

// -------------------- MẢNG CÓ THỂ LƯU TRỮ BẤT KÌ LOẠI DỮ LIỆU NÀO --------------------------

let arr1 = [
	"Apple",
	{
		name: "John",
	},
	true,
	function () {
		alert("hello");
	},
];

for (let value of arr1) {
	console.log(value);
}

// ---------------------------------------METHOD----------------------------
// ------------------------------------POP-------------------------------
// Trích xuất phần tử cuối cùng của mảng và trả về

let languges = ["Javascript", "Ruby", "Dart", "HTML"];

console.log(languges);
console.log("Phần tử mà phương thức pop() lấy ra: ", languges.pop());
console.log(`Mảng sau khi thực hiện phương thức pop(): ${languges}`);

// ----------------------------------PUSH-----------------------------
// Nối phần tử vào cuối mảng

console.log(languges.push("CSS")); // ==> trả về độ dài của mảng
console.log(languges);

// ----------------------------------SHIFT-----------------------------
// Trích xuất phần tử đầu tiên của mảng và trả về nó:

console.log(languges.shift());
console.log(languges);

// --------------------------------UNSHIFT-------------------------
// Thêm phần tử vào đầu mảng

console.log(languges.unshift("PHP & MySQL")); // ==> return length array
console.log(languges);

// Các phương thức pushvà unshift có thể thêm nhiều phần tử cùng một lúc
// ----------------------------------Đối với mảng thì ta có thể dùng vòng lặp For/ For - in/ For - of

// ---------------------------------BÀI TẬP ----------------------
// Đoạn mã này sẽ hiển thị gì?

let fruit = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruit;
shoppingCart.push("Banana");

// what's in fruits?
console.log(fruit); // array is four items

// Bài tập 2

let styles = ["Jazz", "Blues"];

styles.push("Rock-n-Roll");

styles[Math.floor(styles.length - 1) / 2] = "Classics";

console.log(styles.shift());

styles.unshift("Rap", "Range");

console.log(styles);

// Kết quả là gì? Tại sao?

let arr2 = ["a", "b"];

arr2.push(function () {
	console.log(this);
});

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
    let sumTotal = 0;
    for (let i = 0; i < arrLength; i++) {
        let sum = 0;
        for (let j = i; j < arrLength; j++) {
            sum += arr[j]
            sumTotal = Math.max(sum, sumTotal)
        }
    }
    return  `Sum of max array: ${sumTotal}`;
}

// function getMaxSubSum(arr) {
// 	let maxSum = 0;
// 	let partialSum = 0;

// 	for (let item of arr) {
// 		// for each item of arr
// 		partialSum += item; // add it to partialSum
// 		maxSum = Math.max(maxSum, partialSum); // remember the maximum
// 		if (partialSum < 0) partialSum = 0; // zero if negative
// 	}

// 	return `Sum of max array: ${maxSum}`;
// }

console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([2, -1, 2, 3, -9]));
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
console.log(getMaxSubSum([100, -9, 2, -3, 5]));
console.log(getMaxSubSum([-1, -2, -3]));
console.log(getMaxSubSum([1, 2, 3]));
console.log(getMaxSubSum([-2, -1, 1, 2]));

// console.log(languges.toString)

// ----------------------------------MỘT VÀI METHOD KHÁC ---------------------------
// Cách xóa một phần tử của mảng -----DÙNG HÀM DELETE, phương thức này sẽ không làm rút ngắn độ dài của mảng
let example = [
    'Apple',
    'Orange',
    'Lemon',
    'Waterlemon'
]

console.log(delete example[2]) //Khi delete thì sẽ trả về giá trị undefined
console.log(example.length)
console.log(example)
console.log(example[2] === undefined)

// ----------TA CÓ THỂ DÙNG PHƯƠNG THỨC KHÁC ĐÓ CHÍNH LÀ SPLICE
// Cú pháp: arr.splice(start[, deleteCount, elem1, ..., elemN])
// Nó sửa đổi arr bắt đầu từ chỉ mục start: loại bỏ deleteCount 
// các phần tử và sau đó chèn elem1, ..., elemN vào vị trí của chúng. 
// Trả về mảng các phần tử bị loại bỏ.

console.log(example.splice(1,1))
console.log(example)

console.log(example.splice(0, 2, "Let's", "dance")) //Xóa 2 phần tử từ vị trí số 0
console.log(example.splice(1, 0, "Hello", "hi")) // Không xóa phần tử nào và thêm 2 phần tử từ vị trí thứ nhất
// Sau khi splice thì nó sẽ trả về phần tử bị xóa đi
console.log(example)

// --------------------------------Slice Method ---------------------------------
// Cú pháp là: arr.slice([start], [end])
// method return a new array copy to it all items from index start to end of current array
let sliceArray = example.slice(1,3)
console.log(sliceArray) // return a new array

// --------------------------------Concat Method----------------------------------
// The syntax is: arr.concat(arr1, arr2, ...)
let concatArray = example.concat(sliceArray, 2, [1, 'Welcome']);
console.log(concatArray)


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
	let result = {};
	for (let i = 0; i < arrLength; i++) {
		let key1 = formValues[i].field;
		let value1 = formValues[i].value;
		result[key1] = value1;
	}
	return result;
}

let input = [
	{ field: "name", value: "Sơn Đặng" },
	{ field: "age", value: 18 },
];

let input2 = [
	{ field: "name", value: "Sơn Đặng" },
	{ field: "age", value: 18 },
	{ field: "address", value: "Hà Nội" },
];

console.log(getRequestBodyFromValues(input));
console.log(getRequestBodyFromValues(input2));

function checkPositiveNumbers(numbers) {
	for (let i = 0; i < numbers.length; i++) {
		if (numbers[i] <= 0) {
			return false;
			break;
		}
	}
	return true;
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
	{ name: "Javascript", vnd: 1000 },
	{ name: "PHP", vnd: 10000 },
	{ name: "HTML, CSS", vnd: 0 },
	// ...
];

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
			return value;
		}
	}
	return null;
}

let input4 = [
	{
		name: "Cá heo",
		attack: 50,
		speed: 100,
		hitpoint: 100,
	},
	{
		name: "Khủng long",
		attack: 100,
		speed: 80,
		hitpoint: 180,
	},
	{
		name: "Sư tử",
		attack: 150,
		speed: 90,
		hitpoint: 120,
	},
	// ...
];

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
	let result = [];
	for (let i = 0; i < strings.length; i++) {
		if (strings[i].indexOf(keyword) !== -1) {
			result.push(strings[i]);
		}
	}
	return result;
}

console.log(findStringsInArrayByKeyword("PHP", ["Javascript", "PHP"]));
console.log(findStringsInArrayByKeyword("Gấu", ["Javascript", "PHP"]));
console.log(
	findStringsInArrayByKeyword("PHP", ["Học PHP", "Javascript", "PHP"])
);

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
				result.push(i);
			}
		}
	}

	return result;
}

console.log(findEqualValues([1, 2, 6, 8], [2, 9, 6]));

function run(input) {
    if (typeof(input) === 'string') {
        return input.includes('F8')
    } else if (Array.isArray(input)) {
        for (let key of input) {
            if (key !== 'F8') {
                return false;
            } else {
                return true
                break
            }
        }
    }
}

function run(input) {
    return input.includes('F8')
}

console.log(run(['F8', 'Học lập trình']))
console.log(run('Học lập trình tại F8'))
console.log(run(['F8 website', 'Học lập trình', 'F8 lap trinh']))
