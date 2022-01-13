// Bản tóm tắt
// Ba chuyển đổi kiểu được sử dụng rộng rãi nhất là sang chuỗi, thành số và boolean.

// String Conversion- Xảy ra khi chúng ta xuất một thứ gì đó. Có thể được thực hiện với String(value).
//  Việc chuyển đổi thành chuỗi thường là hiển nhiên đối với các giá trị nguyên thủy.

// Numeric Conversion - Xảy ra trong các phép toán. Có thể được thực hiện với Number(value).

// Việc chuyển đổi tuân theo các quy tắc:

// Giá trị	        Trở thành…
// undefined	    NaN
// null	            0
// true / false	    1 / 0
// string	        Chuỗi được đọc “nguyên trạng”, khoảng trắng từ cả hai bên bị bỏ qua.
                    //  Một chuỗi trống trở thành 0. Một lỗi đưa ra NaN.
// Boolean Conversion - Xảy ra trong các phép toán logic. Có thể được thực hiện với Boolean(value).

// Tuân theo các quy tắc:

// Giá trị	                        Trở thành…
// 0, null, undefined, NaN,""	    false
// bất kỳ giá trị nào khác	        true
// Hầu hết các quy tắc này đều dễ hiểu và dễ ghi nhớ. Các trường hợp ngoại lệ đáng chú ý mà mọi người thường mắc lỗi là:

// undefined là NaN một con số, không phải 0.
// "0"và các chuỗi chỉ có dấu cách như " "là true dưới dạng boolean.

/* String Conversion
String conversion happens when we need the string form of a value.
For example, alert(value) does it to show the value.
We can also call the String(value) function to convert a value to a string:

let value = true;
alert(typeof value); // boolean

value = String(value); // now value is a string "true"
alert(typeof value); // string
String conversion is mostly obvious. A false becomes "false", null becomes "null", etc.
*/

/*  Numeric Conversion
Chuyển đổi số xảy ra trong các hàm và biểu thức toán học một cách tự động.

Ví dụ: khi phép chia /được áp dụng cho các số không phải là số:

alert( "6" / "2" ); // 3, strings are converted to numbers
Chúng ta có thể sử dụng Number(value)hàm để chuyển đổi một cách rõ ràng valuemột số thành một số:

let str = "123";
alert(typeof str); // string

let num = Number(str); // becomes a number 123

alert(typeof num); // number

Quy tắc chuyển đổi dạng số:

Giá trị	                Trở thành…
undefined	            NaN
null	                0
true and false	        1 và 0
string	                Khoảng trắng từ đầu và cuối bị xóa. Nếu chuỗi còn lại trống, kết quả là 0.
                         Nếu không, số được "đọc" từ chuỗi. Một lỗi đưa ra NaN.

alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (error reading a number at "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0
*/

/* Boolean Conversion
Quy tắc chuyển đổi:

Giá trị mà là trực giác “trống rỗng”, 
giống như 0, một chuỗi rỗng, null, undefined, và NaN, trở thành false.
Các giá trị khác trở thành true.
Ví dụ:

alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("hello") ); // true
alert( Boolean("") ); // false
*/