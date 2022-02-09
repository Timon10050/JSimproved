'use strict';

let text = prompt('Введите текст:');

function getText(res) {
    if (typeof res !== 'string') {
        alert('Данные не верны, дай текст кожаный!!!', text);
    } else {
        res.trim();
        if (res.length > 30) {
            res.substring(0, 30) + '...';
        }
        return res;
    }
}

console.log(getText(text));