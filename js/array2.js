/* Array Method
    ForEach()
    every()
    some()
    find()
    filter()
    map()
    reduce()
*/

let courses = [
	{
		id: 1,
		languages: "Javascript",
		coin: 250,
	},
	{
		id: 2,
		languages: "HTML",
		coin: 100,
	},
	{
		id: 3,
		languages: "CSS",
		coin: 0,
	},
	{
		id: 4,
		languages: "PHP",
		coin: 50,
	},
	{
		id: 5,
		languages: "CSS",
		coin: 150,
	},
	{
		id: 6,
		languages: "Typecript",
		coin: 30,
	},
];

// ForEach run a function for every element of the array
courses.forEach(function (course, index) {
	console.log(index, course);
});

// Every() kiểm tra tất cả các phần tử của mảng có điều kiện, sẽ dừng nếu thấy điều kiện sai đầu tiên
// Trả về kiểu boolean
let isFree = courses.every(function (course, index) {
	// console.log(index)
	return course.coin === 0;
});

console.log(isFree);

// some() chỉ cần 1 ông đúng là điều kiện sẽ dừng lại

let isFindOnlyCheck = courses.some(function (course, index) {
	// console.log(index)
	return course.coin === 0;
});

console.log(isFindOnlyCheck);

// find luôn trả về một đối tượng tìm được đầu tiên
let isFind = courses.find(function (course, index) {
	// console.log(index)
	return course.languages === "HTML";
});

console.log(isFind);

// Findindex return index
let isFindindex = courses.findIndex(function (course, index) {
	// console.log(index)
	return course.languages === "PHP";
});

console.log(isFindindex);

// filter()  trả về tất cả các đối tượng tìm được

let ListCourses = courses.filter(function (course, index) {
	return course.languages === "CSS";
});

console.log(ListCourses);

// Map
let newCourses = courses.map(function (course, index, array) {
	return {
		id: course.id,
		languages: `Khoa hoc: ${course.languages}`,
		coin: course.coin,
		coinText: `Gia: ${course.coin}`,
		index: index,
		array: array,
	};
});

console.log(newCourses);

let newLanguages = courses.map(function (course, index) {
	return {
		languages: course.languages,
		id: Math.floor(Math.random() * 6),
		length: course.languages.length,
	};
});

console.log(newLanguages);

//---------------------------------BÀI TẬP METHOD MAP()--------------------------------
// Cho trước hàm convertToBoolean có tham số inputs là một array gồm các phần tử có giá trị bất kì. Ví dụ:
// [1, 'hi', false, 8, undefined, '', NaN]
// Yêu cầu
// Hãy xử lý để hàm trên trả về một mảng mới gồm các phần tử được chuyển đổi sang kiểu dữ liệu boolean

function convertToBoolean(inputs) {
	let newBoolean = inputs.map(function (input) {
		return Boolean(input);
	});
	return newBoolean;
}

let inputs = [1, "hi", false, 8, undefined, "", NaN];
// let inputs = [0, 1, 2];
// let inputs = [NaN, 'hi', '']

console.log(convertToBoolean(inputs));

// Cho trước biến inputs là một array gồm các phần tử là các chữ số bất kì.
// Trong hàm run, hãy trả về array mới từ array inputs đã cho với giá trị các phần tử có giá trị x 3 lần.
// Input: [1, 2, 3] - Output: [3, 6, 9]
// Input: [4, -8, 0] - Output: [12, -24, 0]

function run(inputs) {
	let newInputs = inputs.map(function (input) {
		return input * 3;
	});
	return newInputs;
}

let Example = [1, 2, 3];
let Example2 = [4, -8, 0];

console.log(run(Example));
console.log(run(Example2));

// Cho trước hàm convertToNumber và tham số inputs là một mảng gồm nhiều chuỗi chữa các số tương tự như sau:
// Ex: ['1', '6', '2', '8']

function convertToNumber(inputs) {
	let newNumber = inputs.map(function (input) {
		return Number(input);
	});

	return newNumber;
}

let inputNumber = ["1", "6", "2", "8"];
console.log(convertToNumber(inputNumber));

// Cho trước hàm convertToString và tham số numbers là một mảng gồm nhiều các số tương tự như sau:
// Ex: [1, 20, -8, 0, 16]

function convertToString(numbers) {
	let newString = numbers.map(function (input) {
		return String(input);
	});

	return newString;
}

let newString = [1, 20, -8, 0, 16];
console.log(convertToString(newString));

// Trong bài này bạn sẽ viết hàm getHTMLfromArray sử dụng để render ra HTML cho giao diện website.

