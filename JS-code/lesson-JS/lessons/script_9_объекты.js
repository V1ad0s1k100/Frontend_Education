// Способы объявления объектов
const firstEmptyObject = {}
const secondEmptyObject = new Object()

console.log(firstEmptyObject, secondEmptyObject)

const user = {
    // Объект состоить из пар ключ-значение
    login: 'iamsuperhero',
    password: 'qwerty',

    // Если в названии ключа есть пробел или тире, то его обязательно нужно заключать в ковычки 
    'registration date': '01.01.2025',
    'last-auth': '05.04.2024',

    // Функции внутри объектов называют методами
    sayHi: () => console.log('Привет!'),
    'say hi': () => console.log('Привет мир!'),
}

console.log(user, user.login)

// Для вывода значения с ключом содержащим пробел или тире необходимо использовать только следующий метод

console.log(user['registration date'])

// Для вызова метода
user.sayHi()
user['say hi']()

const secondUser = {}

secondUser.name = 'Vladosik'
secondUser['is developer'] = true

console.log(secondUser)

// Изменить значение уже созданного поля
secondUser.name = 'V1ad0s1k'
secondUser['is developer'] = false

console.log(secondUser)


// Удалить свойтво из объекта
delete secondUser.name
delete secondUser['is developer']

console.log(secondUser)

// Манипулировать константным объектом мы можем, а переопределять его нет

// Мы может использовать в качестве значений уже созданные ранее переменные

const firstName = 'Слава'
const age = 20

const thirdUser = {
    name: firstName,
    // Можно упростить запись
    age,
}

console.log(thirdUser)

// Именами свойств всегда будут строки


// Пример записи данных от пользователя в объект

/*
const propName = prompt('Свойство с каким именем добавить в объект?')
const propValue = prompt(`Какое значение записать в свойство ${propName}?`)


const obj = {
    // Для того чтобы назвать ключ свойства как значение переменной
    [propName]: propValue,
}

console.log(obj)

// Проверка на то что свойство присутствует в объекте

console.log([propName] in obj) // true

*/

// For-in специальный цикл для перебора свойств в объекте
console.log('')

console.log('Вывод всех свойств массива при помощи for-in')

const firstObj = {
    name: 'Vladosik',
    age: 20,
    language: 'rus',
    city: 'Krasnoyarsk',
}
 

for (const key in firstObj) {
    console.log(key,': ', firstObj[key])
}

// При прочтении свойств объекта JS сортирует их
console.log('')

const nums = {
    name: 'Vladosik',
    1: 'Первый', 
    3: 'Третий',
    2: 'Второй', 
    age: 20,    
}

for (const num in nums) {
    console.log(nums[num])
}

console.log(nums)