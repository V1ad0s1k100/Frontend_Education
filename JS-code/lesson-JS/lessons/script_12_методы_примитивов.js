const price = 99.5555

// Если не сохранить значение метода в переменную, то значение нигде не сохраниться

console.log(
    // По умолчанию округление до 0 знаков после запятой
    price.toFixed(0)
)

console.log(
    // Округляет напрямую число 5 до 1 знака после запятой
    5..toFixed(1)
)

console.log(
    // Округляет напрямую число 5.555  до 2 знаков после запятой
    (5.555).toFixed(2)
)

console.log(
    // Устанавливает точность числа до 4 значащих цифр
    price.toPrecision(4)
)

const priceAsString = price.toString()

console.log('Число в виде числа: ', price, 'Тип переменной: ', typeof price)
console.log('Число в виде строки: ', priceAsString, 'Тип переменной: ', typeof priceAsString)

// Если задать в метод toString параметр, то он выведит число в той СС, которая будет указана в параметре

console.log((price).toString(2))




// Вывод объекта Math, содержащего математические методы и константы
console.log(Math)

// Вывод случайного числа от 0 (включительно) до 1 (исключительно)
console.log('Случайное число: ', Math.random())

// Вывод абсолютного значения числа -100
console.log(Math.abs(-100))
// Вывод абсолютного значения числа -1000
console.log(Math.abs(-1000))
// Вывод абсолютного значения числа -2.3232
console.log(Math.abs(-2.3232))

// Вычисление 2 в степени 10 с использованием Math.pow
console.log('2 в степени 10: ', Math.pow(2, 10))
// Вычисление 2 в степени 10 с использованием оператора **
console.log('Тоже 2 в степени 10: ', 2 ** 10)

// Вычисление квадратного корня из 100
console.log('Квадратный корень из 100: ', Math.sqrt(100))
// Вычисление кубического корня из 1000000
console.log('Кубический корень из 8: ', Math.cbrt(1000000))

// Создание массива чисел, включая положительные и отрицательные значения
const testArray = [1, 2, 3, 4, 5, 6, -10, -1000, -201]

// Поиск минимального значения в массиве testArray с использованием spread-оператора
console.log(Math.min(...testArray))
// Поиск максимального значения в массиве testArray с использованием spread-оператора
console.log(Math.max(...testArray))


// Округления в Math

console.log("\nОкругление чисел в Math")

console.log("\nОкругление при помощи Math.round()")
// Math.round() округляет число до ближайшего целого.
// Если дробная часть числа >= 0.5, число округляется вверх, иначе вниз.
console.log(Math.round(2.3))   // Вывод: 2
console.log(Math.round(4.6))   // Вывод: 5
console.log(Math.round(-1.2))  // Вывод: -1
console.log(Math.round(-3.7))  // Вывод: -4
console.log(Math.round(0))     // Вывод: 0

console.log("\nОкругление при помощи Math.floor()")
// Math.floor() всегда округляет число вниз до ближайшего целого.
// Для положительных чисел это аналогично удалению дробной части,
// а для отрицательных чисел число становится более отрицательным.
console.log(Math.floor(2.3))   // Вывод: 2
console.log(Math.floor(4.6))   // Вывод: 4
console.log(Math.floor(-1.2))  // Вывод: -2
console.log(Math.floor(-3.7))  // Вывод: -4
console.log(Math.floor(0))     // Вывод: 0

console.log("\nОкругление при помощи Math.ceil()")
// Math.ceil() всегда округляет число вверх до ближайшего целого.
// Для положительных чисел число становится больше,
// а для отрицательных чисел это аналогично удалению дробной части.
console.log(Math.ceil(2.3))    // Вывод: 3
console.log(Math.ceil(4.6))    // Вывод: 5
console.log(Math.ceil(-1.2))   // Вывод: -1
console.log(Math.ceil(-3.7))   // Вывод: -3
console.log(Math.ceil(0))      // Вывод: 0

console.log("\nОкругление при помощи Math.trunc()")
// Math.trunc() удаляет дробную часть числа, не выполняя округление.
// Для положительных и отрицательных чисел просто отбрасывается всё после запятой.
console.log(Math.trunc(2.3))   // Вывод: 2
console.log(Math.trunc(4.6))   // Вывод: 4
console.log(Math.trunc(-1.2))  // Вывод: -1
console.log(Math.trunc(-3.7))  // Вывод: -3
console.log(Math.trunc(0))    // Вывод: 0

// Parsing строк в числа

const numberAsStringLite = '100'
const numberAsStringHard = '100px'
const numberAsStringHardFloat = '100.5px'

console.log(Number(numberAsStringLite))
console.log(parseInt(numberAsStringHard))
console.log(parseInt(numberAsStringHardFloat))
console.log(parseFloat(numberAsStringHardFloat))

