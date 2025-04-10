const name = 'Vladosik'
const emptyStr = ''
const strWithOneSpace = ' '

// Свойство length

console.log(`Длина строки '${name}': ${name.length}`)
console.log(`Длина строки '${emptyStr}': ${emptyStr.length}`)
console.log(`Длина строки '${strWithOneSpace}': ${strWithOneSpace.length}`)

// Чтобы получить доступ к отдельным символам строки стоит использовать индекс этого элемента в квадратных скобках

// Отрицательного индекса быть не может

console.log(name[0])
console.log(name[1])

// Для получения последнего символа строки следует использовать следующее выражение

console.log(name[name.length - 1])

console.log('\nИспользование метода at')
// Метод at идентичен индексу в квадратных скобках, только блягодаря ему можно обращаться к символам при помощи отрицательного индекса

console.log(name.at(0))
console.log(name.at(-1))
console.log(name.at(-2))

console.log('\nПроверка на изменение строки при помощи квадратных скобок')
// Метод at или квадратные скобки позволяют только получить символ, но не изменить строку

let lastName = 'V1ad0s1k'
lastName[0] = '0'

console.log(lastName)

console.log(
  '\nИзменение регистра строк при помощи методов toLowerCase и toUpperCase',
)

const text = 'КаКоЙ-тО-тЕкСт'
console.log(text.toLowerCase())
console.log(text.toUpperCase())

console.log('\nИзбавление от пробелов в начале и конце строк')

const message = '     Привет!        '

console.log(`Длины строки '${message}':  ${message.length}`)
console.log(`Длины строки '${message.trim()}':  ${message.trim().length}`)

// Если пробелы находятся не в начале или не в конце, то обрезаться они не будут

const messageFormatted = '_  Привет!   _'

console.log(
  `Длины строки '${messageFormatted.trim()}':  ${
    messageFormatted.trim().length
  }`,
)

// Существуют отдельные методы для обрезки пробелов в начале и в конце строки

console.log(
  `Длины строки с обрезанными пробелами в начале '${message.trimStart()}':  ${
    message.trimStart().length
  }`,
)

console.log(
  `Длины строки с обрезанными пробелами в конце '${message.trimEnd()}':  ${
    message.trimEnd().length
  }`,
)

// Метод indexOf возвращает индекс первого вхождения подстроки в строке, если подстрока не найдена, возвращает -1

console.log('\nПобробуем найти индекс ~этого выражения~ в этом предложении')

const messageForIndex =
  'Побробуем найти индекс ~этого выражения~ в этом предложении'

console.log(
  `Индекс подстроки '~этого выражения~' в строке: ${messageForIndex.indexOf(
    '~этого выражения~',
  )}`,
)

console.log(`Индекс подстроки 'П' в строке: ${messageForIndex.indexOf('П')}`)

// -1 означает, что такой подстроки в строке нет

console.log(
  `Индекс подстроки 'фыфыфы' в строке: ${messageForIndex.indexOf('фыфыфы')}`,
)

// Условие в данном случае используется чаще всего

console.log(messageForIndex.indexOf('Побробуем') !== -1)
console.log(messageForIndex.indexOf('Попробуем') !== -1)

// Для такое проверки чаще используют метод includes
console.log('\nИспользование метода includes')

console.log(messageForIndex.includes('Побробуем'))
console.log(messageForIndex.includes('Попробуем'))

// Существуют методы проверки, которые проверяют начинается ли или оканчивается строка на данную подстроку

console.log('\nМетоды startsWith и endsWith')

console.log(messageForIndex.startsWith('Побро'))
console.log(messageForIndex.endsWith('предложении'))

// Для этих 4 методов также можно использовать индекс, с которого будет начинаться проверка

console.log(
  '\nПроверка вхождения подстроки в строку с использованием начального или конечного индекса',
)

console.log(messageForIndex.indexOf('робуем', 2) !== -1)
console.log(messageForIndex.includes('Побробуем', 5))
console.log(messageForIndex.startsWith('бро', 2))

console.log(messageForIndex.endsWith('предложени', messageForIndex.length - 1)) // В метод endsWith нужно задавать индекс + 1 конца строки или индекс + 1, по который будет производиться поиск. Отсчет ведется не включая последний индекс, поэтому к индексу нужно добавлять +1

console.log('\nОбрезка строки при помощи метода substring')

