//! --------------------Коллбэк функции----------------------------
// Для того, чтобы работать с более продвинутыми методами массивов нужно понять что такое функция-коллбэк. Коллбэк это функция, которая передается как аргумент другой функции и вызывается внутри этой функции. Ключевая идея в том, что мы передаём функцию и ожидаем, что она вызовется обратно когда-нибудь позже, если это будет необходимо(от англ. «call back» – обратный вызов).
// Рассмотрим такой простой пример:

// function callBack(x) {
//   console.log("Call-Back start");
//   console.log(x);
//   console.log("Call-Back end");
// }
// function main(y) {
//   console.log("Main function start");
//   callBack(y);
//   console.log("Main function end");
// }

// main("Hello");

//! ===== сложные методы массивов =======
// let arr = ["Gulnara", "Myrza", "Jakshylyk", "Zuhra", "Azamat"];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (i of arr) {
//   console.log(i);
// }

//? forEach - выполняет указанную функцию один раз для каждого элемента в массиве. Ничего не возвращает (не создает новый массив)
// синтаксис forEach
// название_массива.forEach(element,index,array => {
//   код
// });
// arr.forEach((elem, index, array) => {
//   // console.log(`Элемент - ${elem}, индекс - ${index}`);
//   // console.log(array);
// });

// let newArr = arr.forEach((elem, index) => {
//   return elem; //ничего не возвращает
// });
// console.log(newArr);

//? map - создает новый массив, с результатом вызова указанной функции для каждого

// let arr = ["Gulnara", "Myrza", "Jakshylyk", "Zuhra", "Azamat"];
// let newArr = arr.map((elem, index, array) => {
//   return elem;
//   // console.log(elem);
//   // console.log(index);
// });
// console.log(newArr);

// let personAge = [
//   { name: "Joly", age: 50 },
//   { name: "Antonio", age: 55 },
//   { name: "Bred", age: 40 },
//   { name: "Zoya", age: 25 },
//   { name: "Asteriks", age: 65 },
// ];

// let newPerson = personAge.map(person => {
//   if (person.age >= 50) {
//     return person;
//   } else {
//     return "Age < 50";
//   }
// });
// console.log(newPerson);

// let newPerson = [];
// personAge.forEach(elem => {
//   if (elem.age >= 50) {
//     newPerson.push(elem);
//   }
// });
// console.log(newPerson);

//? filter - создает новый массив со всеми элементами, которые прошли проверку
// let newAge = personAge.filter(elem => elem.age >= 50);
// console.log(newAge);
// let newAge = personAge.filter(elem => elem.name[0] === "A");
// console.log(newAge);

//? reduce - применяет функцию reduce к каждому элементу массива (слева-направо), возвращая одно значение
// let amount = 0;
// for (let i = 0; i <= 10; i++) {
//   amount++;
// }
// console.log(amount);

// let personAge = [
//   { name: "Joly", age: 50 },
//   { name: "Antonio", age: 55 },
//   { name: "Bred", age: 40 },
//   { name: "Zoya", age: 25 },
//   { name: "Asteriks", age: 65 },
// ];

// let amount = personAge.reduce((acc, current, index, array) => {
//   // acc = acc + current.age;
//   // return acc;

//   acc.push(current);
//   return acc;
// }, []);
// console.log(amount);

// let amount = personAge.reduce((acc, current, index, array) => {
//   //   console.log("acc", acc);
//   //   console.log("current", current);
//   //   acc = acc + current.age;
//   //   acc.push(current);
//   acc[`obj${index}`] = current;
//   return acc;
// }, {});
// console.log(amount);

// function checkTask(a) {
//   a = a.split("");
//   let b = null;
//   for (let i = 0; i <= a.length; i++) {
//     if (
//       a[i] == "a" ||
//       a[i] == "e" ||
//       a[i] == "i" ||
//       a[i] == "o" ||
//       a[i] == "u"
//     ) {
//       delete a[i];
//     } else {
//       b = a.join("").toUpperCase();
//     }
//   }
//   return b;
// }
// console.log(checkTask("hello"));

