//! ================== Модальные окна ================
// alert("Hello User!");

// let age = prompt("Сколько вам лет?", 20);
// console.log(age);

// let name = prompt("Enter your name:");
// alert(`Hello ${name} `);

// let bool = confirm("Вам есть 18!");
// console.log(bool);

//! ============== Операторы сравнения ===============
//Операторы сравнения всегда возвращают тип данных boolean
// console.log(20 > 15);
// console.log(20 < 15);
// console.log(20 <= 20);
// console.log(20 >= 20);
// console.log("20" >= 20);
// console.log("20" == 20);// не строгое == равенство, приводит к общему типу данных, а потом сравнивает значения
// console.log("20" === 20);//строгое равенство === не приводит к общему типу данных, сравнивает и тип данных, и значение

// let answer = +prompt("Сколько вам лет?"); //Конвертер +
// console.log(typeof answer);
// console.log(answer === 18);
// // console.log(answer == 18);

// let answer = Number(prompt("Сколько вам лет?")); //Конвертер Number
// console.log(typeof answer);
// console.log(answer === 18);

//todo Найти все конвертаторы, которые меняют тип данных в Number и найти различие.

// Boolean
// console.log(Boolean("Zuhra")); //true
// console.log(Boolean("")); //false
// console.log(Boolean(" ")); //true
// console.log(Boolean(40)); //true
// console.log(Boolean(0)); //false
// console.log(Boolean(-2)); //true
// console.log(Boolean(null)); //false
// console.log(Boolean(undefined)); //false
// console.log(Boolean({})); //true
// console.log(Boolean([])); //true

//todo ========================= ложные значения ===============================
// 0
// null
// undefined
// ""
// false

//! ============== Логические операторы ==========
//todo ================ && (и)- возвращает true если оба значения true =====================
// let age = +prompt("Введите ваш возраст:");
// console.log(age >= 5 && age <= 14);//обе условия должны быть true
// console.log(true && false);

//todo ========= || (или) - если хоть 1 условие будет true, то весь результат будет true
// console.log(false || true);
// console.log(false || false);
// console.log(false || false || true);

// let age1 = 19;
// console.log(age1 > 21 || age1 < 30);

// console.log("" || null || 22);

//todo ============= комбинирование логических операторов =============
// console.log(true || (false && true)); //&& имеет приоритет
// console.log(true || (true && false) || (true && false) || true);
// console.log(("hello" && 0) || (-5 && 997 >= 654));

//1 - ("hello" && 0) = false
//2 - (-5 && 997 >= 654)
//2.1 - 997 >= 654 = true
//2.2 (-5 && true) =true

//3 - 1||2.2 (false || true) = true;

//todo ============ Оператор ! (не) - отрицание. Сначала приводит значение к логическому типу данных (true/flse), затем превращает в противоположное значение ==========

// console.log(!true); //false
// console.log(!" "); //false
// console.log(!-0); //true

// let age2 = "50";
// console.log(age2 != 30);

// console.log(!null || (-0 && !"") || (undefined && 30 !== "25") || "hello");

// console.log(!!false);

// console.log(Number(null));
