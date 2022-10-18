// ! ============== Асинхронность и синхронность ==================
// JavaScript — это однопоточный язык программирования, в котором может быть выполнено только что-то одно за раз. То есть, в одном потоке движок JavaScript может обработать только 1 оператор за раз.Хоть однопоточные языки и упрощают написание кода, поскольку вы можете не беспокоиться о вопросах параллелизма, это также означает, что вы не сможете выполнять долгие операции, такие как доступ к сети, не блокируя основной поток.

// for (let i = 0; i < 10000000; i++) {}
// console.log("сработает только после того как цикл закончиться");

// let ul = document.getElementsByTagName("ul");
// for (let i = 0; i < 10; i++) {
//   let li = document.createElement("li");
//   li.innerText = `task ${i}`;
//   ul[0].append(li);
// }

//! ========== setTimeout/setInterval ==============
//?setTimeout - позволяет вызвать функцию один раз через определенный интервал времени

// setTimeout(() => {
//   console.log("Привет космос!");
// }, 2000);

//? setInterval - позволяет вызвать функцию регулярно, повторяя вызов через определенный интервал времени
// let a = 0;
// let b = setInterval(() => {
//   console.log(++a);
// }, 1000);

// let c = setTimeout(() => {
//   clearInterval(b);
// }, 5000);

// clearTimeout(c);

//? clearInterval (clearTimeout) - отменяет таймаут , ранее установленный вызовом setInterval/setTimeout

//! ======= Promise =========
//? Promise - это объект, в котором лежит ответ на наш запрос.

//?Интерфейс Promise (промис) представляет собой обёртку для значения, неизвестного на момент создания промиса. Он позволяет обрабатывать результаты асинхронных операций так, как если бы они были синхронными: вместо конечного результата асинхронного метода возвращается своего рода обещание (дословный перевод слова "промис") получить результат в некоторый момент в будущем.

//? Promise может находиться в трёх состояниях:

//todo ожидание (pending): начальное состояние, не исполнен и не отклонён.
//todo исполнено (fulfilled): операция завершена успешно.
//todo отклонено (rejected): операция завершена с ошибкой.

// const p = new Promise((fulfilled, rejected) => {
//   let a = 1 + 2;
//   setTimeout(() => {
//     if (a == 2) {
//       fulfilled("Ваш запрос успешно выполнен");
//     } else {
//       rejected("Извините, ваш запрос выполнен безуспешно");
//     }
//   }, 2000);
// });
// console.log(p);
// console.log("Отправляю запрос на Бэк");

// p.then(okMessage => {
//   console.log(okMessage);
// })
//   .catch(errMessage =>   {
//     console.error(errMessage);
//   })
//   .finally(() => {
//     console.log("Ваш запрос выполнился, но без понятия как?");
//   });

//! ============ Запрос ===============
//todo XMLHttpRequest, HTTP статусы прочитать
// ! статусы запросов
//? https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%BA%D0%BE%D0%B4%D0%BE%D0%B2_%D1%81%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%B8%D1%8F_HTTP
//? от 100 до 200 - информационные
//? от 200 до 300 - успешный результат
//? от 300 до 400 - перенаправление
//? от 400 до 500 - ошибка на стороне клиента
//? от 500 до 600 - ошибка на стороне сервера

//? fetch - это один из методов для совершения запроса на бэк
// let arr = [];
// let data = fetch("https://jsonplaceholder.typicode.com/users");
// console.log(data);
// data
//   .then(response => {
//     return response.json();
//   })
//   .then(info => {
//     console.log(info);
//     arr = info;
//   })
//   .catch(error => {
//     console.error(error);
//   });
// setTimeout(() => {
//   console.log(arr);
// }, 2000);

//! lesson-2
// setTimeout(() => {
//   console.log("setTimeout1");
// }, 0);

// let p = new Promise((resolve, reject) => {
//   //   setTimeout(() => {
//   resolve();
//   //   }, 0);
//   console.log("Promise1");
//   let a = "Привет";
//   let b = "Пользователь";
//   console.log(a + " " + b);
// });

// p.then(() => {
//   console.log("Promise2");
// });

//? Микро и макро таски - это подразделение асинхронных функций. Микро таски имеют приоритет при обработке задач, т.е. микро таски всегда будут выполняться раньше чем макро таски, даже если они в коде стоят в самом конце
//микротаски это промисы,запросы
//макротаски - это:setTimeout,setInterval
//! ======= XMLHttpRequest ============
// let btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", "https://reqres.in/api/users?page=2");
//   xhr.send();
//   //? 1 из вариантов, чтобы сделать синхронный код асинхронным
//   // setTimeout(() => {
//   //   let data = JSON.parse(xhr.response);
//   //   console.log(data.data);
//   // }, 1000);
//   //? 2 вариант - onload
//   xhr.onload = () => {
//     let data = JSON.parse(xhr.response);
//     console.log(data.data);
//   };
// });

//! ====== Практика с запросами ===========
let box = document.querySelector("div");
const API = "https://reqres.in/api/users?page=2";
let arrInfo = fetch(API);
// console.log(arrInfo);
arrInfo
  .then(response => {
    return response.json();
  })
  .then(({ data }) => {
    // console.log(info.data);
    data.forEach(item => {
      console.log(item);
      box.innerHTML += `<h4 style="color:pink;">${item.first_name}   ${item.last_name}</h4> <img src=${item.avatar} alt=${item.first_name}/><br> <a href="#">${item.email}</a>`;
    });
  });