//todo Задание №3
// Функция принимает параметр min.
// В нем лежит число от 0 до 59.
// Функция должна возвращать в какую четверть
// часа попадает это число (в первую, вторую,
// третью или четвертую).

//! Задание №1
// Дан массив из чисел: let nums = [12, 10, 99, 9, 3, 2, 120, 200,];
// Используя метод filter(), выведите в массив числа, которые больше или равны 10.
// Вывод: [12, 10, 99, 120, 200]
//решение
// let nums = [12, 10, 99, 9, 3, 2, 120, 200];
// let newNums = nums.filter((elem) => elem >= 10);
// console.log(newNums);

//! Задание №2
// Дан массив let lengthName = [`Patricia` , `William` , `Barbara` , `James` , `Chloe` , `Elizabeth` ]; Преобразуйте каждый элемент в его длину и выведите в console. Используйте метод map().
//решение
// let lengthName = [
//   `Patricia`,
//   `William`,
//   `Barbara`,
//   `James`,
//   `Chloe`,
//   `Elizabeth`,
// ];
// let newName = lengthName.map((elem) => {
//   console.log(elem.length);
// });

//! Задание №3
// Дан массив let arrNums = [12, 21, 27, 31, 45, 50 ];
//  С помощью цикла foreach и оператора if выведите в console элементы массива, которые больше 20-ти, но меньше 30-ти.

//решение
// let arrNums = [12, 21, 27, 31, 45, 50];
// let newNums = arrNums.forEach((elem) => {
//   if (elem > 20 && elem < 30) {
//     console.log(elem);
//   }
// });

//! Задание №4
// Дан массив let total = [ 1, 5, 0, 3, 6 ];
// Суммируйте все значения в данном массиве и выведите результат в alert(). Используйте метод reduce().

//решение
// let total = [ 1, 5, 0, 3, 6 ];
// let newTotal = total.reduce((acc,current)=> {
//   return acc+current
// })
// console.log(newTotal)

// let lengthName = [
//   `Patricia`,
//   `William`,
//   `Barbara`,
//   `James`,
//   `Chloe`,
//   `Elizabeth`,
// ];
// let lengthName1 = lengthName.map((elem, index, array) => {
//   return elem.length;
// });
// console.log(lengthName1);

//todo Напишите функцию checkTask(), которая принимает интервал в виде двух четырехзначных чисел, например 2000 и 3001.
// Функция должна возвратить список всех чисел, в заданном интервале, состоящих из четных цифр.
// Например для аргументов 2000 и 3001,
// checkTask(2000, 3001)
// функция возвратит список:
// [2000, 2002, 2004, 2006, 2008, 2020, 2022, 2024, 2026 ...  2888]

//? методы массивов
// let str = ["m", "a", "k", "e", "r", "s"];

// let newForEach = str.forEach((elem) => elem);

// let newMap = str.map((elem) => elem);

// console.log(newForEach);
// console.log(newMap);

// let newFilter = str.filter((elem) => elem !== "a");
// console.log(newFilter);

// let arrowFunc = (prev, current, index, array)=>{

// }

// let str = ["m", "a", "k", "e", "r", "s"];

// let newReduce = str.reduce((prev, current) => {
//   prev = prev + current;
//   return prev;
// }, "Hello ");
// console.log(newReduce);

// 1 круг - prev = "Hello ", current = "m", "Hello m"
// 2 круг - prev - "Hello m", current = "a", "Hello ma"
// 3 круг - prev - "Hello ma", current = "k", "Hello mak"
// 4 круг - prev = "Hello mak", current = "e", "Hello make"
// 5 круг - prev - "Hello make", current = "r", "Hello maker"
// 6 круг - prev - "Hello maker", current = "s", "Hello makers"

//! У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

// let users = [
//   { name: "Kim", age: 41 },
//   { name: "Kortney", age: 42 },
//   { name: "Khloe", age: 37 },
//   { name: "Kendall", age: 26 },
//   { name: "Kylie", age: 24 },
// ];

