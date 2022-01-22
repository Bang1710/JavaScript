// Website: https://javascript.info/object

/* Bản tóm tắt
Đối tượng là các mảng liên kết với một số tính năng đặc biệt.

Chúng lưu trữ các thuộc tính (cặp khóa-giá trị), trong đó:

Khóa thuộc tính phải là chuỗi hoặc ký hiệu (thường là chuỗi).
Giá trị có thể thuộc bất kỳ loại nào.
Để truy cập một thuộc tính, chúng tôi có thể sử dụng:

obj.property Kí hiệu dấu chấm:.
Kí hiệu dấu ngoặc vuông obj["property"]. Dấu ngoặc vuông cho phép lấy khóa từ một biến, như obj[varWithKey].
Các toán tử bổ sung:

Để xóa một thuộc tính delete obj.prop:.
Để kiểm tra xem thuộc tính có khóa đã cho có tồn tại "key" in objhay không:.
Để lặp qua một đối tượng: for (let key in obj) vòng lặp.
Những gì chúng ta đã nghiên cứu trong chương này được gọi là "đối tượng đơn giản", hay chỉ Object.

Có nhiều loại đối tượng khác trong JavaScript:

Array để lưu trữ các bộ sưu tập dữ liệu có thứ tự,
Date để lưu trữ thông tin về ngày và giờ,
Error để lưu trữ thông tin về một lỗi.
…Và như thế.
*/

// An empty object(“empty cabinet”) can be created using one of two syntaxes:

// let user = new Object(); // "object constructor" syntax
// let user = {}; // "object literal" syntax

/*Literals and properties
We can immediately put some properties into {
    ...
}
as“ key: value” pairs:
*/

// let user = { // an object
//     name: "John", // by key "name" store value "John"
//     age: 30 // by key "age" store value 30
// };

let name = {
    firstName: 'Nguyen',
    lastName: 'Bang',
    age: 20,
    address: 'BR- VT',
    'Email Edu': 'bangnguyen.31201023793@st.ueh.edu.vn',
    fullName: function () {
        return this.firstName + ' Van ' + this.lastName;
    }
};

console.log(name);
console.log(name.fullName);
console.log(name.fullName());

// Giá trị có thể thuộc bất kỳ loại nào. Hãy thêm một boolean:

name.isAdmin = true;
name.school = 'UEH';
name['telephone Number'] = '0563098911';

// Để xóa một thuộc tính, chúng ta có thể sử dụng deletetoán tử:

delete name.age;

let user = {
    name: "John",
    age: 30
};

// let key = prompt("What do you want to know about the user?", "name");
let key = 'name';

// access by variable
console.log(user[key]); // John (if enter "name")

// Thuộc tính được tính toán
// Chúng ta có thể sử dụng dấu ngoặc vuông trong một đối tượng theo nghĩa đen, khi tạo một đối tượng. Đó được gọi là thuộc tính được tính toán .

// Ví dụ:

let fruit = 'apple';

let bag = {
    [fruit]: 5, // the name of the property is taken from the variable fruit
};

// console.log( bag.apple ); // 5 if fruit="apple"

bag[fruit + 'Computers'] = 'free';
console.log(bag);


// Property value shorthand
function makeUser(name, age) {
    return {
        name: name,
        age: age,
        // ...other properties
    };
}

let infoUser = makeUser("John", 30);

console.log(infoUser);


// Giới hạn tên thuộc tính
// Như chúng ta đã biết, một biến không thể có tên bằng một trong các từ dành riêng cho ngôn ngữ như “for”, “let”, “return”, v.v.
// Nhưng đối với thuộc tính đối tượng, không có hạn chế như vậy:

// these properties are all right
let obj = {
    for: 1,
    let: 2,
    return: 3
};

console.log(obj.for + obj.let + obj.return);  // 6

// Kiểm tra thuộc tính có tồn tại hay không
let information = {
    telephone: null
}

console.log(information.name === undefined);
console.log('telephone' in information)
// Cú pháp là:  "key" in object
// Nếu chúng ta bỏ qua dấu ngoặc kép, điều đó có nghĩa là một biến, nó phải chứa tên thực cần được kiểm tra
console.log(`Kiem tra xem co ton tai hay khong: `, 'lastName' in name);

// Vòng lặp
// Cú pháp:

// for (key in object) {
//     // executes the body for each key among object properties
// }

for (let key in name) {
    console.log(`${key}: `, name[key]);
}

for (let prop in name) {
    console.log(prop);
}

function isEmpty(obj) {
    let number = 0;
    for (let key in obj) {
        number++;
    }

    let result = number !== 0 ? true : false;
    return result;
}

/* Cách hay hơn
function isEmpty(obj) {
  for (let key in obj) {
    // if the loop has started, there is a property
    return false;
  }
  return true;
}
*/

let info = {};

// info.name = 'Van Bang';

console.log(isEmpty(info));
console.log(isEmpty(name));

// Tính tổng số lượng
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

function sum(obj) {
    let result = 0;
    for (let key in obj) {
        result += obj[key];
    }
    return result;
}

console.log(sum(salaries));

// Nhân các thuộc tính là số với 2
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiflyNumeric(obj) {
    for (let key in obj) {
        if (typeof (obj[key]) == 'number') {
            obj[key] = obj[key] * 2;
        }
    }
    return obj;
}

console.log(multiflyNumeric(menu));








