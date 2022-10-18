// ! Деструктуризация

/**
 * Деструктурирующее присваивание – это специальный синтаксис,
 * который позволяет нам «распаковать» массивы или объекты
 * в кучу переменных, так как иногда они более удобны.
 *
 * Пример с инструментами, удобнее вытащить все инструменты
 * и работать. Нежели каждый раз открывать коробку с ними.
 */

/**
 * В массивах переменные можно называть
 * как угодно, но нужно задавать их
 * по правильному порядку.
 */
// ? деструктуризация массива(по порядку)
// let arr = [100, 200, 300, 400, 500];
// let a = arr[0];
// let b = arr[1];
// let c = arr[2];
// let d = arr[3];
// let e = arr[4];
// let [a, b, c, d, e] = arr;
// console.log(a, b, c, d, e);
// a = 800;
// console.log(arr);

// let newArr = ["Mirdin", "FrontEnd Dev", ["Bishkek", "Toktogula", 30]];
// let [name, job, address] = newArr;

// name = "Aidana";
// address[1] = "Bokonbaeva";
// console.log(address);
// console.log(newArr);

// let str = ["T", "r", "o", "b", "l", "m"];
// let [t, , , o, f] = str;
// console.log(t, o, f);

// let food = ["eggs", "butter", "milk", "bread", "iron", "Shoro"];
// let [eggs, butter, milk, ...all] = food;
// console.log(eggs, butter, milk);
// console.log(all);

/**
 * Переменная rest является массивом из оставшихся элементов.
 * Вместо rest можно использовать любое другое название
 * переменной, просто убедитесь, что перед переменной
 * есть три точки и она стоит на последнем месте в
 * деструктурирующем присваивании.
 */

//? подмена переменных
// let a = 1;
// let b = 2;

// console.log("a=", a);
// console.log("b=", b);

// // let temp = a;
// // a = b;
// // b = temp;

// [a, b] = [b, a];

// console.log("sfdxghbjnkml");
// console.log("a=", a);
// console.log("b=", b);

// let name = 56;
// let lastName = "Jordan";
// let age = "Mishell";
// [name, lastName, age] = [lastName, age, name];
// console.log("name=", name, "LastName=", lastName, "age=", age);

//? деструктуризация объекта
//Щбъекты нужно деструк...вать по ключам, порядок не имеет значения.
// let obj = {
//   starName: "Jackie",
//   lastName: "Chan",
//   job: "kostolom",
// };
// let { starName, lastName, job } = obj;
// job = "artist";
// console.log(starName, lastName, job);
// console.log(obj);

// let singer = {
//   name: "Laura",
//   lastName: "Pergolise",
//   position: "singer 2010",
// };

//? перезапись ключей
// let { name: imya, lastName: familie, position } = singer;
// console.log(imya, familie, position);
// console.log(singer);

// ? Перезапись ключей понадобится в том случае, если вам нужно произвести деструктуризацию нескольких объектов с одними и теми же ключами. В этом случае нельзя создавать переменную с одним и тем же названием.

// let obj2 = {
//   name: "Genri",
//   age: 40,
// };
// let obj3 = {
//   name: "Keri",
//   age: 20,
// };
// let { name: name2, age: age2 } = obj2;
// console.log(name2, age2);
// let { name: name3, age: age3 } = obj3;
// console.log(name3, age3);

// let trip = {
//   tripName: "Issyk-Kol",
//   date: "30.09.2022",
//   details: {
//     baggage: "10kg",
//     drink: "water,beer",
//     teplo: "obogrevatel",
//   },
// };

// let {
//   tripName,
//   date,
//   details: { baggage, drink, teplo },
// } = trip; //вытаскиваем вложенные объекты в объекте
// console.log(tripName, date, baggage, drink, teplo);
// console.log(details);

// let person1 = {
//   name: "Jack",
//   age: 19,
//   favoriteFood: ["Lagman", "Manty"],
//   pet: {
//     name: "Sharik",
//     age: 2,
//   },
//   study: {
//     university: "KSTU",
//     subjects: ["Math", "Literature"],
//     location: {
//       str: "Manas str 66",
//       city: "Bishkek",
//     },
//   },
// };
// //todo get: lagman and manty, sharik, KSTU, Literature, Bishkek, mail index

//! Задание №4
// Напишите функцию, которая принимает массив из чисел в качестве аргумента.
// Каждое число возвести в квадрат. Затем, функция должна вернуть измененный массив.
// Деструктурируйте полученный результат, т.е. первый элемент записать в переменную, а остальные элементы
// сохранить в новом массиве.

//решение
//? function num(arr) {
//   let arr2 = arr.map((elem) => elem ** 2);
//   let [elem1, ...all] = arr2;
//   console.log(elem1);
//   console.log(all);
// }
//? num([9, 2, 3, 4]);

//! Задание №5
// Дан объект {name: 'Luck', 'age': '22', }.
// Запишите соответствующие значения в переменные name, и age.
// Сделайте так, чтобы если какое-то значение не задано - оно принимало значение по умолчанию.

//решение
//? let obj = { name: 'Luck', age: '22' };
// let { name = 'Kari', age = '19', job = 'js' } = obj;
//? console.log(name, age, job);

//! Task makers
//! адание 3
// Напишите функцию checkTask(fullName), принимающую в аргументы строку:
// Albert Einstein
// Используя деструктуризацию, функция должна создать объект в переменной obj, в котором есть свойство firstName с первым словом строки, и свойство lastName со вторым словом строки.
// Выведите в консоль этот объект:
// { firstName: 'Albert', lastName: 'Einstein' }

//? let obj = {};
// function checkTask(fullName) {
//   let str = fullName.split(" ");
//   let [name, lastName] = str;
//   obj.firstName = name;
//   obj.secondName = lastName;
//   console.log(obj);
// }
//? checkTask("Zuhra Mukamedieva");