// let userName = users.map(elem => elem.name);
// console.log(userName);

// let userAge = users.reduce((acc, current) => {
//   return (acc += current.age / users.length);
// }, 0);
// console.log(userAge);

//!  Дан массив с числами. Оставьте в нем только отрицательные числа.
// let arr = [1, -3, 5, 6, -7, 8, 9, -11];
// let newNum = arr.filter(elem => elem < 0);
// console.log(newNum);

//? find - возвращает значение первого найденного элемента в массиве, который удавлитворяет условию переданному в callBack функци. Если не находит, то возвращает undefined

// let users = [
//   { name: "Kim", age: 41 },
//   { name: "Kortney", age: 42 },
//   { name: "Khloe", age: 37 },
//   { name: "Kendall", age: 26 },
//   { name: "Khloe", age: 13 },
//   { name: "Kylie", age: 24 },
//   { name: "Kim", age: 24 },
// ];

// let usersFind = users.find(elem => elem.name === "Khloe");
// console.log(usersFind);

//? findIndex - возвращает индекс в массиве если элемент совподает с условием проверяющей функции. В противном случае вернет -1.

// let findIndexRes = users.findIndex(elem => {
//   return elem.name === "Khloe";
// });
// console.log(findIndexRes);

// let strName = "Hello";
// strName = strName.split("");
// let notLetter = strName.findIndex(elem => {
//   return elem === "e";
// });
// strName.splice(notLetter, 1);
// console.log(strName.join(""));

//? every - проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции

// // let users = [
// //   { name: "Kim", age: 41, status: "female" },
// //   { name: "Kortney", age: 42, status: "female" },
// //   { name: "Khloe", age: 37, status: "female" },
// //   { name: "Kendall", age: 26, status: "female" },
// //   { name: "Khloe", age: 13, status: "female" },
// //   { name: "Kylie", age: 24, status: "female" },
// //   { name: "Kim", age: 24, status: "male" },
// // ];
// let users = [
//   { name: "Kim", age: 41, status: "female" },
//   { name: "Kortney", age: 42, status: "female" },
//   { name: "Khloe", age: 37, status: "female" },
//   { name: "Kendall", age: 26, status: "female" },
//   { name: "Khloe", age: 13, status: "female" },
//   { name: "Kylie", age: 24, status: "female" },
//   { name: "Kim", age: 24, status: "female" },
// ];
// let everyUsers = users.every(elem => elem.status === "female");
// console.log(everyUsers);

//? some - проверяет, удовлетворяют хотябы один элемент массива условию, заданному в передаваемой функции

// let everyUsers = users.some(elem => elem.status === "male");
// console.log(everyUsers);

//? indexOf - возвращает первый индекс по которому данный элемент может быть найден в массиве или -1, если такого нет. Разница между findIndex в том, что indexOf не принимает в качестве аргумента callBack функцию

// let numbers = [1999, 2000, 2001, 2002, 2003];
// let showIdexOf = numbers.indexOf(2001);
// console.log(showIdexOf);

//? includes - определяет, содержит ли массив определенный элемент, возвращая в зависимости от этого true или false

// let person = ["Azret", "Mirdin", "Alia", "Aidana"];
// let aliaIncludes = person.includes("Alia");
// console.log(aliaIncludes);

//! Задание 6
// Данa функция checkTask(arr), принимающая в аргументы массив с числами.
// Используя forEach() и push(), создайте новый массив, состоящий из квадратов этих чисел.
// Результат возвратите из функции.
// Например, для массива:
// [1, 2, 3]
// Возвращенным значением будет:
// [1, 4, 9]

//? let newArr = [];
// function checkTask(arr) {
//   arr.forEach(element => {
//     let kvad = element ** 2;
//     newArr.push(kvad);
//   });
//   return console.log(newArr);
// }
//? checkTask([22, 23, 12, 22, 32, 45]);

//? function checkTask(arr) {
//   let newArr = [];
//   arr.forEach(function (item) {
//     newArr.push(item ** 2);
//   });
//   return newArr;
//? }

