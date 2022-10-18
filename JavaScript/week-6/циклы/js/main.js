// let array = ["Artur", "Roman", "Petr", "Aleksandr", "Vlad"];
// if (array[0] === "Aleksandr") {
//   console.log("Я нашел Сашу");
// } else if (array[3] === "Aleksandr") {
//   console.log("Я нашел Сашу");
// } else {
//   console.log("Я не нашел Сашу");
// }

// let arr = ["Джаз", "Блюз"];
// arr.push("Рок-н-ролл");
// let center = arr.length / 2;
// arr.splice(center, 1, "Классика");
// let arrShift = arr.shift();
// console.log(arrShift);
// arr.unshift("Рэп", "Регги");
// console.log(arr);

// for (let i = 0; i < array.length; i++) {
//   array[i] === "Aleksandr"
//     ? console.log("Я нашел Сашу")
//     : console.log("Я не нашел Сашу");
// }

// let array = ["Artur", "Roman", "Petr", "Aleksandr", "Vlad"];
// for (let i = 0; i < array.length; i++) {
// array[i] === "Aleksandr"
//   ? console.log("Я нашел Сашу")
//   : console.log("Я не нашел Сашу");
//   console.log(array[i]);
// }

//! ======= Инкримент и Декремент ===========
//? Инкремент - это УВЕЛЕЧЕНИЕ значения переменной на единицу, а декремент - это УМЕНЬШЕНИЕ значения переменной на единицу.
// ? Постфиксный Инкримент и Декремент
// Инкримент
// let inc = 0;
// inc++;
// inc = inc + 1;
// console.log(inc++, "Постфикс");
// console.log(inc);

//Декремент
// let dec = 5;
// dec--;
// dec--;
// dec = dec - 1;
// console.log(dec);

// ?Префиксный Инкримент и Декремент
// let post = 0;
// ++post;
// console.log(++post, "Префикс");

// let arr = [1, 2, 3, 4, 5, 6, 7];
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = arr[i] * 2;
// }
// console.log(arr);

//?синтаксис цикла for
// for(создаем переменную для запуска цикла;условие;увеличеваем переиенную на еденицу для того чтобы запустить следуйщий круг){
//   код , который сработает столько раз сколько будет кругов
// }

// Задание №1
// Дан массив ["Polina", "Mirdin", "Azret", "Aliia", "Aidana"]. Выведите в консоль имена Mirdin и Aliia с помощью цикла for
// let names = ["Polina", "Mirdin", "Azret", "Aliia", "Aidana"];
// for (let i = 1; i < names.length; i = i + 2) {
//   console.log(names[i]);
// }

// Задание №2
// Создайте пустой массив и заполните его числами от 1 до 10 с помощью цикла for
//вариант1
// let num = [];
// for (let i = 0; i < 10; i++) {
//   num.push(i+1);
// }
// console.log(num);
//вариант2
// let num = [];
// for (let i = 1; i < 11; i++) {
//   num.push(i);
// }
// console.log(num);

// Задание №3
// Выведите в консоль все числа в промежутке с 50 до 99 включительно с помощью цикла.
// let num1 = [];
// for (let i = 50; i <= 99; i++) {
//   num1.push(i);
// }
// console.log(num1);
// Задание №4
// Выведите те же числа, но уже в обратном порядке, т.е. с 99 до 50.
// let num2 = [];
// for (let i = 99; i >= 50; i--) {
//   num2.push(i);
// }
// console.log(num2);

// Задание №5
// Найдите самый длинный элемент массива и вывкдите в консоль
// ["pen", "pineapple", "apple", "pen"]
// let arr1 = ["pen", "pineapple", "apple", "pen"];
// console.log(arr1.sort((a, b) => b.length - a.length)[0]);

