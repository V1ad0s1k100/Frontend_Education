// const obj = null;

// console.log(obj?.family);

// Задачи на повторение

// const funOne = () => {
//   alert("Вы молодец, что посещаете наш сайт. Мы этому очень рады :)");
// };

// setTimeout(funOne, 2000);

// let count = 0;

// setTimeout(
//   (funTwo = () => {
//     alert(
//       `Вы молодец, что посещаете наш сайт. Мы этому очень рады :) {${count}}`
//     );
//     if (count > 2) {
//       alert("Это конец :(");
//     } else {
//       count++;
//       setTimeout(funTwo(), 1000);
//     }
//   }),
//   1000
// );

// let count = 0;

// const intervalID = setInterval(() => {
//   console.log("Вы наш лучший посетитель :)");
// }, 1000);

// setInterval(() => clearInterval(intervalID), 3000);

// Задача с codewars

// weights array - is golden ore pieces weights
// n - is the weight of figurine
//
// return an array describing the left and right scale pans,
// prepared to test that the figurine (possibly weighing n)
// placed on the right pan afterward will balance the scales

// function weightN(weights, sacredN) {
//   let solution = null;

//   function search(index, leftSum, rightSum, leftArr, rightArr) {
//     if (index === weights.length) {
//       if (leftSum === rightSum + sacredN) {
//         solution = { left: [...leftArr], right: [...rightArr] };
//       }
//       return;
//     }

//     // Если решение уже найдено, прекращаем дальнейший перебор
//     if (solution !== null) return;

//     const current = weights[index];

//     // Вариант 1: кладём текущий кусок на левый лоток
//     search(
//       index + 1,
//       leftSum + current,
//       rightSum,
//       leftArr.concat(current),
//       rightArr
//     );
//     if (solution !== null) return;

//     // Вариант 2: кладём текущий кусок на правый лоток
//     search(
//       index + 1,
//       leftSum,
//       rightSum + current,
//       leftArr,
//       rightArr.concat(current)
//     );
//     if (solution !== null) return;

//     // Вариант 3: не используем текущий кусок
//     search(index + 1, leftSum, rightSum, leftArr, rightArr);
//   }

//   search(0, 0, 0, [], []);

//   return solution ? [solution.left, solution.right] : [];
// }

// // Примеры использования:
// console.log(weightN([1, 2, 7], 3)); // Ожидается: [[1, 2], []]
// console.log(weightN([1, 2, 7], 5)); // Ожидается: [[7], [2]]

// console.log("\u{1F600}")

// Проверка на возраст с дальнейшим спамом от входа на страницу

// setTimeout(() => {
//   const age = prompt("Сколько вам лет?");
//   if (age < 18) {
//     setTimeout(
//       (logMessage = () => {
//         alert("Несовершенно летним доступ закрыт");
//         logMessage();
//       }),
//       1500
//     );
//   }
// }, 2000);

// codewars задача

// function rgb(r, g, b) {
//   let arr = [r, g, b].map((element) =>
//     element < 0 ? 0 : element > 255 ? 255 : element
//   );

//   return `${arr[0].toString(16).toUpperCase().padStart(2, "0")}${arr[1]
//     .toString(16)
//     .toUpperCase()
//     .padStart(2, "0")}${arr[2].toString(16).toUpperCase().padStart(2, "0")}`;
// }

// console.log(rgb(0, 0, 0)); // 000000

// Вывод числа Фибоначи (начиная с 0)

// const fib = (num) => {
//   let arr = [0, 1, 1];

//   for (let i = 3; i <= num; i++) {
//     arr.push(arr[i - 1] + arr[i - 2]);
//   }
//   return arr;
// };

// console.log(fib(20));

// Поиск пиков и запись их вместе с позицией

