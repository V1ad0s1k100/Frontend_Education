# Конспект: Работа с размерами и позиционированием элементов в DOM

## Основные методы и свойства

### Размеры элемента

- `element.offsetWidth` — Полная ширина элемента, включая границы и отступы.
- `element.offsetHeight` — Полная высота элемента, включая границы и отступы.
- `element.clientWidth` — Ширина содержимого элемента, включая padding, но без
  учета границ и полос прокрутки.
- `element.clientHeight` — Высота содержимого элемента, включая padding, но без
  учета границ и полос прокрутки.
- `element.scrollWidth` — Ширина содержимого элемента, включая прокрученную
  область.
- `element.scrollHeight` — Высота содержимого элемента, включая прокрученную
  область.

### Границы элемента

- `element.clientLeft` — Ширина левой границы элемента.
- `element.clientTop` — Ширина верхней границы элемента.

### Прокрутка

- `element.scroll(x, y)` — Прокручивает элемент до указанных координат (x, y).
- `element.scrollTop` — Количество пикселей, на которое содержимое элемента
  прокручено вертикально.
- `element.scrollLeft` — Количество пикселей, на которое содержимое элемента
  прокручено горизонтально.

### Вычисленные стили

- `getComputedStyle(element)` — Возвращает объект с вычисленными стилями
  элемента.

### Позиционирование элемента

- `element.getBoundingClientRect()` — Возвращает объект с размерами элемента и
  его положением относительно окна браузера.
- `window.scrollX` — Количество пикселей, на которое документ прокручен по
  горизонтали.
- `window.scrollY` — Количество пикселей, на которое документ прокручен по
  вертикали.

## Примеры использования

### Получение размеров элемента

```javascript
const boxElement = document.querySelector(".box")
console.log("Полная ширина: ", boxElement.offsetWidth)
console.log("Полная высота: ", boxElement.offsetHeight)
```

### Прокрутка элемента

```javascript
boxElement.scroll(0, 50) // Прокрутка на 50 пикселей вниз
boxElement.scrollTop = 100 // Установка вертикальной прокрутки
```

### Позиционирование элемента

```javascript
const rect = boxElement.getBoundingClientRect()
console.log("Положение по X: ", rect.x + window.scrollX)
console.log("Положение по Y: ", rect.y + window.scrollY)
```

## Полезные ссылки

- [MDN: Element.offsetWidth](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetWidth)
- [MDN: Element.scroll](https://developer.mozilla.org/en-US/docs/Web/API/Element/scroll)
- [MDN: Element.getBoundingClientRect](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)