// Задание №6
// Так же найдите самый короткий элемент этого же массива
// let arr2 = ["pen", "pineapple", "apple", "pen"];
// console.log(arr2.sort((a, b) => a.length - b.length)[0]);
// Задание №7
// Выведите в консоль все элементы с четными индексами.
// [1,2,3,4,5,6,7,8,9]
// let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i < newArr.length; i++) {
//   if (newArr[i] % 2 === 1) {
//     console.log(newArr[i]);
//   }
// }
// console.log(num4);
// Задание №8
// Дан двумерный массив. Выведите в консоль все элементы.
// [[1,2], [3,4], [5,6]]
//вариант1
// const arr3 = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// let arr4 = arr3.flat();//объяденяет все массивы в один
// for (let i = 0; i < arr4.length; i++) {
//   console.log(arr4[i]);
// }

//вариант2
// const arr3 = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// console.log(arr3.flat());

// const arr3 = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// console.log(arr3[0][0]);
// for (let i = 0; i < arr3.length; i++) {
//   for (let j = 0; j < arr3[i].length; j++) {
//     console.log(arr3[i][j]);
//   }
// }

// let names = ["alia", "zuhra", "kamila", "tania"];
// let i = 0;
// let result = [];
// while (i < names.length) {
//   let newNames = names[i].split("");
//   newNames[0] = newNames[0].toUpperCase();
//   newNames = newNames.join("");
//   result.push(newNames);
//   i++;
// }
// console.log(result);

// for (let i = 0; i < names.length; i++) {
//   names[i] = names[i][0].toUpperCase() + names[i].substring(1);
// }
// console.log(names);

//! ====== break/continue ========
//? С помощью break , можно прежде временно остановить цикл, не дожидаясь пока условие вернет false
// let arr = [2, 3, 4, 0, 5, 6, 7];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 0) {
//     console.log("Мы нашли нолик");
//     break;
//   }
//   console.log(arr[i]);
// }

// let names = ["Alia", "zuhra", "Kamila", "Tania"];
// for (let i = 0; i < names.length; i++) {
//   let letter = names[i][0].toUpperCase();
//   if (letter !== names[i][0]) {
//     console.log("В массиве первая буква маленькая");
//     break;
//   }
//   console.log(names[i]);
// }

//?  использую continue, можно остановить текущий круг цикла, но перейти сразу к следующему кругу
// let nums = [-3, -2, -1, 0, 1, 2, 3, 4, 5];
// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] < 0) {
//     continue;
//   }
//   console.log(nums[i]);
// }

// let arr = ["a", "bc", "bcd", "hello", "goodbuy"];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].length <= 3) {
//     continue;
//   }
//   console.log(arr[i]);
// }

// ! ======= While =========
// Цикл while также может использоваться для многократного повторения одного участка кода.
// Если в цикле for мы примерно знаем сколько раз отработает код, т.к там есть шаг и условие зависящее от шага, то в цикле while это может быть не таким очевидным. К примеру цикл while, можно написать так: "пока пользователь вводит неправильный пароль выводи такое-то сообщение", т.е здесь пользователь может совершить действие как 10 так и 1000 раз и цикл for для такой работы не подойдет.

// Синтаксис цикла while, выглядит данным образом:
// while (условие) {
// тело цикла
// }

// let password = null;
// let i = 0;
// while (password !== "titi") {
//   i++;
//   if (i > 3) {
//     console.log("Вы исчерпали все попытки!!!");
//     break;
//   }
//   password = prompt("Enter your password");
//   password !== "titi" ? console.log("Пароль не верный") : null;
// }

// let cars = ["Merc", "Porshe", " Bugati", "BMw", "Golf", "Kia", "Honda"];
// let i = 1;
// while (i < cars.length) {
//   console.log(cars[i]);
//   i++;
// }

// let str = "codingiseasy";
// let newStr = str.split("");
// for (let i = 0; i < newStr.length; i++) {
//   if (i % 2 == 1) {
//     newStr[i] = newStr[i].toUpperCase();
//   }
// }
// newStr = newStr.join("");
// console.log(newStr);

