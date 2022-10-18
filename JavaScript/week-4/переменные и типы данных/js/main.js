//! ==================== Переменные =======================
// ? Переменная - это именованное хранилище данных.
// ? Три ключевых слова для создания переменных - let, const, var

// ? let - современный способ создания переменной. В будущем можно изменить информацию внутри переменной.

// * После ключевого слова, записывается название переменной
// TODO Правило написания названия переменной:
// 1) должно содержать только буквы и цифры;
// 2) первый символ не должен быть цифрой;
// 3) запрещено писать символы, кроме $ (знака доллара) и _ (нижнего подчеркивания)
// 4) желательно писать на латинице;
// 5) не должно совпадать с зарезервированным словом (let const);
// 6) переменные из нескольких слов пишутся через camelCase или snake_case;
// 7) записываем подходящее по логике название;
// 8) регистр имеет значение

let age; //Объявление переменных, но не сохранение информации. (Инициализация)
let name1;
//let 1name;
let $name;
let _name;
let имя;
let Name;

// *  После названия переменной ставиться знак = (равно) - это не сравнение. Это присваивание.Затем помещаем какую-то информацию.

let title = "JavaScript";
// todo Повторно объявлять переменную с одним и тем же названием запрещено!
let Title = "Pyton";
console.log(title);
console.log(Title);
console.log("Hello world!");
let lastName;
lastName = "Jackson";
lastName = "Mikle";
console.log(lastName);

// const
const variable = "Mira";
//variable = "js25";
console.log(variable);

//var
var model = "Apple";
model = "Samsung";
var model = "Xiomi";
console.log(model);

// ! ======== Типы данных =========
//typeof - с помощью этого оператора, можно узнать тип данных переменной (и информации)

let id = "Строка";
console.log(typeof id); //String

id = 2022;
console.log(typeof id); //Number

id = true;
id = false;
console.log(typeof id); //Boolean

id = Symbol(414242);
console.log(id);
console.log(typeof id); //Symbol

id = 476983575923n;
console.log(typeof id); //Bigint

id = null;
console.log(typeof id); // Для значения null оператор возвращает значение object, несмотря на то, что null отдельный тип данных
console.log(id); // Null (Пустота)

id = undefined;
console.log(id);
console.log(typeof id); // undefined

id = {
  name: "Tom",
  null1: null,
  bull: true,
  num: 12345,
}; //Объект создается при помощи {}, внутри пишется ключ: значение
console.log(id);
console.log(typeof id); // Object

// ! =============== null VS undefined ===================
let home;
console.log(home); // undefined Не специальная пустота, не объязательно ее задовать для того чтобы увидеть этот тип данных. Если объявили переменную, но не присвоили значения, то по умолчанию первый тип данных задается undefined.

home = null;
console.log(home); //null Специальная пустота, можем увидеть только тогда, когда сами задаем это значение.

//! ======= Копирование данных========
let student1 = "Mike";
let student2 = student1;
console.log("Студент-1:", student1, "Студент-2:", student2);

//! ========= Hoisting ===========
//todo Хостинг - это поднятие НАЗВАНИЯ переменной var (но не значения) до ее обьявления
// console.log(upVariable);
// let upVariable = "С переменной let хостинг не работает";

var upVariable;
console.log(upVariable);
var upVariable = "Хостинг работает только на переменной var";

//! =========== Объекты =========
const person = {
  name: "Anton",
  age: 23,
  job: "FrontEnd Dev",
  bull: false,
  salary: 300000n,
  nikName: Symbol("Antoxa"),
  girlfriend: null,
  car: {
    // внутри ОБЪЕКТА можно создать новый объект
    model: "Mers",
    color: "silver",
    year: 1994,
  },
  "last name": "TTop",
};
console.log(person.name);
console.log(person.job);
console.log(person.car.color); //чтобы обратится к ключу внутри дочернего-объекта который находится внутри родительского объекта мы должны обратитъся сначала к названию константы н:person, а потом к ключу н:car а потом к ключу дочернего-объекта н:color

person.age = 24; //Чтобы поменять значение ключа внутри const мы должны обратитъся сначала к названию константы н:person, а потом к ключу н:age и присваеваем ему новое значение
console.log(person.age);
console.log(person);

//person = { age: 18 };
person.deaath = 2091; // чтобы присвоить совершенно новый ключ к перемнной мы должны обратитъся сначала к названию константы н:person, а потом даем новое название нового ключа и потом новое значение
console.log(person);

console.log(person["last name"]); //Старый способ вывода информации
console.log(person["age"]);

//! ========== Массивы ===========
// Array, или массив это специальный тип данных который также как и объект может хранить в себе другие типы данных(на самом деле array является родственником объекта). Массивы в JS обозначаются квадратными скобками []. Особенностью массива является то что он упорядочен, т.е при его создании JS автоматически дает порядковые номера элементам внутри массива.
// Эти порядковые номера начинаются с нуля и называются "индексами".

let mentors = ["Azret", "Alia", "Nargiza"];
console.log(mentors);
console.log(mentors.length); //lenght Длина массива
console.log(mentors[2]); //мы вытащили значение по номеру индекса
let m = ["Azret", "Alia", "Nargiza", [20, 21, 22]];
console.log(m[3][0]);
console.log(typeof m);

// ! ======= Арифметические операции ========
// для сложения
console.log(25 + 25);

// для вычитания
console.log(20 - 5);

//умножение
console.log(2 * 2);

// деление
console.log(20 / 5);

// возведение в степень
console.log(2 ** 4);

//остаток от деления
console.log(10 % 7);

//конкатенация
console.log("2" + 2);
let a = "Hello";
let b = " World";
let c = a + b;
console.log(c);

console.log("800" - 50);

//! ========= Интерполяция ==========
// * Для того чтобы отобразить в консоли текст и переменную, нужно написать текст в кривых кавычках, а переменную обернуть в знак доллара с фигурными скобками. Это называется интерполяция.
let phone = "Iphone 13 pro Max";
console.log("Я купил себе", phone); //1 способ (отображается только в консоли)
console.log(`Я купил себе ${phone}`); //2 способ

//alert, prompt, confirm
// alert("Здравствуйте Mirdin!");
// confirm("Вам есть 18?");
// let agePerson = prompt("Сколько вам лет?");
// console.log(agePerson);

// let number = prompt("Введите первое число:");
// let number2 = prompt("Введите второе число:");
// let sum = +number + +number2;
// let raz = number - number2;
// let um = number * number2;
// let de = number / number2;
// alert(
//   "Сумма:" + sum + " Разность:" + raz + " Умножение:" + um + " Деление:" + de
// );
let num = +prompt("Введите первое число:");
let num2 = +prompt("Введите второе число:");
alert(`${num + num2}, ${num - num2},${num * num2},${num / num2}`);
