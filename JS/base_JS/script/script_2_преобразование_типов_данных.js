// Явное и не явное преобразование типова данных

// Не явное

const num = 111
const str = '222'
const result = num + str

console.log(result, typeof result) // 111222, string (произошло не явное преобразования num в string)

// Не явное преобразование строк в числа показывает ошибку, но выводит как обычно

// console.log('16' / '8', typeof ('16' / '8'))

// Явное
// Преобразование в строку
let meAge = 11
console.log(typeof meAge)
console.log(meAge)
console.log(String(meAge), typeof String(meAge))

let isAdult = false
console.log(isAdult)
console.log(String(isAdult))

let obj = {}
console.log(obj)
console.log(String(obj))
console.log('')
// Преобразование в число
let Str = '1000'
console.log(Number(Str), typeof Number(Str))
console.log(Number(Str + '-'), typeof Number(Str + '-')) // Выводит NaN, если вводить что-то отличное от числа
console.log('')
console.log(Number(true)) // Логический 1
console.log(Number(false)) // Логический 0
console.log(Number(null)) // Логический 0
console.log(Number(undefined)) // NaN
console.log('')
// Преобразование в Boolean
// Все числа, кроме 0 преобразуются в true, а 0 в false
console.log(Boolean(-1))
console.log(Boolean(0))
console.log(Boolean(1))
console.log(Boolean(2))
console.log('')
// Если в строке есть хотя бы пробел, то преобразуется в true, если нет, то false
console.log(Boolean('Hello'))
console.log(Boolean('0'))
console.log(Boolean(' '))
console.log(Boolean(''))
