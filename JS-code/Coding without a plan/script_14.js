// // function stolenLunch(note) {
// //     const cipher = {
// //         '0': 'a', '1': 'b', '2': 'c', '3': 'd', '4': 'e', '5': 'f', '6': 'g', '7': 'h', '8': 'i', '9': 'j',
// //         'a': '0', 'b': '1', 'c': '2', 'd': '3', 'e': '4', 'f': '5', 'g': '6', 'h': '7', 'i': '8', 'j': '9'
// //     };
// //
// //     return note.split('').map(char => cipher[char] || char).join('');
// // }
// //
// // console.log(stolenLunch("you'll n4v4r 6u4ss 8t: cdja")); // "you'll never guess it: 2390"
// // console.log(stolenLunch("0123456789")); // "abcdefghij"
// // console.log(stolenLunch(" p6vem ?q ylh ?zjv w i' bo, f  0f c ud7 2 75 ctv    cd z  rj ?is    e 4k0hunj 15  4  m  g?f5fvvxi 0'kkai6ggl  v!2ooa1 0       f8c3  7r  b2j   ?bt g 80d ?  gcq gqd he8 1 o76s r   x71 .rxba wwf 9 w  avd   e'wu?   nj 7 0j  h  c  f 0ow2eb .c5x  ?c  b4 .v7 w9z  10 je   k1.h    g ,. 51oh    !nc6y6 9p'  3cq o 'n e5g     7n2 6?kk  7n!o 7 ?n a3vz!e l s    9 q6oc 8q i y   9vx '  r5i,89 scz i yy  65vqse  2wp s ao d06 bz0e   x l "));
//
// // Задача на промисы
//
// // const promiseHelloWorld = () => Promise.resolve("Hello World!");
// // console.log(promiseHelloWorld())
//
// // Задача
//
// // function solution(number) {
// //     let sum = 0;
// //     for (let i = 1; i < number; i++) {
// //         if (i % 3 === 0 || i % 5 === 0) {
// //             sum += i;
// //         }
// //     }
// //     return sum;
// // }
// //
// // console.log(solution(10)); // 23
//
// // Задача
//
// function findLongestSubstr(s) {
//     // Filter out non-alphanumeric characters
//     s = s.replace(/[^a-zA-Z0-9]/g, '');
//
//     let startIndex = 0;
//     let endIndex = 0;
//     let maxLength = 0;
//     let maxChar = '';
//     let maxStartIndex = 0;
//     let maxEndIndex = 0;
//
//     for (let i = 0; i < s.length; i++) {
//         if (i === 0 || s[i] !== s[i - 1]) {
//             startIndex = i;
//         }
//         endIndex = i;
//
//         if (endIndex - startIndex + 1 > maxLength) {
//             maxLength = endIndex - startIndex + 1;
//             maxChar = s[startIndex];
//             maxStartIndex = startIndex;
//             maxEndIndex = endIndex;
//         }
//     }
//
//     return [maxChar.charCodeAt(0).toString(), maxLength, [maxStartIndex, maxEndIndex]];
// }
//
// const s1 = "1111aa994bbbb1111AAAAAFF?<mmMaaaaaaaaaaaaaaaaaaaaaaaaabf";
// const s2 = "1111aa994bbbb1111AAAAAFF????????????????????????????";
//
// console.log(findLongestSubstr(s1)); // ["97", 25, [29, 53]]
// console.log(findLongestSubstr(s2)); // ["65", 5, [17, 21]]