//! Задание 9
// Напишите функцию checkTask(arr), принимающую в аргументы массив с числами.
// Используя метод reduce(), найдите сумму всех элементов до первого нуля.
// Результат выведите в консоль.
// Например, для массива:
// [1, 2, 3, 0, 4, 5, 6]
// суммируем первые 3 элемента, так как дальше стоит элемент с числом 0.
// Вывод будет:
// 6

// ?function checkTask(arr) {
//   let arr2;
//   arr.reduce((a, b) => {
//     if (b === 0) {
//       return (arr2 = a);
//     } else if (a === 0) {
//       return (arr2 = 0);
//     } else {
//       return a + b;
//     }
//   });

//   return console.log(arr2);
// }
//? checkTask([1, 2, 3, 0, 4, 5]);

//! Задание 10
// Напишите функцию checkTask(arr), принимающую в аргументы массив вида:
// ["Это заголовок <h1>", "А это параграф <p>", "А это тег <div>"]
// Используя метод includes() и любой метод перебора массива оберните каждый элемент массива в соотвутсвующий тег(т.е добавьте нужные строки-теги в начале и в конце элемента массива).
// Вывод должен быть следующим, в первом console.log'е нужно показать:
// <h1>Это заголовок <h1></h1>
// затем:
// <p>А это параграф <p></p>
// и в конце:
// <div>А это тег <div></div>
// ВАЖНО: В массиве используются только теги h1, p, div, других тегов в массиве не будет

// ? let checkTask = arr => {
//   arr.forEach(i => {
//     if (i.includes("<h1>")) {
//       console.log(`<h1>${i}</h1>`);
//     } else if (i.includes("<p>")) {
//       console.log(`<p>${i}</p>`);
//     } else if (i.includes("<div>")) {
//       console.log(`<div>${i}</div>`);
//     }
//   });
// };
// ? checkTask(["Это заголовок <h1>", "А это параграф <p>", "А это тег <div>"]);

//! адание 11
// Напишите функцию checkTask(arr), принимающую в аргументы массив состояший из других массивов.
// Функция должна создать объект из вложенных массивов, используя метод reduce().
// Первый элемент внутреннего массива, должен быть ключом, второй - значением объекта.
// Результат выведите в консоль.
// Например, для массива:
// [['a', 1], ['b', 2]]
// Вывод будет:
// {'a': 1, 'b': 2}

//? function checkTask(arr) {
//   let newArr = arr.reduce((acc, value) => {
//     if (Array.isArray(value)) {
//       acc[value[0]] = value[1];
//     }
//     return acc;
//   }, {});
//   console.log(newArr);
// }
// checkTask([
//   ["a", 1],
//   ["b", 2],
//? ]);

//! Задание 12
// Напишите функцию checkTask(arr), принимающую в аргументы массив состояший из других массивов.
// Используя метод reduce(), найдите сумму всех элементов.
// Результат выведите в консоль.
// Например, для массива:
// [1,2, [4,5,6], [7,8]]
// Вывод будет:
// 33

//? function checkTask(arr) {
//   const sum = arr.flat(Infinity).reduce((acc, val) => acc + val, 0);
//   console.log(sum);
//   console.log(Infinity);
// }
//? checkTask([1, 2, [4, 5, 6], [7, 8]]);

//14,15
// function checkTask(str) {
//   let arr = str.split(" ");
//   let newArr = arr.map((item) => {
//     if (item.length >= 4) {
//       return item[0] + (item.length - 2) + item[item.length - 1];
//     } else {
//       return item;
//     }
//   });
//   return newArr.join(" ");
// }

//! Экстра 1
// Напишите функцию checkTask(arr), принимающую в аргументы массив состояший из чисел.
// Функция должна сохранить в новый массив только нечетные числа.
// Результат выведите в консоль.
// Например, для массива:
// [11, 4, 8, 9, 5, 15, 6]
// Выводом будет строка:
// [11, 9, 5, 15]

//? function checkTask(arr) {
//   let newArr = arr.filter(elem => elem % 2 !== 0);
//   return console.log(newArr);
// }
//? checkTask([11, 4, 8, 9, 5, 15, 6]);

