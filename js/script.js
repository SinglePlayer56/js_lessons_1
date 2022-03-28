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
