// Исходные данные
const data = ['Vlad0s1k', 17]

// Старый метод деструктуризации
const nameOne = data[0]
const ageOne = data[1]

// Новый метод деструктуризации
// При деструктуризации массивов важен порядок переменных в квадратных скобках
const [nameTwo, ageTwo] = data

// Выводим результаты старого метода деструктуризации
console.log('Старый метод деструктуризации:')
console.log('Name: ', nameOne)
console.log('Age: ', ageOne)

// Выводим результаты нового метода деструктуризации
console.log('\nНовый метод деструктуризации:')
console.log('Name: ', nameTwo)
console.log('Age: ', ageTwo)

// Исходный массив для перебора
const letters = ['A', 'B', 'C', 'D', 'B']

console.log('\nПеребор массивов')

// Перебор массива с использованием цикла for
console.log('Перебор с использованием цикла for:')
for (let index = 0; index < letters.length; index++) {
  console.log(letters[index])
}

console.log('')

// Перебор массива с использованием метода forEach
console.log('Перебор с использованием метода forEach:')
letters.forEach((element, index, array) => {
  console.log('Элемент:', element) // Выводим текущий элемент
  console.log('Индекс:', index) // Выводим индекс текущего элемента
  console.log('Массив:', array) // Выводим весь массив
  console.log('') // Пустая строка для разделения вывода
})

// Выводим индекс первого вхождения элемента 'B' в массиве letters
console.log('Индекс первого вхождения элемента "B":', letters.indexOf('B'))

// Проверяем наличие элемента 'G' в массиве letters
console.log(
  'Индекс элемента "G" (если -1, то элемент не найден):',
  letters.indexOf('G'),
)

console.log('')

// Выводим индекс первого вхождения элемента 'B' в массиве letters, начиная с индекса 2
console.log(
  'Индекс первого вхождения элемента "B", начиная с индекса 2:',
  letters.indexOf('B', 2),
)

// Поиск ведется с конца массива, а не с начала
console.log(
  'Индекс последнего вхождения элемента "B":',
  letters.lastIndexOf('B'),
)
console.log(
  'Индекс последнего вхождения элемента "B", начиная с индекса 2:',
  letters.lastIndexOf('B', 2),
)

console.log('')

const users = [
  {
    name: 'Владимир',
    age: 16,
  },
  {
    name: 'Владислав',
    age: 17,
  },
  {
    name: 'Владислав',
    age: 17,
  },
  {
    name: 'Владислав',
    age: 17,
  },
  {
    name: 'Андрей',
    age: 18,
  },
]

// Используем метод findIndex для поиска индекса пользователя с именем 'Владислав'
console.log(
  users.findIndex((user /*element, index, array*/) => {
    if (user.name === 'Владислав') {
      return true
    }
  }),
)

// Выводим индекс пользователя с именем 'Владислав' с использованием стрелочной функции
console.log(users.findIndex((user) => user.name === 'Владислав'))

// Выводим индекс пользователя с именем 'Владислав' с использованием деструктуризации
console.log(users.findIndex(({ name }) => name === 'Владислав'))

// Используем метод findLastIndex для поиска последнего индекса пользователя с именем 'Владислав'
console.log(users.findLastIndex((user) => user.name === 'Владислав'))

// Выводим комментарии в консоль
console.log(
  'Используем метод findIndex для поиска индекса пользователя с именем "Владислав"',
)

console.log('')

// Для проверки не требующей индекса элемента можно воспользоваться методом includes

// Проверяем наличие элемента 'B' в массиве letters, начиная с индекса 5
console.log(
  'Наличие элемента "B" в массиве letters, начиная с индекса 5:',
  letters.includes('B', 5),
)

// Проверяем наличие пользователя с именем 'V1ados1k' в массиве users
console.log(
  'Наличие пользователя с именем "V1ados1k" в массиве users:',
  users.some((user) => user.name === 'V1ados1k'),
)

console.log('')

// Проверяем, все ли пользователи старше или равны 18 годам
console.log(
  'Все ли пользователи старше или равны 18 годам:',
  users.every((user) => user.age >= 18),
)

// Проверяем, все ли пользователи старше или равны 16 годам
console.log(
  'Все ли пользователи старше или равны 16 годам:',
  users.every((user) => user.age >= 16),
)

