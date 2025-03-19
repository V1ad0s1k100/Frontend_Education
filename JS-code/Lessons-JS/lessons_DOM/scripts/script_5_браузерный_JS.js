const boxElement = document.querySelector(".box")

// Все значения, которые будут получаться, будут вычислены через пиксели, но сами единицы измерения не будут указаны.

// Метод offsetWidth и offsetHeight измеряют фактический размер всего элемента, включая border, margin и padding
console.log("Полная ширина: ", boxElement.offsetWidth)
console.log("Полная высота: ", boxElement.offsetHeight)

// Измерение clientLeft и clientTop возвращает ширину левой и верхней рамки (border) соответственно
console.log("Ширина левой рамки: ", boxElement.clientLeft)
console.log("Ширина верхней рамки: ", boxElement.clientTop)

// clientWidth и clientHeight измеряют размер содержимого элемента, включая padding, но без учета рамок (border) и скролл-баров
console.log("Ширина содержимого: ", boxElement.clientWidth)
console.log("Высота содержимого: ", boxElement.clientHeight)

// scrollWidth и scrollHeight измеряют размер содержимого элемента, включая прокрученную область, но без учета рамок (border)
console.log("Ширина содержимого + скролл-бар: ", boxElement.scrollWidth)
console.log("Высота содержимого + скролл-бар: ", boxElement.scrollHeight)

// Разница между scrollHeight и clientHeight показывает, насколько можно прокрутить элемент вниз
console.log(
  "Пролиснуть вниз можно на: ",
  boxElement.scrollHeight - boxElement.clientHeight,
)

// Выполним скриптовый код для прокрутки внутри элемента boxElement
boxElement.scroll(0, 50) // scroll(x, y), скролл производится от координат (0, 0)

// Также только для scrollTop и scrollLeft можно присвоить значение
boxElement.scrollTop = 100

console.log("Ширина прокрученной области вниз: ", boxElement.scrollTop)
console.log("Ширина прокрученной области вверх: ", boxElement.scrollLeft)

// getComputedStyle возвращает объект, содержащий значения всех CSS-свойств элемента, вычисленные после применения всех активных таблиц стилей и разрешения всех базовых вычислений
console.log(
  "Высота элемента через getComputedStyle: ",
  getComputedStyle(boxElement).height,
)
console.log(
  "Ширина элемента через getComputedStyle: ",
  getComputedStyle(boxElement).width,
)

// Позиционирование элементов DOM дерева (относительно окна браузера и окна страницы)
const boxElementRectParams = boxElement.getBoundingClientRect()

// getBoundingClientRect возвращает объект с координатами и размерами элемента относительно окна браузера
console.log(
  "Положение по X относительно окна браузера: ",
  boxElementRectParams.x,
)
console.log(
  "Положение по Y относительно окна браузера: ",
  boxElementRectParams.y,
)

// Для того чтобы найти координаты относительно страницы нужно сложить координаты относительно окна браузера и прокрученную область окна браузера.
// Это можно сделать с помощью window.scrollX и window.scrollY
console.log(window.scrollX, window.scrollY)

console.log(
  "Положение по X относительно страницы: ",
  boxElementRectParams.x + window.scrollX,
)
console.log(
  "Положение по Y относительно страницы: ",
  boxElementRectParams.y + window.scrollY,
)

/**
 * Используемые методы и свойства:
 *
 * - `element.offsetWidth`: Возвращает полную ширину элемента, включая границы и отступы.
 * - `element.offsetHeight`: Возвращает полную высоту элемента, включая границы и отступы.
 *
 * - `element.clientLeft`: Возвращает ширину левой границы элемента.
 * - `element.clientTop`: Возвращает ширину верхней границы элемента.
 * - `element.clientWidth`: Возвращает ширину содержимого элемента, включая отступы, но исключая границы и полосы прокрутки.
 * - `element.clientHeight`: Возвращает высоту содержимого элемента, включая отступы, но исключая границы и полосы прокрутки.
 *
 * - `element.scrollWidth`: Возвращает ширину содержимого элемента, включая скрытую (прокрученную) часть.
 * - `element.scrollHeight`: Возвращает высоту содержимого элемента, включая скрытую (прокрученную) часть.
 * - `element.scroll(x, y)`: Прокручивает элемент до указанных координат (x, y).
 * - `element.scrollTop`: Получает или задает количество пикселей, на которое содержимое элемента прокручено вертикально.
 * - `element.scrollLeft`: Получает или задает количество пикселей, на которое содержимое элемента прокручено горизонтально.
 *
 * - `element.getBoundingClientRect()`: Возвращает объект DOMRect с размерами элемента и его положением относительно окна просмотра.
 * - `window.scrollX`: Возвращает количество пикселей, на которое документ прокручен по горизонтали.
 * - `window.scrollY`: Возвращает количество пикселей, на которое документ прокручен по вертикали.
 */