// function pickPeaks(arr) {
//   const result = { pos: [], peaks: [] };
//   let posCandidate = null;

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > arr[i - 1]) {
//       // Новый кандидат (возможно начало плато)
//       posCandidate = i;
//     }
//     // Если кандидат установлен и текущий элемент ниже предыдущего,
//     // значит, плато завершилось — фиксируем пик.
//     if (posCandidate !== null && arr[i] < arr[i - 1]) {
//       result.pos.push(posCandidate);
//       result.peaks.push(arr[posCandidate]);
//       posCandidate = null;
//     }
//   }

//   return result;
// }

// // Примеры использования:
// console.log(pickPeaks([0, 1, 2, 5, 1, 0]));
// // Должно вернуть: {pos: [3], peaks: [5]}

// console.log(pickPeaks([1, 2, 2, 2, 1]));
// // Должно вернуть: {pos: [1], peaks: [2]}

// console.log(pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]));
// // Должно вернуть: {pos: [3, 7], peaks: [6, 3]}

//

// function symbolAccount(text) {
//   const symbolObject = {};

//   for (let char of `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя0123456789.:;,"'--_()[]{}@#$%^&*+=/\|<>~`) {
//     symbolObject[char] = 0;
//   }

//   for (const key_text of text) {
//     if (symbolObject.hasOwnProperty(key_text)) {
//       symbolObject[key_text]++;
//     }
//   }

//   const arr = Object.entries(symbolObject)
//     .map((element, index) => {
//       if (element[1] != 0) {
//         return element;
//       }
//     })
//     .filter((element) => element != undefined)
//     .sort((a, b) => b[1] - a[1]);

//   return `${arr
//     .map(
//       (element) =>
//         `${element[0]} - ${(
//           (element[1] / arr.reduce((acc, element) => acc + element[1], 0)) *
//           100
//         ).toFixed(2)}% ${"#".repeat(
//           (
//             (element[1] / arr.reduce((acc, element) => acc + element[1], 0)) *
//             100
//           ).toFixed(2) * 3
//         )}`
//     )
//     .join("\n")}
// \nКолличество символов в тексте: ${text.length} \n`;
// }

// console.log(
//   symbolAccount(`
//   Первая мировая война: роковой шаг
//   К 1914 году Европа была разделена на два враждебных лагеря: Антанту (Россия, Франция, Великобритания) и Тройственный союз (Германия, Австро-Венгрия, Италия). Поводом для начала войны стало убийство австрийского эрцгерцога Франца Фердинанда в Сараево. Австро-Венгрия предъявила ультиматум Сербии, которую поддерживала Россия. Николай II, несмотря на колебания, принял решение о мобилизации, что привело к вступлению России в войну.

//   Первая мировая война стала катастрофой для России. Недостаток ресурсов, слабое руководство и внутренние проблемы привели к тяжелым поражениям на фронте. Война обострила социальные и экономические проблемы, что в конечном итоге вылилось в Февральскую революцию 1917 года и свержение монархии.

//   Итоги
//   Внешняя политика России в конце XIX  начале XX века была направлена на укрепление её позиций в мире, но сталкивалась с множеством трудностей. Поражение в русско-японской войне, сложности на Балканах и вступление в Первую мировую войну подорвали силы страны. Внутренние проблемы, усугубленные внешними вызовами, привели к краху империи в 1917 году. Этот период стал важным уроком для России, показав, что внешняя политика должна быть сбалансированной и учитывать внутренние возможности государства.
//   `)
// );

// Задача с codewars

function parseMolecule(formula) {
  let countString = 0;
  let countNumber = 0;
  const splitFormul = formula.forEach((element) => {
    if (count != null && typeof Number(element) === "number") {
      countString = 0;
      countNumber++;
    } else {
      count++;
    }
  });

  const formulObj = {};

  if (
    splitFormul.indexOf("(") === -1 &&
    splitFormul.indexOf(")") === -1 &&
    splitFormul.indexOf("[") === -1 &&
    splitFormul.indexOf("]") === -1
  ) {
    splitFormul.forEach((element, index, arr) => {
      console.log(element);
    });
  }
  return formulObj;
}

console.log(parseMolecule("Mg2O"));
console.log("\n");
console.log(parseMolecule("Mg(OH)2"));
console.log("\n");
console.log(parseMolecule("K4[ON(SO3)2]2"));
