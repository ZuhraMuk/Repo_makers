//! ========== Объекты ==============
// let people1 = {
//   name: "Cevin",
//   lastName: "Chamster",
//   job: "singer",
//   age: 22,
// };
// console.log(people);
// console.log(people.lastName);//обращение через точку
// console.log(people["lastName"]);//обращение через [""](строка) [](число)

//todo Задание. Найти разницу между console.log(people.lastName); и console.log(people["lastName"]);
//todo Найти 1 минус Spread operatora
// people.nikName = "Cev";//добавление нового ключа через .
// console.log(people);

// people["hobby"] = "art";//добавление нового ключа через []
// console.log(people);

//? delete people.job;//удаление ключа
// console.log(people);

// let people2 = { ...people1 }; //? Spreat operator копирование срезая связь с оригиналом
// people2.name = "Harry";
// people2.lastName = "Potter";
// console.log(people2);
// console.log(people1);

//! ====== Простые методы массивов ========
//? метод push/pop
// синтаксис для всех методов массивов : Название_массива.метод_массива()
// let friends = ["Harry", "Ron", "Germiona", "Hagrid"];
// console.log(friends.length);
// console.log(friends[2]);
// friends[5] = "Dambldor";

// friends[1] = "Zuhra"; //Замена элемента
// console.log(friends);

//todo push добовляет новый элемент в массив в конце
// friends.push("Mirdin");
// friends.push("Mirdin", "Miroslav");
// friends.push("Adelia");

//todo pop удаляет с конца
// friends.pop();
// console.log(friends.pop());
// let friends1 = friends.pop();
// console.log(friends);

//? shift/unshift
//todo unshift добовляет элемент в начало
// friends.unshift("Tobby");
// friends.unshift("Tom", "Bell");
// console.log(friends);

//todo shift удаляет элемент с начала
// let Tom = friends.shift();
// let Tom = friends.shift();
// console.log(friends);

//комбинирование
// friends.push(Tom);//Tom
// friends.push(friends.shift());//Bell
// console.log(friends);

//! ======== slice/splice ==========
//? Метод slice - копирует и возращает новый массив, принимает индексы -  начальную позицию (с какого индекса начать ) и конечную позицию(до какого элемента копировать, не включительно). Синтаксис данного метода будет выглядеть так:
// название_массива.slice(начало, конец)

let fruit = [
  "Apple",
  "Pineapple",
  "Banana",
  "Orange",
  "Kiwi",
  "Granat",
  "Mango",
  "Cherry",
];
// console.log(fruit.length - 1);//узнаем количество индексов
// let index = fruit.length - 1;

// console.log(fruit[5]);//узнаем какой элемент находиться под этим индексом
// console.log(fruit[index]);

let result = fruit.slice(1);
console.log(result);

// let arr1 = [true, ]

// let result = fruit.slice(1, 3);//от 1 индекса до 3 копируем элементы
// console.log(result);

// let result = fruit.slice(3, fruit.length);//здесь мы копируем от 3 индекса до последнего (lenght без -1 потому что slice выбирает до определенного индекса НЕ включительно)
// console.log(result);

// let rest = fruit.slice();//копируем все элементы
// console.log(rest);

//? Метод splice более функциональный, т.к он может удалять и заменять элементы в произвольной части массива. При этом метод splice изменяет изначальный массив.
// Синтаксис данного метода выглядит так:
// название_массива.splice(индекс, кол-во элементов для удаления, элементы которые нужно вставить)
// Т.е если вам нужно просто удалить определенные элементы, то в метод передается индекс, с какой позиции начать удаление, и сколько элементов с этого индекса удалить:

// let fruit = [
//   "Apple",
//   "Pineapple",
//   "Banana",
//   "Orange",
//   "Kiwi",
//   "Granat",
//   "Mango",
//   "Cherry",
// ];

// console.log(fruit);
// fruit.splice(2, 1, "Lemon");
// fruit.splice(2, 0, "Lime");
// fruit.splice(2, 2); //третий пункт не объязателен
// fruit.splice(2,0,"Dino",{name:""})
// console.log(fruit);

//! ======== join/split/reverse/concat =========
//todo join - с помощью этого метода можно объеденить все элементы масссива в одну строку
// let joinedFruit = fruit.join(" и ");
// console.log(joinedFruit);

// let arr = ["Z", "u", "h", "r", "a"];
// let arr2 = arr.join("");
// console.log(arr2);