// let arr1 = [23, 2, 3];
// let arr2 = [22, 12, 0];
// let arr3 = [];
// for (let i = 0; i < arr1.length; i++) {
//   arr3.push(arr1[i] * arr2[i]);
// }
// console.log(arr3);

// let arr1 = ["Makers", "Java", "Full"];
// let arr2 = ["KG", "Script", "Stack"];
// let arr3 = [];
// for (let i = 0; i < arr1.length; i++) {
//   arr3.push(arr1[i] + arr2[i]);
// }
// console.log(arr3);

// for (let i = 1; i < i <= 20; i++) {
//   if (i == 21) {
//     break;
//   }
//   console.log(i);
// }

// let arr = ["Kamila", "Zeinep", "Aliia", "Tom"];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// let arr = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < 5) {
//     console.log(arr[i]);
//   }
// }
// let arr = "#";
// while (arr.length < 8) {
//   console.log(arr);
//   arr += "#";
// }

// for (let i = 1; i <= 100; i++) {
//   if (i % 5 === 0 && i % 3 === 0) {
//     console.log(`fizzbuzz${i}`);
//   } else if (i % 3 === 0) {
//     console.log(`fizz${i}`);
//   } else if (i % 5 === 0) {
//     console.log(`buzz${i}`);
//   }
// }

//! ========== for....in/for.....of =============
//? цикл for....in выполняет итерацию (перебор) по свойствам обьекта(по ключаму объекта, по индексам у массива)
//синтаксис for...in
// for(let i in название_объекта){
//   код, который будет повторятся
// }
// let obj = {
//   name: "Johni",
//   lastName: "Depp",
//   status: "alive",
//   age: 56,
// };
// console.log(obj.name);
// for (let i in obj) {
//   console.log(obj[i]);
// }

// let arr = [23, true, "text", "56", "Hello", 890];
// for (let i in arr) {
//   console.log(arr[i]);
// }

//?цикл for...of перебирает итерируемые(упорядочнные)объекты //только для массивов
// синтаксис for..of
// for(let i of название_массива){
//   код, который будет повторяться
// }

let arr = [12, 34, 123, 33, 45];
for (i of arr) {
  console.log(i);
}

//!============== do...while =============
// Цикл do...while вначале выполняет тело цикла, а затем проводит проверку условия.
// Представить данный цикл можно так, вы можете зайти в автобус(действие цикла), и только потом оплатить поездку(проверка условия).
// Синтаксис выглядит таким образом:
// do {
// тело цикла
// } while (условие);
// То есть, такой цикл вам будет удобно использовать если вы хотите, чтобы тело цикла выполнилось хотя бы один раз, даже если условие возвратит false.
// Допустим, мы должны проехать путь в 3 км, мы в любом случае, в начале выедем в путь, и только потом мы начнем проверять сколько проехали, чтобы не пропустить свой поворот:

// let km = 0;
// do {
//   console.log("Еще едем");
//   km++;
// } while (km < 5);

// do {
//   console.log("Сработает");
// } while (false === true);

// ! ============ Task ==============
// task 6
// let str = "#";
// for (let i = 0; i < 7; i++) {
//   console.log(str);
//   str = str + "#";
// }

// let arr = [1000, 1000, 1000, 1000, 1000, 1000, 10000, 1000, 1000];
// for (i of arr) {
//   if (i !== 1000) {
//     break;
//   }
//   console.log(i);
// }

// let arr = [
//   { model: "Iphone", price: 10000, arr1: [{ color: "black", memory: 256 }] },
//   { model: "Samsung", price: 20000 },
//   { model: "Xiomi", price: 20000 },
//   { model: "Iphone", price: 1000 },
// ];
// console.log(arr[0].arr1[0].color);

// let arr = [
//   [1, 2, 5, 1, 8],
//   [3, 4],
//   true,
//   "World",
//   [5, 6],
//   [7, 8],
//   "Hello",
//   { name: "Kani", age: 23 },
// ];
// for (i in arr) {
//   // console.log(Array.isArray(arr[i]));
//   if (Array.isArray(arr[i])) {
//     for (i of arr[i]) {
//       console.log(i);
//     }
//   } else {
//     console.log(arr[i]);
//   }
// }

