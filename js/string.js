// Khai báo 
let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';
// Để tìm độ dài chuỗi ta dùng hàm length
console.log(answer1.length)
// JavaScript Template Literals
let guestList = `Guests:
 * John
 * Pete
 * Mary
`;
console.log(guestList); // a list of guests, multiple lines

let text = `He's often called "Johnny"`;

let firstName = "John";
let lastName = "Doe";
let name = `Welcome ${firstName}, ${lastName}!`;
console.log(name);


// Dùng (\)  để biến thành ký tự chuỗi 
// Example

let = text = "We are the so-called \"Vikings\" from the north.";
console.log(text); //We are the so-called "Vikings" from the north.

// Chuỗi \\ sẽ giúp viết ký tự \ trong chuỗi
let text1 = "The character \\ is called backslash.";
console.log(text1); //The character \ is called backslash.

// “ký tự dòng mới”, được viết dưới dạng \n, biểu thị dấu ngắt dòng:
let text5 = 'hello my name \n is bang';
console.log(text5); //hello my name 
// is bang

// Chuỗi dưới dạng đối tượng 
let y = 'Hello';
console.log(typeof (y)); // string
let x = new String('Hello');
let z = new String('Hello');
console.log(x);
console.log(typeof (x)); //object

console.log(x == y); //true
console.log(x === y); //false
console.log(x == z); //false
console.log(x === z); //false

// => không nên tạo đối tượng chuỗi

// -------------------------String Method---------------------
/* Trích xuất chuỗi
có 3 phương pháp trích xuất chuỗi:
        slice(start, end)
        substring(start, end)
        substr(start, length)
*/

/* String slice 
slice() extracts a part of a string and returns the extracted part in a new string.
The method takes 2 parameters: the start position, and the end position (end not included).
*/
// vị trí start là vị trí bắt đầu cắt, và end là vị trí muốn cắt đến
let fullName = 'Nguyen van bang';
let slice = fullName.slice(-8);
console.log(slice); // van
// First position is 0
// Second position is 1
// Nếu giá trị âm thì lấy từ phải qua trái
// Nếu end ở đây không có tham số nghia là lấy hết

/* Substring
substring() tương tự như slice().
Sự khác biệt là substring()không thể chấp nhận các chỉ số âm.
*/

let address = "Ba ria vung tau va dep tau";
console.log(address.substring(7, 9));

/* String substr() 
substr() tương tự như slice().
Sự khác biệt là tham số thứ hai chỉ định độ dài của phần được trích xuất.
*/
console.log(address.substr(7, 9))
console.log(address.substr(6))
console.log(address.substr(-3, 2))

/* String replace method
Phương replace() thức thay thế một giá trị được chỉ định bằng một giá trị khác trong một chuỗi:
*/

console.log(address.replace('tau', 'sinh'))
// Ghi chú
// Phương replace() thức không thay đổi chuỗi mà nó được gọi.
// Phương replace() thức trả về một chuỗi mới.
// Theo mặc định, replace() phương thức chỉ thay thế kết quả phù hợp đầu tiên
// Để thay đổi tât cả ta sẽ dùng biểu thức chính quy /g, và khi dùng ta sẽ bỏ dấu ngoặc kép
console.log(address.replace(/tau/g, 'sinh'))
// Phương thức replace sẽ phân biệt chữ hoa và chữ thường để không phân biệt ta sẽ dùng biểu thức chính quy /i
console.log(address.replace(/Tau/i, 'xinh'))

/* Viết hoa và viết thường 
Một chuỗi được chuyển đổi thành chữ hoa với toUpperCase():
Một chuỗi được chuyển đổi thành chữ thường với toLowerCase():
*/
console.log(address.toLocaleLowerCase());
console.log(address.toLocaleUpperCase());

/* JavaScript String concat ()
concat() nối hai hoặc nhiều chuỗi: 
Phương concat()thức này có thể được sử dụng thay cho toán tử cộng. 
*/
console.log(address.concat(' - ', answer2));

/* JavaScript String trim ()
Phương trim()thức loại bỏ khoảng trắng từ cả hai bên của một chuỗi
*/

let ex1 = '        hello world        ';
console.log(ex1.trim());

// Các phương pháp giải nén ký tự chuỗi
/* There are 3 methods for extracting string characters:
        charAt(position)
        charCodeAt(position)
        Property access [ ]
*/

// Phương charAt() thức trả về ký tự tại một chỉ mục (vị trí) được chỉ định trong một chuỗi
console.log(fullName.charAt(4))

/* Phương thức charCodeAt() 
trả về mã unicode của ký tự tại một chỉ mục được chỉ định trong một chuỗi:
Phương thức này trả về mã UTF-16 (một số nguyên từ 0 đến 65535).
*/
console.log(fullName.charCodeAt(3));

// ECMAScript 5 (2009) cho phép truy cập thuộc tính [] trên các chuỗi:
console.log(fullName[9])
console.log(fullName[9] == 'a');

// Converting a String to an Array
// Một chuỗi có thể được chuyển đổi thành một mảng bằng split()phương thức
console.log(fullName.split(''));
console.log(fullName.split(' '));

/* JavaScript String Search
    String indexOf()
    String lastIndexOf()
    String startsWith()
    String endsWith()
*/

