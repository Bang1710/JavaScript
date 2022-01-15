// Website: https://javascript.info/object
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
};

console.log(name);

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
console.log(bag)


