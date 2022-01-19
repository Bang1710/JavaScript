// https://javascript.info/operators
// Các phép toán sau được hỗ trợ:

// Bổ sung +,
// Phép trừ -,
// Phép nhân *,
// Bộ phận /,
// Phần còn lại %,
// Luỹ thừa **.

// Phép toán % là lấy phần dư của toán hạng nhị phân 
alert( 5 % 2 ); // 1, a remainder of 5 divided by 2
alert( 8 % 3 ); // 2, a remainder of 8 divided by 3

// Phép toán ** là lũy thừa 
alert( 2 ** 2 ); // 2² = 4
alert( 2 ** 3 ); // 2³ = 8
alert( 2 ** 4 ); // 2⁴ = 16
// Có thể lũy thừa không chỉ là số nguyên
alert( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)
alert( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)

/* Phép toán nối chuỗi với nhị phân + */
let s = "my" + "string";
alert(s); // mystring  

/* Lưu ý rằng nếu bất kỳ toán hạng nào là một chuỗi, 
thì toán hạng còn lại cũng được chuyển đổi thành chuỗi. 
Ví dụ: */
alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"
// Thấy không, không quan trọng toán hạng đầu tiên là một chuỗi hay thứ hai.
// Đây là một ví dụ phức tạp hơn:
alert(2 + 2 + '1' ); // "41" and not "221"
// Tại đây, các nhà khai thác lần lượt làm việc.
// Số đầu tiên tính +tổng hai số, vì vậy nó trả về 4, 
// sau đó số tiếp theo +thêm chuỗi 1 vào đó, vì vậy nó giống như vậy 4 + '1' = '41'.
alert('1' + 2 + 2); // "122" and not "14"
// Ở đây, toán hạng đầu tiên là một chuỗi, trình biên dịch cũng coi hai toán hạng còn lại là chuỗi.
// Các 2 được nối với '1', vì vậy nó giống như '1' + 2 = "12"và "12" + 2 = "122".
// Hệ nhị phân + là toán tử duy nhất hỗ trợ chuỗi theo cách như vậy.
// Các toán tử số học khác chỉ làm việc với các số và luôn chuyển các toán hạng của chúng thành số.


// Đây là bản demo cho phép trừ và phép chia:
alert( 6 - '2' ); // 4, converts '2' to a number
alert( '6' / '2' ); // 3, converts both operands to numbers


/*
Website: https://javascript.info/comparison
Toán tử so sánh JavaScript
Operator	Description
==	        equal to
===	        equal value and equal type
!=	        not equal
!==	        not equal value or not equal type
>	        greater than
<	        less than
>=	        greater than or equal to
<=	        less than or equal to
?	        ternary operator

Toán tử logic JavaScript
Operator	Description
&&	        logical and
||	        logical or
!	        logical not     

Toán tử loại JavaScript
Operator	    Description
typeof	        Returns the type of a variable
instanceof	    Returns true if an object is an instance of an object type

*/

// Bài tập
/*
Các dạng tiền tố và hậu tố
tầm quan trọng: 5
Các giá trị cuối cùng của tất cả các biến là gì a, b, c và d sau khi mã dưới đây? */
let a = 1, b = 1; 

let c = ++a; //  2
let d = b++; //  1
a = 2
b = 2

// Giá trị của avà xsau đoạn mã dưới đây là gì?

let a = 2;

let x = 1 + (a *= 2);
// => x = 5; a = 4;

// Kết quả của các phép tính sau: 
// "" + 1 + 0 => "10"
// "" - 1 + 0 => -1
// true + false => 1
// 6 / "3" => 2
// "2" * "3" => 6
// 4 + 5 + "px"  => 9px
// "$" + 4 + 5 => $45
// "4" - 2 => 2
// "4px" - 2 => NaN
// "  -9  " + 5  =>  ""   -9   5"
// "  -9  " - 5  => -14
// null + 1 => 1 :reason null becomes 0 after the numeric conversion.
// undefined + 1 => NaN undefined becomes NaN after the numeric conversion.
// " \t \n" - 2 => -2 Space characters, are trimmed off string start and end when a string is converted to a number. 
// Here the whole string consists of space characters, such as \t, \n and a “regular” space between them.
//  So, similarly to an empty string, it becomes 0

// Tại sao? Sửa nó. Kết quả nên được 3.

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(+a + +b); // 12

// Kết quả cho những biểu thức này sẽ như thế nào?

// 5 > 4 => true
// "apple" > "pineapple" => false
// "2" > "12" => true
// undefined == null => true
// undefined === null => false
// null == "\n0\n"  => false
// null === +"\n0\n" => false



