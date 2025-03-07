/* Function declaration метод записи функции */

function logHello() {
    console.log('Привет')
}

// Функция не выполнится, пока не будет вызвана
logHello()

console.log('')

const message = 'Глобальный привет!'

/**
 * Функция logMessage демонстрирует использование локальной переменной.
 * 
 * Внутри функции создается переменная message, которая доступна только в пределах этой функции.
 * Это пример локальной области видимости переменной.
 * Переменная message не доступна за пределами функции logMessage.
 */

function logMessage() {
    const message = 'Локальный привет!'
    console.log(message)
}

logMessage()

console.log('')

console.log(message)



console.log('')


// В функции мы используем параметры, переданные при вызове функции
function logMessageInfoCount(message, count) {
    for(let i = 0; i < count; i++) {
        console.log(message)
    }
}

// При вызове функции мы передаем аргументы
logMessageInfoCount('Привет', 10)



console.log('')




// Еще один пример области видимости переменных
// Также не рекомендуется изменять глобальные переменные в функции, если они ей не были переданы

const messageLog = 'Привет'

function logMessageInfo(message, count /* Внутри скобок параметры объявляются как let переменные, поэтому при использовании их в функции не обязательно указывать тип переменной */) {
    messageLog = `(((${message})))`
    for(let i = 0; i < count; i++) {
        console.log(messageLog)
    }
}

logMessageInfo('Привет', 10)
console.log(messageLog)



console.log('')


// Функция с правильно названными переменными

const globalMassage = 'Привет'

function logMessageInfo(message, count = 4 /* Задаем значение по умолчанию. В случае если не был передан необходимый аргумент, то параметр примет значение по умолчанию */) {
    const messageFormatted = `(((${message})))`
    for(let i = 0; i < count; i++) {
        console.log(messageFormatted)
    }
}

logMessageInfo('Привет')

console.log(globalMassage) // Если хотим вызвать функцию и задать только второй аргумент, то пишем: console.log(undefined, "второй аргумент")
// Если значений по умолчанию много, а параметр с заданным значением все-таки имеется, то следует поместить его в начало при объявлении параметров, чтобы не писать множество undefined перед параметром, заданным не по умолчанию



// Функция с явным возвратом значения

function sum(a, b) {
    return a + b
    // Значения ниже return никогда не будут выведены, поскольку они return возвращает значание функции и обрывает ее выполнение
    console.log('Привет!')
    console.log('Мир!')
}

console.log(sum(100, 200))


// Функция с не явным возвратом значения

function Sum(a, b) {
    a + b
}

console.log(Sum(100, 200))


console.log('')


function getAgeType(age) {
    if (typeof age !== 'number') {
        return 'Возраст указан неверно'
    }

    if (age < 1 || age > 125) {
        return 'Такого возраста не может быть!'
    }

     if (age < 18) {
        return 'Несовершеннолетний'
     }

     return 'Взрослый'
}


console.log(getAgeType(20))
console.log(getAgeType(-20))
console.log(getAgeType(10))
console.log(getAgeType('Привет'))

function helloMessage(name) {

    /* if (!name): Здесь используется оператор отрицания !, который инвертирует логическое значение переменной name. Если name имеет ложное значение (например, null, undefined, пустая строка "", число 0, NaN или false), то выражение !name будет истинным.
    
    return: Если условие if (!name) истинно, то выполнение функции прерывается и управление возвращается вызывающему коду. Это означает, что дальнейший код функции не будет выполнен. 
    */

    if (!name) return
    return `О, привет ${name}`
}

console.log(helloMessage('Вася'))