//! ====== elevator ======
//? let elevator = {
//   minFloor: 1,
//   maxFloor: 16,
//   current: 1,
//   printFloor() {
//     console.log(this.current);
//   },
//   upOneFloor() {
//     if (this.current < this.maxFloor) {
//       this.current++;
//       this.printFloor();
//     } else {
//       console.error("Error!");
//     }
//   },
//   downOneFloor() {
//     if (this.current > this.minFloor) {
//       this.current--;
//       this.printFloor();
//     } else {
//       console.error("Error!");
//     }
//   },
//   toFloor(floor) {
//     if (floor >= this.minFloor && floor <= this.maxFloor) {
//       while (this.current < floor) {
//         this.upOneFloor();
//       }
//       while (this.current > floor) {
//         this.downOneFloor();
//       }
//     } else {
//       console.error("Error!");
//     }
//   },
// };
// elevator.printFloor();
// elevator.upOneFloor(); //2
// elevator.upOneFloor(); //3
// elevator.downOneFloor(); //2
// elevator.downOneFloor(); //3
// elevator.downOneFloor(); //error
// elevator.toFloor(14);
// elevator.toFloor(4);
//? elevator.toFloor(-2);

//! Экстра 3
// Напишите функцию checkTask(arr), принимающую в аргументы массив состоящий из чисел.
// Напишите функцию, которая делит массив пополам и распределяет числа из второй части по первой.
// К примеру, если передали такой массив:
// arr = [2,5,1,3,4,7]
// Вывод будет:
// [2,3,5,4,1,7]
// т.е массив поделили на два - в первой части 2, 5, 1, а во второй 3, 4, 7,
// затем, за каждым числом из первой части, поставили число из второй - 2,3,5,4,1,7
// Для массива:
// arr = [1,2,3,4,4,3,2,1]
// Вывод будет таким:
// [1,4,2,3,3,2,4,1]
// Желательно использовать reduce

//? function checkTask(arr) {
//   let n = arr.length / 2;
//   let secondPart = arr.splice(n);

//   let newArr = arr.reduce((sum, curr, i) => {
//     return sum.concat(curr, secondPart[i]);
//   }, []);
//   console.log(newArr);
// }
//? checkTask([2, 5, 1, 3, 4, 7]);

//! Экстра 4
// Напишите функцию checkTask(arr), принимающую в аргументы массив состоящий из чисел.
// Функция должна заменить каждый элемент массива - наибольшим числом по правую сторону от него, а также заменить последний элемент массива на число -1(минус один).
// Функция должна вывести результат в консоль.
// К примеру, если передали данный массив:
// arr = [17,18,5,4,6,1]
// Вывод в консоль будет:
// [18,6,6,6,1,-1]
// Используйте методы slice(), Math.max, map()

//? function checkTask(arr) {
//   let res = arr.map((num, index, arr) =>
//     index < arr.length - 1 ? Math.max(...arr.slice(index + 1)) : -1
//   );
//   console.log(res);
//? }

//! Задание 1
// Напишите функцию checkTask(arr), которая получает в качестве параметра массив.
// Функция должна перебрать все его элементы и вывести сам элемент, а также тип данных элемента - числовой, либо не числовой.
// К примеру, для массива:
// ['Молоко', -77, 11, 'Мед', -88]
// Вывод будет следующим:
// Молоко - не число
// -77 - число
// 11 - число
// Мед - не число
// -88 - число
// Аргументы для вывода в консоль передавайте через запятую, например console.log(item, '-', "не число")

//? function checkTask(arr) {
//   arr.forEach(elem => {
//     if (typeof elem == "number") {
//       console.log(`${elem} - число`);
//     } else {
//       console.log(`${elem} - не число`);
//     }
//   });
// }
//? checkTask(["Молоко", -77, 11, "Мед", -88]);

