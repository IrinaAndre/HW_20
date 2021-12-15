//1 Создайте массив arr = ['a', 'b', 'c', 'd'] и с его помощью выведите на экран строку 'a+b, c+d'.
const arr = ["a", "b", "c", "d"];
alert(`${arr[0]} + ${arr[1]}, ${arr[2]} + ${arr[3]}`);

//2 Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый. Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной
const arr = [2, 5, 3, 9];
let result = arr[0] * arr[1] + arr[2] * arr[3];
alert(result);

//3 Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4 из этого массива.
const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
alert(arr[1][0]);

//4 Дан объект { js: ["jQuery", "Angular"], php: "hello", css: "world" }. Выведите с его помощью слово "jQuery".
const obj = { js: ["jQuery", "Angular"], php: "hello", css: "world" };
alert(obj.js[0]);

//5 Заполните массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx' и так далее.
const arr = [];
let elem = "x";

for (let i = 0; i < 10; i++) {
  arr.push(elem);
  elem += "x";
}

//6 Заполните массив следующим образом: в первый элемент запишите '1', во второй '22', в третий '333' и так далее.
const arr = [];

for (let i = 1; i <= 10; i++) {
  let elem = "";
  for (let a = 0; a < i; a++) {
    elem += i;
  }
  arr.push(elem);
}

//7 Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым — сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].
const arr = [];

function arrayFill(element, length) {
  for (let i = 0; i < length; i++) {
    arr.push(element);
  }
  return arr;
}

//8 Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.
const arr = [2, 1, 5, 1, 3, 1, 6];

function numOfElements(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum > 10) {
      return i + 1;
    }
  }
}

//9 Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.
const arr = [2, 1, 5, 1, 3, 1, 6];

function reverse(arr) {
  let arr1 = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    arr1.push(arr[i]);
  }
  return arr1;
}

//10 Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
const arr = [[1, 2, 3], [4, 5], [6]];

function sumOfElements(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let a = 0; a < arr[i].length; a++) {
      sum += arr[i][a];
    }
  }
  return sum;
}

//11 Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
const arr = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
];

function sumOfElements(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let a = 0; a < arr[i].length; a++) {
      for (let k = 0; k < arr[i][a].length; k++) {
        sum += arr[i][a][k];
      }
    }
  }
  return sum;
}
