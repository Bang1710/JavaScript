// Viết vào một phần tử HTML, sử dụng innerHTML.
// Viết vào đầu ra HTML bằng cách sử dụng document.write().
// Viết vào một hộp cảnh báo, sử dụng window.alert().
// Ghi vào bảng điều khiển của trình duyệt bằng cách sử dụng console.log().
// document.getElementById("demo").innerHTML = "ouput innerHTML";
// alert('Đây là hộp thoại alert');
// Hàm  confirm
// ham set timeout
// ham set interval
console.log('day la console.log');
function myFunction() {
  let person = prompt("Please enter your name", "Harry Potter");
  if (person != null) {
    document.getElementById("demo").innerHTML = "Hello " + person + "! How are you today?";
  }
}