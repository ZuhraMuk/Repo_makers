//! ======= function decloration =======
//? Функция это именованный блок кода, который вызывает в нужных местах программы по именни. Можно вызывать сколько угодно раз. Функции нам нужны, для того чтобы не повторять один и тот же код несколько раз.

// синтаксис function decloration
// function название_функции(список_параметров) {
//   блок кода, который будет отрабатываться при каждом вызове функции
// }
// название_функции()

// function funcName() {
//   console.log("Hello JS25");
// }
// funcName();
// funcName();
// funcName();
// funcName(); //функцию можно вызывать сколько угодно раз

// function func(name) {
//   console.log(`Hello ${name}`);
// }

// func("Mirdin");

// function calc(num1, num2) {
//   let sum = num1 + num2;
//   return sum; //return возвращает значение
// }
// calc(25, 25);
// calc(+prompt("Enter your first-nmber"), +prompt("Enter your second-nmber"));
// console.log(calc(12, 22));

// function checkTask(elem) {
//   if (elem === false) {
//     return;
//   }
//   console.log(`У этого значения тип данных ${typeof elem}`);
// }
// checkTask(234);
// checkTask("zuhra");
// checkTask([2, 3, 4, 56]);
// checkTask(false);

// function home(adress = "Kyrgyzstan") {
//   console.log(`Адрес моего дома ${adress}`);
// }
// home();
// home("Bishkek");

//!==== Области видимости =====

// let message = "А я в глобальной области"; //глобальная область

// function showMessage() {
//   let message = "Hi, i'm JavaScript";
//   console.log(message);
// }
// showMessage();
// console.log(message); //message вне области видимости т.е она внутри функции т.е в локальной област

// nameFunc(); //хоистинг
// function nameFunc() {
//   console.log("Привет мир");
// }

//! ===== function expression =======
//?function decloration
//?hoisting работает только с function decloration
// sayHello("Hello"); //Hello Js 25
// function sayHello(str) {
//   console.log(str);
// }

// //?function expression
// sayHello("Hello JS25");
// let sayHello = function () {
//   console.log(str);
// };

//! ==== arguments =====
// let consoleSmthng = function () {
//   console.log(arguments);// Arguments[1,2,3,4,5]
//   console.log(...arguments);// 1,2,3,4,5
// };
// consoleSmthng(1, 2, 3, 4, 5);

// let name = "Arlen";
// let describePerson = function (name) {
//   name = "Mirdin";
//   console.log(name);
// };
// describePerson();

// let calcDiscount = function (price, disc) {
//   return (price / 100) * disc;
// };
// let result = calcDiscount(1000, 50);
// console.log(result);

// let ageOfUser = prompt("Enter your age");
// let isAdult = function (age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// };

// let ageUser = isAdult(ageOfUser);
// console.log(ageUser);

// let userPlay = function (result) {
//   if (result) {
//     alert("Welcome to game!");
//   } else {
//     alert("You cant play");
//   }
// };
// userPlay(ageUser);

// let result = [17, 20, 15, 22, 40, 55]; // первый запрос на бэk

// for (let i = 0; i < result.length; i++) {
//   console.log(result[i]);
// }

// let result2 = ["Mirdin", "Begimay", "Arlen"];
// for (let i = 0; i < result2.length; i++) {
//   console.log(result2[i]);
// }

// let consoleUsers = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }

// };
// consoleUsers(result);
// consoleUsers(result2);

//! Задание 5
// Напишите функцию checkTask(), которая принимает целое число и возвращает сумму всех его цифр.
// Например, для числа 456, функция должна вернуть:
// 15
// так как 4 + 5 + 6 = 15

// function checkTask(num) {
//   let sum = 0;
//   let arr = num.toString().split("");
//   for (i in arr) {
//     sum += +arr[i];
//   }
//   return sum;
// }
// console.log(checkTask(222));

