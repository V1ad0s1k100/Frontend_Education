// Бинарный оператор (применяется к двум числам)
console.log(2 + 2)
console.log(2 - 2)
console.log(2 * 2)
console.log(2 / 2)
console.log(2 ** 2)
console.log('')
console.log(13 % 6) // Остаток от деления

// Унарный оператор (применяется к одному числу)

console.log(-10)

// Принцип для отличия бинарных и унарных операторов

console.log((5 * 2 * -10) / 4)

// Преобразование String в Number
console.log(+'123')
console.log(+true)
console.log(+false)
console.log(+' ')
console.log(+'')
console.log(+null)
console.log(+undefined)
console.log('')

console.log(
  typeof ('3' + '5'),
  '3' + '5',
  typeof ('3' + +'5'),
  '3' + +'5',
  typeof (+'3' + +'5'),
  +'3' + +'5',
)

console.log(-1 + 2 * 3 + +'4' / 5 ** 2)

let count = 1
count += 2 // count = count + 2
console.log(count)
console.log('')

let count_copy_one = 1
let count_copy_two = 2
let count_copy_three = 3
let count_copy_four = 4
let count_copy_five = 5
console.log((count_copy_one += 1))
console.log((count_copy_two /= 2))
console.log((count_copy_three *= 2))
console.log((count_copy_four **= 2))
console.log((count_copy_five %= 2))

// С конкатинацией строк

let str = 'Привет сосед, '
let str_1 = 'как твои дела?'

console.log((str += str_1))
console.log('')

// Постфиксная форма
// Дикримент

let count_2 = 10
count_2--
console.log(count_2)
console.log('')
// Инкримент

let count_3 = 10
count_3++
console.log(count_3)
console.log('')

// Префиксная форма
// Дикримент

let count_4 = 10
count_4--
console.log(count_4)
console.log('')

// Инкримент

let count_5 = 10
count_5++
console.log(count_5)
console.log('')

// Разница при использовании дикримента и инкримента
let count_6 = 10
let newCount_6 = count_6++
console.log(count_6, newCount_6, '<-- постфиксная форма')
console.log('')

let count_7 = 10
let newCount_7 = ++count_7
console.log(count_7, newCount_7, '<-- префиксная форма')

// Операторы сравнения

console.log(3 > 10)
console.log(3 >= 3)
console.log(15 <= 3)
console.log(15 == 15) // Эквивалентность
console.log(15 != 15)

// Для строк

console.log('а' < 'б') // По юникоду б весомее а так как находится дальше в таблице юникода

console.log('ы' < 'f') // Кирилица весомее латиницы

console.log('JavaScript' > 'Java') // Буквы в словах сравниваются слева на право согласно весомости по таблице юникода, если букв в одном слове больше чем в другом, то оно автоматически становиться длиннее

console.log('')

console.log(3 == '3') // JS произвел перевод строки в число и сравнил

console.log('')

console.log(3 === '3') // Строгое сравнение по типу переменных и их значениям

// Стараться пользоваться строгим сравнением