console.log('')

console.log(users.find((user) => user.name === 'Владислав'))

console.log(users.filter((user) => user.name === 'Владислав'))

const users_One = [
  {
    name: 'Александр',
    surname: 'Пупкин',
    age: 28,
    city: 'Москва',
  },
  {
    name: 'Владислав',
    surname: 'Любимов',
    age: 17,
    city: 'Красноярск',
  },
  {
    name: 'Михаил',
    surname: 'Литвин',
    age: 30,
    city: 'Москва',
  },
  {
    name: 'Михаил',
    surname: 'Литвин',
    age: 35,
    city: 'Санкт-Петербург',
  },
  {
    name: 'Михаил',
    surname: 'Красавицкий',
    age: 35,
    city: 'Санкт-Петербург',
  },
  {
    name: 'Иван',
    surname: 'Подберезовкин',
    age: 15,
    city: 'Норильск',
  },
  {
    name: 'Иван',
    surname: 'Златовласкин',
    age: 15,
    city: 'Красноярск',
  },
]

console.log('')

// Фильтруем пользователей, которые живут в Москве и старше или равны 18 годам

console.log(
  'Пользователи, которые живут в Москве и старше или равны 18 годам:',
  users_One.filter(({ city, age }) => {
    return city === 'Москва' || age >= 18
  }),
)

// Форматируем пользователей в строку с помощью метода map
const usersFormated = users_One.map((user) => {
  return `${user.name} ${user.surname}, ${user.age} лет, живет в городе ${user.city}`
})
console.log('Форматированные пользователи:', usersFormated)
console.log('Исходный массив пользователей:', users_One)

// Если нам необходимо выполнить какие-либо манипуляции с элементами массива и если при этом необходимо аккумулировать информацию после предыдущей итерации при переборе, то стоит использовать метод reduce

// Суммируем возраст всех пользователей с помощью метода reduce
const ageSum = users_One.reduce((sum, { age }) => {
  console.log('Текущий возраст:', age)
  return sum + age
}, 0)

console.log('Сумма возрастов всех пользователей:', ageSum)

console.log('')

// Суммируем возраст всех пользователей с конца массива с помощью метода reduceRight
const ageSumRight = users_One.reduceRight((sum, { age }) => {
  console.log('Текущий возраст (с конца):', age)
  return sum + age
}, 0)

console.log('Сумма возрастов всех пользователей (с конца):', ageSumRight)

// Выводим средний возраст пользователей
console.log(
  `Средний возраст пользователей в массиве users_One составляет ${
    ageSum / users_One.length
  } лет`,
)

console.log('')

// Создаем массив чисел от 1 до 20
let arrNumber = []

for (let i = 1; i < 21; i++) {
  arrNumber.push(i)
}

console.log('Массив чисел от 1 до 20:', arrNumber)

// Метод reverse переворачивает массив при этом меняя исходный
const arrNumberCloneOne = [...arrNumber].reverse()

console.log(
  'Перевернутый массив чисел без изменения исходного:',
  arrNumberCloneOne,
)

console.log('Исходный массив после переворота:', arrNumber)

const arrNumberCloneTwo = arrNumber.reverse()

console.log(
  'Перевернутый массив чисел с изменением исходного:',
  arrNumberCloneTwo,
)
console.log('Исходный массив после переворота:', arrNumber)

console.log('')

// Создаем массив чисел от 1 до 20 в случайном порядке
let randomNumbers = [
  5, 12, 8, 1, 14, 3, 19, 7, 10, 2, 17, 6, 11, 4, 16, 9, 15, 13, 18, 20,
]

console.log('Массив чисел от 1 до 20 в случайном порядке:', randomNumbers)

// Метод sort сортирует массив при этом меняя исходный
const sortedNumbersClone = [...randomNumbers].sort((a, b) => a - b)

console.log(
  'Отсортированный массив чисел без изменения исходного:',
  sortedNumbersClone,
)

console.log('Исходный массив после сортировки:', randomNumbers)

const sortedNumbers = randomNumbers.sort((a, b) => a - b)

console.log(
  'Отсортированный массив чисел с изменением исходного:',
  sortedNumbers,
)
console.log('Исходный массив после сортировки:', randomNumbers)

// Прокомментируй на русском и составь вывод комментариев в консоль вместе с выводом данных
