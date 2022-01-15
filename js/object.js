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


