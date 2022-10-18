//! ========== DOM-события ===========
//! ========= lesson-1 ============
//! ===== Методы для работы с событиями =====

//? addEventListener - при помощи этого метода, можно добавлять новые события
//синтаксис - селектор.addEventListener (название_события, callBack_function)
// let btn = document.querySelector("#btn");
// let body = document.querySelector("body");

// let funcExp = () => {
//   body.style.backgroundColor = `rgb(${Math.floor(
//     Math.random() * 255
//   )}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
// };

// btn.addEventListener("click", funcExp);

// btn.removeEventListener("click", funcExp);

//? on_название_события
//? Другим способом является доступ к событию через DOM элемент, помимо click, мы будем использовать другие события, такие change, mousedown, у DOM элементов есть встроенные обработчики событий которые начинаются со слова "on" и названия события, например onclick. Получив доступ к событию через элемент, можно присвоить функцию, или написать ее сразу же через знак равно:

// let delBtn = document.querySelector("#del");
// delBtn.innerText = "Text";
// delBtn.on;
// console.log(delBtn);

// let delBtn = document.querySelector("#del");
// delBtn.innerHTML = "text";
// delBtn.onclick = () => {
//   delBtn.style.width = "200px";
//   delBtn.style.color = "red";
//   delBtn.style.borderRadius = "25px";
// };
// console.log(delBtn);

//? с помощью события ON можно каждый раз перезаписывать новые события
// delBtn.onclick = null; //чтобы удалить созданное событие, можно обратиться к этому свойству и присвоить значение null

//? Помимо addEventListener и ON есть два других способов добавления обработчика событий. Первый такой способ, добавления обработчика прямо в HTML код, через атрибут onclick. В каечстве значения атрибута, передается сама функция. К примеру, при нажатии кнопки будем выводить alert() с сообщением:

//* <div onclick="alert('Кто-то нажал кнопку')" class="actions" id="button1">
//*    <p>Button 1</p>
//* </div>

// Заметьте, что здесь также функция в кавычках. Также, в отличие от addEventListener, переданную функцию нужно вызывать:

// function hello() {
//   alert("Hello world!");
// }

//! ============= События js =============
// //? contextmenu - сработает, когда кликнул правой кнопкой мыши

// let text = document.getElementById("first");
// text.addEventListener("contextmenu", () => {
//   alert("Хотите скопировать весь текст?");
// });

// //? mouseover/mouseout - когда мышь наводится на элемент и покидает элемент
// // let block = document.getElementById("block");
// // block.addEventListener("mouseover", () => {
// //   console.log("Hey, whatsup?");
// // });

// //? mousedown/mouseup - сработает когда нажали/отпустили кнопку мыши на элементе
// let span = document.querySelector("span");

// span.addEventListener("mousedown", () => {
//   block.style.width = "800px";
//   block.style.height = "400px";
//   block.style.backgroundColor = "green";
// });

// span.addEventListener("mouseup", () => {
//   block.style.width = "250px";
//   block.style.height = "250px";
//   block.style.backgroundColor = "black";
// });

// //? mousemove -
// block.addEventListener("mousemove", () => {
//   // console.log(new Date().getSeconds());
//   console.log(event);
// });

// let arr = [
//   3, 4, 4, 5, 6, 7, 67, 567, 567, 5, 53, 4534, 5, 345, 34, 5, 345, 34, 534, 5,
//   435, 34, 5, 34, 5345, 34, 5, 34, 543, 5, 435, 34, 5, 435, 34, 534, 543, 5, 34,
//   534, 5, 345, 34, 534, 5, 345, 34, 5, 345, 3, 5, 45, 4, 534, 5, 34, 534, 534,
//   5, 345, 34, 5, 345, 34, 534, 534, 5,
// ];

// console.log(new Date().getMilliseconds());
// arr.pop();
// console.log(new Date().getMilliseconds());

//  todo разница между client, offset, screen, page

//? Работая с обработчиками событий важно знать, что обработчики, в нашем примере addEventListener, дают доступ к такому объекту событий - event. Данный объект можно словить в качестве параметра передаваемой функции(т.к это всего лишь параметр называть его можно как угодно, это может быть "e", xyz, event). Объект событий дает нам доступ к атрибутам и свойствам определенного события, в нашем случае событие mousemove имеет такие свойства как target, buttons, clientX, clientY и многие другие. Свойство target показывает на каком именно HTML объекте сработало событие, в нашем случае картинка в теге img, с классом city - img.city, с помощью свойств clientX, clientY можно отслеживать координаты движения мыши

// let block = document.getElementById("block");
// document.body.addEventListener("keydown", event => {
//   switch (event.key) {
//     case "r":
//       block.style.backgroundColor = "red";
//       break;
//     case "g":
//       block.style.backgroundColor = "green";
//       break;
//     case "b":
//       block.style.backgroundColor = "blue";
//       break;
//     case "w":
//       block.style.backgroundColor = "white";
//       break;
//     case "B":
//       block.style.backgroundColor = "black";
//       break;
//     case "G":
//       block.style.backgroundColor = "grey";
//       break;
//   }
// });

