// const toUnderscore = (string) => {
//   let countStart = 0;
//   let countFinish = 0;
//   let upperRegister = 0;
//   let snake_case = "";

//   for (const key of string) {
//     if (key === key.toUpperCase()) {
//       upperRegister++;
//       countFinish++;
//     } else if (upperRegister > 1) {
//       if (countStart) {
//         snake_case += `_${string.slice(countStart, countFinish).toLowerCase()}`;
//       } else {
//         snake_case += string.slice(countStart, countFinish).toLowerCase();
//       }
//       countStart = countFinish;
//       upperRegister = 0;
//     } else {
//       countFinish++;
//     }
//   }

//   if (countStart < string.length) {
//     if (countStart) {
//       snake_case += `_${string.slice(countStart, countFinish).toLowerCase()}`;
//     } else {
//       snake_case += string.slice(countStart, countFinish).toLowerCase();
//     }
//   }

//   return snake_case;
// };

// console.log(toUnderscore("A123aaa123AAA123")); // 'a123aaa123_a_a_a123'
// toUnderscore("AAA");
// toUnderscore("TestController");
// toUnderscore("ThisIsBeautifulDay");
// toUnderscore("Am7Days");
// toUnderscore("My3CodeIs4TimesBetter");

function halfIt(s) {
  if (typeof s !== "string") {
    return "";
  }
  let str = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      str += s.slice(i, i++);
      count = 0;
    }
    str += s[i];
  }
  return str;
}

console.log(halfIt("CcCccccccCcCCcC"), "Должно получиться: CcCccccC");
