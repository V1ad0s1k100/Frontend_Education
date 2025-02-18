// function barTriang(p1, p2, p3) {
//   return [
//     parseFloat(((p1[0] + p2[0] + p3[0]) / 3).toFixed(4)),
//     parseFloat(((p1[1] + p2[1] + p3[1]) / 3).toFixed(4)),
//   ];
// }

// console.log(barTriang([4, 6], [12, 4], [10, 10]));

// function process2Arrays(arr1, arr2) {
//   const arrGeneral = [...arr1, ...arr2];
//   const setCollection = new Set(arrGeneral);

//   const objElements = {};

//   for (const key of setCollection) {
//     objElements[key] = arrGeneral.filter((item) => item === key).length;
//   }

//   let noRepeatElements = Object.entries(objElements)
//     .filter((number) => number[1] === 2)
//     .map((element) => {
//       return +element[0];
//     });

//   return noRepeatElements;
// }

// console.log(
//   process2Arrays([1, 2, 3, 4, 5, 6, 7, 8, 9], [2, 4, 6, 8, 10, 12, 14])
// );

// 3 задача

// function СomparisonArr(names, namesСomparison) {
//   let count = 0;
//   let arrSame = [];
//   for (const i = 0; i < names.lenght; i++) {
//     if (names[i] != namesСomparison[i]) {
//       count++;
//       arrSame.push([i, names[i], namesСomparison[i]]);
//     }
//   }
//   return [count, arrSame];
// }

// function sortme(names) {
//   const namesCopyArr = [];
//   let namesValueBusting = [];
//   let namesFinishArr = [];

//   for (let i = 0; i < names.length; i++) {
//     namesCopyArr[i] = [names[i], `${names[i].toLowerCase()}${i}`];
//     namesValueBusting[i] = `${names[i].toLowerCase()} ${i}`;
//   }

//   namesValueBusting = namesValueBusting
//     .sort((a, b) => {
//       const caseInsensitiveComparison = a.localeCompare(b, undefined, {
//         sensitivity: "base",
//       });
//       if (caseInsensitiveComparison === 0) {
//         return a.localeCompare(b);
//       }
//       return caseInsensitiveComparison;
//     })
//     .map((element) => {
//       return element.split(" ");
//     });

//   for (const key of namesValueBusting) {
//     namesFinishArr.push(names[key[1]]);
//   }

//   return namesFinishArr;
// }

// const arr = sortme([
//   "Will",
//   "Call",
//   "New",
//   "would",
//   "That",
//   "an",
//   "person",
//   "Up",
//   "hand",
//   "all",
//   "first",
//   "but",
//   "Have",
//   "up",
//   "all",
//   "way",
//   "look",
//   "make",
// ]);

// console.log(arr);
// console.log(
//   СomparisonArr(
//     [
//       "all",
//       "all",
//       "an",
//       "but",
//       "Call",
//       "first",
//       "hand",
//       "Have",
//       "look",
//       "make",
//       "New",
//       "person",
//       "That",
//       "up",
//       "Up",
//       "way",
//       "Will",
//       "would",
//     ],
//     arr
//   )
// );

// // Задача 4
// var countBits = (n) =>
//   n
//     .toString(2)
//     .split("")
//     .map((element) => +element)
//     .reduce((acc, element) => acc + (element === 1 ? 1 : 0), 0);

// console.log(countBits(1234));

// Задача 5
// const coder = new Map([
//   ["a", 1],
//   ["e", 2],
//   ["i", 3],
//   ["o", 4],
//   ["u", 5],
// ]);

// const encode = (string) =>
//   string
//     .split("")
//     .map((element) => (coder.has(element) ? coder.get(element) : element))
//     .join("");

// const decode = (string) =>
//   string
//     .split("")
//     .map((element) =>
//       [...coder.values()].includes(+element)
//         ? [...coder.keys()][[...coder.values()].indexOf(+element)]
//         : element
//     )
//     .join("");

// console.log(encode("hello"));
// console.log(decode("h2ll4"));

// Проверка множества Set

// const alphabet =
//   Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)).join("") +
//   Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i)).join("");

// const s = new Set([1, 3, 3, 3, 3, 3, 3, 5]);
// const t = new Set([1, s]);
// const str = new Set("Mississippi");

// console.log(s, t, str);
// console.log(`Множество str содержит: ${str.size} элемента(-ов)`);

// for (const key of alphabet) {
//   str.add(key);
// }

// // console.log(str.values(), str.entries());

// console.log(`Множество str содержит: ${str.size} элемента(-ов)`);
// if (str.has("s")) {
//   str.delete("s");
// }
// console.log(`Множество str содержит: ${str.size} элемента(-ов)`);

// str.clear();
// console.log(str);

// const obj = {
//   name: "Vladosik",
//   age: 17,
//   city: "Krasnoyarsk",
// };

// const newMap = new Map([
//   ["name", "Vladosik"],
//   ["age", 17],
//   ["city", "Krasnoyarsk"],
// ]);

// for (const [key, value] of newMap.entries()) {
//   console.log(key, value);
// }

// console.log(obj.entries);

// Задача 6

