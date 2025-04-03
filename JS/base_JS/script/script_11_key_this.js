/*Этот код выводит в консоль значение `this` в глобальном контексте. В глобальной области выполнения `this` ссылается на
глобальный объект (например, `window` в браузере) */

console.log('this глобальный: ', this)

const user1 = {
    name: 'Vladosik',
    age: 17,
    // Метод для вывода значения `this` и имени пользователя
    logThis: function() {
        console.log('this в теле метода объекта user: ', this)
        console.log('this.name:', this.name)
    },
    address: {
        city: 'Москва',
        zipcode: 123456,
        // Можно использовать сокращенный вид записи функции
        logInnerThis() {
            console.log('Внутренний this:', this)
            console.log('this.city:', this.city)
        }
    },
    travelTime: {
        there: '12.12.2024',
        backwardly: '12.12.2025',
        // Стрелочная функция ссылается не на объект, в котором находится, а на глобальную область
        logArrowFunctionThis: () => {
            console.log('this вместе со стрелочной функцией:', this)
        }
    }
}

user1.logThis()
console.log('')
user1.address.logInnerThis()
console.log('')
user1.travelTime.logArrowFunctionThis()



const user2 = { 
    name: 'Миша', // Имя пользователя Миша
}

const user3 = {
    name: 'Вася', // Имя пользователя Вася
}

// Функция для вывода контекста `this` и имени пользователя
function logInfo () {
    console.log(this)          // Выводит текущий объект, на котором вызвана функция
    console.log(this.name)    // Выводит свойство `name` текущего объекта
}

console.log('')
logInfo() // Вызов функции в глобальном контексте

user2.logInfo = logInfo // Присваиваем функцию logInfo объекту user2
user3.logInfo = logInfo // Присваиваем функцию logInfo объекту user3

user2.logInfo() // Вызов функции от объекта user2
console.log('')
user3.logInfo() // Вызов функции от объекта user3


console.log('')


const calculator = {
    // Метод для чтения значений a и b с помощью prompt
    read() {
        // Происходит запись переменных со значениями переменных 
        this.a = +(prompt('Введите значение переменной a', 0))
        this.b = +(prompt('Введите значение переменной b', 0))
    },
    // Метод для вычисления суммы a и b
    sum() {
        return this.a + this.b
    },
    // Метод для вычисления произведения a и b
    mul() {
        return this.a * this.b
    },
}

/* calculator.read()
alert(calculator.sum())
alert(calculator.mul()) */


console.log('')

const ladder = {
    step: 0,
    up() {
        this.step++
        return this
    },
    down() {
        this.step--
        return this
    },
    showStep() {
        console.log('Текущая ступенька:', this.step)
        return this
    }
}

ladder.up().down().up().down().down().showStep().up().down().up().down().down().showStep()