// function checkTask(countries, bool) {
//   if (bool === true) {
//     countries.sort((a, b) => b.length - a.length);
//     return countries[0];
//   } else {
//     countries.sort((a, b) => a.length - b.length);
//     return countries[0];
//   }
// }
// console.log(checkTask(["Финляндия", "Япония", "Испания", "Мексика"], false));

// function checkTask(arr, bool) {
//   if (bool == true) {
//     return arr.sort((a, b) => b.length - a.length)[0];
//   } else {
//     return arr.sort((a, b) => a.length - b.length)[0];
//   }
// }
// console.log(
//   checkTask(["Финляндия", "Япония", "РИО", "Испания", "Мексика"], true)
// );

//! ===== Стрелочные функции =====
// ! ----------------- Параметры и аргументы ---------------

// Параметры функции — это имена , перечисленные в определении функции.(шаблон)
// Аргументы функции — это реальные значения , передаваемые (и получаемые) функцией.
// function exampleFunc(параметры){

// }
// exampleFunc(аргументы)

//синтаксис
//let arr = (параметры) =>{ блок кода}
//let arr1 = ()=> console.log("Hello");сокращение если код состоит из 1-ой строки

// //внутренняя функция
// function hello() {
//   console.log("Not work");
// }
// //основная функция
// function homeFunc(func) {
//   func();
// }
// homeFunc(hello);

// homeFunc(() => console.log("Hi Zuhra!"));
// homeFunc(function () {
//   console.log("Good day");
// });
// homeFunc(function hi() {
//   console.log("Hello Zuhra");
// });

// function calc(a, b) {
//   return a + b;
// }
// let sum = calc(3, 4);
// console.log(sum);

// let arrowF = (a, b) => a + b;
// let arrowSum = arrowF(2, 5);
// console.log(arrowSum);

//! ===== this ======
//? Ключевое слово this - это обращение к данным, родилям (объекта)
// todo Object.key(), Object.values(), Object.Assign, Object.Entries(), Object.hasOnProperty()

// let obj = {
//   name: "Kani",
//   age: 23,
//   job: "DevOps",
//   sayName: function () {
//     return this.name;
//   },
//   sayAge: () => this.age,
//   sayJob() {
//     return this.job;
//   },
// };
// // console.log(obj.sayName());
// // console.log(obj.sayAge());
// // console.log(obj.job);

// let obj2 = { ...obj };
// obj2.name = "Mirdin";
// obj2.age = 23;
// obj2.job = "FrontEnd Dev";

// // console.log(obj);
// // console.log(obj2);
// console.log(obj2.sayName());
// console.log(obj.sayName());
// console.log(obj.sayAge());//метод this в стрелочной функции работает не так как в других функциях он обращается к глобальному родителю window

// console.log(this);
// console.error("dfghjkl");

// let global = {
//   name: "Laborgini",
//   year: 2020,
//   obj:{
// name:"Porshe"
//     sayCar: () => this.name,
//   }
// };
// console.log(global.obj.sayCar());//не рабочий способ
//!Task makers
// Напишите функцию checkTask(), которая принимает два аргумента, строку и букву.
// Функция должна возвращать число повторений переданной буквы в строке.
// Например, если были переданы такие аргументы - 'hello', 'l', функция должна возвратить:
// 2
// т.к в строке 'hello' две буквы 'l'

// ? function checkTask(str, a){
//   let col_a=0;
//   for(let i=0; i<str.length; i++){
//       if(a===str[i]){
//           col_a++;
//       }
//   }
//   return col_a;
// }
// ? console.log(checkTask("hello","l"))

//! Task stackblitz
//! 1.
// Создать функцию, которая будет принимать 3 числа в качестве аргументов, функция должна возвращать сумму первых двух чисел разделеную на третье число(использовать function declaration, а также реализовать проверку на то, что третье число не является нулем, если это ноль, то просто возвратить результат сложения первого и второго числа)

//? function calc(a, b, c) {
//   if (c !== 0) {
//     let result = (a + b) / c;
//     return result;
//   } else {
//     let result1 = a + b;
//     return result1;
//   }
// }
//? console.log(calc(3, 3, 6));