//! Задание 2
// Напишите функцию checkTask(elem, arr), принимающую элемент elem и массив arr.
// Функция определяет, присутствует ли заданный элемент в массиве.
// В качестве результата работы функции можно выдавать логическое значение true и индекс этого элемента, если элемент найден, и false — в противном случае.
// Пример, для массива ['Молоко', 20, 40, 'дом', 30] и элемента 40, вывод будет:
// true 2
// Для элемента 'Hello' вывод будет:
// false
// Аргументы для вывода в консоль передавайте через запятую, например console.log(true, index)

//? function checkTask(elem, arr) {
//   itog = false;
//   arr.forEach((element, index) => {
//     if (elem == element) {
//       itog = `true ${index}`;
//     }
//   });
//   return console.log(itog);
// }
//? checkTask(30, ["Молоко", 20, 40, "дом", 30]);

// function checkTask(arr) {
//   let j = 0;
//   arr.forEach(elem => {
//     j += elem;
//   });
//   console.log(`forEach: ${j}`);
//   let sum = arr.reduce((acc, elem) => (acc += elem));
//   console.log(`reduce: ${sum}`);
//   let k = 0;
//   arr.map(elem => (k += elem));
//   console.log(`map: ${k}`);
// }
// checkTask([5, 6, 7, 8, 9]);

// let checkTask = arr => {
//   console.log(arr.sort(() => Math.random() - 0.5));
// };
// checkTask([4, 8, 12, 16]);

// let checkTask = arr => console.log(Array.from(new Set(arr)));
// checkTask(["apple", "orange", "apple", "pear"]);

// function checkTask(arr) {
//   let res = { i: 0, a: 0, e: 0, o: 0, u: 0 };
//   let newArr = arr.split("");
//   newArr.forEach(item => {
//     let elem = item.toLowerCase();
//     if (elem === "a") {
//       res.a += 1;
//     } else if (elem === "i") {
//       res.i += 1;
//     } else if (elem === "e") {
//       res.e += 1;
//     } else if (elem === "o") {
//       res.o += 1;
//     } else if (elem === "u") {
//       res.u += 1;
//     }
//   });
//   return console.log(res);
// }
// checkTask("I Am awesome and so are you");

//! Задание 14
// Напишите функцию checkTask(arr, key, value) которая принимает в качестве аргумента массив состоящий из объектов(с элементами в виде ключей и значений), а также две строки в параметры key и value.
// Функция должна добавлять новую пару ключ и значение, состоящих из указанных строк к каждому из объектов массива.
// К примеру, для массива с объектами:
// [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
// И таких значений для параметров key и value:
// 'title'
// 'instructor'
// Вывод будет в виде массива:
// [
//  {name: 'Elie', title:'instructor'},
//  {name: 'Tim', title:'instructor'},
//  {name: 'Matt', title:'instructor'},
//  {name: 'Colt', title:'instructor'}
// ]

// function checkTask(arr, key, value) {
//   arr.map(elem => {
//     elem[key] = value;
//   });
//   return console.log(arr);
// }
// checkTask(
//   [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }, { name: "Colt" }],
//   "title",
//   "instructor"
// );

//todo Задание 15
// Напишите функцию checkTask(a, b), принимающую в аргументы два массива состоящих из чисел.
// Функция выводить true если сумма квадратов каждого элемента в первом массиве больше чем сумма кубов каждого элемента второго массива.
// Например, если в a и b получили данные массивы:
// [4, 5, 6]
// [1, 2, 3]
// Вывод будет:
// true
// т.к (4 ** 2 + 5 ** 2 + 6 ** 2) больше чем (1 ** 3 + 2 ** 3 + 3 ** 3)
// Использовать метод reduce()

// function checkTask(a, b) {
//   let aR = a.reduce((acc, elem) => {
//     elem **= 2;
//     return (acc += elem);
//   }, 0);
//   let bR = b.reduce((acc, elem) => {
//     elem **= 3;
//     return (acc += elem);
//   }, 0);
//   if (aR > bR) {
//     return console.log(true);
//   } else {
//     return console.log(false);
//   }
// }
// checkTask([4, 5, 6], [1, 2, 3]);
