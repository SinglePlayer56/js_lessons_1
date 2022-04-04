'use strict';
/*
      age = prompt('Введите число:');
      var a = 3;
      var b = a * age;
      console.log(b);

      const TAX_RATE = 0.08;
      var amount = 99.99;

      if (amount > 10) {
            amount = amount * 2; // <-- блок конструкции
            console.log(amount);
      } else {
            console.log(amount);
      }
      */
/*
    const ACCESSORY_PRICE = 9.99;

    var bank_balance = 302.13;
    var amount = 99.99;

    amount = amount * 2;

    if (amount < bank_balance) {
          console.log('Я возьму этот аксессуар!');
          amount = amount + ACCESSORY_PRICE;
    } else {
          console.log('Нет, спасибо.');
    }
    */

/*
      while (numOfCustomers > 0) {
            console.log('Чем я могу вам помочь?');   <--- while
            numOfCustomers = numOfCustomers - 1;
      }

      var numOfCustomers = 0;
      do {
            console.log('Чем я могу вам помочь?');   <--do while
            numOfCustomers = numOfCustomers - 1;
      } while (numOfCustomers > 0);

      var i = 0;

      while (true) {
            if (i <= 9 === false) {
                  break;
            }

            console.log(i);
            i = i + 1;
      }
      */

/*
    for (var i = 0; i <= 9; i++) {
          console.log(i);            <-- цикл for
    }
    */

/*
      function printAmount() {
        console.log( amount.toFixed( 2 ) );
      }

      var amount = 99.99;

      printAmount(); // "99.99"

      amount = amount * 2;

      printAmount(); // "199.98"
      */
/*
function printAmount(amt) {
      console.log(amt.toFixed(2));
}

function formatAmount() {
      return '$' + amount.toFixed(2);
}

var amount = 99.99;
printAmount(amount * 2);

amount = formatAmount();
console.log(amount);
*/

/*
const TAX_RATE = 0.08;
function calculateFinalPurchaseAmount(amt, bmt) {
      amt = amt + amt * TAX_RATE;
      bmt = amt * 2;
      return amt, bmt;
}
var amount = 99.99;
var mount = 0;

mount = calculateFinalPurchaseAmount(amount, mount);
console.log(amount);
console.log(mount.toFixed(2));
*/

/*
function outer() {
	var a = 1;

	function inner() {
		var b = 2;

		// здесь у нас есть доступ и к `a`, и к `b`
		console.log( a + b );	// 3
	}

	inner();

	// здесь у нас есть доступ только к  `a`
	console.log( a );			// 1
}
outer();
*/

/*
const FIRST = 1;
const SECOND = 4;
function one() {
      var a = FIRST + 4;
      function two() {
            var b = SECOND + 10;
            function sum() {
                  console.log(a + b);
            }
            sum();
      }
      two();
}
one();

function outer() {
	var a = 1;

	function inner() {
		var b = 2;

		// здесь у нас есть доступ и к `a`, и к `b`
		console.log( a + b );	// 3
	}

	inner();

	// здесь у нас есть доступ только к  `a`
	console.log( a );			// 1
}

outer();
*/
/******************** HOME_TASK ****************************/
/*
const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

var bank_balance = 303.91;
var amount = 0;

function calculateTax(amount) {
      return amount * TAX_RATE;
}
function formatAmount(amount) {
      return '$' + amount.toFixed(2);
}

while (amount < bank_balance) {
      amount = amount + PHONE_PRICE;
      if (amount < SPENDING_THRESHOLD) {
            amount = amount + ACCESSORY_PRICE;
      }
}

amount = amount + calculateTax(amount);
console.log('Ваша покупка: ' + formatAmount(amount));
if (amount > bank_balance) {
      console.log('Вы не можете позволить себе эту покупку.');
}
*/

/**********************CHAPTER_2*************************/

/*
var obj = {
      a: 'hello world',
      b: 42,
      c: true,
};
console.log(typeof obj);  <-- typeof указывает именно тип значения, а не переменное. В JS тип данных имеет только значение, переменная лишь контейнер для этих значений.
*/
// console.log(obj.a);   <--точечная нотация свойства
// console.log(obj['a']); <-- скобочная нотация свойства