//! 2.
// Создать фуункцию, которая принимает в качестве аргумента массив со строками и в каком регистре нужно вернуть данные, строки могут быть записаны в любом регистре, задача: на основе выбора регистра, возвращать либо массив со строками в верхнем регистре, либо в нижнем регистре

//? function register(arr, reg) {
//   if (reg === true) {
//     let str = arr.join(" ").toLowerCase();
//     console.log(str.split(" "));
//   } else {
//     let str = arr.join(" ").toUpperCase();
//     console.log(str.split(" "));
//   }
//? }

// register(["Финляндия", "Япония", "РИО", "Испания", "Мексика"], false);

// ? function WTF(a) {
//   var newArr = [];
//   for (var i = 0; i < a.length; i++) {
//     if (a[i] == a[i].toLowerCase()) {
//       newArr.push(a[i].toUpperCase());
//     } else {
//       newArr.push(a[i].toLowerCase());
//     }
//   }
//   console.log(newArr);
// }
// ? WTF(["DOM", "LUN", "MAR"]);

//todo 3.
// Создать функцию, которая будет принимать в качестве аргумента строку, а затем говорить сколько в ней и каких символов, результать вернуть в виде объекта, пример: 'Hello' -> {'H': 1, 'e': 1, 'l': 2, 'o': 1}

// let Obj = {};
// function showObj(str) {
//   let str1 = str.split("");
//   let col_bukva = 0;
//   for (let i = 0; i < str1.length; i++) {
//     if (str1[i] === str1[i]) {
//       let col_a = str[i].length;
//       console.log(str[i], col_a);
//     }
//   }
//   return col_bukva;
// }

// console.log(showObj("hello"));
// console.log(Obj);

//! 4.
// Создать калькулятор используя функции, должны быть доступны операции(+, -, /, *), также должна быть функция-менеджер, которая будет принимать 2 числа и операцию, а затем вызывать нужную функцию и возвращать результат

//? function menedjer(a, b, cal) {
//   if (cal == "+") {
//     return +a + +b;
//   } else if (cal == "-") {
//     return +a - +b;
//   } else if (cal == "/") {
//     return +a / +b;
//   } else if (cal == "*") {
//     return +a * +b;
//   }
// }

// alert(`Результат ${menedjer(
//   prompt("Введите первое число"),
//   prompt("Введите второе число"),
//   prompt("Введите действие:+,-,/,*")
// )}
//?   `);

//! 5.
// Дан массив с объектами
// let users = [
//   { name: "Jack", age: 35, work: "IT-backend developer" },
//   { name: "Helen", age: 35, work: "Nurse" },
//   { name: "Bob", age: 35, work: "Driver" },
//   { name: "Jessica", age: 35, work: "IT-frontend developer" },
//   { name: "Hel'ga", age: 35, work: "IT-HR" },
// ];
// задача, создать функцию, которая будет рассылать сообщения пользователям, сообщая о акции в магазине компьютерной техники, отправлять сообщения нужно только тем людям, которые тем или иным образом относятся к IT-сфере

// console.log(users[0].work.split("-")[0]);

//? function showMessage() {
//   for (let i = 0; i < users.length; i++) {
//     let it = users[i].work.split("-");
//     for (j in it) {
//       if (users[i].work.split("-")[j] == "IT") {
//         alert(
//           `Здраствуйте ${users[i].name}, в магазине "Sulpak" идет акция скидка на все ноутбуки 10%`
//         );
//       } else {
//         continue;
//       }
//     }
//   }
// }
//? showMessage();

//! 6.
// Создать функцию, которая будет принимать в качестве аргумента 2 строки, 1-я строка должна быть следующего вида -> '1200m', вторая строка состоит из величины, в которую необходимо преобразовать данные -> 'km', 'cm', 'mm', задача: реализовать логику, которая будет принимать например строку вида '2000m', и строку в которую нужно преобразовать величину например 'km', вывод должен быть '2km'

