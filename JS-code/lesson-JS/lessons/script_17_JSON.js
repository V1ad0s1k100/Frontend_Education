const user = {
  name: 'Vladosik',
  age: 17,
  city: 'Красноярск',
  adress: {
    street: 'ул. Пушкина, д. 1, кв. 1',
    zipcode: 123456,
  },
  todos: ['sleep', 'eat', 'work', 'train', 'learn'],
  hasCat: false,
  yacht: null,
  toString() {
    return `{ name: "${this.name}", age: "${this.age}" ...}`
  },
}

// Преобразуем объект user в строку с помощью метода toString, определённого в объекте.
// Данный метод возвращает строковое представление объекта, которое можно вывести.
let userDataAsString = user.toString()

// Выводим сообщение, информирующее, что данные представлены в виде строки через метод toString.
console.log('Вывод данных в виде строки благодаря написанному методу toString')

// Выводим строку, полученную методом toString.
console.log(userDataAsString)

// Вывод новой строки для разделения частей вывода.
console.log('\nТот же вывод, но благодаря JSON.stringify()')

// Преобразуем объект user в строку в формате JSON с помощью метода JSON.stringify.
// В отличие от метода toString, JSON.stringify сохраняет структуру объекта,
// однако не включает функции и другие не-данные свойства.
userDataAsString = JSON.stringify(user)

// Выводим JSON-строку, представляющую объект user.
console.log(userDataAsString)

// Вывод новой строки для разделения частей вывода.
console.log('\n Распарсинг строки благодаря JSON.parse()')

// Преобразуем JSON-строку обратно в объект с помощью метода JSON.parse.
// Это позволяет восстановить исходную структуру объекта из строки.
userDataAsString = JSON.parse(userDataAsString)

// Выводим объект после парсинга строки JSON.
console.log(userDataAsString)

// Однако, если передать в JSON.parse строку с ошибками или невалидным форматом, будет выброшено исключение

// console.log(
//   JSON.parse(`{
//     "name": "Vladosik",
//     "age": 17,
//     "city": "Красноярск",
//     "adress": {
//       "street": "ул. Пушкина, д. 1, кв. 1",
//       "zipcode": 123456
//     },
//     "todos": ["sleep", "eat", "work", "train", "learn"],
//     "hasCat": false,
//     "yacht": null,
//   }`),
// )

const uniqueUser = {
  name: 'Vladosik',
  age: 17,
  sayHi() {
    console.log(`Привет, ${this.name}`)
  },
  car: undefined,
}

console.log(
  '\nесли какое-либо свойство объекта имеет значение undefined или представляет собой метод (функцию), то такое свойство не будет включено в итоговую JSON-строку',
)

// Преобразование объекта uniqueUser в строковый формат JSON.
// Функция JSON.stringify обходит все свойства объекта uniqueUser и формирует строку,
// соответствующую спецификации JSON. Свойства со значением undefined или являющиеся функциями,
// автоматически исключаются из результата.
userDataAsString = JSON.stringify(uniqueUser)

// Вывод итоговой строки JSON в консоль для проверки содержимого.
console.log(userDataAsString)
