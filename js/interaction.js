/*
Vì chúng ta sẽ sử dụng trình duyệt làm môi trường demo của mình, 
chúng ta hãy xem một số chức năng để tương tác với người dùng alert, promptvà confirm.

ALERT
alert("Hello");

Promt
Hàm promptchấp nhận hai đối số:

result = prompt(title, [default]);
Nó hiển thị một cửa sổ phương thức với tin nhắn văn bản, trường nhập cho khách truy cập và các nút OK / Cancel.

title: Văn bản để hiển thị cho khách truy cập.
default: Tham số thứ hai tùy chọn, giá trị ban đầu cho trường đầu vào.

Example: let age = prompt('How old are you?', 100);
        alert(`You are ${age} years old!`); // You are 100 years old!


Confirm
Cú pháp: result = confirm(question);
Chức năng này confirmhiển thị một cửa sổ phương thức với một question và hai nút: OK và Cancel.
Kết quả là true nếu OK được nhấn và false ngược lại.

Ví dụ:  let isBoss = confirm("Are you the boss?");
        alert( isBoss ); // true if OK is pressed
*/