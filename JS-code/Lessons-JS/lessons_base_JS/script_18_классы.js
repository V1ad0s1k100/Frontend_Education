// Создание класса Student (Студент)
// Имена классов всегда начинаются с заглавной буквы
// Класс — это шаблон для создания объектов
class Student {
  // Приватное поле для хранения названия города
  #city = null

  // Поля доступны везде
  planet = 'Земля'
  country = 'Россия'
  region // region не инициализирована

  // Конструктор вызывается при создании нового экземпляра класса
  constructor(name, age) {
    // Присваиваем переданные параметры в объект
    this.name = name
    this.age = age

    // Вызов приватного метода для выполнения секретного действия
    this.#someSecretAction()
  }

  // Метод для вывода возраста студента в консоль
  logAge() {
    console.log(`Возраст студента "${this.name}": `, this.age)
  }

  // Сеттер для свойства city
  // Здесь осуществляется кастомизация: первая буква становится заглавной, остальное — строчными
  set city(value) {
    this.#city = `${value[0].toUpperCase()}${value.slice(1).toLowerCase()}`
  }

  // Геттер для свойства city, возвращает строку с названием города
  get city() {
    return `г. ${this.#city}`
  }

  // Приватный метод, который инкрементирует возраст
  #someSecretAction() {
    return this.age++
  }
}

// Создание экземпляров класса Student
const firstStudent = new Student('Вася', 25)
const secondStudent = new Student('Петя', 18)

// Вывод созданных объектов в консоль с понятными подписями
console.log('Объект первого студента: ', firstStudent)
console.log('Объект второго студента: ', secondStudent)

// Вызов метода logAge для вывода возраста студентов
firstStudent.logAge()
secondStudent.logAge()

console.log('\n--- Работа с геттером и сеттером ---')

// Использование сеттера для установки города первому студенту
firstStudent.city = 'красноярск'

// Использование геттера для получения города
console.log('Город первого студента: ', firstStudent.city)
// Вывод возраста первого студента после вызова приватного метода в конструкторе
console.log('Возраст первого студента: ', firstStudent.age)

console.log('\n====================================\n')

// Создание базового класса Person (Человек)
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  // Метод, имитирующий процесс еды
  eat() {
    console.log(`${this.name} ест...`)
  }
  // Метод, имитирующий процесс сна
  sleep() {
    console.log(`${this.name} спит...`)
  }
}

// Создание экземпляра класса Person
const examplePersone = new Person('Василий', 30)

// Вывод имени и возраста экземпляра Person в консоль
console.log('Информация о человеке:')
console.log('Имя: ', examplePersone.name)
console.log('Возраст: ', examplePersone.age)

// Вызов методов eat и sleep для объекта Person
examplePersone.eat()
examplePersone.sleep()

console.log('\n====================================\n')

// Создание класса Developer, который наследует свойства и методы Person
class Developer extends Person {
  // Конструктор принимает дополнительные параметры
  constructor(name, age, experience) {
    // Вызов конструктора родительского класса с именем
    super(name)
    // Приведение возраста в виде строки с подписью "лет"
    this.age = `${age} лет`
    // Приведение опыта работы в виде строки с подписью "лет"
    this.experience = `${experience} лет`
  }

  // Метод, имитирующий процесс написания кода
  writeCode() {
    console.log(`${this.name} пишет код...`)
  }

  // Переопределённый метод sleep, изменяющий поведение при вызове
  sleep() {
    console.log(`${this.name} не хочет спать, пойду ещё попишу код...`)
    this.writeCode()
  }
}

console.log('Демонстрация работы класса Developer:')

// Создание экземпляра Developer
const exampleDeveloper = new Developer('Василий', 30, 5)

// Вывод информации о разработчике с подписями
console.log('Имя разработчика: ', exampleDeveloper.name)
console.log('Возраст разработчика: ', exampleDeveloper.age)
console.log('Опыт работы разработчика: ', exampleDeveloper.experience)

// Вызов методов у объекта Developer
exampleDeveloper.eat() // унаследованный метод eat из Person
exampleDeveloper.sleep() // переопределённый метод sleep из Developer

console.log('\n====================================\n')

// Создание класса JavaScriptDeveloper, наследующего от Developer
class JavaScriptDeveloper extends Developer {
  // Метод для имитации разработки фронтенда
  makeFrontend() {
    console.log(`${this.name} пишет фронтенд...`)
  }

  // Переопределение метода eat с вызовом родительского метода и дополнительным действием
  eat() {
    // Вызов eat из родительского метода Person через prototype chain
    super.eat()
    console.log(`${this.name} смотрит ютуб...`)
  }
}

console.log('Демонстрация работы класса JavaScriptDeveloper:')

// Создание экземпляра JavaScriptDeveloper
const JavaScriptExample = new JavaScriptDeveloper('Владислав', 17)

// Вывод объекта в консоль с подписью
console.log('Объект JavaScript-разработчика: ', JavaScriptExample)
console.log('\nВызов метода eat для JavaScriptDeveloper:')
JavaScriptExample.eat()
