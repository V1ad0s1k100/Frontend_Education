# Методы строк в JavaScript

## Свойство `length`

- Возвращает длину строки.

```javascript
const name = "Vladosik";
console.log(name.length); // 8
```

## Доступ к символам строки

- Использование квадратных скобок `[]` или метода `at()`.
- Метод `at()` поддерживает отрицательные индексы.

```javascript
console.log(name[0]); // 'V'
console.log(name.at(-1)); // 'k'
```

## Изменение регистра

- Методы `toLowerCase()` и `toUpperCase()` изменяют регистр строки.

```javascript
const text = "КаКоЙ-тО-тЕкСт";
console.log(text.toLowerCase()); // 'какой-то-текст'
console.log(text.toUpperCase()); // 'КАКОЙ-ТО-ТЕКСТ'
```

## Удаление пробелов

- `trim()` удаляет пробелы в начале и конце строки.
- `trimStart()` и `trimEnd()` удаляют пробелы только с одной стороны.

```javascript
const message = "   Привет!   ";
console.log(message.trim()); // 'Привет!'
console.log(message.trimStart()); // 'Привет!   '
console.log(message.trimEnd()); // '   Привет!'
```

## Поиск подстроки

- `indexOf()` возвращает индекс первого вхождения подстроки или `-1`, если подстрока не найдена.
- `includes()` проверяет наличие подстроки (возвращает `true`/`false`).
- `startsWith()` и `endsWith()` проверяют начало и конец строки.

```javascript
const str = "Пример строки";
console.log(str.indexOf("строки")); // 7
console.log(str.includes("Пример")); // true
console.log(str.startsWith("Пример")); // true
console.log(str.endsWith("строки")); // true
```

## Обрезка строки

- `substring(start, end)` возвращает подстроку между индексами `start` и `end` (не включая `end`).
- `slice(start, end)` работает аналогично, но поддерживает отрицательные индексы.

```javascript
const str = "JavaScript";
console.log(str.substring(0, 4)); // 'Java'
console.log(str.slice(-6)); // 'Script'
```

## Повтор строки

- `repeat(count)` создает новую строку, повторяя исходную `count` раз.

```javascript
console.log("abc".repeat(3)); // 'abcabcabc'
```

## Замена подстроки

- `replace()` заменяет первое вхождение подстроки.
- `replaceAll()` заменяет все вхождения.
- Поддерживаются регулярные выражения.

```javascript
const message = "Я изучаю бэкенд";
console.log(message.replace("бэкенд", "фронтенд")); // 'Я изучаю фронтенд'
console.log(message.replaceAll("бэкенд", "фронтенд")); // 'Я изучаю фронтенд'
console.log(message.replace(/бэкенд/gi, "фронтенд")); // 'Я изучаю фронтенд'
```

## Разделение строки

- `split(separator)` разбивает строку на массив подстрок.

```javascript
const str = "Привет, мир!";
console.log(str.split(", ")); // ['Привет', 'мир!']
```

## Задача: Проверка имени пользователя

- Удаление пробелов, проверка длины и запрещенных слов.

```javascript
const value = prompt("Введите ваше имя:");
const clearValue = value.trim().toLowerCase();
if (clearValue.length === 0) {
  alert("Ошибка! Имя не может быть пустым.");
}
if (clearValue.includes("админ")) {
  alert("Ошибка! Вы не можете занять это имя.");
}
```

## Примечание

- Все методы строк **не мутируют** исходную строку.
