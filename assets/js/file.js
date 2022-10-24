'use strict';

// слайд 31
// задание 1
function get_name(){
    let name = prompt('Ваше Имя', 'Даниил');
    alert(`Ваше имя ${name}`)
}

//get_name()

// здание 2
// let a = 1, b = 1;
// let c = ++a; // 2. Сначало идет прибавление к a 1, а потом присваевания к c
// let d = b++; //1. Сначало идет присваевание b к d, а потом прибавление 1 r b

// задание 3
// let a = 1; // 2
// let x = 1 + (a *= 2); // 3


// Слайд 32

//Здание 1
//'' + 1 + 0 // Ответ: 10
// '' - 1 + 0 //Ответ: -1
// true + false // Ответ: 1
// 6 / '3' //Ответ: 2
// '2' * '3' //Ответ: 6
// 4 + 5 + 'px//Ответ: '9px'
// '$' + 4 + 5 //Ответ: '$45'
// '4' - 2 //Ответ: 2
// '4px' - 2 //Ответ: Nan
// '  -9  ' + 5//Ответ: '  -9  5'
// '  -9  ' - 5//Ответ: -14
// null + 1//Ответ: 1
// undefined + 1//Ответ: Nan 

//Здание 2 
// let a = prompt('Первое число?', 1);
// let b = prompt('Второе число?', 2);
// alert(+a + +b);

// Слайд 33

// Задание 1
// let num = 3;
// alert(num)

// Здание 2
// let a = 10, b = 2;
// alert(`Сумма ${a+b}`);
// alert(`Разность ${a-b}`);
// alert(`Произведение ${a*b}`);
// alert(`Частное ${a/b}`);

// Задание 3
// let c = 15, d = 2;
// let result = c + d;
// alert(result);

// Задание 4
// let a = 10, b = 2, c = 5;
// alert(a + b + c);

//  Задание 5
// let a = 17, b = 10;

// let c = a -= b;
// let d = 7;
// let result = c + d;
// alert(result);

// Слайд 34
// Задание 1
// let str = 'Привет мир';alert(str);

// Задание 2
// let str1 = 'Привет,', str2 = 'Мир!'; alert(str1 + ' ' + str2)

// Задание 3
// let name = 'Даниил'; alert(`Привет, ${name}!`);

// Задание 4
// let age = 16; alert(`Мне ${age} лет!`);z

// Задание 5(1 promnt)
// let name_user = prompt('Ваше имя?', 'Даниил');
// alert(`Ваше имя ${name_user}`)

// Задние 6(2 promnt)
// let number = +prompt('Введите число', '10'); alert(number**2)

// Практика задания. Слайд 35

// Задание 2. Сделал два вида функции
// function task_1(str='abcde'){
//     alert(`${str[0]}${str[2]}${str.slice(-1)}`);
//     // Либо послдений можно сдлеать так: ${str.length - 1}. length - считает количсество элементов в итерируемом объекте. Как len в python
// }


// let task_1 = function(str='abcde'){alert(`${str[0]}${str[2]}${str.slice(-1)}`);}

// Задание 2
function task_2(str='12345'){
    let num = 1;
    
    for(let i = 0; i < str.length; i++){
        num *= str[i]
    }
    alert(num)
}
// task_2()

// Задание 2
function task_3(secund=prompt('Введите количество секунд', '10'), hour=prompt('Введите количество часов', '10'), days=prompt('Введите количество дней', '10'), mounth=prompt('Введите количество месяцев', '10')){
    alert(+secund+hour*60*60+days*24*60*60+mounth*30*24*60*60);
}

//task_3()

// Задание 4
function task_4(){
    let secund = 10, minute = 12, hour = 13;
    alert(`${hour}:${minute}:${secund}`)
}

// task_4()

// Задание 5
function task_5(){
    let num = 2;
    alert(num **= 2);
}

// task_5()

// Слайд 36

// Задание 1

// var num = 47;
// num += 7;
// num -= 18;
// num *= 10;
// num /= 15;
// alert(num)

// Задание 2
// var num = 10;
// num++;
// num++;
// num--;
// alert(num);





