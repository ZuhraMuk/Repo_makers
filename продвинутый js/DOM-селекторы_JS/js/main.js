// console.log(document.documentElement);
//?html- свойство только для чтения, изменять нельзя, так как является корневым элементом
// console.log(document.html); //undefined
// console.log(document.head); //head
// console.log(document.body); //body

//! ======== методы getElement/s =============
// let div = document.getElementsByTagName("div");
// console.log(div);

// let forever = document.getElementById("forever");
// console.log(forever);
//? При использовании метода getElement/s, нам прилетают объекты в виде HTMLCollection (это узел)

// let li = document.getElementsByClassName("elem");
// console.log(li[3]);

//! ====== querySelector =======
// ? Другим способом обращения к элементу HTML является использование одного из методов querySelector или querySelectorAll. Данные методы являются универсальными для всех селекторов, поэтому в скобках следует указывать знак селектора - для id #, для класса точка, либо название тега.

// let elem = document.querySelectorAll("div");
// console.log(elem);

// let elemLi = document.querySelectorAll(".elem");
// console.log(elemLi);

// let elemLi1 = document.querySelectorAll("#forever");
// console.log(elemLi1);

// elem = document.querySelector(".elem"); //только первый
// console.log(elem);

// let all = document.querySelectorAll("*");
// console.log(all); //можно использовать * при применении метода querySelectorAll, * обращается ко всем элементам html

// forever = document.querySelector("#forever");
// console.log(forever);

//?innerText - с помощью этого свойства, можно изменить только текст
// forever.innerText = "Life";
// console.log(forever);

//? innerHtml - с помощью этого свойства можно изменить внутренний контент, т.е. поместить новые теги
// forever.innerHTML =
//   "<h1 style='color:green'>Show message<h1> <a href='www.google.com'>Google</a>";
// console.log(forever);

// forever.innerHTML +=
//   "<h1 style='color:green'>Show message<h1> <a href='www.google.com'>Google</a>";
// console.log(forever);

// forever.innerText = "<h2>fghjk</h2>";

//? creatElement - создает новый элемент

// let newButton = document.createElement("button");
// console.log(newButton);
// newButton.innerText = "Click";

// //? методы для добавления append,prepend,before,after

// let ul = document.querySelector("ul");
// let newLi = document.createElement("Li");
// newLi.innerText = "DOM, селекторы";
// ul.prepend(newLi);
// ul.append(newLi);
// ul.before(newLi);
// ul.after(newLi);

// newLi.style.backgroundColor = "pink";
// let ulElems = document.getElementsByClassName("elem");
// console.log(ulElems);
// // ulElems[0].style.color = "red";
// for (i of ulElems) {
//   // console.log(i);
//   i.style.color = "red";
// }

//! lesson-2
// let li = document.querySelectorAll("li");
// console.log(li);

// for (let i = 0; i < li.length; i++) {
//   console.log(li[i].innerText);
// }

// for (i in li) {
//   console.log(li[i]);
// }

// for (i of li) {  //for(... of ...)самый удобный цикл, для перебора NodeList или HTMLColection
//   console.log(i);
// }

// li = document.getElementsByTagName("li");
// console.log(li);
// for (i of li) {
//   console.log(i.innerText);
// }

//li.forEach(item => item);

//! ======.classList методы ========
// let ol = document.querySelector("ol");

// let age = +prompt("Enter your age");
// if (age > 20) {
//   ol.classList.add("list");
// }

// let block = document.getElementById("root");

//? block.classList.add("newClass"); //добавление нового класса

//? block.classList.remove("class1"); //удаление класса

// block.classList.toggle("newClass");
// block.classList.toggle("newClass");
//? block.classList.toggle("newClass"); //Добавляет если нет, удуаляет если есть

// let btn = document.querySelector("button");
// btn.addEventListener("click", () => {
//   block.classList.toggle("newClass");
// });

//? Проверка (true/false)
// let answer = block.classList.contains("class1");
// console.log(answer);
// if (answer) {
//   console.log("Я перекрашу тебя в синий");
//   document.body.style.backgroundColor = "blue";
// } else {
//   console.log("Я перекрашу тебя в зеленый");
//   document.body.style.backgroundColor = "green";
// }

//! ========== setAttribute =============
// let btn = document.getElementById("btn");
// btn.setAttribute("class", "click");
// btn.setAttribute(
//   "style",
//   "width:100px;border:none;background-color:yellow;height:20px"
// );

// let img = document.querySelectorAll("img");
// img[0].setAttribute("width", "200");

// let img = document.querySelector("img");
// img.setAttribute("width", "200");

// let name = prompt("Enter your name")
// if(name=="Mirdin"){
//   img[0].setAttribute("src","")
// }

//! ============== NodeList vs HTMLCollection ==================
//? 1. И для NodeList и HTMLCollection доступно такое свойство как length , также можно обращаться по индексам
//? 2. Для HTMLCollection доступно такое свойство, как children, который выводит все дочерние элементы

// let box = document.getElementById("box");
// console.log(box.children);

//? А для NodeList, доступно свойство childNodes

// box = document.querySelector("#box");
// console.log(box.childNodes);

//? 3. NodeList и HTMLCollection можно перебирать циклом for

//? 4. Только для NodeList доступно приминение метода forEach

//? 5. NodeList является статичной коллекцией, а HTMLCollection динамической. При добавлении нового элемента в DOM, HTMLCollection зафиксирует изминения

// let ol = document.querySelector("ol");
// let li = document.querySelectorAll("li");
// let getLi = document.getElementsByTagName("li");

// for (let i = 0; i < 4; i++) {
//   let newLi = document.createElement("li");
//   newLi.innerText = `Element ${i}`;
//   ol.append(newLi);
// }
// console.log(li);
// console.log("============");
// console.log(getLi);

//? 6. И NodeList и HTMLCollection можно конвертировать в обычный массив

// let arrLi = document.getElementsByTagName("li");
// let arrLi = document.querySelectorAll("li");
// console.log(arrLi);
// arrLi = Array.from(arrLi);
// console.log(arrLi);
// arrLi.map(elem => console.log(elem.innerText));