function getHTMLfromArray(input) {
	let html = input.map(function (input) {
		return `<li>${input}</li>`;
	});
	return html;
}

let newHTML = ["BMW", "Mercedes", "Vinfast"];

console.log(getHTMLfromArray(newHTML));

let htmls = [{ name: "BMW" }, { name: "Mercedes" }, { name: "Vinfast" }];

function getHTMLfromArray1(input) {
	let html = input.map(function (input) {
		for (let key in input) {
			return `<li>${input[key]}</li>`;
		}
	});
	return html;
}

console.log(getHTMLfromArray1(htmls));

// -----------------------------------------------REDUCE METHOD -------------------------------------------
// accumulator: đây là biến tích trữ
// currentValue: giá trị hiện tại
// curentValue: vị trí hiện tại
// originArray: mảng gốc
let coinHandler = function (
	aculumator,
	currentValue,
	currentIndex,
	originArray
) {
	return aculumator + currentValue.coin;
};

let totalCoin = courses.reduce(coinHandler, 0);

console.log(totalCoin);
// Solution
// Cho biến numbers là một mảng chứa các giá trị số bất kì.
// Trong hàm cho trước, hãy trả về tổng của toàn bộ giá trị của các phần tử trong mảng numbers

function sum(numbers) {
	let totalNumber = numbers.reduce(function (acculumator, currentvalue) {
		return acculumator + currentvalue;
	}, 0);
	return totalNumber;
}

console.log(sum([1, 2, 0, 6]));

// Cho biến inputs là một mảng chứa các giá trị có thể là bất kì kiểu dữ liệu nào.
// Trong hàm cho trước, hãy trả về tổng của toàn bộ giá trị số hợp lệ của các phần tử trong mảng inputs

function sumNumbers(inputs) {
	let totalNumber = inputs.reduce(function (a, b) {
		return a + (Number.isFinite(b) ? b : 0);
	}, 0);
	return totalNumber;
	// let totalNumber = 0;
	// for(let key of inputs) {
	//     if (Number.isFinite(key)) {
	//         totalNumber += key;
	//     }
	// }
	// return totalNumber
}

console.log(sumNumbers([1, 2, "hi", 0, 6]));

// ---------------------------------CÁC VÍ DỤ KHÁC VỀ REDUCE-----------------------------
let arr = [1, 3, 4, 5]; // Tinh tong
let totalNumber = arr.reduce(function (a, b) {
	return a + b;
});

console.log(totalNumber);

let arrDepth = [1, 2, [3, 4], [5, 6, 7], 8, 9];
// Hãy biến mảng trên thành một mảng một chiều

let arrNew = arrDepth.reduce(function (arrInitial, arrCurrentValue) {
	return arrInitial.concat(arrCurrentValue);
}, []);

console.log(arrNew);

let exampleCourses = [
	{
		topic: "Front - end",
		courses: [
			{
				id: 1,
				languages: "HTML & CSS",
			},
			{
				id: 2,
				languages: "Javascript",
			},
		],
	},
	{
		topic: "Back - end",
		courses: [
			{
				id: 3,
				languages: "PHP & NodeJS",
			},
			{
				id: 4,
				languages: "MySQL & MongoDB",
			},
		],
	},
];

let newExampleCourses = exampleCourses.reduce(function(arrInitial, arrCurrentValue) {
    return arrInitial.concat(arrCurrentValue.courses)
}, [])

console.log(newExampleCourses)

let getHTML = newExampleCourses.map(function(coures) {
    return `
        <ul>
            <li>id: ${coures.id}</li>
            <li>languages: ${coures.languages}</li>
        </ul>
    `
    // return subTitle;
})

console.log(getHTML.join(''))





// -------------------------------------------indexOf/lastIndexOf and includes-------------------------------------------
// The syntax:
// arr.indexOf(item, from) – looks for item starting from index from, and returns the index where it was found, otherwise -1.
// arr.lastIndexOf(item, from) – same, but looks for from right to left.
// arr.includes(item, from) – looks for item starting from index from, returns true if found.

let languages = ["Javascript", "HTML", "CSS", "Ruby", "Dart"];

console.log(languages.indexOf("HTML"));
console.log(languages.indexOf("Typescript"));

console.log(languages.lastIndexOf("HTML"));
console.log(languages.lastIndexOf("Typescript"));

console.log(languages.includes("HTML"));
console.log(languages.includes("Typescript"));

let different = [NaN];
console.log(different.indexOf(NaN));
console.log(different.includes(NaN));
