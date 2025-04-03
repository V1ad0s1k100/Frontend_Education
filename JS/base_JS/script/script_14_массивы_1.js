// Элементы массива схожи парами свойств:значение в объектах. И при выводе в консоль отобразиться, что массив является объектом и каждое его свойство названно в виде чисел начинаю с 0 и оно называется индексом

// Способы объявления массивов
const arr = [
  'Привет',
  100,
  true,
  { name: 'Vladosik' },
  [true, true, true],
  () => console.log('Хахах'),
]
const arrAdd = new Array()

console.log('arr:', arr)
console.log('type arr:', typeof arr)

console.log('\nВывод значений из массива')

console.log(arr[0])
console.log(arr[1])
console.log(arr[999])
console.log(arr[-1])

// Вывод значений из объекта, находящегося в массиве
console.log(arr[3]['name'])
console.log(arr[3].name)

// Вызов функции, находящейся в массиве
arr[5]()

// Вывод элемента из вложенного массива
console.log(arr[4][0])

console.log('\nВывод многомерных массивов')

// Массив, в котором вложенны другие массивы, называется многомерным
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

console.log(matrix[1][0])

// Изменение значения у элемента массива
matrix[1][0] = 100
console.log(matrix[1][0])

// Если присвоить значение элементу, которого не существует, то будет создан новый элемент с этим значением
matrix[1][99] = 100
console.log(matrix)

console.log('Matrix length: ', matrix.length)

// Вывод последнего элемента массива при помощи length
arr[arr.length - 1]()
arr.at(-1)()

console.log('\nИзменение массива при помощи методов')

// Добавление элементов в массив

const letters = ['А', 'Б', 'В']
console.log('letters before: ', letters)

// Добавление элемента в конец
letters.push('Г', 'Д')
console.log('letters push: ', letters)

// Добавление элемента в конец
letters.unshift('А1')
console.log('letters unshift: ', letters)

// Удаление элементов из массива

// Удаление элемента с конца
letters.pop() // Метод удаляет элемент из массива и сохраняет его
console.log('letters pop: ', letters)

// Удаление элемента с конца
letters.shift() // Метод удаляет элемент из массива и сохраняет его
console.log('letters shift: ', letters)

console.log('\nДругие методы применяемые к массивам')

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Преобразование всех элементов массива в единую строку
console.log(
  numbers.toString(),
  'typeof:',
  (typeof numbers.toString()).toUpperCase(),
)

console.log(arr.toString(), 'typeof:', (typeof arr.toString()).toUpperCase())

// Для таких операций чаще используют метод join

// Метод join объединяет все элементы массива в одну строку, используя указанный разделитель.

// В данном случае, элементы массива numbers будут объединены в строку с разделителем '-ый, '.
console.log(numbers.join('-ый, '))

// В этом случае, элементы массива numbers будут объединены в строку с разделителем ', '.
console.log(numbers.join(', '))

// Часто join используется вместе со split для того, чтобы сделать из массива строку

const message = 'Один, два, три, четыре, пять'

console.log(message.split(', ').join(', '))

console.log('\nКопирование массивов')

const arr1 = ['A', 'Б', 'В'] // Создаем массив arr1
const arr2 = arr1 // arr2 ссылается на тот же массив, что и arr1
const arr3 = [] // Создаем новый пустой массив arr3. Ссылка становится независимой от arr1
const arr4 = [...arr1] // Копирование при помощи spret оператора. Ссылка становится независимой от arr1
let arr5 = arr1.slice()

console.log('arr1:', arr1)
console.log('arr2:', arr2)

for (let i = 0; i < arr1.length; i++) {
  arr3.push(arr1[i]) // Копируем элементы из arr1 в arr3
}

arr3[0] = '_' // Изменяем первый элемент в arr3
arr4[1] = '_' // Изменяем второй элемент в arr4
arr5[1] = '_' // Изменяем второй элемент в arr5

console.log('arr3:', arr3)
console.log('arr4:', arr4)

console.log('\nМетод slice')

console.log('arr5:', arr5)
arr5 = arr1.slice(0, 2)
console.log('arr5:', arr5)
arr5 = arr1.slice(-1)
console.log('arr5:', arr5)

console.log('\nОбъединение нелькольких массивов')

const joinArr1 = ['А', 'Б']
const joinArr2 = ['В', 'Г']
const joinArr3 = ['Д', 'Е']

let totalArr = [...joinArr1, ...joinArr2]
console.log(totalArr)

totalArr = joinArr1.concat(joinArr2, joinArr3) // Объединяет 1, 2 и 3 массив и записывает в totaLArr

console.log(totalArr)

console.log('\nПроверка на равенство двух массивов')

const checkArray1 = [1, 2, 3, 4, 5, [1, 2, 3, 4, 5, 6]]
const checkArray2 = [1, 2, 3, 4, 5, [1, 2, 3, 4, 5, 6]]

const areArrayEqual = (array1, array2) => {
  if (array1.length !== array2.length) {
    return false
  }

  for (let i = 0; i < array1.length; i++) {
    // areArrayEqual(array1[i], array2[i]) рекурсивный вызов функции

    // Array.isArray() проверяет является ли сущность (в скобках) массивом
    if (Array.isArray(array1) && Array.isArray(array1)) {
      if (!areArrayEqual(array1[i], array2[i])) {
        return false
      } else {
        continue
      }
    }

    if (array1[i] !== array2[i]) {
      return false
    }
  }
  return true
}

console.log(
  areArrayEqual(joinArr1, joinArr2),
  areArrayEqual(arr1, arr2),
  areArrayEqual(checkArray1, checkArray2),
)
