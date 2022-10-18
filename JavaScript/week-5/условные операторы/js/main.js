//! ======= условные операторы =====
// todo ===== if.....else =======
// 1.вариант
// if(условие){
//   код который сработает при правильном условии(true)
// }
// let time = "11:00";
// if (time === "11:00") {
//   alert("Перерыв");
// }

//2.вариант
// if(условие){
//     код который сработает при правильном условии(true)
//   }else {
//     код который сработает если условие не верное (т.е. вернет нам false)
//   }
// let time = +prompt("Введите время");
// if (time === 11) {
//   alert("Перерыв");
// } else {
//   alert("Нужно работать");
// }

//3. вариант
// if (условие 1) {
//       код 1, который сработает при правильном условии (true)
//   } else if(условие 2) {
//       код 2,сработает, если первое условие выдало false
//   } else {
//   код, который сработает если 2 условие не сработают (false)
//   }

// const age = Number(prompt("Введите возраст:"));
// if (age > 18) {
//   console.log(`Доступ разрешен! Вам ${age} лет`);
// } else if (age === 18) {
//   console.log(`Ну ладно! Вам ${age} лет`);
// } else {
//   console.log("Не прокатило!");
// }

//todo ======== тернарный оператор ========

// let sale = 90;
// let buyMac = null;

// if (sale > 50) {
//   buyMac = true;
// } else {
//   buyMac = false;
// }
// console.log(buyMac);

//синтаксис
// условие ? код, если выдал (true) :код, если выдал (false)
// sale > 50 ? (buyMac = true) : (buyMac = false);
// console.log(buyMac);

//todo ============= конструкция switch...case =============
//? switch case - условный оператор, конструкция, которая заменяет собой сразу несколько else if. Минус в том, что для сравнения берется только одно значение. Плюс - визуально выглядит всё понятно.

// let day = +prompt("Введите сегодняшний день недели");

// if (day === 1) {
//   console.log("Понедельник");
// } else if (day === 2) {
//   console.log("Вторник");
// } else if (day === 3) {
//   console.log("Среда");
// } else if (day === 4) {
//   console.log("Четверг");
// } else if (day === 5) {
//   console.log("Пятница");
// } else if (day === 6) {
//   console.log("Суббота");
// } else if (day === 7) {
//   console.log("Воскресенье");
// } else {
//   console.log("Нет такого дня");
// }

// switch (day) {
//   case 1:
//     console.log("Понедельник");
//   case 2:
//     console.log("Вторник");
//   case 3:
//     console.log("Среда");
//   case 4:
//     console.log("Четверг");
//   case 5:
//     console.log("Пятница");
//   case 6:
//     console.log("Суббота");
//   case 7:
//     console.log("Воскресенье");
//   default:
//     console.log("Нет такого дня");
// }

// switch (day) {
//   case 1:
//     console.log("Понедельник");
//     break;
//   case 2:
//     console.log("Вторник");
//     break;
//   case 3:
//     console.log("Среда");
//     break;
//   case 4:
//     console.log("Четверг");
//     break;
//   case 5:
//     console.log("Пятница");
//     break;
//   case 6:
//     console.log("Суббота");
//     break;
//   case 7:
//     console.log("Воскресенье");
//     break;
//   default:
//     console.log("Нет такого дня");
// }

//! Что означает ключевое слово continue

let myStr = "10";
let myNum = 10;
console.log(parseInt(myStr) + myNum);
