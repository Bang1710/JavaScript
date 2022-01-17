/* alert("hello xin chao mn")
var fullName = 'Son Dang';
var age = 18;
1. Các hàm built - in
alert(fullName);
alert(age);
confirm("ban da du tuoi ch")
prompt('hay nhap tuoi cua ban')
setTimeout(function() {
    alert('Thong bao')
 }, 1000)
setInterval(function() {
    alert('Thong bao')
 }, 5000)
 */



//2. Các kiểu dữ liệu

// Number type
var a = 1;

//  string type
var fullName = 'Van Bang'

//  bollean type
var isSuccess = true;

// Undefied type 
var age;

// Null type
var isNull = null;

//Symbol type 
var id = Symbol('id');
// console.log(typeof isSuccess);

// Complex data
/* - Object
- Function
*/

// Function type
var myFunction = function() {
    alert('Heloo xin chao mn')
}

// call function
// myFunction();

// Object type
// Object
var myObject = {
    name: 'Van Bang',
    age: 18,
    school: "UEH",
    myFunction: function() {

    }
};


// -Array
var myArray = [
    'Javascript',
    'Ruby',
    'PHP',
    'Dart',
    1,
    {},
    myFunction = function() {

    }
];

// console.log(myArray);

// Check date type = typeof [Khoảng trắng] ten bien

// Làm việc với chuỗi - Javascript string method
/* 1. Tạo chuỗi 
    - Các cách tạo chuỗi
    - Nên dùng cách nào
    - kiểm tra data type
    2. Một số case sử dụng backslash (\)
    3. Xem độ dài chuỗi
    4. Chú ý độ dài khi viết code
    5. template string ES6
*/
var myName = 'Van Bang';
var myEnglish = new String('england'); // Khai báo kiểu đối tượng
// Không nên dùng cách này
/* -- kiểm tra kiểu dữ liệu
console.log(typeof myName);  --> string
console.log(typeof myEnglish);  --> Object
Một số case sử dụng backslash
\'  --> '
\"  --> "
\\  --> \
- Xem độ dài chuỗi dùng hàm length
console.log(myName.length)
 
Ta có thể ngắt dòng khi chuỗi quá dài, có thể dùng toán tử + để nối chuỗi 
*/

var firstName = 'Van',
    lastName = 'Bang';
// console.log(`Toi ten la ${firstName} ${lastName}`);
/* Đây là ứng dụng của template string ES6
thay vì ta viết như vầy */
// console.log('Toi ten la ' + firstName + ' ' + lastName);

// Method string javascript
 var exampleString = 'Hoc JS tai F8';

// 1. Lenght  --> chieu dai cua chuoi console.log(examplestring.length);
// 2. Find index
// 3. cut string
// 4. replace
// 5. convert to upper case
// 6. convert to lower case
// 7. trim
// 8. split
// 9. get a character by index

console.log(exampleString.slice(4, 9));
/*
slice() trích xuất một phần của chuỗi và 
trả về phần được trích xuất trong một chuỗi mới.
Phương thức nhận 2 tham số: vị trí bắt đầu và vị trí kết thúc (không bao gồm kết thúc).
*/
console.log(exampleString.substring(2, 6));

// substring()tương tự như slice().
// Sự khác biệt là substring()không thể chấp nhận các chỉ số âm.

console.log(exampleString.substr(2, 6));

// substr()tương tự như slice().
// Sự khác biệt là tham số thứ hai chỉ định độ dài của phần được trích xuất.

// Find index
console.log(exampleString.indexOf('JS'));

// replace, thay thế giá trị đầu tiên, có phân biệt chữ thường, chữ hoa
// nếu muốn k phân biệt ta sẽ dùng biểu thức chính quy là /i, lưu ý biểu thức chính quy không dùng ''
console.log(exampleString.replace('JS', 'Javascript'));
console.log(exampleString.replace(/js/i,'java'));
// Để chuyẻne đổi toàn cục ta sẽ dùng biểu thức chính quy là /g
var myex = 'To hoc java and java cung javascript la d java';
console.log(myex.replace(/java/g, 'C sharp'));

// Convert to upper and lower
console.log(exampleString.toUpperCase());
console.log(exampleString.toLowerCase());

// concat() nối hai hoặc nhiều chuỗi:
console.log(exampleString.concat(' ', myex));

// Các trim()Loại bỏ phương pháp khoảng trắng từ cả hai phía của một chuỗi
// CMAScript 2017 đã thêm hai phương thức Chuỗi: padStart và padEndđể hỗ trợ đệm ở đầu và cuối chuỗi.
// Ex: let padded = text.padStart(4,0);
var myTrim = '    heloo xin  chao   ';
console.log(myTrim.trim());

// Có 3 phương pháp để trích xuất các ký tự chuỗi:
// charAt(position)
// charCodeAt(position)
// Quyền truy cập tài sản []
 console.log(exampleString.charAt(4));
 // Các charCodeAt()phương pháp trả về unicode của ký tự tại một chỉ số nhất định trong một chuỗi
 console.log(exampleString.charCodeAt(4));
 console.log(exampleString[4]);

//  Một chuỗi có thể được chuyển đổi thành một mảng bằng split()phương thức
console.log(exampleString.split(' '));

console.log(typeof exampleString == 'string');

// Cho trước biến title có giá trị 'Học Javascript tại F8'.
// Cắt lấy chuỗi Javascript từ biến cho trước và lưu vào biến language
// Cắt phần chuỗi còn lại (từ sau chuỗi Javascript) và lưu vào biến rest
var title = 'Học Javascript tại F8';
var language = title.slice(title.indexOf('Javascript'),title.indexOf('Javascript') + 'Javascript'.length);
var rest = title.slice(title.indexOf('Javascript') + 'Javascript'.length + 1);
console.log(`Language is ${language} and rest is ${rest}`);

// Các phương pháp JavaScript để tìm kiếm chuỗi:
// String.indexOf ()
// Các indexOf()phương thức trả về chỉ số của (vị trí của) các firstlần xuất hiện của một văn bản quy định tại một chuỗi:
// Ex: let str = "Please locate where 'locate' occurs!";
//         str.indexOf("locate");
// String.lastIndexOf ()
// String.startsWith ()
// String.endsWith ()