//! 1.
// Дана строка: 'Hello, world!', необходимо вывести в консоль каждый символ по-отдельности(игнорировать спец. и проьельные символы(то есть, ' ', '!', ',' выводить не нужно))

//? let str = "Hello, world!";
// let str2 = str.split("");
// for (i in str2) {
//   if (str2[i] === " " || str2[i] === "!" || str2[i] === ",") {
//     continue;
//   }
//   console.log(str2[i]);
//? }

//! 2.
// Дана строка: 'Hello, I\'m Jack. I\'m 25 years old and I Frontend developer!', вывести в консоль символы у которых четный индекс

//? let str = "Hello, I'm Jack. I'm 25 years old and I Frontend developer!";
// let str2 = str.split("");
// for (i in str2) {
//   if (i % 2 === 0) {
//     console.log(str2[i]);
//   }
//? }

//! 3.
// Дан двумерный массив:
// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ], задача: вывести в консоль каждый элемент вложенных массивов

//? let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// for (let i = 0; i < matrix.length; i++) {
//   for (let j = 0; j < matrix[i].length; j++) {
//     console.log(matrix[i][j]);
//   }
// ?}

//! 4.
// Дан многомерный массив состоящий из строк:
// const names = [
//   [
//     ['Helen', 'Tom'],
//     ['Jack', 'Peter']
//   ],
//   [
//     ['Jessica', 'Bob'],
//     ['Jimm', 'John']
//   ],
//   [
//     ['Alexa', 'Jessy'],
//     ['David', 'Paul']
//   ]
// ], задача: вывести в консоль только те имена, длинна которых больше 4-х символов

//? const names = [
//   [
//     ["Helen", "Tom"],
//     ["Jack", "Peter"],
//   ],
//   [
//     ["Jessica", "Bob"],
//     ["Jimm", "John"],
//   ],
//   [
//     ["Alexa", "Jessy"],
//     ["David", "Paul"],
//   ],
// ];
// for (let i = 0; i < names.length; i++) {
//   for (let j = 0; j < names[i].length; j++) {
//     for (let f = 0; f < names[j].length; f++) {
//       if (names[i][j][f].length > 4) {
//         console.log(names[i][j][f]);
//       }
//     }
//   }
//? }

//! 5.
// Дан массив: [1, 10, true, 'hello', 'JS', null, false, 0, {title: 'Samsung', price: 1000}], задача, отфильтровать массив, оставив только строки и числа

// let arr = [
//   1,
//   10,
//   true,
//   "hello",
//   "JS",
//   null,
//   false,
//   0,
//   { title: "Samsung", price: 1000 },
// ];

// for (i in arr) {
//   if (typeof arr[i] === "string" || typeof arr[i] === "number") {
//     console.log(arr[i]);
//   }else if(typeof arr[i] === 'object'){
//     console.log(arr[i])
//   }

// }

