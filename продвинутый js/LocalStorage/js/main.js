//! ============ LocalStorage ===========
//? LocalStorage - локальное хранилище, которое доступно только пользователю, использующий данный ноутбук. Храниться информация в браузере.
//?Синтаксис : localStorage.название_метода()
//?setItem - создание нового хранилища. Принимает 2 аргумента: 1)название-хранилища,2)информация

// localStorage.setItem("storage", "Первая запись");
// let age = prompt("Введите свой возраст");
// localStorage.setItem("age", age);
// localStorage.setItem("ages", JSON.stringify({ age: 34 }));
// console.log(localStorage);

//?getItem- получение данных из хранилища. Принимает один агумент - название-хранилища
// let db = JSON.parse(localStorage.getItem("ages"));
// console.log(db);
//?removeItem - удаление какого-либо хранилища. Принимает один аргумент - название хранилища.

// localStorage.removeItem("storage");

//?clear - очищает все хранилище. Не принимает аргументов.

// localStorage.clear();

// sessionStorage.setItem("box", "Временное хранилище");

// let people = {
//   name: "Zuhra",
//   lastName: "Mukamedieva",
//   job: "It",
// };
// sessionStorage.setItem("info", JSON.stringify(people));
// console.log(sessionStorage);
// let data = JSON.parse(sessionStorage.getItem("info"));

// localStorage.setItem("copy-info", JSON.stringify(data));
// // console.log(localStorage);
// let data2 = JSON.parse(localStorage.getItem("copy-info"));
// console.log(data2);

//! lesson-2
// Local Storage. Classwork

// Задание №1
// Создайте  корзину с инпутами - продукт, категория, стоимость, доставка, значение которых будет автоматически сохраняться при каждом их изменении. Последнее введённое значение должно сохраняться если пользователь закроет и заново откроет страницу.

// Задание №2
// Создайте форму обратной связи используя  селекторы, события и localStorage
// Например форма должна содержать поля - имя, имейл, сообщение, кнопки отправить и очистить

//! ======= CRUD todo ========
//? Create - созданиие/добавление новых данных
//? Read - отабражение данных
//? Update - изминение (обновление) существующих данных
//? Delete - удаление всех данных или только выбранной

//Сохраняем в переменные основные теги из html
let btn = document.getElementById("btnAdd");
let inpTask = document.getElementById("inpTask");
let list = document.getElementById("task-list");

//? ========= Creat start ===========
//Создаем функцию для вызова в других местах (для упрощения). При создании принимается 1 параметр, который отвечает за новый объект(таск)
function creatTask(liTask) {
  //Проверка на наличие localStorage ключа под названием "task". Если такого ключа нет, то условие создаст  это хранилище и первым значением отправит пустой
  if (!localStorage.getItem("tasks")) {
    localStorage.setItem("tasks", "[]");
  }
  //Стягиваем информацию из localStorage и сохраняем ее в переменную "data"(это массив)
  let data = JSON.parse(localStorage.getItem("tasks"));
  //в наш массив добавляем новые данные.Информацией здесь является параметр функции liTask(это объект с одним ключом task)
  data.push(liTask);
  //измененный массив отпровляем обратно в localStorage
  localStorage.setItem("tasks", JSON.stringify(data));
}

//?Навешиваем событие на кнопку, для отправки данных
btn.addEventListener("click", () => {
  //trim- не учитывает первые пробелы
  //проверка на запоненнасть инпута , чтобы не отправили пустоту
  if (!inpTask.value.trim()) {
    alert("Заполните поле");
    return;
  }
  //создаем новый объект с одним ключом task, а значением ключа будет значение инпута
  let obj = {
    task: inpTask.value,
  };
  //вызываем функции создания нового таска и в аргументы передаем вышесозданный объект, в качестве новой информации
  creatTask(obj);
  //вызываем функции отображения данных,для того чтобы сразу же после отправки данных все отобразилось на странице
  readTask();
  //чтобы текст в инпуте
  inpTask.value = "";
});

//?

