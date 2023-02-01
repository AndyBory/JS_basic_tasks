// 1. Создать функцию isAdult, которая будет проверять возраст пользователя на совершеннолетие (Пусть совершеннолетним считается пользователь, которому исполнилось 18 лет):

// const isAdult = function (age) {
//   if (age >= 18) {
//     alert("true");
//   } else {
//     alert("false");
//   }
// };

// isAdult();

//2.  Создать функцию checkMultiplicity, которая принимает два числа и проверяет кратность первого вторым:

// const checkMultiplicity = function (x, y) {
//   if (x % y === 0) {
//     alert("true");
//   } else {
//     alert("false");
//   }
// };

// checkMultiplicity();

//3. Проверка возможности треугольника. Создать функцию которая принимает длины сторон треугольника; функция возвращает true если треугольник возможен и false если нет.

// const checkMultiplicity = function (a, b, c) {
//   if ((a + b >= c) || (a + c >= b) || (c + b >= a)) {
//     alert("true");
//   } else {
//     alert("false");
//   }
// };

// checkMultiplicity();

//4. написть функцию, которая принимает число и возвращает сумму нечетных чисел от 1 до указанного числа.

// let b = false;
// let i = 0;
// const sumOfNumbers = function (a) {
//   while (true) {
//     debugger;
//     if (isNaN(a)) {
//       alert("Вы ввели не число");
//       break;
//     }  else if (a <= 0) {
//       alert("Введите положительное число больше ноля.");
//       break;
//     } else if (i <= a) {
//         if (i % 2 !== 0) {
//           b += i;
//         }
//     } else if (i > a) {
//       break;
//     }
//     i++;
//   }
//   alert(b);
// };
// sumOfNumbers();

//5. Создать функцию, которая будет проверять, является ли число простым. Простым является неотрицательное число, которое делится нацело только на самого себя или на 1.

// const primeNumber = function (a) {
//   let i = 2;
//   let b = 1;
//   debugger;
//   while (true) {
//     if (isNaN(a)) {
//       alert("Вы ввели не число.");
//       break;
//     } else if (a <= 0) {
//       alert("Вы ввели отрицательное число.");
//       break;
//     } else if (a % i === 0) {
//       b = 0;
//       alert("false");
//       break;
//     } else if (i > a) {
//       break;
//     } else {
//       i++;
//     }
//   }
//   if (b === 1) {
//     alert("true");
//   }
// };
// primeNumber();