/*
var obj = {
      a: 'Hello world',       <-- Скобочная нотация используется для обрщаения к свойству по его имени. Скобочную нотацию так же можно  
      b: 42,                       использовать, для того, чтобы обратиться к свойству объекта, если оно записано в другой переменной.
};

var c = 'a';

obj[c];
obj['b'];
console.log(obj[c]);
*/

/***********************************Массивы/Array********/

/*
var arr = ['hello world', 42, true, 'pipega'];

arr[(0, 1, 2, 3)];
arr[1];
arr[2];
arr[3];
arr.length;

typeof arr;

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr.length);
console.log(typeof arr);
*/

/***********************Функции/Function******************/

// function foo() {
//       return 42;
// }

// foo.bar = 'hello world';

// typeof foo;
// typeof foo();
// typeof foo.bar;

// console.log(typeof foo);
// console.log(typeof foo());
// console.log(typeof foo.bar);
/********************************************************/
// let name = 'Джон';
// let admin;
// admin = name;
// alert(admin);

// let planetName = 'Земля';
// let currentUserName = 'Джон';

/****************************Типы данных*****************/

// let name = 'Виктор';
// alert(`hello ${1}`);
// alert(`hello ${'name'}`);
// alert(`hello ${name}`);

// let result;
// result = prompt('Введите число: ', 100);
// console.log(result);

// let userName = prompt('Введите ваше име: ');
// alert(userName);

/**********************Преобразование типов***************/

/* Строковое преобразование String, приводит значение переменной к строке.

Числовое преобразование Number, пытается привести значение переменно к числовому, если в строке имеется буква, то выдаст значение NaN (не удалось преобразовать), а строку "123" преобразует в числовое значение 123.
undefined         NaN
null              0
true/false        1/0
string            Пробельные символы по краям обрезаются.
                  Далее, если остаётся пустая строка, то получаем 0, иначе из непустой строки «считывается» число. При ошибке результат NaN.

Логическое преобразование Boolean, преобразует значение в true или false.
alert( Boolean(1) ); // true
alert( Boolean(0) ); // false
alert( Boolean("Привет!") ); // true
alert( Boolean("") ); // false

*/

// let value = '';
// value = Boolean(value);
// console.log(value);
/*
console.log('' + 1 + 0); //10
console.log('' - 1 + 0); // -1
console.log(true + false); // 1
console.log(6 / '3'); // 2
console.log('2' * '3'); //6
console.log(4 + 5 + 'px'); //9px
console.log('$' + 4 + 5); //$45
console.log('4' - 2); //2
console.log('4px' - 2); //NaN
console.log(7 / 0); //Infinit
console.log('   -9    ' + 5); //-95
console.log('   -9    ' - 5); ///-14
console.log(null + 1); //1
console.log(undefined + 1); //NaN
console.log('\t \n' - 2); //-2


let a = prompt('Первое число?', 1);
let b = prompt('Второе число?', 2);

alert(+a + +b);
*/

