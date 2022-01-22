// Bản tóm tắt
// Có 8 kiểu dữ liệu cơ bản trong JavaScript.

// number đối với các số thuộc bất kỳ loại nào: số nguyên hoặc dấu phẩy động, số nguyên được giới hạn bởi .±(253-1)
// bigint dành cho các số nguyên có độ dài tùy ý.
// string đối với chuỗi. Một chuỗi có thể có không hoặc nhiều ký tự, không có loại ký tự đơn riêng biệt.
// boolean cho true/ false.
// null cho các giá trị không xác định - một loại độc lập có một giá trị duy nhất null.
// undefined cho các giá trị chưa được gán - một kiểu độc lập có một giá trị duy nhất undefined.
// object cho các cấu trúc dữ liệu phức tạp hơn.
// symbol cho các số nhận dạng duy nhất.
// Toán tử typeof cho phép chúng ta xem kiểu nào được lưu trữ trong một biến.
// Thường được sử dụng như typeof x, nhưng typeof(x) cũng có thể.
// Trả về một chuỗi với tên của kiểu, như "string".
// Đối với nulltrả về "object"- đây là một lỗi trong ngôn ngữ, nó không thực sự là một đối tượng.


/* Kiểu Number
let n = 123;
n = 12.345;
Kiểu số đại diện cho cả số nguyên và số dấu phẩy động.
Có nhiều phép toán cho các số, ví dụ như nhân *, chia /, cộng +, trừ -, v.v.
Bên cạnh các số thông thường, còn có cái gọi là "giá trị số đặc biệt" cũng thuộc về kiểu dữ liệu này Infinity và NaN.

+ Infinity đại diện cho ∞ toán học . Đó là một giá trị đặc biệt lớn hơn bất kỳ số nào.
Chúng ta có thể lấy nó là kết quả của phép chia cho 0:
alert( 1 / 0 ); // Infinity
Hoặc chỉ cần tham khảo trực tiếp:
alert( Infinity ); // Infinity

+ NaN đại diện cho một lỗi tính toán. Ví dụ: nó là kết quả của một phép toán không chính xác hoặc không xác định:
alert( "not a number" / 2 ); // NaN, such division is erroneous
NaN là dính. Bất kỳ thao tác nào khác về NaNlợi nhuận NaN:
alert( "not a number" / 2 + 5 ); // NaN
Vì vậy, nếu có một NaN chỗ nào đó trong một biểu thức toán học, nó sẽ truyền đến toàn bộ kết quả.

*/

/* Kiểu string
Một chuỗi trong JavaScript phải được bao quanh bởi dấu ngoặc kép.
    let str = "Hello";
    let str2 = 'Single quotes are ok too';
    let phrase = `can embed another ${str}`;

Trong JavaScript, có 3 loại dấu ngoặc kép.
    Dấu ngoặc kép "Hello"
    'Hello' Dấu ngoặc đơn 
    `Hello` dấu gậy ngược

Backticks là dấu ngoặc kép "chức năng mở rộng". 
Chúng cho phép chúng tôi nhúng các biến và biểu thức vào một chuỗi bằng cách gói chúng vào ${…}, ví dụ:

let name = "John";

// embed a variable
alert( `Hello, ${name}!` ); // Hello, John!

// embed an expression
alert( `the result is ${1 + 2}` ); // the result is 3
*/

/* Boolean (kiểu logic)
Kiểu boolean chỉ có hai giá trị: true và false.

Loại này thường được sử dụng để lưu trữ các giá trị có / không: 
true có nghĩa là “có, đúng” và false có nghĩa là “không, không chính xác”.

Ví dụ:

let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked
Các giá trị Boolean cũng là kết quả của các phép so sánh:

let isGreater = 4 > 1;

alert( isGreater ); // true (the comparison result is "yes")

*/

/* Giá trị "null"
Giá trị đặc biệt null không thuộc bất kỳ loại nào được mô tả ở trên.

Nó tạo thành một loại riêng biệt chỉ chứa giá trị null:

let age = null;
Trong JavaScript, null không phải là “tham chiếu đến đối tượng không tồn tại” hoặc “con trỏ null” như trong một số ngôn ngữ khác.

Nó chỉ là một giá trị đặc biệt đại diện cho "không có gì", "trống" hoặc "giá trị không xác định".

Đoạn mã trên cho biết điều đó age là không xác định.
*/

/* Undefined
Giá trị đặc biệt undefined cũng đứng ngoài. Nó tạo ra một loại của riêng nó, giống như null.

Ý nghĩa của undefined là "giá trị không được chỉ định".

Nếu một biến được khai báo, nhưng không được gán, thì giá trị của nó là undefined: */

let age;

alert(age); // shows "undefined"
// Về mặt kỹ thuật, có thể gán rõ ràng undefined cho một biến:

let age = 100;

// change the value to undefined
age = undefined;
alert(age); // "undefined"
/*
Nhưng chúng tôi không khuyên bạn nên làm điều đó.
Thông thường, người ta sử dụng null để gán giá trị "trống" hoặc "không xác định" cho một biến, 
trong khi undefinedđược dành riêng làm giá trị ban đầu mặc định cho những thứ chưa được gán.

*/

/* Toán tử typeof
Toán tử typeoftrả về kiểu của đối số. 
Nó hữu ích khi chúng ta muốn xử lý các giá trị thuộc các loại khác nhau hoặc chỉ muốn kiểm tra nhanh.

Lệnh gọi typeof xtrả về một chuỗi có tên kiểu:
*/

typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)

/* Bài Tập
Đầu ra của script là gì?

let name = "Ilya";

alert( `hello ${1}` ); // ? heloo 1

alert( `hello ${"name"}` ); // ? hello name

alert( `hello ${name}` ); // ? hello Ilya
*/