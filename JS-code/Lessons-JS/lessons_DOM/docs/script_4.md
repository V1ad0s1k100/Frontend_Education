# Работа с DOM-свойствами и методами

## Получение стилей элемента

1. **Свойство `style`**  
   Используется для получения или установки инлайновых стилей элемента. Если
   стили заданы в CSS, свойство `style` вернет пустую строку.

   ```javascript
   blockOneElement.style.width // Пустая строка, если ширина не задана в атрибуте style
   ```

2. **Метод `getComputedStyle`**  
   Возвращает объект со всеми стилями элемента, включая те, что заданы в CSS.

   ```javascript
   getComputedStyle(blockOneElement).width // Ширина элемента из CSS
   ```

3. **Стили псевдоэлементов**  
   Метод `getComputedStyle` позволяет получить стили псевдоэлементов, например
   `::after`.
   ```javascript
   getComputedStyle(blockOneElement, "::after").backgroundColor // Цвет фона псевдоэлемента
   ```

## Работа с классами элемента

1. **Свойство `classList`**  
   Содержит список всех классов элемента в виде объекта `DOMTokenList`.

   ```javascript
   blockTwoElement.classList // Список классов элемента
   ```

2. **Добавление классов**  
   Метод `add` добавляет один или несколько классов.

   ```javascript
   blockTwoElement.classList.add("red", "color")
   ```

3. **Удаление классов**  
   Метод `remove` удаляет указанные классы.

   ```javascript
   blockTwoElement.classList.remove("red", "color")
   ```

4. **Переключение классов**  
   Метод `toggle` добавляет класс, если его нет, или удаляет, если он есть.

   ```javascript
   blockTwoElement.classList.toggle("red") // Добавляет или удаляет класс "red"
   ```

   Можно передать вторым аргументом булевое значение, чтобы явно указать,
   добавлять или удалять класс.

   ```javascript
   blockTwoElement.classList.toggle("red", hasTrue) // Добавляет класс, если hasTrue = true
   ```

5. **Проверка наличия класса**  
   Метод `contains` проверяет, есть ли указанный класс у элемента.
   ```javascript
   blockTwoElement.classList.contains("block2") // true или false
   ```

## Работа с CSS-переменными

1. **Установка значения CSS-переменной**  
   Метод `style.setProperty` позволяет установить значение CSS-переменной для
   элемента.
   ```javascript
   blockThreeElement.style.setProperty("--border-color", "blue")
   ```