/*******************Операторы сравнения****************/
/*
Больше/меньше: a > b, a < b.
Больше/меньше или равно: a >= b, a <= b.
Равно: a == b. Обратите внимание, для сравнения используется двойной знак равенства ==. Один знак равенства a = b означал бы присваивание.
Не равно. В математике обозначается символом ≠, но в JavaScript записывается как a != b.
*********************************************************
Алгоритм сравнения двух строк довольно прост:

Сначала сравниваются первые символы строк.
Если первый символ первой строки больше (меньше), чем первый символ второй, то первая строка больше (меньше) второй. Сравнение завершено.
Если первые символы равны, то таким же образом сравниваются уже вторые символы строк.
Сравнение продолжается, пока не закончится одна из строк.
Если обе строки заканчиваются одновременно, то они равны. Иначе, большей считается более длинная строка.

alert( 'Я' > 'А' ); // true
alert( 'Коты' > 'Кода' ); // true
alert( 'Сонный' > 'Сон' ); // true

В примерах выше сравнение 'Я' > 'А' завершится на первом шаге, тогда как строки 'Коты' и 'Кода' будут сравниваться посимвольно:

К равна К.
о равна о.
т больше, чем д. На этом сравнение заканчивается. Первая строка больше.

********************Сравнение разных типов****************

При сравнении значений разных типов JavaScript приводит каждое из них к числу.

Например:

alert( '2' > 1 ); // true, строка '2' становится числом 2
alert( '01' == 1 ); // true, строка '01' становится числом 1
Логическое значение true становится 1, а false – 0.

Например:

alert( true == 1 ); // true
alert( false == 0 ); // true

Забавное следствие
Возможна следующая ситуация:

Два значения равны.
Одно из них true как логическое значение, другое – false.
Например:

let a = 0;
alert( Boolean(a) ); // false

let b = "0";
alert( Boolean(b) ); // true

alert(a == b); // true!
С точки зрения JavaScript, результат ожидаем. Равенство преобразует значения, используя числовое преобразование, поэтому "0" становится 0. В то время как явное преобразование с помощью Boolean использует другой набор правил.

*************************Строгое сравнение****************
Использование обычного сравнения == может вызывать проблемы. Например, оно не отличает 0 от false:

alert( 0 == false ); // true
Та же проблема с пустой строкой:

alert( '' == false ); // true
Это происходит из-за того, что операнды разных типов преобразуются оператором == к числу. В итоге, и пустая строка, и false становятся нулём.

Как же тогда отличать 0 от false?

Оператор строгого равенства === проверяет равенство без приведения типов.

Другими словами, если a и b имеют разные типы, то проверка a === b немедленно возвращает false без попытки их преобразования.

Давайте проверим:

alert( 0 === false ); // false, так как сравниваются разные типы
Ещё есть оператор строгого неравенства !==, аналогичный !=.

Оператор строгого равенства дольше писать, но он делает код более очевидным и оставляет меньше места для ошибок.

5 > 4 → true
"ананас" > "яблоко" → false
"2" > "12" → true
undefined == null → true
undefined === null → false
null == "\n0\n" → false
null === +"\n0\n" → false

1) Очевидно, true.
2) Используется посимвольное сравнение, поэтому false. "а" меньше, чем "я".
3) Снова посимвольное сравнение. Первый символ первой строки "2" больше, чем первый символ второй "1".
4) Специальный случай. Значения null и undefined равны только друг другу при нестрогом сравнении.
5) Строгое сравнение разных типов, поэтому false.
6) Аналогично (4), null равен только undefined.
7) Строгое сравнение разных типов.
*/

/********************Услоавное ветвление******************/
/*
let year;

while (true) {
      year = prompt('Вы пупа или лупа?', '');
      if ((year == 'Пупа') | (year == 'пупа')) {
            alert('Вы пупа!');
      } else if ((year == 'Лупа') | (year == 'лупа')) {
            alert('Залупа!');
      } else if ((year == 'Залупа') | (year == 'залупа')) {
            alert('САМА ТЫ ЗАЛУПА!!!');
      } else {
            alert('Написано же "Пупа или Лупа", чего вам не понятно?!');
            break;
      }
}
*/

/*****************************Оператор '?'*************/

/*
let age = prompt('Введите ваш возраст: ');
let message = age < 3 ? 'Здравствуй, малыш!' : age < 18 ? 'Привет!' : age < 100 ? 'Здравствуйте!' : 'Какой необычный возраст!';
console.log(message);
*/

/*************************************************/

/*
let javaName = prompt('Какое официальное название JavaScript?', '');
if (javaName == 'ECMAScript') {
      alert('Верно!');
} else {
      alert('Не знаете? ECMAScript!');
}
*/

/*
let value = prompt('Введите число: ');

if (value > 0) {
      alert('1');
} else if (value < 0) {
      alert('-1');
} else {
      alert('0');
}
*/
/*
let a = prompt('Введите значение переменно а: ', '');
let b = prompt('Введите значение переменно b: ', '');
let result = +a + +b < 4 ? 'Мало' : 'Много';
alert(result);
*/