//? function menedjer_km(a, calc) {
//   if (calc == "m") {
//     return a * 1000;
//   } else if (calc == "cm") {
//     return a * 100000;
//   } else if (calc == "mm") {
//     return a * 1000000;
//   }
// }

// function menedjer_m(a, calc) {
//   if (calc == "km") {
//     return a / 1000;
//   } else if (calc == "cm") {
//     return a * 100;
//   } else if (calc == "mm") {
//     return a * 1000;
//   }
// }

// function menedjer_cm(a, calc) {
//   if (calc == "km") {
//     return a / 100000;
//   } else if (calc == "m") {
//     return a / 100;
//   } else if (calc == "mm") {
//     return a * 10;
//   }
// }

// function menedjer_mm(a, calc) {
//   if (calc == "km") {
//     return a / 1000000;
//   } else if (calc == "m") {
//     return a / 1000;
//   } else if (calc == "cm") {
//     return a / 10;
//   }
// }

// let choice = prompt(
//   "select the amount you want to transfer: km,m,cm,mm"
// ).toLowerCase();
// if (choice == "km") {
//   let val = prompt("Select the value you want to convert to:km,cm,mm");
//   alert(
//     `Result ${menedjer_km(parseInt(prompt("Enter your number")), val)} ${val}`
//   );
// } else if (choice == "m") {
//   let val = prompt("Select the value you want to convert to:km,cm,mm");
//   alert(
//     `Result ${menedjer_m(parseInt(prompt("Enter your number")), val)} ${val}`
//   );
// } else if (choice == "cm") {
//   let val = prompt("Select the value you want to convert to:km,cm,mm");
//   alert(
//     `Result ${menedjer_cm(parseInt(prompt("Enter your number")), val)} ${val}`
//   );
// } else if (choice == "mm") {
//   let val = prompt("Select the value you want to convert to:km,cm,mm");
//   alert(
//     `Result ${menedjer_mm(parseInt(prompt("Enter your number")), val)} ${val}`
//   );
// } else {
//   alert("You entered the value incorrectly!");
//? }

//! 7.
// Создать функцию, которая будет рассчитывать расход топлива автомобиля, будет принимать 2 аргумента 1-й сколько всего километров проехали, второй сколько понадобилось топлива на это, затем функция должна рассчитать сколько ушло топлива на 100 км и вернуть результат вида: 'На 100км было расходовано 10л горючего'

//? let km = calcCar(parseFloat(prompt(`Введите сколько км проехал автомобиль`)));
// function calcCar(km) {
//   let toplivo = 0.1 * km;
//   alert(`На ${km}км было расходованно ${toplivo}л горючего`);
//? }

//! 8.
// Расчет премии сотрудникам, дан массив с объектами
// let employees = [
//   { name: "Jack", salary: 10000, overTime: 4 },
//   { name: "Tom", salary: 15000, overTime: 3 },
//   { name: "Jessica", salary: 20000, overTime: 9 },
//   { name: "Helen", salary: 25000, overTime: 2 },
//   { name: "Peter", salary: 30000, overTime: 7 },
// ];
// salary- это заработная плата в месяц, overTime- количество часов, которое сотрудник взял сверхурочно, задача: создать функцию, которая будет добавлять к основной зарплате сверхурочное время(1час=200$), функция должна принимать массив с объектами и возвращать также массив, но уже с измененными данными пример: [{name: 'Jack', salary: 10000, overTime: 4}] -> [{name: 'Jack', salary: 10800}]

//? function calcZar(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let nadbavka = arr[i].salary + 200 * arr[i].overTime;
//     arr[i].salary = nadbavka;
//     delete arr[i].overTime;
//   }
//   console.log(arr);
// }
//? calcZar(employees);

//! 9.
// Создать функцию, которая в качестве аргумента будет принимать массив со строками и числами, задача, отсортировать числа в отдельный массив, а строки в отдельный и распечатать оба массива

