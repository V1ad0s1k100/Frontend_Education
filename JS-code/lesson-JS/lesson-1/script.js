//'use strict' // Строгий режим, который не позволяет использовать устаревшие конструкции

console.log('Привет!',
     'fdkflk',
      5456);

// console.log(Привет 1) // Ошибка

// Однострочный коментарий

/*
 Многострочный коментарий 
*/

// console.log(1)

// var, const, let - ключевые слова для создания переменных

// console.log(messege) // Ошибка

let messege // объявление переменной

messege = 'Привет' // присвоение значения переменной

console.log(messege)

messege = 'Пока'

console.log(messege)

const Message = 'Привет' // объявление и присвоение значения константе

console.log(Message)
 
const leftBorderWidth = 1, rightBorderWidth = 2 // объявление нескольких переменных (стоить избегать)

console.log(leftBorderWidth, rightBorderWidth)

const name = 'ВАСЯ'

const name_1 = 'Петя'

console.log(name, name_1)

// age = 10

// console.log(age)

// В JS существуют резервированные слова, которые нельзя использовать в качестве имен переменных


// Переменные могут содержать буквы, цифры, символы $ и _ , но не могут начинаться с цифры


// ТИПЫ ДАННЫХ

// Примитивные типы данных

let Name = 'Вася' // String

const age = 16 // Number

let isTrue = true // Boolean

let power = 9999999999999999n // BigInt

let sing = Symbol() // Symbol

const something = undefined // Undefined

// Специальные типы данных

const obj = {name: 'Вася', age: 16} // Object

const data = null // Null



// Пример string

let string = 'Привет'
let String = "Привет"
let string_1 = `Привет`

string_1 = `${string} Вася` // Интерполяция строк (вставка переменных в строку)
console.log(string_1) 

console.log(`
      При помощи обратных 
      кавычек можно
      писать многострочные 
      строки
`)

// Пример number

let number = 16
let Number = 16.5
let number_1 = 16e5 // 16 * 10^5
 
console.log('Слово' / 100) // NaN - Not a Number (не число)
console.log(100/0) // Бесконечность
console.log(-100/0) // Бесконечность

// -9007199254740991 < number < 9007199254740991

console.log(2**53-1) // Максимальное число в JS


// Если ипользовать числа больше максимального, то они будут иметь неточность

console.log(9900000000000000+1) 
console.log(9900000000000000+2)

/* n в конце числа делает его BigInt, 
при этом при сложении с обычным числом 
нам нужно указывать n в конце обычного числа
*/

console.log(9900000000000000n+1n) 
console.log(9900000000000000n+2n) 

console.log(1_000_000) // Большие числа можно записывать с разделением разрядов


// Пример Boolean