/*
let login = prompt('Введите логин: ', '');
let message = login == 'Сотрудник' ? 'Привет' : login == 'Директор' ? 'Здравствуйте' : login == '' ? 'Нет логина' : '';
console.log(message);
*/
/********************Логические операторы*****************/

/*
let hour = 19;
if (hour < 10 || hour > 18) {
      console.log('Офис Закрыт.');
} else {
      console.log('Открыт');
}
*/

// let currentUser = null;
// let defaultUser = 'John';
// let name = currentUser || defaultUser || 'unnamed';
// console.log(name);

// let age = prompt('Ввдеите число:', '');
// age = age < 14 || age > 90;
// console.log(age);
/***************************************************/

/*
let loginUser = prompt('Введите логин:');
let passwordUser = '';
if (loginUser == 'Админ') {
      passwordUser = prompt('Введите пароль:', '');
      if (passwordUser == 'Я главный') {
            alert('Здравствуйте!');
      } else if (passwordUser === '' || passwordUser === null) {
            alert('Отменено');
      } else {
            alert('Неверный пароль!');
      }
} else if (loginUser === '' || loginUser === null) {
      alert('Отменено');
} else {
      alert('Я вас не знаю!');
}
console.log(loginUser);
*/
/***************************************************/
// let user = 'Иван';
// console.log(user ?? 'Аноним');

// let firstName = null;
// let lastName = null;
// let nickName = 'Суперкодер';

// console.log(firstName ?? lastName ?? nickName ?? 'Аноним');

// let sum = 0;
// while (true) {
//       let value = +prompt('Введите число:', '');

//       if (!value) break;

//       sum += value;
//       console.log(sum);
// }

// console.log('Сумма: ' + sum);

// outer: for (let i = 0; i < 3; i++) {
//       for (let j = 0; j < 3; j++) {
//             let input = prompt(`Значение на координатах (${i},${j})`, '');
//             console.log(input);
//             if (!input) break outer;
//       }
// }
// console.log('Готово!');
/*****************************Четные числа***********/
// for (let i = 2; i <= 10; i++) {
//       if (i % 2 == 0) {
//             console.log(i);
//       }
// }
/****************************************************/

/****************************************************/
// for (let i = 0; i < 3; i++) {
//       console.log(`number ${i}!`);
// }
// let i = 0;
// while (i < 3) {
//       console.log(`number ${i}!`);
//       i++;
// }
/****************************************************/

// other: while (true) {
//       let number = +prompt('Введите число больше 100:');
//       if (number > 100 || number === null) {
//             alert(number);
//             break other;
//       }
// }

/****************************************************/
/***********************Простые числа*******************/
// let n = 10;
// nextPrime: for (let i = 2; i <= n; i++) {
//       for (let j = 2; j < i; j++) {
//             if (i % j == 0) continue nextPrime;
//       }
//       console.log(i);
// }
/****************************************************/

/****************Switch**********************/
// let a = 2 + 2;

// switch (a) {
//       case 3:
//             console.log('Маловато');
//             break;
//       case 4:
//             console.log('В точку!');
//             break;
//       case 5:
//             console.log('Многовато');
//             break;
//       default:
//             console.log('Нет таких значений');
// }

/***********************************************/

// let browser = prompt('Введите название браузера:', '');

// if (browser === 'Edge') {
//       console.log("You've got the Edge!");
// } else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
//       console.log('Okay we support these browsers too');
// } else {
//       console.log('We hope that this page looks ok!');
// }

/*************************************************/
// const NUMBER = +prompt('Введите число между 0 и 3', '');

// switch (NUMBER) {
//       case 0:
//             console.log('Вы ввели число 0');
//             break;
//       case 1:
//             console.log('Вы ввели число 1');
//             break;
//       case 2:
//       case 3:
//             console.log('Вы ввели число 2, а может и 3');
//             break;
//       default:
//             console.log('Некорректный данные ввода');
// }

