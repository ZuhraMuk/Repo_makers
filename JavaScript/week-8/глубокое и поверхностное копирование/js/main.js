//! ========== Глубокое и поверхностное копирование ===========
// let user = {
//   name: "John",
// };

// let admin = user; //копируется ссылка на объект
// admin.age = 22;
// admin.name = "Arlen";
// console.log(admin, user);

//Поверхностное копирование
// const itemsIncart = [
//   { products: "носки", quantity: 3 },
//   { products: "штаны", quantity: 2 },
//   { products: "кофта", quantity: 5 },
// ];
// const cloneCard = [...itemsIncart];
// cloneCard[1].quantity = 4;
// console.log(itemsIncart, "исходный");
// console.log(cloneCard, "копия");

//! Глубокое копирование

//? JSON - JavaScript Object Notation
//todo JSON.stringify() - преобразует в строковый формат
//todo JSON.parse() - преоброзует из строки обратно в исходное состояние

// let jsonArr = JSON.stringify(itemsIncart);
// console.log(jsonArr);

// let parseArr = JSON.parse(jsonArr);
// console.log(parseArr);

const itemsIncart = [
  { products: "носки", quantity: 3 },
  { products: "штаны", quantity: 2 },
  { products: "кофта", quantity: 5 },
];

// const deep = JSON.parse(JSON.stringify(itemsIncart));
// deep[1].quantity = 5;
// console.log(itemsIncart, "origine");
// console.log(deep, "copy");
// console.log(deep[0] == itemsIncart[0]);

//? У этого метода есть ограничение — копируемые данные должны быть сериализуемыми. Если объект содержит методы или массив содержит функции, то копирование с помощью JSON-преобразования не сработает:

// let fns = [
//   function () {
//     console.log("sdfgh");
//   },
//   function () {
//     console.log("kl;kjh");
//   },
// ];
// let copyfns = JSON.parse(JSON.stringify(fns));
// console.log(copyfns);

//! копирование с помощью циклов

// const itemsIncart = [
//   { products: "носки", quantity: 3 },
//   { products: "штаны", quantity: 2 },
//   { products: "кофта", quantity: 5 },
// ];

// let copy = [];
// for (i of itemsIncart) {
//   let obj = {};
//   for (j in i) {
//     obj[j] = i[j];
//   }
//   copy.push(obj);
// }
// console.log(copy);
// console.log(copy[1] == itemsIncart[1]);