console.log(fullName.length);
// Phương thức indexOf() trả về chỉ số của (vị trí của) sự xuất hiện của một văn bản được chỉ định trong một chuỗi:
console.log(fullName.indexOf('n'));
// Phương thức lastIndexOf() trả về chỉ mục của lần xuất hiện cuối cùng của một văn bản được chỉ định trong một chuỗi
console.log(fullName.lastIndexOf('n'));
// Cả hai indexOf() và lastIndexOf() trả về -1 nếu không tìm thấy văn bản
console.log(fullName.indexOf('i'));
console.log(fullName.lastIndexOf('i'));
// Cả hai phương thức đều chấp nhận tham số thứ hai làm vị trí bắt đầu cho tìm kiếm
console.log(fullName.indexOf('n', 6)); // tìm từ trái sang phải
console.log(fullName.lastIndexOf('n', 4)); // tìm từ phải sang trái

// Phương thức search() tìm kiếm một chuỗi cho một giá trị được chỉ định và trả về vị trí của kết quả khớp
console.log(fullName.search(/N/i));

// So sánh giữa indexOf and search
/*
search() không thể nhận đối số vị trí bắt đầu thứ hai.
indexOf() không thể nhận các giá trị tìm kiếm mạnh mẽ (biểu thức chính quy).
*/
// Phương thức match () tìm kiếm một chuỗi để so khớp với một biểu thức chính quy và trả về các kết quả phù hợp dưới dạng một đối tượng Array.
let ex2 = "The rain in SPAIN stays mainly in the plain";
console.log(ex2.match(/ain/g));
// Nếu một biểu thức chính quy không bao gồm công cụ sửa đổi g (để thực hiện tìm kiếm toàn cục ), thì phương thức match () sẽ chỉ trả về kết quả phù hợp đầu tiên trong chuỗi.
console.log(ex2.match(/AIN/i));
console.log(ex2.match(/AIN/gi));

// Phương includes()thức trả về true nếu một chuỗi chứa một giá trị được chỉ định.
/* Cú pháp
string.includes(searchvalue, start)
searchvalue     	Required. The string to search for
start	            Optional. Default 0. Position to start the search
Returns:	        Returns true if the string contains the value, otherwise false */

console.log(fullName.includes('n', 14) === false); // nếu tìm thấy sẽ trả về true

// Phương startsWith()thức trả về true nếu một chuỗi bắt đầu bằng một giá trị được chỉ định, nếu không false:
// string.startsWith(searchvalue, start)
console.log(fullName.startsWith('n'));
console.log(fullName.startsWith('n', 5));

// Phương endsWith()thức trả về true nếu một chuỗi kết thúc bằng một giá trị được chỉ định, nếu không false
// string.endswith(searchvalue, length)
console.log(fullName.endsWith('g'));
// Kiểm tra 3 ký tự đầu tiên của một chuỗi kết thúc bằng "u"
console.log(fullName.endsWith('u', 3));

// --------------------------Bài tập -----------------------

// Viết một hàm ucFirst(str) trả về chuỗi str có ký tự đầu tiên viết hoa

function ucFirst(str) {
        // let strAfter = '';
        // for (let i = 0; i < str.length; i++) {
        //         if (i == 0) {
        //                 strAfter += str[i].toLocaleUpperCase();
        //         } else {
        //                 strAfter += str[i];
        //         }
        // }
        // return strAfter;
        // if (str == '') return str;
        // return str[0].toLocaleUpperCase() + str.slice(1);
        if (!str) return str;
        return str[0].toUpperCase() + str.slice(1);

}

console.log(ucFirst('hello'));
console.log(ucFirst(''));


// Viết một hàm checkSpam(str)trả về true nếu str có chứa 'viagra' hoặc 'XXX', nếu không false.

function checkSpam(str) {
        // if (str.search(/viagra/i) != -1 || str.search(/XXX/i) != -1) {
        //         return true;
        // } 
        // return false;
        let lowerStr = str.toLowerCase();

        return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));

// Tạo một hàm truncate(str, maxlength )kiểm tra độ dài của dấu str và,
// nếu nó vượt quá maxlength- thay thế phần cuối của str bằng ký tự dấu chấm lửng"…" , 
// để làm cho độ dài của nó bằng maxlength.
// Kết quả của hàm phải là chuỗi bị cắt ngắn (nếu cần).

function truncate(str, maxlength) {
        if (str.length > maxlength) {
                return str.slice(0, maxlength - 1) + '...';
        } else {
                return str;
        }
        // return str.length > maxlength ? str.slice(0, maxlength - 1) + '...' : str;
}

console.log(truncate("What I'd like to tell on this topic is:", 20));
console.log(truncate("Hi everyone!", 20));

// Chúng tôi có một chi phí ở dạng "$120" . Đó là: ký hiệu đô la đi trước, sau đó đến số.
// Tạo một chức năng extractCurrencyValue(str) sẽ trích xuất giá trị số từ chuỗi đó và trả về.

function extractCurrencyValue(str) {
        if (str) {
                return  +str.slice(1);
        }
        return 0;
        // return +str.slice(1);
}

console.log(extractCurrencyValue('$120'));
console.log(extractCurrencyValue(null));