/**************************Функции**********************/

// let userName = 'Вася';
// function showMessage() {
//       let userName = 'Петя';
//       let message = 'Привет, ' + userName;
//       console.log(message);
// }
// console.log(userName);
// showMessage();
// console.log(userName);

// function showMessage(from, text) {
//       console.log(from + ': ' + text);
// }

// showMessage('Аня', 'Привет!');
// showMessage('Аня', 'Как дела?');

// function showMessage(from, text) {
//       from = '*' + from + '*';
//       console.log(from + ': ' + text);
// }

// showMessage('Аня', 'Привет');
// showMessage('Аня', 'Как дела?');

// function anotherText() {
//       let text = 'другой текст';
//       return text;
// }
// function showMessage(from, text = anotherText()) {
//       from = '*' + from + '*';
//       console.log(from + ': ' + text);
// }

// showMessage('Аня');

// function sum(a, b) {
//       return a + b;
// }

// let result = sum(1, 2);
// console.log(result);

// function checkAge(age) {
//       if (age > 18) {
//             return true;
//       } else {
//             return confirm('А родители разрешили?');
//       }
// }

// let age = prompt('Сколько вам лет?', 18);

// if (checkAge(age)) {
//       console.log('Доступ разрешён');
// } else {
//       console.log('Доступ запрещён');
// }

// let age = +prompt('Ваш возраст:', 18);

// function checkAge(age) {
//       return age > 18 ? true : confirm('А родители разрешили?');
// }
// function checkAge(age) {
//       return age > 18 || confirm('А родители разрешили?');
// }
// console.log(checkAge(age));

// let a = +prompt('Число а:');
// let b = +prompt('Число b:');

// function min(a, b) {
//       if (a < b) {
//             return a;
//       } else {
//             return b;
//       }
// }

// let x = +prompt('Введите число');
// let n = +prompt('Введите степень');

// function pow(x, n) {
//       let sqr = Math.pow(x, n);
//       return sqr;
// }
// console.log(pow(x, n));

/******************************************************/

// function repeat(str, n) {
//       let string = '';
//       for (let i = 0; i < n; i++) {
//             string += str;
//       }
//       return string;
// }

// console.log(repeat('Привет ', 2));

// function avg(r, b, g) {
//       if (r === undefined && b === undefined && g === undefined) {
//             r = 0;
//             b = 0;
//             g = 0;
//       }
//       let string = `"rgb(${r},${b},${g})"`;
//       return string;
// }
// console.log(avg());

// function avg(r, b, g) {
//       let midSum = (r + b + g) / 3;
//       return midSum;
// }
// console.log(avg(15, 7, 39));

// function operation(m, n, o) {
//       let oper = (m + n) * o;
//       return oper;
// }
// console.log(operation(3, 6, 2));

// function addN(n) {
//       function be() {
//             let oper = (2 + 2) * 2;
//             return oper;
//       }
//       let sum = be() + n;
//       return sum;
// }
// console.log(addN(10));

// function words(n) {
//       if (n === undefined) {
//             console.log(`0 товаров`);
//       } else if (n <= 12) {
//             console.log(`${n} товаров`);
//       } else {
//             console.log(`${n} товара`);
//       }
// }
// words();

/*************Функциональное выражение************/

// function sayHi() {
//       console.log('Привет');
// }
// let pepe = sayHi;
// pepe();
// sayHi();

// function ask(question, yes, no) {
//       if (confirm(question)) yes();
//       else no();
// }
// function showOk() {
//       console.log('Вы согласны.');
// }
// function showCancel() {
//       console.log('Вы не согласны.');
// }

// ask('Вы согласны?', showOk, showCancel);

// ask(
//       "Вы согласны?",
//       function() { alert("Вы согласились."); },
//       function() { alert("Вы отменили выполнение."); }
//     );

