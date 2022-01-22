function User(firstName, lastName, avatar, age, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.age = age;
    this.address = address;
    this.getName = function () {
        return `${this.firstName} ${this.lastName}`;
    }
}


let user1 = new User('Nguyen', 'Bang', 'avatar', 18, 'BR - VT');
user1.title = 'tui la sinh vien';

user1.getAge = function () {
    return this.age;
}

console.log(user1.getAge());

console.log(user1);
console.log(user1.firstName);
console.log(user1.getName)
console.log(user1.getName())

let user2 = new User('Dzoo', 'Zy', 'avatar', 20, 'HCM');
user2.subtitle = 'tui la giang vien';
console.log(user2);

User.prototype.Gender = 'male';

User.prototype.getGender = function () {
    return this.Gender;
}
console.log(user1.Gender);
console.log(user1.getGender());

// Object date
// Website tìm hiểu thêm: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date
// https://www.w3schools.com/js/js_dates.asp
let date = new Date();
console.log(date);
console.log(typeof date);
console.log(date.getDate());
console.log(date.getMonth() + 1);
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMinutes());

// Làm việc với Date
// Phương thức	        Mô tả
// getFullYear()	    Trả về năm có gồm 4 chữ số
// getMonth()	        Trả về số đại diện cho tháng từ 0-11
// getDate()	        Trả về số đại diện cho ngày từ 1-31
// getHours()	        Trả về số giờ từ 0-23
// getMinutes()	        Trả về số phút từ 0-59
// getSeconds()	        Trả về số giây từ 0-59
// getMilliseconds()	Trả về số mili giây từ 0-999
// getTime()	        Trả về số mili giây tính từ 00:00:00 01/01/1970
// getDay()	            Trả về số đại diện ngày trong tuần từ 0-6
// Date.now()	        Trả về số mili giây tính từ 00:00:00 01/01/1970

// Tham khảo thêm
// Date format: https://www.w3schools.com/js/js_date_formats.asp
// Date set methods: https://www.w3schools.com/js/js_date_methods_set.asp

function getDifferentSeconds(a, b) {
    var a = new Date(a);
    var b = new Date(b);
    var getDifferentSeconds = (b.getTime() - a.getTime()) / 1000;
    return getDifferentSeconds;
}

getDifferentSeconds('2020/06/31 16:00:00', '2020/06/31 16:00:10');

/* Math object
- Math.Pi  // in ra số PI
- Math.round()  // làm tròn trên hoặc làm tròn dưới
- Math.abs()   // lấy giá trị tuyệt đối
- Math.ceil()  // làm tròn trên
- Math.floor()  // làm tròn dưới
- Math.randoom() // trả về dãy số thập  nhỏ hơn 1 
- Math.min()
- Math.max()
*/

console.log(Math.PI);

console.log(Math.round(4.25555))
console.log(Math.round(4.55555))

console.log(Math.abs(4))
console.log(Math.abs(-4))

console.log(Math.ceil(4.00001))
console.log(Math.ceil(4.91))

console.log(Math.floor(4.00001))
console.log(Math.floor(4.91))

let random = Math.floor(Math.random()*5) 

let gift = [
    '10 coin',
    '20 coin',
    '30 coin',
    '40 coin',
    '50 coin'
]

console.log(gift[random]);

let random1 = Math.floor(Math.random()*100)

if (random1 < 5) {
    console.log('Cuong hoa thanh cong !')
} else {
    console.log('Khong cuong hoa thanh cong')
}

console.log(Math.min(-100, 10, 9, -120, 50))
console.log(Math.max(-100, 10, 9, -120, 50))


