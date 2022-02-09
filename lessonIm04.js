'use strict';

let text = prompt('Введите текст :)');

function getText(res) {
    if (typeof res !== 'string') {
        alert('Данные не верны, дай текст кожаный!!!', text);
    } else {
        res = res.trim();
        if (res.length > 30) {
            res = res.substring(0, 30) + '...';
        }
        return res;
    }
}

console.log(getText(text));


/* 2й вариант */
function getText(res) {
    if (typeof res !== 'string') {
        alert('Данные не верны, последняя попытка!!!');
    } else {
        res = res.trim();
        if (res.length > 30) {
            res = res.substring(0, 30) + '...';
        }
        return res;
    }
}

console.log(getText(123123));
console.log(getText(' Иван Дулин Дулю Дулил, Надулился и ссутутулился растроился - ушел. '));