//? let arrStr = [];
// let arrNum = [];
// function sortArr(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] == "string") {
//       arrStr.push(arr[i]);
//     } else if (typeof arr[i] == "number") {
//       arrNum.push(arr[i]);
//     } else {
//       alert("NUMBER OR STRING");
//     }
//     if (arr[i] == false) {
//       break;
//     }
//   }
// }
// sortArr([22, "zuhra", 1, "mira", 234, "kamila"]);
//? console.log(arrStr, arrNum);

//! 10.
// Дан массив
// let students = [
//   { student: "Jack", marks: 43 },
//   { student: "Tom", marks: 92 },
//   { student: "Helen", marks: 85 },
//   { student: "Peter", marks: 58 },
//   { student: "Jessica", marks: 78 },
// ];
// задача, создать фуункцию, которая будет в качестве аргумента принимать массив такого вида как указан выше, и будет возвращать отсортированный массив(сортировать по убыванию оценок, используйте sort())
//? function sortMark(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     arr.sort((a, b) => b.marks - a.marks);
//   }
//   console.log(arr);
// }
//? sortMark(students);

//! 11.ПОИСК
// Дан массив с товарами
// let database = [
//   {
//     title: "Samsung S10",
//     price: 800,
//     count: 6,
//     category: "samsung",
//   },
//   {
//     title: "iPhone 13 Pro",
//     price: 1200,
//     count: 9,
//     category: "apple",
//   },
//   {
//     title: "Xiaomi Mi 10",
//     price: 500,
//     count: 2,
//     category: "xiaomi",
//   },
//   {
//     title: "Samsung S9",
//     price: 600,
//     count: 4,
//     category: "samsung",
//   },
//   {
//     title: "iPhone 11",
//     price: 850,
//     count: 1,
//     category: "apple",
//   },
// ];
// задача: создать функцию, которая будет принимать строку, а затем будет смотреть на все товары и возвращать только те, у которых в названии есть данная строка(учесть, что название может быть полным, а может быть частичным)

//? tovar(prompt("Enter product name"));
// function tovar(str) {
//   for (let i = 0; i < database.length; i++) {
//     database[i].title = database[i].title.split(" ");
//     for (j in database[i].title) {
//       if (str == database[i].title[j]) {
//         database[i].title = database[i].title.join(" ");
//         console.log(database[i]);
//       }
//     }
//   }
//? }

//! 12.
// Использую из предыдущей задачи массив с товарами, реализовать фильтрацию по категориям, функция должна в качестве аргумента принимать строку с категорией и возвращать массив, в котором будут только те товары, у которых категория полностью совпадает с переданной

//? let database2 = [];
// tovar(prompt("Enter product category").toLowerCase());
// function tovar(str) {
//   for (let i = 0; i < database.length; i++) {
//     if (str == database[i].category) {
//       database2.push(database[i]);
//     }
//   }
//   console.log(database2);
//? }

//todo 13.
// Создать счетчик расходов, есть некая переменная, которая будет хранить данные о вашем балансе, создать две функции, первая будет записывать расходы, вторая просто пополнять баланс, первая функция: ее основная задача получать 2 аргумента на что потрачено и сколько потрачено, дальше формировать объект типа: {target: 'Products', spend: 400}, затем сохранять эти данные в массив и соответственно вычитать из баланса сумму трат, вторая функция просто получает в качестве аргумента сумму, которую нужно добавить на баланс, также необходимо реализовать проверку, достаточно ли средств на балансе для совершения расходов

// let balance = parseInt(prompt("Введите сумму в балансе"));
// //? let balance = 3000;
// let arrRashod = [];
// let dobavit = confirm("Хотите добавить расходы?");
// while (dobavit == true) {
//   if (dobavit == false) {
//     break;
//   }
//   do {
//     rashod(
//       prompt("Введите название расхода"),
//       +prompt("Введите сумму расхода")
//     );
//   } while (confirm("Хотите продолжить?") == true);
//   break;
// }

