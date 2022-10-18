// У жизненного цикла HTML-страницы есть три важных события:

//? DOMContentLoaded – браузер полностью загрузил HTML, было построено DOM-дерево, но внешние ресурсы, такие как картинки <img> и стили, могут быть ещё не загружены.
// load – браузер загрузил HTML и внешние ресурсы (картинки, стили и т.д.).
// beforeunload/unload – пользователь покидает страницу.

//! =========== DOMContentLoaded ===============
let img = document.querySelector("img");
// img.addEventListener("click", e => {
//   console.log(e);
// });