//! 6.
// Дан массив: ['hello', null, 1, 'JS', 78, true, 90, 'world', false], задача, отобразить пользователю данный массив и спросить, какой элемент он хочет изменить(учитывайте, что пользователь укажет порядковый номер элемента), и на какой элемент изменить, после получения данных, производить замену, пользователь может изменять элементы сколько угодно раз, пока сам не решит остановиться, после завершения изменения данных, вывести финальный список при помощи алерта
// ? let arr = ["hello", null, 1, "JS", 78, true, 90, "world", false];
// alert(`['hello', null, 1, 'JS', 78, true, 90, 'world', false]`);
// do {
//   let option = prompt(
//     "Выбирите порядковый номер элемента который хотите поменять начиная с нуля"
//   );
//   let replacement = null;
//   if (option < arr.length) {
//     replacement = prompt("Значение на которую хотите поменять");
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (option == i) {
//       arr[i] = replacement;
//     }
//   }
// } while (
//   confirm(`Нажмите "ок" если хотите продолжить, "отмена" если закончить`) ==
//   true
// );
// console.log(arr);
// ? alert(arr);

//? let str = ["hello", null, 1, "JS", 78, true, 90, "world", false];
// alert(str);
// let res = +prompt("Введи индекс! Быстро!", "");
// // console.log(res);

// for (let i = 0; i < str.length; i++) {
//   if (res === i) {
//     alert(`${(str[i] = prompt("На что хотите изменить"))}`);
//   }
//   console.log(str[i]);
//? }

// ? let arr = ["hello", null, 1, "JS", 78, true, 90, "world", false];
// let conf = confirm("Хотите начать или продолжить?");
// while (conf) {
//   let numToChange = +prompt(`Input number you want to change`);
//   let changeTo = +prompt("Input to which element change");
//   if (numToChange == false) {
//     break;
//   }
//   arr.splice(numToChange - 1, 1, arr[changeTo - 1]);
//   alert(arr);
//   console.log(arr);
// }
// ? console.log(arr);

//! 7.
// Создать 2 массива, один для строк, другой для чисел, изначально они оба будут пустыми, запрашивать у пользователя данные пока сам пользователь не решит остановиться, данные, которые приходят от пользователя необходимо сортировать в пустые массивы, то есть нужно проверять, если пользователь ввел строку, добавлять ее в массив строк, числа к числам, когда пользователь закончит ввод данных, вывести в алерт 2 массива с данными

// ? let arrStr = [];
// let arrNum = [];
// let check = confirm("Хотите продолжить действие?");
// while (check) {
//   let data = prompt("ВВедите число или строку");
//   if (typeof data == "string") {
//     arrStr.push(data);
//   } else if (typeof data == "number") {
//     arrNum.push(data);
//   } else {
//     alert("NUMBER OR STRING");
//   }
//   if (data == false) {
//     break;
//   }
//   console.log(arrStr, arrNum);
// ? }

//? let arrStr = [];
// let arrNum = [];

// let check = confirm("Хотите начать или продолжить?");
// while (check) {
//   let data = prompt("Введите число или строку");

//   if (Number.isNaN(+data)) {
//     arrStr.push(data);
//   } else {
//     arrNum.push(+data);
//   }
//   if (Boolean(data) == false) {
//     break;
//   }
//   console.log(arrNum, arrStr);
//? }

//! 8.
// Дан массив с объектами: [
//   {
//   name: 'Jack',
//   services: [
//       {
//         electroEnergy: -500,
//         hotWater: -250,
//         coldWater: -150,
//         internet: -600
//       }
//     ]
//   },
//   {
//     name: 'Tom',
//     services: [
//       {
//         electroEnergy: -400,
//         hotWater: 100,
//         coldWater: -250,
//         internet: -400
//       }
//     ]
//   },
//   {
//     name: 'Helen',
//     services: [
//       {
//         electroEnergy: -900,
//         hotWater: -50,
//         coldWater: 200,
//         internet: -600
//       }
//     ]
//   }
// ],
// внутри этого массива есть пользователи и у каждого пользователя есть графа комм. услуги в которой хранится либо задолженность, либо переплата за те или иные услуги, задача, получать платежи от пользователей и менять значение для соответствующих услуг, необходимо запросить у пользователя имя, затем услугу, которую он хочет оплатить и сумму, после получения данных, изменить значение соответствующих свойтв в объекте с услугами

//? let arr = [
//   {
//     name: "Арлен",
//     services: [
//       {
//         electroEnergy: -500,
//         hotWater: -250,
//         coldWater: -150,
//         internet: -600,
//       },
//     ],
//   },
//   {
//     name: "Акмаль",
//     services: [
//       {
//         electroEnergy: -400,
//         hotWater: 100,
//         coldWater: -250,
//         internet: -400,
//       },
//     ],
//   },
//   {
//     name: "Айжамал",
//     services: [
//       {
//         electroEnergy: -900,
//         hotWater: -50,
//         coldWater: 200,
//         internet: -600,
//       },
//     ],
//   },
// ];

// // console.log(arr[2].services[0].hotWater);
// let nameClient = prompt("Введите имя");
// let serviceName = prompt(
//   "Введите название сервиса на русском языке: 'электричество', 'горячая вода','холодная вода','интернет'. "
// ).toLowerCase();
// let sum = +prompt("введите сумму");
// for (let item of arr) {
//   if (item.name === nameClient) {
//     switch (serviceName) {
//       case "электричество":
//         item.services[0].electroEnergy = item.services[0].electroEnergy + sum;
//         break;
//       case "горячая вода":
//         item.services[0].hotWater += sum;
//         break;
//       case "холодная вода":
//         item.services[0].coldWater += sum;
//         break;
//       case "интернет":
//         item.services[0].internet += sum;
//         break;
//     }
//     alert("Успешно оплачено!");
//     console.log(item.services[0]);
//   }
//? }

//! 9.
// Дан массив с объектами: [
//     {
//         userName: 'John',
//         age: 30,
//         password: 'pass123',
//         isActive: false
//     },
//     {
//         userName: 'Jack',
//         age: 28,
//         password: 'qwerty',
//         isActive: false
//     },
//     {
//         userName: 'Jessica',
//         age: 23,
//         password: '12345',
//         isActive: false
//     }
// ], задача, имитировать логику авторизации(за авторизацию будет отвечать поле isActive, если false, значит пользователь не авторизован, если авторизован true), запрашиваем у пользователя его имя и пароль, если данные совпадают, то меняем значение поля isActive на true, также необходимо выводить сообщение типа: 'Пользователь с таким именем не найден', в случае, если пользователя нет, и сообщение: 'Пароль не совпадает', в случае, если пароль не подходит к данному username
// ?let obj = [
//   {
//     userName: "John",
//     age: 30,
//     password: "pass123",
//     isActive: false,
//   },
//   {
//     userName: "Jack",
//     age: 28,
//     password: "qwerty",
//     isActive: false,
//   },
//   {
//     userName: "Jessica",
//     age: 23,
//     password: "12345",
//     isActive: false,
//   },
// ];

// let name = prompt("Введите имя(заглавной буквой)");
// let password = prompt("Введите пароль");

// for (let i = 0; i >= 0; i++) {
//   if (name === obj[i].userName && password === obj[i].password) {
//     obj[i].isActive = true;
//     console.log(obj);
//     break;
//   } else if (name === obj[i].userName && password !== obj[i].password) {
//     alert("Пароль не совпадает");
//     break;
//   } else if (name !== obj[i].userName && password === obj[i].password) {
//     alert("Пользователь с таким именем не найден");
//     break;
//   }
//? }

//! 10.
// Запрашивать у пользователя строки, пока он сам не решит остановиться, затем вернуть ему массив, который будет состоять из длинн всех строк, которые он вводил

// ? let str = [];
// while (str) {
//   let data = prompt("Введите число или строку");
//   if (data) {
//     str.push(data);
//   }
//   if (Boolean(data) == false) {
//     break;
//   }
// }
// ? console.log(str);

//! 11.
// Дан массив с объектами: [
//     {mark: 'Wolksvagen', year: 2005, price: 8000, sale: 0},
//     {mark: 'Audi', year: 1996, price: 2500, sale: 0},
//     {mark: 'Mercedes', year: 2001, price: 5000, sale: 0},
//     {mark: 'BMW', year: 2015, price: 18000, sale: 0},
//     {mark: 'Porsche', year: 2020, price: 120000, sale: 0},
// ], задача: на все автомобили, которые старше 2007 года, поставить скидку 20%(для скидки использовать свойство 'sale')

// let arr = [
//   { mark: "Wolksvagen", year: 2005, price: 8000, sale: 0 },
//   { mark: "Audi", year: 1996, price: 2500, sale: 0 },
//   { mark: "Mercedes", year: 2001, price: 5000, sale: 0 },
//   { mark: "BMW", year: 2015, price: 18000, sale: 0 },
//   { mark: "Porsche", year: 2020, price: 120000, sale: 0 },
// ];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].year > 2007) {
//     arr[i].sale = arr[i].sale + 20;
//   }
// }
// console.log(arr);

//! 12.
// Написать программу, которая будет спрашивать у пользователя добавить/удалить элемент из массива, в зависимости от выбора программа должна либо добавлять данные в массив либо запрашивать порядковый номер элемента который нужно удалить и удалять его из массива, также программа должна после всех операций спрашивать хочет ли пользователь повторить действия если да, то программа должна спросить снова удалить или добавить и тд, использовать цикл while
// let arr1 = alert(`["hello", null, 1, "JS", 78, true, 90, "world", false]`);
// let conf = confirm("Хотите продолжить?");
// let arr = ["hello", null, 1, "JS", 78, true, 90, "world", false];
// do {
//   let req = prompt("Выбирите действие:удалить/добавить");
//   for (i in arr) {
//     if (req == "удалить") {
//       let del = +prompt("Выбирите порядковый номер элемента");
//       arr.splice(del - 1, 1);
//       break;
//     } else if (req == "добавить") {
//       let pu = prompt("Добавьте элемент");
//       arr.push(pu);
//       break;
//     }
//   }
// } while (
//   confirm(`Нажмите "ок" если хотите продолжить, "отмена" если закончить`) ==
//   true
// );
// console.log(arr);

//! 13.
// дан объект где ключи это категории товаров, а значения это массивы с названиями товаров, задача реализовать имитацию поиска, спрашиваем у пользователя какой товар он хочет найти, затем ищем этот товар по названию во всех категориях, если товар есть выводим сообщение типа: Товар найден в категории: название категории, затем таже спросить хочет ли пользователь повторить, если да, то все начинаем сначала и тд
// const data = {
//   electronics: ['Samsung', 'Apple', 'Xiaomi'],
//   fruits: ['Apple', 'Pineapple', 'Orange'],
//   cars: ['Audi', 'Mercedes', 'BMW']
// };

// let data = {
//   electronics: ["Samsung", "Apple", "Xiaomi"],
//   fruits: ["Apple", "Pineapple", "Orange"],
//   cars: ["Audi", "Mercedes", "BMW"],
// };

// do {
//   let tovar = prompt("Введите название товара(с загловной буквы)");
//   for (i in data) {
//     for (j in data[i]) {
//       if (tovar === data[i][j]) {
//         alert(`${tovar} относиться к категории ${i}`);
//         continue;
//       }
//     }
//   }
// } while (
//   confirm(`Нажмите "ок" если хотите продолжить, "отмена" если закончить`) ==
//   true
// );

//! 14.
// Дан массив с объектами:
// [
//     {name: 'Jack', age: 15},
//     {name: 'Helen', age: 34},
//     {name: 'Tom', age: 20},
//     {name: 'Bob', age: 54},
//     {name: 'Jessica', age: 13}
// ], задача: реализовать рассылку сообщений типа: 'Hello, [Здесь должно быть имя клиента], the grand sale has begun, prices are reduced by 20%!', игнорировать клиентов, которым нет 18-ти лет

// let arr = [
//   { name: "Jack", age: 15 },
//   { name: "Helen", age: 34 },
//   { name: "Tom", age: 20 },
//   { name: "Bob", age: 54 },
//   { name: "Jessica", age: 13 },
// ];
// for (let i = 0; i < arr.length; i++) {
//   // console.log(arr[i][["age"]]);
//   if (arr[i]["age"] >= 18) {
//     alert(
//       `Hello,${arr[i]["name"]}, the grand sale has begun, prices are reduced by 20%!`
//     );
//   }
// }

// let arr = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
// let i = 0;
// while (i < arr.length) {
//   if (arr[i] < 5) {
//     console.log(arr[i]);
//   }
//   i++;
// }
function name(params) {}
let a = {};
let b = {};
console.log(a + b);