const str = 'JavaScript'

// Метод substring возвращает подстроку, начиная с указанного индекса и до указанного индекса (не включая его)
console.log(str.substring(0, 4)) // Выведет 'Java'
console.log(str.substring(4)) // Начало обрезки с индекса 4
console.log(str.substring(4, 0)) // Выводит тоже самое, что и в первый раз

console.log('\nОбрезка строки при помощи метода slice')

// Метод slice() возвращает новый строковый массив, содержащий копию части исходной строки.
// Первый аргумент - начальная позиция (индекс) для извлечения подстроки.
// Второй аргумент - конечная позиция (индекс), до которой извлекается подстрока (не включая этот индекс).

// Пример 1: Извлечение подстроки с 0-го по 4-й индекс (не включая 4-й индекс).
console.log(str.slice(0, 4)) // Возвращает подстроку с 0-го по 3-й индекс.

// Пример 2: Если второй аргумент меньше первого, метод slice() вернет пустую строку.
console.log(str.slice(4, 0)) // Возвращает пустую строку, так как начальный индекс больше конечного.

console.log(str.slice(-6)) // Обрезка строки с конца

console.log(str.slice(-6, -3)) // Обрезка строки с 6 индекса с конца до 3 индекса с конца

console.log('\nПовтор строки при помощи метода repeat')

console.log(str.repeat(3)) // Создает новую строку с повтором

console.log('\nЗамена подстроки в строке при помощи метода replace')

const messageForReplace = 'Я изучаю бэкенд, но я еще не изучал бэкенд'

const messageForReplaceRandomRegister =
  'Я изучаю бЭкЕнД, но я еще не изучал бЭкЕнД'

const messageMobileNumber = '+7 (999) 999-99-99'

// Метод replace() заменяет первое вхождение указанного значения в строке на новое значение.
// Первый аргумент - значение, которое нужно заменить (может быть строкой или регулярным выражением).
// Второй аргумент - новое значение, которое заменит указанное значение.

// Пример: Заменить первое вхождение 'бэкенд' на 'фронтенд'.
console.log(messageForReplace.replace('бэкенд', 'фронтенд')) // 'Я изучаю фронтенд, Я изучаю бэкенд, Я изучаю бэкенд'

// Метод replaceAll() заменяет все вхождения указанного значения в строке на новое значение.
// Первый аргумент - значение, которое нужно заменить (может быть строкой или регулярным выражением).
// Второй аргумент - новое значение, которое заменит указанное значение.

// Пример: Заменить все вхождения 'бэкенд' на 'фронтенд'.
console.log(messageForReplace.replaceAll('бэкенд', 'фронтенд')) // 'Я изучаю фронтенд, Я изучаю фронтенд, Я изучаю фронтенд'

// Пример использования replace() с регулярным выражением для замены всех вхождений 'бэкенд' на 'фронтенд'.
console.log(messageForReplace.replace(/бэкенд/g, 'фронтенд')) // 'Я изучаю фронтенд, Я изучаю фронтенд, Я изучаю фронтенд'

// Пример использования replace() с регулярным выражением для замены всех вхождений 'бэкенд' на 'фронтенд' без учета регистра.
console.log(messageForReplaceRandomRegister.replace(/бэкенд/gi, 'фронтенд')) // 'Я изучаю фронтенд, Я изучаю фронтенд, Я изучаю фронтенд'

// Пример использования replace() с регулярным выражением для замены всех цифр на символ '#'.
console.log(messageMobileNumber.replace(/\d/g, '#')) // '+# (###) ###-##-##'

console.log('\nРазбитие строки на подстроки при помощи метода split')

const strSplit = 'Привет, мир!'

console.log(strSplit.split(', '))
console.log(strSplit.split(''))

// ВСЕ ПЕРЕЧИСЛЕННЫЕ ВЫШЕ МЕТОДЫ НЕ МУТИРУЮТ СТРОКУ, ТО ЕСТЬ НЕ ИЗМЕНЯЮТ ЕЕ

// Задача на проверку введенного пользователем имени

const value = prompt('Введите ваше имя:')

const clearValue = value.trim().toLowerCase()

if (clearValue.length === 0) {
  alert('Ошибка! Имя не может быть пустым.')
}

if (clearValue.includes('админ')) {
  alert('Ошибка! Вы не можете занять это имя.')
}