//todo split
// let str = "makers";
// let newStr = str.split("");
// console.log(newStr);

// let str = "makers bootcamp";
// let newStr = str.split(" "); //он говорит когда ты увидишьэтот знак н:(" " т.е пробел)
// console.log(newStr);

// todo reverse
// let stringNumber = ["Foursth", "Third", "Second", "First"];
// let reverseNumber = stringNumber.reverse();
// console.log(reverseNumber);

// let str1 = "Hello World";
// let splitStr1 = str1.split("");
// console.log(splitStr1);
// let str2 = splitStr1.reverse();
// console.log(str2);
// let joinStr2 = str2.join("");
// console.log(joinStr2);

//todo concat
// let arr1 = [1, 2, 3, 4];
// let arr2 = [5, 6, 7, 8];
// let allArr = arr1.concat(arr2);
// console.log(allArr);

//todo sort
// // let arr = [1, 2, 3, 4, 5];
// arr.sort((a, b) => a - b); // сортирует элементы по возрастанию
// arr.sort((a, b) => b - a); // сортирует по убыванию
// console.log(arr);

// let arr = [1, 2, 99, 100, 999, "888"];
// arr.sort();
// console.log(arr);
// arr.sort((a, b) => b - a);

// let str = "asd";
// console.log(typeof +str == "number");

// let arr = [25, 142, 2, 6, 11, 9];
// arr.sort((a, b) => a - b);
// console.log(arr);

// let arr = ["Джаз", "Блюз"];
// arr.push("Рок-н-ролл");
// let lenghtArr = arr.length;
// arr.splice(lenghtArr, 1, "Классика");
// let arr2 = arr.shift();
// console.log(arr2);
// arr.unshift("Рэп", "Регги");
// console.log(arr);

// let arr = ["а", "б", "в"];
// arr.push("4", "3", "5", "5");
// console.log(arr);

/// Простые методы массивов. Классная работа

// Задание №1
// Дан массив ["dlrow", "olleH"]. Измените его таким образом, чтобы в итоге получилось ["Hello", "world"]. Используйте методы массива.
// let arr = ["dlrow", "olleH"];
// let arr = ["dlrow", "olleH"];
// console.log(arr.join().split("").reverse().join("").split(","));

// Задание №2
// Дан массив ['а', 'б', 'в']. Добавьте ему в конец элементы 4,3,5,5.
// let arr = ['а', 'б', 'в'];
// arr.push('4', '3', '5', '5');
// console.log(arr);
// Задание №3
// Дан массив ["Apple", "Orange", "Pinapple", "Cherry"]. Удалите сначала первый элемент "Apple" и этот же элемент подставтье после "Pineapple".
// let fruit1 = ["Apple", "Orange", "Pinapple", "Cherry"];
// let fruitShift = fruit1.shift();
// let frlenght = fruit1.length - 1;
// fruit1.splice(frlenght, 0, fruitShift);
// console.log(fruit1);

// let fruit1 = ["Apple", "Orange", "Pinapple", "Cherry"];
// let fruitShift = fruit1.shift();
// fruit1.splice(2, 0, fruitShift);
// console.log(fruit1);

// Задание №4
// Дан массив [8, -7, -21, 44, 3]. Вывести в консоль наиболшее число из массива.
// Подсказка: нужно использовать метод sort().
// let arr2 = [8, -7, -21, 44, 3];
// console.log(arr2.sort((a, b) => b - a)[0]);

// let arr = [2, 3, 5, 7, 89, 1, 3];
// let arr = ["re", "esdsfd", "adsfdsfdsf", "c"];
// let arr1 = "dasdsfgfdgdafasfew";
// arr1 = arr1.split("");
// arr1 = arr1.sort();
// arr1 = arr1.join("");
// let newArr = arr1.sort();
// console.log(arr1);

// let num = [32, 3, 36, 78, 111, 246, 3, 2, 1];
// let newNum = num.sort((a, b) => a - b);
// console.log(newNum);

// let test = ["45s", "36z", 32, 1, 111, "56q"];
// let answer = test.sort((a, b) => parseInt(a) - parseInt(b));
// console.log(answer);

// let test1 = ["Mercedes", "Audi", "Volkswagen", "Ford Focus"];
// let answer1 = test1.sort((a, b) => a.lenght - b.lenght);
// console.log(answer1);
