console.log( sum(1, 3))

/* function declaration */
/* Такую функцию можно вызывать до ее объявления */
function sum(a, b) {
    return a + b
}

function logMessage() {
    console.log('Привет!')
}

logMessage()

function logMessage() {
    console.log('Пока!')
}

logMessage()

/**
 * Выводит все переданные аргументы в консоль.
 * 
 * @function
 * @name logAll
 * @param {...*} arguments - Аргументы, которые будут выведены в консоль.
 */
function logAll() {
    console.log(arguments)
}

logAll(false, 555, 'String')

/* Function expretion */

/*logHello() нельзя вызвать до объявления*/

let logHello = function() {
    console.log('Hello!')
}

logHello()

logHello = function() {
    console.log('Пока')
}

logHello()

/* Arrow function */

/*LogHello() нельзя вызвать до объявления*/

const LogHello = () => {
    console.log('Привет!')
    /* Не имеет доступ к arguments Выдаст ошибку --> console.log(arguments) */
}

LogHello()


/* Копирование функции */
const fn1 = () => {
    console.log('Я функция!')
}

const fn2 = fn1

fn2()


/* Callback function */
const LogMessage = (actionBefore, actionAfter) => {
    actionBefore()
    console.log('Привет!')
    actionAfter()
}

LogMessage(
    () => console.log('before'), 
    () => console.log('after')
)


/* Функция может передавать другие функции */

const validate = (hasAccess) => {
    if(hasAccess) {
        return () => console.log('Доступ разрешен :)')
    }

    else {
        return () => console.log('Доступ запрещен :(')
    }
}

const validateMessage = validate(false)
validateMessage()

/* Название функции всегда должно начинаться с глагола и состоять из двух и более слов */

/* Функция не должна делать то, что от нее не ождают */

const getPi = () => {
    /* alert('Какой-то текст') */ // Лишнее действие

    return 3.14
}

console.log( getPi() )