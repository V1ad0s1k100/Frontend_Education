// Выводим в консоль объект document
// console.log(document)

// Выводим в консоль элемент head
// console.log('Отдельно шапка сайта: ', document.head)

// Выводим в консоль весь HTML-документ
// console.log('Отдельно весь сайт целиком: ', document.documentElement)

// Если элемент находится в head, то он может быть не загружен, и мы получим null
// Решения:
// 1) Поместить скрипт в конец body
// 2) Добавить к скрипту атрибут defer
console.log('Отдельно тело сайта: ', document.body)

// Атрибут async используется для асинхронной загрузки скриптов
// Скрипт загружается параллельно с другими элементами страницы
// Выполнение скрипта начинается сразу после его загрузки
// Порядок выполнения скриптов с async не гарантируется

// Поиск родительского элемента для body
console.log('\nРодительский элемент над <body>: ', document.body.parentElement)

// Поиск соседнего элемента перед body
console.log('\nСоседний элемент перед <body>: ', document.body.previousElementSibling)

// Поиск соседнего элемента после body
console.log('\nСоседний элемент после <body>: ', document.body.nextElementSibling)

// Поиск дочерних элементов body
console.log('\nСписок дочерних элементов <body>: ', document.body.children)

// Пример актуальности коллекции дочерних элементов
let bodyChildren = document.body.children
console.log('\nСписок дочерних элементов <body>: ', bodyChildren)

// Добавление нового элемента в конец body
const newButtonElement = document.createElement('button')
document.body.appendChild(newButtonElement)
console.log('\nСписок дочерних элементов <body> после добавления кнопки: ', bodyChildren)

// Преобразование HTML коллекции в массив и перебор элементов
const bodyChildrenArray = [...bodyChildren].forEach((el) => console.log(el))

// Пример обращения к элементам коллекции по индексу
console.log('\nПервый элемент в коллекции <body>: ', bodyChildren[0])

bodyChildren = document.body.children[0]

console.log('\nЗаметка <div>: ', bodyChildren)
console.log('\nПервый дочерний элемент внутри <div>: ', bodyChildren.firstChild)
console.log('\nПоследний дочерний элемент внутри <div>: ', bodyChildren.lastChild)

// Поиск родительского узла для html
const elementHTML = document.documentElement
console.log('\nЗаметка <html>: ', elementHTML)
console.log('\nРодительский узел для <html> через parentNode: ', elementHTML.parentNode)
console.log('\nРодительский узел для <html> через parentElement: ', elementHTML.parentElement)

// Отличие parentNode и parentElement
// parentElement возвращает только DOM-узлы, parentNode возвращает любые узлы

const divElement = document.body.children[0]

console.log('Соседний элемент перед <div> при помощи previousElementSibling: ', divElement.previousElementSibling)
console.log('Соседний элемент перед <div> при помощи previousSibling: ', divElement.previousSibling)

console.log('Соседний элемент после <div> при помощи nextElementSibling: ', divElement.nextElementSibling)
console.log('Соседний элемент после <div> при помощи nextSibling: ', divElement.nextSibling)

console.log('Первый дочерний элемент внутри <div> при помощи firstElementChild: ', divElement.firstElementChild)
console.log('Первый дочерний элемент внутри <div> при помощи firstChild: ', divElement.firstChild)

console.log('Последний дочерний элемент внутри <div> при помощи lastElementChild: ', divElement.lastElementChild)
console.log('Последний дочерний элемент внутри <div> при помощи lastChild: ', divElement.lastChild)

console.log('Дочерние узлы внутри <div>: ', divElement.childNodes)