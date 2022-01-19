// Website: https://javascript.info/function-expressions

// Function Expression vs Function Declaration
// Khi nào chọn Function Declaration so với Function Expression ?
//  + Theo nguyên tắc chung, khi chúng ta cần khai báo một hàm, điều đầu tiên cần quan tâm là cú pháp Khai báo hàm. Nó mang lại nhiều tự do hơn trong cách tổ chức mã của chúng ta, bởi vì chúng ta có thể gọi các hàm như vậy trước khi chúng được khai báo.
//  + Điều đó cũng tốt hơn cho khả năng dễ đọc, vì nó dễ dàng tra cứu function f(…) {…}trong mã hơn let f = function(…) {…};. Khai báo hàm “bắt mắt” hơn.
//  + … Nhưng nếu một Khai báo Hàm không phù hợp với chúng ta vì lý do nào đó hoặc chúng ta cần một khai báo có điều kiện (chúng ta vừa xem một ví dụ), thì Biểu thức Hàm nên được sử dụng.
// Về cú pháp
// Function Declaration
function sum(a, b) {
  return a + b;
}

sayHi("John"); // Hello, John

function sayHi(name) {
  alert(`Hello, ${name}`);
}

let age = prompt("What is your age?", 18);

// conditionally declare a function
if (age < 18) {

  function welcome() {
    alert("Hello!");
  }

} else {

  function welcome() {
    alert("Greetings!");
  }

}

// ...use it later
welcome(); // Error: welcome is not defined

let age = 16; // take 16 as an example

if (age < 18) {
  welcome();               // \   (runs)
  //  |
  function welcome() {     //  |
    alert("Hello!");       //  |  Function Declaration is available
  }                        //  |  everywhere in the block where it's declared
  //  |
  welcome();               // /   (runs)

} else {

  function welcome() {
    alert("Greetings!");
  }
}

// Here we're out of curly braces,
// so we can not see Function Declarations made inside of them.

welcome(); // Error: welcome is not defined


// Function Expression
let sum = function (a, b) {
  return a + b;
};

sayHi("John"); // error!

let sayHi = function (name) {  // (*) no magic any more
  alert(`Hello, ${name}`);
};

let age = prompt("What is your age?", 18);

let welcome;

if (age < 18) {

  welcome = function () {
    alert("Hello!");
  };

} else {

  welcome = function () {
    alert("Greetings!");
  };

}

welcome(); // ok now

// -----------------  OR ------------------
let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  function () { alert("Hello!"); } :
  function () { alert("Greetings!"); };

welcome(); // ok now





/* Callback function
We’ll write a function ask(question, yes, no) with three parameters:
question: Text of the question
yes: Function to run if the answer is “Yes”
no: Function to run if the answer is “No”
The function should ask the question and, depending on the user’s answer, call yes() or no():
Example: 
*/
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert("You agreed.");
}

function showCancel() {
  alert("You canceled the execution.");
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);



/* Bản tóm tắt
    Các hàm là các giá trị. Chúng có thể được gán, sao chép hoặc khai báo ở bất kỳ vị trí nào của mã.
    Nếu hàm được khai báo dưới dạng một câu lệnh riêng biệt trong dòng mã chính, thì đó được gọi là “Khai báo hàm”.
    Nếu hàm được tạo như một phần của biểu thức, thì nó được gọi là “Biểu thức hàm”.
    Khai báo hàm được xử lý trước khi khối mã được thực thi. Chúng có thể nhìn thấy ở mọi nơi trong khối.
    Biểu thức hàm được tạo khi luồng thực thi đến chúng.
*/

/*
Có một cú pháp khác để tạo một hàm được gọi là Expression function.

Nó cho phép tạo một hàm mới ở giữa bất kỳ biểu thức nào.

Ví dụ:
*/

let sayHi = function() {
  alert( "Hello" );
};

/* Ở đây chúng ta có thể thấy một biến sayHi nhận giá trị, 
hàm mới, được tạo dưới dạng function() { alert("Hello"); }.
Xin lưu ý, không có tên sau function từ khóa. Cho phép bỏ qua tên đối với Expression function.

*/
function sayHi() {
  alert( "Hello" );
}
alert( sayHi ); // shows the function code


// Gan lai
function sayHi() {   // (1) create
  alert( "Hello" );
}

let func = sayHi;    // (2) copy

func(); // Hello     // (3) run the copy (it works)!
sayHi(); // Hello    //     this still works too (why wouldn't it)