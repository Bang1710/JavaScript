// Đối với đối tượng nguyên thủy thì việc gán giá trị se được gán cho toàn bộ giá trị
let message = "Hello!";
let phrase = message;
//  Và ta được kết quả là mỗi biến đều có giá trị lưu trữ là "Hello!"
// ----------------------Đối với đối tượng thì ta có thể có 2 biến, 
// và có thể có tham chiếu đến cùng một đối tượng
let user = { name: "John" };

let admin = user; // copy the reference


// ---------------Khi ta tham chiếu đến đối tượng
// let user = { name: 'John' };

// let admin = user;

admin.name = 'Pete'; // changed by the "admin" refere
console.log(user.name); // 'Pete', changes are seen from the "user" reference

// -----------------------------------So sánh ---------------------------
let a = {};
let b = a; // copy the reference

console.log( a == b ); // true, both variables reference the same object
console.log( a === b ); // true
// =====> khi ta tham chiếu cùng một đối tượng thì hai đối tượng sẽ bằng nhau

let c = {};
let d = {}; // two independent objects

console.log( c == d ); // false

// ===> Với hai đối tượng độc lập thì chúng sẽ không bằng 

// ------------------------- TA CÓ THỂ TẠO RA MỘT BẢN SAO CỦA MỘT ĐỐI TƯỢNG ----------------------

let languages = {
    key1: 'Javascript',
    key2: 'Ruby'
}

let languages2 = {};

for (let key in languages) {
    languages2[key] = languages[key];
}

console.log(languages2)

// ---------------------- Ta có cách 2------------------------
// Cú pháp là: Object.assign(dest, [src1, src2, src3...])
// Đối số đầu tiên destlà một đối tượng đích.
// Các đối số khác src1, ..., srcN(có thể nhiều khi cần thiết) là các đối tượng nguồn.
// Nó sao chép các thuộc tính của tất cả các đối tượng nguồn src1, ..., srcNvào đích dest. Nói cách khác, các thuộc tính của tất cả các đối số bắt đầu từ đối số thứ hai được sao chép vào đối tượng đầu tiên.
// Cuộc gọi trở lại dest.

let ex1 = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(ex1, permissions1, permissions2, languages2, languages);

console.log(ex1)

// -------------------------Ex2-------------------
let clone = Object.assign({}, languages2);
console.log(clone) // Copy đối tượng languages2 từ đối tượng trống 





