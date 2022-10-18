//! ===== Методы объекта ======
// let obj = {
//   name: "Bill",
//   lastName: "Jean",
//   zero: null,
//   bool: false,
// };

//? Object.keys() - создает массив ключей объекта

// let keyArr = Object.keys(obj);
// console.log(keyArr);

//? Object.values() - создает массив значений объекта

// let valArr = Object.values(obj);
// console.log(valArr);

//? Object.assign() - копирует ключ/значения из одного объекта в другой, но не считается поверхностным копированием

// let obj1 = {
//   car: "Kia",
//   model: "Rio",
//   year: 2018,
// };

// let obj2 = {
//   color: "grey",
//   country: "KG",
// };

// obj2.colorNew = obj2.color;
// delete obj2.color;
// console.log(obj2);

// let obj3 = { ...obj1, ...obj2 };
// let obj3 = Object.assign(obj1, obj2);
// obj3.car = "Hyndai";
// console.log(obj1);
// console.log(obj3);

//?Object.entries - выдает массив пары ключ/значение

// let entriesArr = Object.entries(obj);
// console.log(entriesArr);

//? Object.hasOwnProperty() - возвращает логическое значение (true/false), указывающее, содержит ли объект указонное свойство
// let home = {
//   adress: "Bishkek",
//   street: "Chuy",
//   number: "29",
// };
// let bool = home.hasOwnProperty("street");
// console.log(bool);

//? Object.freezy - замораживает объект, после приминения этого свойства, в объект нельзя ничего добавить и удалить и изменитть

// Object.freeze(home);
// home.street = "Kiev";
// console.log(home);

//? https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries

// function func() {
//   // console.log(a, b, c, d);
//   // console.log(arguments);
//   for (i of arguments) {
//     console.log(i);
//   }
// }
// func(2, 3, 4, 5, 231, 1, 3, 1, 5, 6, 2, 2);

// let func2 = function () {
//   console.log(arguments);
// };
// func2("h", "g", "f", "q");

// let func3 = () => {
//   console.log(arguments);
// };
// func3("h", "g", "f", "q");

//! Task Makers
// адание 10
// Напишите функцию checkTask(), которая будет принимать строку и проверять является ли она палиндромом.
// Палиндро́м, пе́ревертень — число, буквосочетание, слово или текст, одинаково читающееся в обоих направлениях - число 101; слова "кок", "топот", "комок" и т.д.
// Если строка читается в обе стороны одинаково возвратить true и вывести в консоль, если же нет то возвратить false и так же вывести в консоль. Пробелы и регистр учитывать не нужно.
// К примеру, если передали строку "довод", функция должна вывести в консоль и возвратить:
// true
// для слова "makers", функция выведет в консоль и вернет:
// false

// ? let str = prompt("Введите значение").toLowerCase();
// function checkTask(word) {
//   let newWord = word.split("").reverse().join("");
//   if (newWord === word.toLowerCase()) {
//     return true;
//   } else {
//     return false;
//   }
// }
// ? console.log(checkTask(str));

//! 2. Дан объект user. Напишите метод byTicket для этого объекта. При вызове метода количество билетов должно увеличиваться на единицу, при условии, что у пользователя будет достаточно средств на балансе. Также, с баланса должна сниматься стоимость билета (400).Если на счету недостаточно средств вывести соответствующее сообщение.

//? let user = {
//   name: "Sam",
//   age: 17,
//   balans: 700,
//   tickets: 0,
// };

// user.buyTicket = function () {
//   if (this.balans >= 400) {
//     this.balans -= 400;
//     this.tickets++;
//     console.log("Вы успешно приобрели билет");
//   } else {
//     console.error("У вас недостаточно средств на балансе");
//   }
// };

// user.getBalans = function () {
//   this.balans += 150;
// };

