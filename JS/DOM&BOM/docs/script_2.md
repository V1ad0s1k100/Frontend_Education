# Конспект: Навигация по DOM

## Основные элементы DOM

- **`document`** — объект, представляющий весь HTML-документ.
- **`document.head`** — элемент `<head>` документа.
- **`document.documentElement`** — корневой элемент `<html>`.
- **`document.body`** — элемент `<body>` документа.

## Загрузка скриптов

- Если элемент находится в `<head>`, он может быть не загружен:
  - Решение 1: Поместить скрипт в конец `<body>`.
  - Решение 2: Добавить атрибут `defer` к скрипту.
- Атрибут `async` загружает скрипт асинхронно, но порядок выполнения не
  гарантируется.

## Навигация по DOM

- Родительский элемент: `document.body.parentElement`.
- Соседние элементы:
  - Перед `<body>`: `document.body.previousElementSibling`.
  - После `<body>`: `document.body.nextElementSibling`.
- Дочерние элементы:
  - Список: `document.body.children`.
  - Преобразование в массив: `[...document.body.children]`.

## Пример актуальности коллекции

- Коллекция `document.body.children` обновляется автоматически.
- Добавление нового элемента:
  ```javascript
  const newButtonElement = document.createElement("button")
  document.body.appendChild(newButtonElement)
  ```

## Работа с элементами коллекции

- Обращение по индексу: `document.body.children[0]`.
- Навигация внутри элемента:
  - Первый дочерний узел: `element.firstChild`.
  - Последний дочерний узел: `element.lastChild`.

## Отличия `parentNode` и `parentElement`

- `parentNode` возвращает любые узлы.
- `parentElement` возвращает только DOM-узлы.

## Примеры навигации

- Соседние элементы:
  - Перед элементом: `element.previousElementSibling` и
    `element.previousSibling`.
  - После элемента: `element.nextElementSibling` и `element.nextSibling`.
- Дочерние элементы:
  - Первый: `element.firstElementChild` и `element.firstChild`.
  - Последний: `element.lastElementChild` и `element.lastChild`.
- Все дочерние узлы: `element.childNodes`.
