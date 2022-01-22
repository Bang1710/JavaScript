/*  Bản tóm tắt
Một bảng gian lận các phương thức mảng:

Để thêm / bớt các phần tử:

push(...items) 								thêm các mục vào cuối,
pop() 										trích xuất một mục từ cuối,
shift() 									trích xuất một mục từ đầu,
unshift(...items) 							thêm các mục vào đầu.
splice(pos, deleteCount, ...items)			tại chỉ mục pos xóa deleteCount các phần tử và phần chèn items.
slice(start, end) 							tạo một mảng mới, sao chép các phần tử từ chỉ mục start cho đến end(không bao gồm) vào đó.
concat(...items) 							trả về một mảng mới: sao chép tất cả các thành viên của mảng hiện tại và thêm items vào nó. Nếu bất kỳ trong số nào items là một mảng, thì các phần tử của nó sẽ được lấy.
Để tìm kiếm giữa các phần tử:
indexOf/lastIndexOf(item, pos)				tìm kiếm item bắt đầu từ vị trí pos, trả về chỉ mục hoặc -1 nếu không tìm thấy.
includes(value)								trả về true nếu mảng có value, ngược lại false.
find/filter(func)							lọc các phần tử thông qua hàm, trả về đầu tiên / tất cả các giá trị khiến nó trở về true.
findIndex									giống như find, nhưng trả về chỉ mục thay vì một giá trị.
Để lặp lại các phần tử:

forEach(func)								lệnh gọi func cho mọi phần tử, không trả về bất cứ thứ gì.
Để biến đổi mảng:

map(func)									tạo một mảng mới từ kết quả của việc gọi funccho mọi phần tử.
sort(func)									sắp xếp mảng tại chỗ, sau đó trả về nó.
reverse()									đảo ngược mảng tại chỗ, sau đó trả về nó.
split/join									chuyển đổi một chuỗi thành mảng và ngược lại.
reduce/reduceRight(func, initial)			tính toán một giá trị duy nhất trên mảng bằng cách gọi funccho từng phần tử và chuyển một kết quả trung gian giữa các lần gọi.
Ngoài ra:

Array.isArray(arr)							kiểm tra arrxem có phải là một mảng không.
Hãy lưu ý rằng các phương thức sort	và reverse	sửa splice	đổi chính mảng.

Những phương pháp này là những phương pháp được sử dụng nhiều nhất, chúng bao gồm 99% các trường hợp sử dụng. Nhưng có một số người khác:

arr.some (fn) / arr.every (fn) kiểm tra mảng.

Hàm fn	được gọi trên mỗi phần tử của mảng tương tự như map. Nếu có / tất cả kết quả true, trả về true, ngược lại false.

Các phương thức này hoạt động giống như các toán tử ||và &&: nếu fn strả về một giá trị trung thực, arr.some()ngay lập tức trả về truevà ngừng lặp lại các mục còn lại; nếu fntrả về một giá trị sai, arr.every()ngay lập tức trả về falsevà ngừng lặp lại các mục còn lại.

Chúng ta có thể sử dụng every	để so sánh các mảng:
 
function arraysEqual(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
}

alert( arraysEqual([1, 2], [1, 2])); // true
arr.fill (giá trị, bắt đầu, kết thúc) - điền vào mảng bằng cách lặp lạivalue từ chỉ mục startđến end.

arr.copyWithin (target, start, end) - sao chép các phần tử của nó từ vị trí startcho đến vị trí endvào chính nó , tại vị trí target(ghi đè lên hiện có).

arr.flat (độ sâu) / arr.flatMap (fn) tạo một mảng phẳng mới từ một mảng đa chiều


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

// Vòng lặp qua mảng ta có thể dùng For/ For - in/ For - of
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

// -----------------------Reverse method---------------------------------
let arrReverse = [1, 2, 3, 4, 5, 6]

console.log(arrReverse.reverse()) // Đảo ngược các vị trí của mảng và đổi chính mảng đó

// ----------------------split/ Join/ Concat---------------------------
let languages = 'Javascript, HTML, CSS' 
console.log(languages.split(', ')) //split is convert from string to array
console.log(arrReverse.join('-')) // Join nối các phần tử của mảng qua một ký tự 
console.log(arrReverse.concat(languages.split(','))) // nối các mảng lại với nhau

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