// function welcome(age) {
//       if (age < 18) {
//             console.log('Вам нельзя.');
//       } else {
//             console.log('Проходите');
//       }
// }
// welcome(19);
/*
let age = 17;
let welcome =
      age < 18
            ? function () {
                    console.log('Вам нельзя');
              }
            : function () {
                    console.log('Проходите.');
              };

welcome();
*/
/******************Стрелочные функции*************/
// let sum = (a, b) => a + b;

// console.log(sum(3, 4));

// let double = (n) => n * 2;
// console.log(double(3));

// let sayHi = () => console.log('Привет');

// sayHi();

// let age = 17;

// let welcome = age < 18 ? () => console.log('Вам нельзя.') : () => console.log('Проходите');

// welcome();

// let sum = (a, b) => {
//       let result = a + b;
//       return result;
// };

// console.log(sum(7, 5));

/***********************************************/

// function ask(question, yes, no) {
//       if (confirm(question)) yes();
//       else no();
// }
// ask(
//       'Вы согласны?',
//       () => console.log('Вы согласились.'),
//       () => console.log('Вы отменили выполнение.')
// );

/***************************************************/
// function hello(name) {
//       let phrase = `Hello, ${name}!`;

//       say(phrase);
// }

// function say(phrase) {
//       alert(`** ${phrase} **`);
// }

// hello('Юля');

/***************************************************/
/*
function pow(x, n) {
      let result = 1;

      for (let i = 0; i < n; i++) {
            result *= x;
      }

      return result;
}

let x = prompt('x?', '');
let n = prompt('n?', '');

if (n <= 0) {
      console.log(`Степень ${n} не поддерживается, введите целую степень, большую 0`);
} else {
      console.log(pow(x, n));
}
*/

// function showPrimes(n) {
//       nextPrime: for (let i = 2; i < n; i++) {
//             // проверяем, является ли i простым числом
//             for (let j = 2; j < i; j++) {
//                   if (i % j == 0) continue nextPrime;
//             }

//             alert(i);
//       }
// }

// showPrimes(10);

// function showPrimes(n) {
//       for (let i = 2; i < n; i++) {
//             if (!isPrime(i)) continue;

//             console.log(i);
//       }
// }

// function isPrime(n) {
//       for (let i = 2; i < n; i++) {
//             if (n % i == 0) return false;
//       }

//       return true;
// }

// showPrimes(10);

// function showPrime(n) {
//       for (let i = 2; i < n; i++) {
//             if (!prime(i)) continue;
//             console.log(i);
//       }
// }

// function prime(n) {
//       for (let i = 2; i < n; i++) {
//             if (n % i == 0) return false;
//       }
//       return true;
// }

// showPrime(10);
// addWhiskey(glass);
// addJuice(glass);

// function addWhiskey(container) {
//       for (let i = 0; i < 10; i++) {
//             let drop = getWhiskey();
//             smell(drop);
//             add(drop, glass);
//       }
// }

// function addJuice(container) {
//       for (let t = 0; t < 3; t++) {
//             let tomato = getTomato();
//             examine(tomato);
//             let juice = press(tomato);
//             add(juice, glass);
//       }
// }

/*************Объекты***************************/
// let user = new Object(); <-- Синатксис "конструктор объекта"
// let user = {}; <-- Синтаксис "литерал объекта"

// let user = {
//       name: 'John',
//       age: 30,
// };

// console.log(user.name);
// console.log(user.age);

// user.isAdmin = true;
// console.log(user.isAdmin);

// delete user.age;
// user['likes bird'] = true;
// console.log(user);
// console.log(user['likes bird']);

// const user = {
//       name: 'John'
// };

// user.name = 'Pete'
// console.log(user.name);

// let key = prompt('Введите имя переменной');
// let user = {
//       name: 'John',
//       age: 30,
// };

// console.log(user[key]);

// let fruit = prompt('Какой фрукт купить?', 'apple');

// let bag = {
//       [fruit]: 5,
// };

// console.log(bag.apple);

// let fruit = prompt('Какой фрукт взять?', 'apple');

// let bag = {};

// bag[fruit] = 5;
// console.log(bag);
// console.log(bag.apple);

