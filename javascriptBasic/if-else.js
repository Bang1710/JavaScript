/* Bài tập
Cho trước biến number có giá trị số ngẫu nhiên trong các số sau: 3, 5, 15
Yêu cầu
Nếu number chia hết cho 3 thì trả về chuỗi f
Nếu number chia hết cho 5 thì trả về số 8
Nếu number chia hết cho 15 thì trả về chuỗi f8
*/

function run(number) {
    if (number % 15 == 0) {
        return 'f8'
    } else if (number % 5 == 0) {
        return 8
    } else {
        return 'f'
    }
}

console.log(run(3))
console.log(run(5))
console.log(run(15))

// Trong một game X có 3 tộc thú (ngư tộc, xà tộc, điểu tộc),
// tuân theo một cơ chế tương khắc trong thuyết ngũ hành, không tộc nào là mạnh hoàn toàn.
//  Mỗi thú trong tộc có các chỉ số mạnh yếu khác nhau.

// Ví dụ:

// Bạch tuộc, Cá mập thuộc Ngư tộc
// Rắn, Trăn thuộc Xà tộc
// Đại bàng, Cú mèo thuộc Điểu tộc
// Cho trước biến type thể hiện thú thuộc tộc nào. Giá trị của biến type này có thể là một trong các giá trị sau:

// Giá trị 'NGU_TOC' là thú thuộc Ngư tộc
// Giá trị 'XA_TOC' là thú thuộc Xà tộc
// Giá trị 'DIEU_TOC' là thú thuộc Điểu tộc
// Bên phải màn hình là hàm khởi tạo các chỉ số ban đầu cho thú. Hãy kiểm tra tộc của thú và đặt các chỉ số mặc định cho thú như sau:

// #	Ngư tộc	    Xà tộc	    Điểu tộc
// atk	100	        200	        300
// hp	200	        300	        100
// spd	300	        100	        200
// atk (attack) là chỉ số tấn công. hp (health points) là chỉ số sức khỏe hay chỉ số máu. spd (speed) là chỉ số tốc độ hay chỉ số nhanh nhẹn.
const NGU_TOC = 'NGU_TOC'
const XA_TOC = 'XA_TOC'
const DIEU_TOC = 'DIEU_TOC'
/*
 * Mình định nghĩa 3 constants trên với mục đích
 * để các bạn không phải gõ lại chữ khi so sánh
 * 
 * Ví dụ:
 * - Thay vì: if (type === 'NGU_TOC')
 * - Hãy: if (type === NGU_TOC)
*/

/** @param {string} type */
function initMonster(type) {
    // Có thể khai báo nhiều biến một lúc
    // mỗi biến cách nhau bởi dấu phẩy (,)
    let atk, hp, spd

    if (type === NGU_TOC) {
        atk = 100;
        hp = 200;
        spd = 300
    } else if (type === XA_TOC) {
        atk = 200;
        hp = 300;
        spd = 100
    } else {
        atk = 300;
        hp = 100;
        spd = 200
    }

    return [atk, hp, spd]
}

// Sử dụng toán tử 3 ngôi (Ternary operator) để giải bài tập sau:
// Cho trước biến a là giá trị bất kì
// Nếu a là số nguyên thì hàm trả về số a
// Nếu a không phải số nguyên thì trả về giá trị được làm tròn dưới của a

function run(a) {
    return Number.isInteger(a) ? a : Math.floor(a);
}

// Sử dụng toán tử 3 ngôi để giải bài tập sau: Hàm run sẽ trả về 'even' nếu number là số chẵn, ngược lại trả về 'odd'
function run(number) {
    return number % 2 ==0 ? 'even' : 'odd'
}

