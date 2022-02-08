'use strict';

let lang = prompt('Выберите язык ввода: ru или en');
let engWeek = 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday';
let rusWeek = 'Понедельник, Вторник, Среда, Четверг, Пятница, суббота, Воскресенье';

/* через if else */
if (lang == 'ru') {
    alert(rusWeek);
} else if (lang == 'en') {
    alert(engWeek);
}

/*через switch-case */
switch (lang) {
    case 'ru':
        alert(rusWeek);
        break;
    case 'en':
        alert(engWeek);
        break;
}

/*через многомерный массив*/
let arr = {
    'ru': rusWeek.split(", "),
    'en': engWeek.split(", "),
};
alert(arr[lang]);

/*задание про имена */
let namePerson = prompt('Введите ваше имя:');

namePerson == 'Артем' ? console.log('директор') : namePerson == 'Александр' ?
    console.log('преподаватель') : console.log('студент');