// let fruit = 'apple';
// let bag = {
//       [fruit + 'Computers']: 5,
// };
// console.log(bag);
// console.log(bag.appleComputers);
/***********************************************/
// function makeUser(name, age) {
//       return {
//             name: name,
//             age: age,
//       };
// }

// let user = makeUser('John', 30);
// console.log(user.name);
// console.log(user.age);

// function makeUser(name, age) {
//       return {
//             name,
//             age,
//       };
// }

// let user = makeUser('John', 30);
// console.log(user.name);
// console.log(user.age);
// console.log(user);

// let obj = {
//       0: 'press',
// };
// console.log(obj[0]);
// console.log(obj['0']);

// let user = {
//       name: 'john',
//       age: 30,
// };
// let key = 'age';
// console.log(key in user);
// console.log('name' in user);

// let user = {
//       test: undefined,
// };
// console.log(user.test);
// console.log('test' in user);

/****************Цикл For in**********************/

// let user = {
//       name: 'John',
//       age: 30,
//       isAdmin: true,
// };

// for (let key in user) {
//       if (user[key] == 'John') {
//             console.log('Нашёл');
//             console.log(user[key]);
//       }
// }

// let codes = {
//       '+49': 'Германия',
//       '+41': 'Швейцария',
//       '+44': 'Великобритания',
//       '+1': 'США',
// };

// for (let code in codes) {
//       console.log(+code);
// }

/*********************************************/

// let user = {
//       name: 'John',
//       surname: 'Smith',
// };
// console.log(user.name);
// user.name = 'Pete';
// console.log(user.name);
// delete user.name;
// console.log(user);

// function isEmpty(obj) {
//       for (let key in obj) {
//             return false;
//       }
//       return true;
// }

// let schedule = {};

// console.log(isEmpty(schedule));

// let salaries = {
//       John: 100,
//       Ann: 160,
//       Pete: 130,
// };

// function sumSalaries(obj) {
//       let sumSalaries = 0;
//       for (let key in obj) {
//             sumSalaries = sumSalaries + obj[key];
//       }
//       return sumSalaries;
// }

// console.log(sumSalaries(salaries));

// let menu = {
//       width: 200,
//       height: 300,
//       title: 'My menu',
// };

// function multiplyNumeric(obj) {
//       for (let key in obj) {
//             if (typeof obj[key] == 'number') {
//                   obj[key] *= 2;
//             }
//       }
// }

// multiplyNumeric(menu);

// console.log(menu);

/***********************************************/

/*******************Копирование объектов и ссылки*****/

// let user = {
//       name: 'Иван',
// };
// let admin = user;     <-- Пример ссылки на объект

// admin.name = 'Петя';
// console.log(admin.name);

// let user = {
//       name: 'Иван',
//       age: 30,
// };

// let clone = {};

/*
for (let key in user) {     <-- Пример копирования объекта
      clone[key] = user[key];
}
*/

/*
Object.assign(clone, { name: 'Иван' }, { age: 30 });

clone.name = 'Пётр';
console.log(clone.name);


let clone = Object.assign({}, user);
console.log(clone);
*/

// !let user = {
//   !    name: 'Иван',
//   !    sizes: {
//   !          height: 182,
//      !       width: 50,
//  !     },
// !};

// !let clone = {};
// !for (let key in user) {
// !      clone[key] = user[key];
// !      if (typeof user[key] == 'object') {
//  !           for (let str in user[key]) {
//   !                user[key][str] = clone[key][str];
//  !           }
//    !   }
// !}

// clone.sizes.width = 200;
// console.log(clone.sizes.width);
// console.log(user.sizes['width']);

// function marry(man, woman) {
//       woman.husband = man;
//       man.wife = woman;

//       return {
//             father: man,
//             mother: woman,
//       };
// }

// let family = marry(
//       {
//             name: 'John',
//       },
//       {
//             name: 'Ann',
//       }
// );

/******************Методы объекты "this"*************/

// let user = {
//       name: 'Джон',
//       age: 30,
// };

// user.sayHi = function () {
//       console.log('Привет');
// };