// function rashod(tar, spe) {
//   if (balance > 10) {
//     let obj = { target: null, spend: null };
//     obj.target = tar;
//     obj.spend = spe;
//     if (balance < spe) {
//       alert("У вас не достаточно средств для рассхода");
//       return;
//     } else {
//       balance -= obj.spend;
//       arrRashod.push(obj);
//     }
//   }
// }
// let choicepop = confirm("Хотите пополнить баланс?");
// if (choicepop == true) {
//   calcBalance(+prompt("Введите сумму для пополнения"));
// }
// function calcBalance(dop) {
//   balance += dop;
// }
// console.log(arrRashod);
//? console.log(balance);

//todo 14.
// Дан пустой массив, необходимо использовать его в качестве базы данных для объектов типа {title: 'str', price: num, category: 'str'}, задача реализовать полный CRUD(create(должна быть возможность создавать данные, в нашем случае объекты), read(возможность получения/чтения данных), update(изменение данных(можно использовать индекс)), delete(удаление данных(можно использовать индекс))), за каждое действие должна отвечать отдельная функция
// let arr = [];

// let dobavit = confirm("Хотите добавить объект?");
// while (dobavit == true) {
//   if (dobavit == false) {
//     break;
//   }
//   do {
//     newObj(
//       prompt("Введите название товара"),
//       +prompt("Введите цену"),
//       prompt("Введите категорию товара")
//     );
//   } while (confirm("Хотите продолжить?") == true);
//   break;
// }

// function newObj(tit, pri, cat) {
//   let obj = { title: null, price: null, category: null };
//   obj.title = tit;
//   obj.price = pri;
//   obj.category = cat;
//   arr.push(obj);
// }

//! Task Стрелочные функции, методы объектов, this. Экстра задания

//! Задание №2
// Фаренгейт. Напишите функцию которая конвертирует градусы Цельсия в градусы
// Фаренгейта.
// C-температура в цельсиях,
// F-температура в фаренгейтах,
// F=1.8*C+32,

//?решение
// alert(`Итог ${calcFar(prompt('Введите число(градус)'))}`);
// function calcFar(c) {
//   return 1.8 * c + 32;
// }

//! 15.
// Необходимо реализовать регистрацию и авторизацию пользователя, создать функции, которые будут отвечать за создание и авторизацию пользователей, создание: пользователь должен ввести юзернейм, пароль и подтверждение пароля, необходимо провести проверку есть ли такой пользователь уже в базе данных, если есть, то вывести сообщение, что такой пользователь уже существует и затем остановить работу функции, после проверки юзернейма необходимо проверить пароль и подтверждение, если они не сходятся вывести сообщение о несоответствии и также остановить работу функции, если все проверки пройдены сохранить пользователя в виде объекта {}, по умолчанию все пользователи не авторизованы, авторизация: пользователю необходимо ввести логин и пароль, затем система должна проверить существует ли такой пользователь, если нет, то вывести сообщение об этом, если он существует, проверить сходятся ли пароли, если нет, то вывести сообщение о том, что пароли не совпадают, после всех проверок если все пройдено успешно, вывести сообщение об успешной авторизации(учесть, что если пользователь после авторизации захочет снова авторизоваться вывести сообщение о том, что он уже авторизован), выход из аккауна: пользователь должен иметь возможность выйти из своего аккаунта, в таком случае снова принимаем логин и пароль, совершаем все проверки и убираем пользователю авторизацию, соответственно при последующей авторизации проблем не должно возникнуть и пользователь снова сможет совершить логин

//? let dataBase = [
//   {
//     name: "Miroslav",
//     password: "qwerty",
//     isActive: false,
//   },
//   {
//     name: "Jakshylyk",
//     password: "123456789",
//     isActive: false,
//   },
// ];

