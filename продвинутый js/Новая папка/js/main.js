//? JSON (англ. JavaScript Object Notation) — текстовый формат обмена данными, основанный на JavaScript.
//? Формат JSON используется для упорядоченного хранения данных в процессе их обмена между веб-браузером или клиентской частью приложения и сервером или между разными серверами.

//? npm (аббр. node package manager) — это стандартный менеджер пакетов, автоматически устанавливающийся вместе с Node.js. Он используется для скачивания пакетов из облачного сервера npm, либо для загрузки пакетов на эти сервера.

const API = "  http://localhost:8000/posts";
//! =========== GET ===========
function postGet() {
  fetch(API)
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log(data);
    });
}

//! ======= POST =========
let inp = document.querySelector("input");
let btn = document.querySelector("button");
btn.addEventListener("click", () => {
  postAdd();
  postGet();
  inp.value = "";
});
function postAdd() {
  let obj = {
    post1: inp.value,
  };
  fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(obj),
  });
}

//! ============ DELETE ============
function postDelete() {
  fetch(`${API}/${2}`, {
    method: "DELETE",
  });
}

let btnDelete = document.getElementById("btnDelete");
btnDelete.addEventListener("click", () => {
  postDelete();
});

//! ============ PATCH/PUT ===========
//? patch - изминение только одного файла
//? put - изменяет весь файл
let inpEdit = document.getElementById("inpEdit");
let btnEdit = document.getElementById("btnEdit");
function postEdit() {
  let editObj = {
    post1: inpEdit.value,
  };
  fetch(`${API}/${3}`, {
    method: "PUT",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(editObj),
  });
}
btnEdit.addEventListener("click", () => {
  postEdit();
  inpEdit.value = "";
});
