'use strict';

const first = document.querySelector('.first');
const second = document.querySelector('.second');

let data, options, fullData;
let year, month, day, hours, minutes, seconds;

const addZero = num => (num < 10) ? '0' + num : num;

function declOfNum(n, titles) {
    return titles[(n % 10 === 1 && n % 100 !== 11) ? 0 :
        n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2];
}

function showData() {
    options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    data = new Date();
    fullData = data.toLocaleString('ru-RU', options);
    year = data.getFullYear();
    month = data.getMonth() + 1;
    day = data.getDate();
    hours = data.getHours();
    minutes = data.getMinutes();
    seconds = data.getSeconds();


    let arr = fullData.split(', ');
    let dayOfWeek = arr[0];
    dayOfWeek = dayOfWeek[0].toUpperCase() + dayOfWeek.slice(1);
    let today = arr[1].split('').slice(0, -3).join('');
    let time = arr[2].split(':');
    let timeString = ` ${+time[0]} ${declOfNum(+time[0], ['час', 'часа', 'часов'])} 
            ${+time[1]} ${declOfNum(+time[1], ['минута', 'минуты', 'минут'])} 
            ${+time[2]} ${declOfNum(+time[2], ['секунда', 'секунды', 'секунд'])} `;


    first.textContent = 'Сегодня ' + dayOfWeek + ', ' + today + ' года' + ', ' + timeString;
    second.textContent = addZero(day) + '.' + addZero(month) + '.' + year + ' - ' + addZero(hours) + ':' + addZero(minutes) + ':' + addZero(seconds);
}


showData();

let update = setInterval(showData, 1000);
