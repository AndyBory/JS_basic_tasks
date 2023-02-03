// 1. Создать функцию isAdult, которая будет проверять возраст пользователя на совершеннолетие (Пусть совершеннолетним считается пользователь, которому исполнилось 18 лет):

const isAdult = function (age) {
  if (isNaN(age) || typeof age !== 'number') {
    return null;
  }
  // else {

  // }
  alert(age >= 18);
};

isAdult();

//2.  Создать функцию checkMultiplicity, которая принимает два числа и проверяет кратность первого вторым:

const checkMultiplicity = function (x, y) {
  if (isNaN(x) || isNaN(y) || typeof x !== "number" || typeof y !== "number") {
    return null;
  }
  alert(x % y === 0);
};
checkMultiplicity();

//3. Проверка возможности треугольника. Создать функцию которая принимает длины сторон треугольника; функция возвращает true если треугольник возможен и false если нет.

const checkMultiplicity = function (a, b, c) {
  if (
    isNaN(a) ||
    isNaN(b) ||
    isNaN(c) ||
    typeof a !== "number" ||
    typeof b !== "number" ||
    typeof c !== "number"
  ) {
    return null;
  }
  alert((a + b > c) && (a + c > b) && (c + b > a));
};

checkMultiplicity();

//4. написть функцию, которая принимает число и возвращает сумму нечетных чисел от 1 до указанного числа.

let b = false;
let i = 0;
const sumOfNumbers = function (a) {
  while (true) {
    // debugger;
    if (isNaN(a) || typeof a !== "number") {
      return ("Вы ввели не число");
    }  else if (a <= 0) {
      return ("Введите положительное число больше ноля.");
    } else if (i <= a) {
        if (i % 2 !== 0) {
          b += i;
        }
    } else if (i > a) {
      break;
    }
    i++;
  }
  alert(b);
};
sumOfNumbers();

//5. Создать функцию, которая будет проверять, является ли число простым. Простым является неотрицательное число, которое делится нацело только на самого себя или на 1.

const primeNumber = function (a) {
  let i = 2;
  // debugger;
  if (isNaN(a) || typeof a !== "number") {
    return "Вы ввели не число.";
  } else if (a <= 0) {
    return "Введите число больше ноля.";
  }
  while (i < a) {
    if (a % i === 0) {
      return i === a;
    } else {
      i++;
    }
  }
  return i === a;
};
primeNumber();