// let div = document.querySelector("div");
// document.body.addEventListener("keydown", event => {
//   if (event.key == "r") {
//     div.style.backgroundColor = "red";
//   } else if (event.key == "g") {
//     div.style.backgroundColor = "green";
//   } else if (event.key == "b") {
//     div.style.backgroundColor = "blue";
//   } else if (event.key == "w") {
//     div.style.backgroundColor = "white";
//   } else if (event.key == "B") {
//     div.style.backgroundColor = "black";
//   } else if (event.key == "G") {
//     div.style.backgroundColor = "grey";
//   }
// });

// let btn = document.createElement("button");
// btn.innerText = "Click!";
// document.body.append(btn);
// let i = 0;
// i = i + 1;
// btn.addEventListener("click", () => {
//   i *= 2;
//   console.log(i);
// });

// let div = document.createElement("div");
// div.style.width = "300px";
// div.style.height = "300px";
// div.style.backgroundColor = "gray";

// document.body.append(div);
// div.addEventListener("click", () => {
//   event.stopImmediatePropagation();
//   let x = event.offsetX;
//   let y = event.offsetY;
//   console.log(`X:${x} - Y:${y}`);
// });

//! lesson-2

// let btn = document.querySelector("button");
// btn.addEventListener("click", () => {
//   console.log(2 + 2);
// });

// let func = () => {
//   console.log(2 - 2);
// };
// btn.addEventListener("click", func);
// setTimeout(() => {
//   btn.removeEventListener("click", func);
// }, 3000);

//! ========= События на инпут ============
//? input - реагирует на каждое изменения инпута
// let inpName = document.getElementsByClassName("inpName")[0];
// let boxChat = document.getElementById("boxChat");
// const btnAdd = document.getElementById("btnAdd");
// let p = "";
// inpName.addEventListener("input", e => {
//   p = document.createElement("p");
//   p.innerText = `${e.target.value}. ${new Date().getHours()}:${new Date().getMinutes()}`;
// });
// btnAdd.addEventListener("click", () => {
//   boxChat.append(p);
//   inpName.value = null;
// });

//? Работая с обработчиками событий важно знать, что обработчики, в нашем примере addEventListener, дают доступ к такому объекту событий - event. Данный объект можно словить в качестве параметра передаваемой функции(т.к это всего лишь параметр называть его можно как угодно, это может быть "e", xyz, event). Объект событий дает нам доступ к атрибутам и свойствам определенного события, в нашем случае событие mousemove имеет такие свойства как target, buttons, clientX, clientY и многие другие. Свойство target показывает на каком именно HTML объекте сработало событие, в нашем случае картинка в теге img, с классом city - img.city, с помощью свойств clientX, clientY можно отслеживать координаты движения мыши, например:

//? change - срабатывает после того как расфокусировались от инпута и только при изминении инпута

// let inpName = document.getElementsByClassName("inpName")[0];
// inpName.addEventListener("change", () => {
//   console.log("bhnm,");
// });

//? focus - срабатывает когда сфокусировались на инпуте
// let inpName = document.getElementsByClassName("inpName")[0];

// inpName.addEventListener("focus", () => {
//   inpName.style.backgroundColor = "lightgreen";
//   inpName.borderRadius = "15px";
// });

//? blur - срабатывает при расфокусировке, не объязательно менять значения инпута

// inpName.addEventListener("blur", () => {
//   inpName.style.backgroundColor = "";
//   inpName.borderRadius = "";
// });

//? keydown - реакция на клавиатуру
// let body = document.querySelector("body");
// body.addEventListener("keydown", e => {
//   console.log(e.key);
// });

//!Game
// let btn = document.querySelector("#btn");
// const random = () => {
//   let rand = Math.floor(Math.random() * 80);
//   return rand;
// };

// btn.addEventListener("mouseover", () => {
//   btn.style.left = `${random()}%`;
//   btn.style.top = `${random()}%`;
// });
// btn.addEventListener("click", () => {
//   alert("Поздравляю вы потратили свое время!!!");
// });

//! task makers
//? task 3 Создайте обработчик события, который при нажатии кнопок направлений (влево, вправо) анимированно сдвигает div влево или вправо на 100px.
// let block = document.getElementById("block");
// let btnL = document.getElementById("btnL");
// let btnR = document.getElementById("btnR");

// let margin = 0;
// block.style.transition = "2.5s";

// btnL.addEventListener("click", () => {
//   if (margin <= 0) return;
//   block.style.marginLeft = `${(margin -= 100)}px`;
// });
// btnR.addEventListener("click", () => {
//   if (margin >= 700) return;
//   block.style.marginLeft = `${(margin += 100)}px`;
// });

//?task 5 Создайте обработчик события, который при нажатии на div элемент выводит через alert() id либо class вашего элемента
// document.addEventListener("click", e => {
//   console.log(e.target.src);
// });

//! ===========
// let inp = document.getElementById("enter");
// let title = document.getElementById("title");

// inp.addEventListener("input", e => {
//   title.innerText = e.target.value;
// });

//? task 10
// let screen = document.getElementById("screen");
// window.addEventListener("resize", e => {
// screen.innerText = ``
//   // console.log(e.target.innerHeight);
// });

// let arr = ["Артур", "Джон", "Томас", "Полли", "Эйда", "Tommi"];
// let ul = document.getElementById("shelby");
// for (i of arr) {
//   let li = document.createElement("li");
//   li.innerText = `${i} Шелби`;
//   ul.append(li);
// }
// arr.push("Молли");

//todo insertAdjacentHTML