// function register() {
//   let name = prompt("Введите имя");
//   let password = prompt("Введите пароль");
//   let passwordConfirm = prompt("Подтвердите пароль");
//   for (let user of dataBase) {
//     if (name == user.name && password == user.password) {
//       alert("Вы уже зарегистрированы!");
//       return; // проверка на наличие пользователя
//     }
//   }
//   if (password !== passwordConfirm) {
//     alert("Пароли не совпадают!"); //проверка на совпадение паролей
//     return;
//   }
//   let obj = {
//     name,
//     password,
//     isActive: false, // формирование объекта
//   };
//   dataBase.push(obj); // добавление пользователя в базу данных
//   console.log(dataBase, "add new user");
//   alert("Вы успешно зареганы!");
// }

// function auth() {
//   let nameAuth = prompt("Введите имя(auth)");
//   let passwordAuth = prompt("Введите пароль(auth)");
//   for (let user of dataBase) {
//     if (nameAuth !== user.name) {
//       //   console.log(nameAuth, user.name);
//       alert("Вы не зарегистрированы!");
//       //   return; // проверка на наличие пользователя в базе данных
//     }
//   }
//   for (let user of dataBase) {
//     if (nameAuth == user.name && passwordAuth !== user.password) {
//       alert("Пароли не совпадают!");
//       return; // проверка на правильность пароля пользователя
//     } else if (
//       nameAuth == user.name &&
//       passwordAuth == user.password &&
//       user.isActive == true
//     ) {
//       alert("Вы уже авторизованы!");
//       return;
//     } else if (nameAuth == user.name && passwordAuth == user.password) {
//       user.isActive = true;
//       alert("Вы успешно авторизованы!");
//       console.log(dataBase);
//       return;
//     }
//   }
// }

// function logout() {
//   let name = prompt("NAME LOGOUT");
//   let password = prompt("PASSWORD LOGOUT");
//   for (let user of dataBase) {
//     if (name == user.name && password == user.password) {
//       user.isActive = false;
//       console.log(dataBase);
//       alert("LOGGED OUT");
//       return;
//     }
//   }
// }

// register();
// auth();
//? logout();

//! Task Makers arrow function

//! Задание 5
// Напишите стрелочную функцию checkTask(), принимающую в качестве аргументов, строку и символ.
// Функция должна выводить в консоль количество символов в строке.
// Например, если мы передаем функции "JavaScript" и "a", то должны получить:
// 2
// в строке "JavaScript" две буквы "a"

//? const checkTask = (somestr, letter) => {
//   let count = 0;
//   for (let i = 0; i < somestr.length; i++) {
//     if (somestr[i] === letter) {
//       count++;
//     }
//   }
//   console.log(count);
// };
//? checkTask("JavaScript","a")

//! Задание 6
// Напишите стрелочную функцию checkTask(), которая принимает в аргументы массив.
// умножьте каждый элемент массива на 5
// оставьте в массиве только четные числа
// выведите новый массив в консоль
// Например для массива [1,2,3,4,5,6], вывод будет:
// [10, 20, 30]
// т.к в начале умножили элементы на 5:
// [5, 10, 15, 20, 25, 30]
// затем из полученного списка отфильтровали четные числа:
// [10, 20, 30].

//? let checkTask = (someArr) => {
//   let multiplyed = someArr.map((number) => number * 5);
//   let filtered = multiplyed.filter((number) => number % 2 === 0);
//   console.log(filtered);
//? };

//! Задание 8
// Напишите стрелочную функцию checkTask(), которая принимает число в параметр min.
// В min может хранится число от 0 до 59.
// Функция должна выводить в консоль в какую четверть часа попадает это число:
// в первую - если число от 0 до 15
// во вторую - если число от 15 до 30
// в третью - если число от 30 до 45
// в четвертую - если число от 45 до 59
// Если же передали некорректное число, например -36 или 156, выведите строку:
// Invalid Input
// используйте конструкцию switch

//? let checkTask = (min) => {
//   switch (true) {
//     case min >= 0 && min < 15:
//       console.log('в первую');
//       break;
//     case min >= 15 && min < 30:
//       console.log('во вторую');
//       break;
//     case min >= 30 && min < 45:
//       console.log('в третью');
//       break;
//     case min >= 45 && min < 59:
//       console.log('в четвертую');
//       break;
//     default:
//       console.log('Invalid Input');
//   }
//? };