// user.sayHi = () => console.log('Привет');

// user = {
//       sayHi() {
//             console.log('Привет');
//       },
// };

// user.sayHi();

// let user = {
//       name: 'Джон',
//       age: 30,

//       sayHi() {
//             console.log('Привет, ' + this.name);
//       },
// };

// user.sayHi();

// let user = { name: 'Джон' };
// let admin = { name: 'Админ' };

// function sayHi() {
//       console.log(this.name);
// }

// user.f = sayHi;
// admin.f = sayHi;

// user.f();
// admin.f();

// admin['f'](); <-- (неважен способ доступа к методу - через точку или квадратные скобки)

// Правило простое: при вызове obj.f() значение this внутри f равно obj. Так что, в приведённом примере это user или admin.

// let loginAdmin = {
//       username: 'Admin',
// };
// let loginUser = {
//       username: 'User',
// };

// function sayHellow() {
//       console.log('Добро пожаловать ' + this.username);
// }

// function sayGoodye() {
//       console.log('До свидания, ' + this.username);
// }

// loginAdmin.f = sayHellow;
// loginUser.f = sayHellow;
// loginAdmin.g = sayGoodye;
// loginAdmin.f();
// loginUser.f();
// loginAdmin.g();
// console.log(loginAdmin);

/****************************************************/
// let user = {
//       name: 'Джон',
//       sayHi: function () {
//             console.log('Привет');
//       },
// };

// let user = {
//       name: 'Джон',
//       sayHi() {
//             console.log('Привет');
//       },
// };

// user.sayHi();
// console.log(user.name);
/*****************************************************/

// let user = {
//       name: 'Джон',
//       hi() {
//             console.log(this.name);
//       },
//       bye() {
//             console.log('Пока');
//       },
// };

// user.hi();
// (user.name == 'Джон' ? user.hi : user.bye)();

// let user = {
//       firstName: 'Илья',
//       sayHi() {
//             let arrow = () => console.log(this.firstName);
//             arrow();
//       },
// };

// user.sayHi();

/**************************************************/

// let user = {
//       name: 'Джон',
//       go() {
//             console.log(this.name);
//       },
// };
// user.go();

// let obj, method;

// obj = {
//       go() {
//             console.log(this);
//       },
// };

// obj.go();

// obj.go();

// (method = obj.go)();  <-- из за присваивания теряется значение this, так больше не возвращается значение ссылочного типа Reference Type, т.е в переменную записывается обычное значение функции, в которой this не может получить значение, поэтому undefained
// (obj.go || obj.stop)(); <-- при сравнении, то же самое, что и при присваивании

// function makeUser() {
//       return {
//             name: 'Джон',
//             ref() {
//                   return this;
//             },
//       };
// }

// let user = makeUser();
// console.log(user.ref().name);

// function sayHi() {
//       return {
//             message: 'Привет',
//             hi() {
//                   return this;
//             },
//       };
// }
// let user = sayHi();

// console.log(user.hi().message);

/*************************Калькулятор****************/
let calculator = {
      read() {
            this.a = +prompt('Введите число а:', '0');
            this.znak = prompt('Введите знак', '');
            this.b = +prompt('Введите число b', '0');
      },
      equals() {
            do {
                  switch (this.znak) {
                        case '+':
                              return this.a + this.b;
                        case '-':
                              return this.a - this.b;
                        case '*':
                              return this.a * this.b;
                        case '/':
                              return this.a / this.b;
                        default:
                              this.znak = prompt('Введите знак', '');
                  }
            } while (this.znak != '+' || this.znak != '-' || this.znak != '*' || this.znak != '/');
      },
};
calculator.read();
alert(calculator.equals());

/********************Лестница************************/

// let ladder = {
//       step: 0,
//       up() {
//             this.step++;
//             return this;
//       },
//       down() {
//             this.step--;
//             return this;
//       },
//       showStep() {
//             console.log(this.step);
//             return this;
//       },
// };

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep();

// ladder.up().up().down().up().up().down().showStep();
