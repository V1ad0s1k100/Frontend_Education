# Работа с DOM: основные методы

## Получение элементов

1. **Доступ через цепочку `children`**  
   Неудобный способ, так как требует точного знания структуры DOM:

   ```javascript
   const buttonElement =
     document.body.children[1].children[1].children[0].children[0].children[0]
       .children[0]
   console.log("buttonElement: ", buttonElement)
   ```

2. **Получение элемента по `id`**  
   Используется метод `getElementById`:

   ```javascript
   const btnOne = document.getElementById("myBtn")
   console.log("btnOne: ", btnOne)
   ```

3. **Универсальный метод `querySelector`**  
   Находит первый элемент, соответствующий селектору:

   ```javascript
   const btnTwo = document.querySelector(".btnClass")
   console.log("btnTwo: ", btnTwo)
   ```

4. **Получение всех элементов по селектору**  
   Используется метод `querySelectorAll`, возвращает `NodeList`:

   ```javascript
   const interList = document.querySelectorAll(
     ".internal-list .internal-list__item",
   )
   interList.forEach((el) => console.log("Элемент списка: ", el))
   ```

5. **Поиск ближайшего родительского элемента**  
   Метод `closest` ищет родителя, соответствующего селектору:

   ```javascript
   const thirdBoxElement = document.querySelector(".level-three")
   const firstBoxElement = thirdBoxElement.closest(".level-one")
   console.log("Элемент firstBoxElement: ", firstBoxElement)
   ```

6. **Получение элементов по тегу, классу или атрибуту `name`**  
   Методы возвращают динамические коллекции:
   ```javascript
   const formElements = document.getElementsByTagName("form")
   const radioGroupElements = document.getElementsByClassName("radio-group")
   const inputElements = document.getElementsByName("specialization")
   ```

## Работа с элементами

1. **Клонирование элемента**  
   Метод `cloneNode` позволяет клонировать элемент:

   ```javascript
   const secondFormElement = formElements[0].cloneNode(true)
   document.body.append(secondFormElement)
   ```

2. **Преобразование коллекций в массивы**  
   Для перебора коллекций, полученных через `getElementsBy...`, их нужно
   преобразовать в массив:
   ```javascript
   const arrayFromCollection = [...formElements]
   ```

## Рекомендации по нэймингу

1. Не используйте названия переменных, совпадающие с тегами (например, `form`,
   `div`).
2. Добавляйте суффиксы `Element` или `Elements` для переменных, содержащих
   DOM-элементы.

## Использование `data-атрибутов`

Для оптимального обращения к элементам используйте `data-атрибуты`:

```javascript
const dataElement = document.querySelector("[data-js-slider-list]")
console.log(dataElement)
```

## Итог

- Используйте `querySelector` и `querySelectorAll` для универсального поиска.
- Предпочитайте `data-атрибуты` для взаимодействия с элементами.
- Избегайте сложных цепочек `children` для доступа к элементам.
