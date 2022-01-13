// -----------------------------------------VAR-----------------------------------------
/* When to Use JavaScript var?
Always declare JavaScript variables with var,let, orconst.

The var keyword is used in all JavaScript code from 1995 to 2015.

The let and const keywords were added to JavaScript in 2015.

If you want your code to run in older browser, you must use var. */

// -------------------------------------------LET---------------------------------------
/*
Các let từ khóa được giới thiệu vào ES6 (2015) .
Không thể khai báo lại các biến được xác định với let.
Các biến được xác định với let phải được Khai báo trước khi sử dụng.
Các biến được xác định với let có Phạm vi khối.

Không thể khai báo lại
let Không thể khai báo lại các biến được xác định với .

Bạn không thể vô tình khai báo lại một biến.
Với let bạn không thể làm điều này:
let x = "John Doe";
let x = 0; SyntaxError: 'x' has already been declared

Với var thì ta có thể khai báo lại biến đã gán giá trị
Example: 
var x = "John Doe";
var x = 0;

Phạm vi khối của let
Trước ES6 (2015), JavaScript chỉ có Phạm vi toàn cầu và Phạm vi chức năng .
ES6 đã giới thiệu hai từ khóa JavaScript mới quan trọng: let và const.
Hai từ khóa này cung cấp Phạm vi khối trong JavaScript.
Các biến được khai báo bên trong khối {} không thể được truy cập từ bên ngoài khối:
{
  let x = 2; 
}
x can NOT be used here

Các biến được khai báo với var từ khóa KHÔNG được có phạm vi khối.
Các biến được khai báo bên trong khối {} có thể được truy cập từ bên ngoài khối.
{
  var x = 2; 
}
x CAN be used here

Khai báo lại các biến
Khai báo lại một biến bằng cách sử dụng vartừ khóa có thể gây ra vấn đề.
Khai báo lại một biến bên trong một khối cũng sẽ khai báo lại biến bên ngoài khối:

var x = 10; // Here x is 10

{
var x = 2; // Here x is 2
}

// Here x is 2


Khai báo lại một biến bằng cách sử dụng lettừ khóa có thể giải quyết vấn đề này.
Khai báo lại một biến bên trong một khối sẽ không khai báo lại biến bên ngoài khối:

let x = 10; // Here x is 10

{
let x = 2; // Here x is 2
}

// Here x is 10
*/

// ------------------------------------CONST-------------------------------------------
// Website: https://www.w3schools.com/js/js_const.asp
/*
Các consttừ khóa được giới thiệu vào ES6 (2015) .
Không thể khai báo lại các biến được xác định với const.
constKhông thể gán lại các biến được xác định với .
Các biến được xác định với constcó Phạm vi khối.
Các const biến JavaScript phải được gán một giá trị khi chúng được khai báo:

When to Use JavaScript const?
If you want a general rule: always declare variables with const.
If you think the value of the variable can change, use let.

In this example, price1, price2, and total, are variables: 
const price1 = 5;
const price2 = 6;
let total = price1 + price2; */

/* <p id="demo"></p>
<script>
let carName = "Volvo";
document.getElementById("demo").innerHTML = carName;
</script> */


// --------------------------------------------------------DEFINE VARIABLES-------------------------------------
// Có thể khai báo nhiều biến cùng một lúc
let user = 'John', age = 25, message = 'Hello';
/* 
Example another: 
let user = 'John';
let age = 25;
let message = 'Hello';

let user = 'John',
    age = 25,
    message = 'Hello';

let user = 'John'
    , age = 25
    , message = 'Hello'; */

// Gán giá trị khác 
let message;

message = 'Hello!';

message = 'World!'; // value changed

alert(message);

// Không gán lại biến 
let message = "This";

// repeated 'let' leads to an error
let message = "That"; // SyntaxError: 'message' has already been declared

const myBirthday = '18.04.1982';
myBirthday = '01.01.2001'; // error, can't reassign the constant!

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
// alert(color); #FF7F00


/* There is a list of reserved words, which cannot be used as variable names because they are used by the language itself.

For example: let, class, return, and function are reserved.

The code below gives a syntax error:

let let = 5; can't name a variable "let", error!
let return = 5; also can't name it "return", error! */

"use strict";
num = 5; // error: num is not defined

// Bài tập

/* Declare two variables: admin and name.
Assign the value "John" to name.
Copy the value from name to admin.
Show the value of admin using alert (must output “John”). */

/* let admin, name; can declare two variables at once
name = "John";
admin = name;
alert( admin ); "John" */

/* Create a variable with the name of our planet. How would you name such a variable?
Create a variable to store the name of a current visitor to a website. How would you name that variable? */

/* let ourPlanetName = "Earth";
let currentUserName = "John"; */