//! Задание 12
// Создайте объект в переменной checkTask со свойствами students и title: 'Our student'.
// Свойство students должно хранить в себе масив с именами студентов, к примеру:
// ['Helly', 'Joe', 'Tommy']
// Добавьте метод showList(), который будет выдавать строку из свойства title c именем каждого студента:
// Our student: Helly
// Our student: Joe
// Our student: Tommy

//? let checkTask = {
//   students: ["Helly", "Joe", "Tommy"],
//   title: "Our student",
//   showList() {
//     for (let i = 0; i < this.students.length; i++) {
//       console.log(`${this.title}: ${this.students[i]}`);
//     }
//   }
//? };

//! Задание 13
// Создайте объект в переменной checkTask со свойствами свойствами name, age, job (c любыми значениями).
// Добавьте метод show() который будет выдавать в консоли все ключи и значения этого объект кроме метода show.
// Используйте цикл for...in

//? let checkTask = {
//   name: "Bob",
//   age: 22,
//   job: "rieltor",
//   show() {
//     for (let key in checkTask) {
//       if (typeof checkTask[key] != "function") {
//         console.log(`${key}: ${checkTask[key]}`);
//       }
//     }
//   }
//? };

//! Задание 14
// Создайте объект checkTask, который будет представлять из себя лифт.
// У него должны быть методы:
// ● printFloor - печатает текущий этаж, на котором находится лифт
// ● upOneFloor - перемещает на один этаж вверх
// ● downOneFloor - перемещает на один этаж вниз
// ● toFloor - принимает целое числовое значение от 1 до 16 - переместиться на определенный этаж.
// Изначально лифт находится на первом этаже(1).
// Когда мы вызываем метод toFloor(), программа должна в консоли отобразить постепенное перемещение лифта на нужный этаж (только в этом методе).
// ● Лифт должен хранить текущий этаж, на котором он находится.
// ● Метод toFloor должен использовать методы upOneFloor и downOneFloor для перемещения по этажам, а также метод printFloor для вывода текущего этажа лифта.
// ● В здании 16 этажей, нельзя, чтобы лифт мог уехать ниже первого или выше 16-го этажа, иначе нужно вывести в консоль:
// Error!
// К примеру, поднимемся на третий этаж:
// checkTask.toFloor(3)
// вывод:
// 1
// 2
// 3
// Переместимся на этаж выше:
// checkTask.upOneFloor()
// checkTask.printFloor()
// вывод:
// 4
// спустимся на этаж ниже:
// checkTask.downOneFloor()
// checkTask.printFloor()
// вывод будет:
// 3
// поедем на восьмой этаж:
// checkTask.toFloor(8)
// вывод будет:
// 4
// 5
// 6
// 7
// 8

//? const checkTask = {
//   currentFloor: 1,
//   minFloor: 1,
//   maxFloor: 16,
//   printFloor: function () {
//     console.log(this.currentFloor);
//     return this.currentFloor;
//   },
//   downOneFloor() {
//     if (this.currentFloor > this.minFloor) {
//       this.currentFloor--;
//     } else {
//       console.log("Error!");
//       return "Error!";
//     }
//   },
//   upOneFloor() {
//     if (this.currentFloor < this.maxFloor) {
//       this.currentFloor++;
//     } else {
//       console.log("Error!");
//       return "Error!";
//     }
//   },
//   toFloor(choosedFloor) {
//     if (choosedFloor < 1 || choosedFloor > 16) return "Error!";
//     while (this.currentFloor !== choosedFloor) {
//       if (choosedFloor > this.currentFloor) {
//         if (this.currentFloor === this.maxFloor) break;
//         this.upOneFloor();
//       } else {
//         if (this.currentFloor === this.minFloor) break;
//         this.downOneFloor();
//       }
//       this.printFloor();
//     }
//   },
//? };
