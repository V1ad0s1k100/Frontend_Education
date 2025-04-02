# Размеры окна и станицы, скролл scrollIntoView, scrollTo, scroll, scrollBy

## Размеры окна и страницы

Получить размеры окна можно через:

1. Создание элемента, содержащего все содержимое окна, и получение его размеров
   через свойства `clientWidth` и `clientHeight`.
2. Использование `window.innerWidth` и `window.innerHeight`. Данный метод не
   учитывает прокрутку страницы.
3. Использование `htmlElement.scrollWidth` и `htmlElement.scrollHeight`. Эти
   методы показывают ширину и высоту всей страницы, включая область прокрутки.
4. Нахождение максимального значения из нескольких методов выше

## Скроллинг страницы

### Методы скроллинга

1. **`scrollTo` и `scroll`**  
   Эти методы позволяют прокрутить страницу до определённой координаты.  
   Пример:

   ```javascript
   window.scroll({
     top: 400,
     behavior: "smooth", // Плавная прокрутка
   })
   ```

2. **`scrollBy`**  
   Этот метод прокручивает страницу на указанное количество пикселей
   относительно текущей позиции.  
   Пример:

   ```javascript
   window.scrollBy({
     top: 100,
     behavior: "smooth",
   })
   ```

3. **`scrollIntoView`**  
   Этот метод прокручивает страницу так, чтобы выбранный элемент стал видимым.  
   Пример:
   ```javascript
   const element = document.querySelector("#reviews")
   element.scrollIntoView({
     behavior: "smooth",
     block: "center", // Позиция элемента по вертикали
     inline: "start", // Позиция элемента по горизонтали
   })
   ```

### Особенности

- Для предотвращения слишком быстрого выполнения скроллинга можно использовать
  `setTimeout`.  
  Пример:

  ```javascript
  setTimeout(() => {
    window.scroll({
      top: 100,
      behavior: "smooth",
    })
  }, 300)
  ```

- Опции `block` и `inline` в `scrollIntoView` позволяют настроить точное
  позиционирование элемента на экране:
  - `block`: `start`, `center`, `end`, `nearest`.
  - `inline`: `start`, `center`, `end`, `nearest`.