//?========Read Start===========
function readTask() {
  // Проверка на наличие в localStorage ключа под названием "tasks". Если такого ключа нет, то условие создаст это хранилище и первым значением отправит пустой массив
  if (!localStorage.getItem("tasks")) {
    localStorage.setItem("tasks", "[]");
  }
  // Стягиваем информацию из localStorage и сохраняем её в перменную data (это массив)

  let data = JSON.parse(localStorage.getItem("tasks"));
  // console.log(data);
  //очищаем внутренний код в теге ul, для того чтобы не создавались дубликаты при переборе массива
  list.innerText = "";
  //стянутый массив перебираем, для того чтобы на каждый элемент массива создать отдельный тег li и отабразить там все данные
  data.forEach((elem, index) => {
    // создаем новый тег li и сохраняем в переменную li
    let li = document.createElement("li");
    //в переменную добовляем текст который храниться в каждом элементе массива(в нашем случае элементы- это объекты , а в каждом объекте есть ключ task)
    li.innerText = elem.task; //в elem.task лежит информация из инпутов
    let btnDelete = document.createElement("button");
    btnDelete.innerText = "Удалить";

    list.append(li);
    //навешиваем событие на кнопку удалить
    btnDelete.addEventListener("click", () => {
      //при каждом клике на кнопку удалить будем вызывать функцию удаления , а в аргументы передаем index элемента на который
      deleteTask(index);
    });

    let btnEdit = document.createElement("button");
    btnEdit.innerText = "Изменить";
    li.append(btnEdit);

    btnEdit.addEventListener("click", () => {
      //при каждом клике кнопки изменить вызываем функцию редактирования , а в аргументы передаем :1)индекс элемента на который кликнули 2)сам элемент на который кликнули(в нашем случае - объект с ключом task)
      editTask(index, elem);
    });
    //
    li.append(btnDelete);
  });
}

//? ========= Read Finish ===========

//? =========== Delete Start ==========
function deleteTask(index) {
  let data = JSON.parse(localStorage.getItem("tasks"));
  //обращаемся к массиву с данными и спомощю метода splice удаляем элемент, на котором кликнули кнопку удалить
  data.splice(index, 1); //index берется из параметра данной функции
  //изменненый массив отпраляем обратно в localStorage
  localStorage.setItem("tasks", JSON.stringify(data));
  //вызываем функцию отображения данных для того чтобы при удалении на странице сразу же обновилось информация автоматически не нажимая
  readTask();
}

//? =========== Delete Start ==========

//?============ Edit start ============
//сохраняем переменные теги для модального окна из html
let mainModal = document.querySelector(".main-modal");
let innerModal = document.getElementById("innerModal");
//1 из способов передачи информации из одной области в другую область видимости
// let boxIndex = document.querySelector(".boxIndex");
//2 способов передачи информации
let id = "";
function editTask(index, elem) {
  //при нажатии кнопки изменить отображаем модальное окно у которой изначальное свойстово display=none
  console.log(elem);
  mainModal.style.display = "block";
  //в инпут который находиться в модальном окне сразу же подставляем текст тег li  чтобы его можно было изменить в некоторых местах
  innerModal.value = elem.task;

  // boxIndex.setAttribute("id", index);
  //в глобальную переменную id сохраняем параметр данной функции(где храниться индекс элемента)
  id = index;
}

// навешиваем события на кнопку сохранить

let btnSave = document.getElementById("btnSave");
btnSave.addEventListener("click", () => {
  if (innerModal.value.trim() === "") {
    alert("Заполните поле!");
    return;
  }
  let data = JSON.parse(localStorage.getItem("tasks"));
  // создаем новый объект с ключом task а значение ключа будет являться значение инпута модального окна
  let editedTask = {
    task: innerModal.value,
  };
  //обращаемся к стянутому массиву и используем метод splice , для изминения
  data.splice(id, 1, editedTask);
  //изменненный массив отпровляем  в localStorage
  localStorage.setItem("tasks", JSON.stringify(data));
  //здесь сразу же после отр
  mainModal.style.display = "none";
  readTask();
});

// ==============

let btnCloseModal = document.getElementById("btnCloseModal");

btnCloseModal.addEventListener("click", () => {
  mainModal.style.display = "none";
});
//?============ Edit finish ============

readTask();
