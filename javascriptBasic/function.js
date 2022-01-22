// Website: https://javascript.info/function-basics

function stringInString(needle, haystack) {
    if (typeof(needle, haystack) === 'string') {
        return haystack.includes(needle)
    } else {
        return false
    }
}

console.log(stringInString('hello', 'Xin chao: hello'));

function showName(name) {
    alert(`Hello my name is ${name}`);
}

// showName('Van Bang');

function questionAge() {
    let Age = prompt('Hãy cho tui biết tuổi của bạn', 'Hãy nhập tuổi của bạn vào đây');
    if (Number(Age) >= 18) {
        alert('Xin chào, bạn đã trên 18t, bây giờ bạn có thể truy cập trang web');
    } else {
        alert('Xin lỗi, bạn không thể truy cập trang web của chúng tôi');
    }
}

// questionAge();



function checkAge() {
    let age = prompt('How old are you?', 18);
    if (Number(age) >= 18) {
        return true;
    } else {
        return confirm('Do you have permission from your parents ?');
    }

}

// if (checkAge() == true) {
//     alert('Access granted');
// } else {
//     alert('Access denied');
// }

// checkAge();

function doNothing() {

}

// alert(doNothing()); // undefined

function showPrimes(n) {
    for (let i = 2; i < n; i++) {
        if (isPrime(i) == false) {
            continue;
        }
        alert(i); // a prime
    }
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

// showPrimes(20);

// function checkAge() {
//     let age = prompt('How old are you ?', 18);
//     if (Number(age) >= 18) {
//         return alert('Welcome to you');
//     } else {
//         // ...
//         return confirm('Did parents allow you?');
//     }
// }

function checkAge() {
    let age = prompt('How old are you ?', 18);
    if (Number(age) >= 18) {
        return alert('Welcome to you');
    }
    return confirm('Did parents allow you?');
}

// checkAge();

function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Did parents allow you?');
    }
}

// Cách viết khác
function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
}

function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
}

// checkAge(17);

function min(a, b) {
    if (a > b) {
        return alert(b)
    } else {
        return alert(a)
    }
}

function min(a, b) {
    let result = a < b ? a : b;
    return alert(result);
}

// min(4, -6)
// min(2, 1)
// min(-3, -6)

// Viết một hàm pow(x,n)trả về dạng lũy x thừa n.
//  Hay nói cách khác, nhân với x chính nó nlần và trả về kết quả.

// function pow(x, n)  {
//     let S = 1;
//     if (n > 1) {
//         for(let i = 1; i <= n; i++)  {
//             S *= x;
//         }
//         return console.log(S);
//     } else {
//         return console.log(S);
//     }
// }

// pow(3, 4);
// pow(2, 5);
// pow(9, 2);
// let x = prompt(' Hãy nhập giá trị của x', "");
// let n = prompt('Hãy nhập giá trị của n', "");

function pow(x, n) {
    let S = x;
    if (n > 1) {
        for (let i = 2; i <= n; i++) {
            S *= x;
        }
        return alert(`Lũy thừa bậc ${n} của ${x}: ${S}`);
    } else {
        return alert(`Power ${n} is not supported, use a positive integer`);
    }
}


pow(x, n);

let number = 20;
nextPrime:
    for (let i = 2; i <= number; i++) {
        for (let j = 2; j < Math.sqrt(i); j++) {
            if (i % j == 0) {
                continue nextPrime;
            }
        }
        console.log(`Số nguyên tố là ${i}`);
    }

// let num;
// do {
//     num = prompt('Hãy nhập số lớn hơn 100', 0)
// } while (num <= 100 || num == null);

for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}