// console.log(user.tickets);
// console.log(user.balans);
// user.buyTicket();
// console.log(user.tickets);
// console.log(user.balans);
// user.getBalans();
// user.buyTicket();
// console.log(user.tickets);
//? console.log(user.balans);

//TODO 1. Дан объект passenger. Напишите метод для этого объекта,который возвращает информацию о пассажире. Также, напишите второй метод, который меняет значение свойства baggage на то значение, которое получает в качестве параметра.
//? let passenger = {
//   firstName: "Sam",
//   lastName: "Winchester",
//   passportNum: "US12345678",
//   baggage: 20,
// };
// // // Пример
// // passenger.getInfo(); // Passenger Sam Winchester. Passport number is US12345678. Maximum luggage weight is 20kg
// // passenger.setBaggage(30);
// // passenger.getInfo(); // Passenger Sam Winchester. Passport number is US12345678. Maximum luggage weight is 30kg

// passenger.getInfo = function () {
//   console.log(
//     `Passenger ${this.firstName}. Password number is ${this.passportNum}. Maximum baggage weight is ${this.baggage}`
//   );
// };

// passenger.setBaggage = function () {
//   let baggage = +prompt("Enter your weight");
//   this.baggage = baggage;
// };

// passenger.getInfo();
// passenger.setBaggage(30);
//? passenger.getInfo();

//! Найдите самое длинное слово в строке и выведите его в консоли
//? const str = "I am a Megalodon, oceans feeling like a pond";
// let str1 = str;
// str1 = str1.split(" ").sort((a, b) => b.length - a.length);

//? console.log(str1[0]);

//! Задание №10
// Напишите функцию, которая принимает строку в качестве аргумента и возвращает количество гласных, которые содержатся в строке. Гласными являются [а], [о], [и], [ы], [у] и [э]
// К примеру:
// vowel('достопримечательность') // --> 7
// vowel('субстанционализирующийся') // --> 11

//? let itog = 0;
// function showGlas(str) {
//   let arr = str.split("");
//   for (let i = 0; i < arr.length; i++) {
//     if (
//       arr[i] == "а" ||
//       arr[i] == "я" ||
//       arr[i] == "у" ||
//       arr[i] == "ю" ||
//       arr[i] == "о" ||
//       arr[i] == "е" ||
//       arr[i] == "ё" ||
//       arr[i] == "э" ||
//       arr[i] == "и" ||
//       arr[i] == "ы"
//     ) {
//       itog++;
//     }
//   }
//   return itog;
// }
//? console.log(showGlas("карамель"));

//! Задание №11
// Напишите функцию которая принимает массив из чисел. Находит количество четных чисел в массиве и их сумму. И выведите их на экран.
// К примеру:
// let arr = [1, 2, 3, 4, 5, 6]
// `Четные числа в массиве: ${newArr} их сумма равна ${sum}`
// Четные числа в массиве: [2, 4, 6] их сумма равна 12

//? showArr([1, 2, 3, 4, 5, 6]);

// function showArr(arr) {
//   let arrnew = [];
//   let sumArr = 0;
//   // let j = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       arrnew.push(arr[i]);
//       sumArr = sumArr + arr[i];
//     }
//   }
//   alert(`Четные числа в массиве: [${arrnew}] их сумма равна ${sumArr}`);
//? }

//! Задание № 12
// Напишите функцию, которая принимает массив с числами и выводит количество отрицательных чисел в этом массиве
// Пример: [7, -5, -29, 0, 62, 4, 5, -6, -27]
// Вывод:  //4
//? function showArr(arr) {
//   let j = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       j++;
//     }
//   }
//   console.log(j);
// }
//? showArr([7, -5, -29, 0, 62, 4, 5, -6, -27]);

//! Задание № 15
// Напишите функцию, которая принимает в качестве параметров два целых числа и возвращает значение true (истина), если в числах одинаковое количество цифр; иначе функция возвращает значение false (ложь).
// Пример: func(2398, 19)
// Вывод: false
