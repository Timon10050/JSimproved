'use strict';

let arr = ["26658", "3579", "97905", "456789", "134467", "44467889", "3562"];
arr.forEach((element) => {
    if (element[0] == 2 || element[0] == 4) {
        console.log(element);
    }
});
// Простые числа 
const simpleNum = () => {
    let n;
    for (let i = 2; i < 100; i++) {
        n = i - 1;
        while (i % n !== 0 && n > 1) {
            n--;
        }
        if (n == 1) {
            console.log(`${i}: Делители этого числа: 1 и ${i}`);
        }
    }
};
simpleNum();