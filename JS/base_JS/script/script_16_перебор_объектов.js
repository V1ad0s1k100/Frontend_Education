// Объект user с данными пользователя. Ключи – свойства, значения – данные.
const user = {
  name: 'Владислав',
  age: 17,
  city: 'Красноярск',
}

// Перебор объекта с помощью цикла for-in
for (const key in user) {
  // Выводим имя свойства
  console.log('Имя свойства: ', key)
  // Выводим значение свойства, используя динамический доступ через переменную key
  console.log('Значение свойства: ', user[key])
}

console.log('\n')

// Получаем массив ключей объекта user с помощью Object.keys
const userKeys = Object.keys(user)
// Получаем массив значений объекта user с помощью Object.values
const userValues = Object.values(user)

// Выводим массив ключей в консоль
console.log('Массив ключей:', userKeys)
// Выводим массив значений в консоль
console.log('Массив значений:', userValues)

console.log('\n')

// Перебор массива значений методом forEach
userValues.forEach((element_1) => {
  console.log('Имя свойства: ', element_1)
})

console.log('\n')

// Перебор массива ключей методом forEach
userKeys.forEach((element) => {
  console.log('Значение свойства: ', element)
})

console.log('\n')

// Метод Object.entries возвращает массив из вложенных массивов вида [ключ, значение]
const userEntries = Object.entries(user)
console.log('userEntries: ', userEntries)

// Обходим каждый вложенный массив и выводим ключи и значения
userEntries.forEach(([key, value]) => {
  console.log('Имя свойства: ', key)
  console.log('Значение свойства: ', value)
})

// Преобразуем каждую пару ключ-значение в пару с измененным форматом:
// ключ в верхнем регистре, значение обернуто символами ~~
const userEntriesFormatted = userEntries.map(([key, value]) => {
  return [key.toUpperCase(), `~~${value}~~`]
})

console.log('\n')
console.log('Отформатированные пары ключ-значение:', userEntriesFormatted)

// Преобразуем массив отформатированных пар обратно в объект
const userFormatted = Object.fromEntries(userEntriesFormatted)
console.log('Отформатированный объект:', userFormatted)

console.log('\n')

// Создаем новую коллекцию Map, где можно использовать ключи различных типов
const data = new Map()

// Устанавливаем пары ключ-значение в коллекции Map
data.set(1, 'Один как число')
data.set('1', 'Один как строка')

console.log('Коллекция Map data:', data)
// Вывод значения по ключу 1 (число) и '1' (строка)
console.log('data.get(1):', data.get(1))
console.log("data.get('1'):", data.get('1'))

// Проверка наличия свойства name (переменная name не определена, поэтому далее используется строка для демонстрации)
// Здесь возможно возникнет ошибка, если переменная name не объявлена.
// Лучше использовать строку, например 'name'
// console.log(data.has(name))
console.log("Проверка наличия ключа 'name' в Map:", data.has('name'))

// Добавляем пару, где ключ – строка 'name'
data.set('name', 1)
console.log('Map после добавления ключа "name":', data)

// Проверяем наличие ключа 'name'
console.log('Проверка наличия ключа "name":', data.has('name'))
console.log(`Длина коллекции: ${data.size}`)

// Удаляем пару с ключом 'name'
data.delete('name')
console.log('Map после удаления ключа "name":', data)

console.log('')

// Выводим итераторы ключей, значений и пар (entries)
console.log('keys: ', data.keys())
console.log('values: ', data.values())
console.log('entries: ', data.entries())

console.log('\n'.repeat(3))

// Перебор ключей Map с помощью цикла for-of
for (const key of data.keys()) {
  console.log('key: ', key)
}

// Перебор значений Map
for (const value of data.values()) {
  console.log('value: ', value)
}

// Перебор ключ-значений Map
for (const entry of data.entries()) {
  console.log('entry: ', entry)
}

console.log('\n'.repeat(3))

// Метод forEach для Map. Объявлены три параметра: значение, ключ и сама Map.
data.forEach((value, key, map) => {
  console.log('key: ', key)
  console.log('value: ', value)
  console.log('map: ', map)
  console.log('\n')
})

// Очищаем всю коллекцию Map
data.clear()
console.log('Map после очистки:', data)

console.log('\n')

// Преобразование объекта user в Map с помощью Object.entries
const map = new Map(Object.entries(user))

// Добавляем новые пары в Map с числовым и строковым ключом
map.set(1, 'Имя свойства в виде числа')
map.set('1', 'Имя свойства в виде строки')
console.log('Map после добавления новых пар:', map)

// Преобразуем Map обратно в объект с помощью Object.fromEntries
const obj = Object.fromEntries(map)
console.log(
  'Объект, полученный из Map:',
  obj,
  'Количество свойств:',
  Object.keys(obj).length,
)

console.log('\n')

// Создаем коллекцию Set, которая хранит уникальные значения. Дубликаты автоматически отбрасываются.
const set = new Set([1, 2, 3, 4, 5, 5])
console.log('Коллекция Set:', set)

console.log('\nСравнение массива и коллекции Set \n')

// Создание массива с дублирующимися значениями строки
const arr = []
const set_1 = new Set()

arr.push('Владислав')
arr.push('Владислав')
arr.push('Владислав')

// Добавление дублирующих значений в Set
set_1.add('Владислав')
set_1.add('Владислав')
set_1.add('Владислав')

console.log('Массив с дубликатами:', arr)
console.log('Set с уникальными значениями:', set_1)

// Комментарий:
// Все методы коллекции Map поддерживаются и в коллекции Set, однако у Set нет ключей.
// При переборе Set с помощью for-of разницы между keys и values нет, так как каждый элемент является как ключом, так и значением.
// Использование метода entries возвращает пары с повторяющимися значениями внутри массива.
