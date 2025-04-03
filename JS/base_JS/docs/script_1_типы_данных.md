# Конспект: Типы данных в JavaScript

## Основы

- `'use strict'` — строгий режим, запрещающий использование устаревших конструкций.
- Переменные создаются с помощью ключевых слов `var`, `let`, `const`.

### Пример объявления переменных:

```javascript
let messege = "Привет";
const Message = "Пока";
```

## Типы данных

### Примитивные типы:

1. **String** — строки:

   ```javascript
   let Name = "Вася";
   let string_1 = `${Name} Привет`;
   ```

   - Использование обратных кавычек для интерполяции строк.
   - Многострочные строки:
     ```javascript
     console.log(`
       Многострочная
       строка
     `);
     ```

2. **Number** — числа:

   ```javascript
   let number = 16;
   let number_1 = 16e5; // 16 * 10^5
   console.log(2 ** 53 - 1); // Максимальное число
   ```

   - `NaN` — результат некорректных математических операций.
   - `Infinity` — результат деления на 0.
   - `BigInt` — числа с суффиксом `n`:
     ```javascript
     console.log(9900000000000000n + 1n);
     ```

3. **Boolean** — логический тип:

   ```javascript
   const isTrue = true;
   const isFalse = false;
   console.log(isTrue !== isFalse); // true
   ```

4. **Null** — отсутствие значения:

   ```javascript
   let data = null;
   ```

5. **Undefined** — переменная объявлена, но не инициализирована:

   ```javascript
   let undVariable;
   console.log(undVariable); // undefined
   ```

6. **Symbol** — уникальный идентификатор:
   ```javascript
   let sing = Symbol();
   ```

### Специальные типы:

1. **Object** — сложные структуры данных:
   ```javascript
   const obj = { name: "Вася", age: 16 };
   ```

## Оператор `typeof`

- Определяет тип данных переменной:
  ```javascript
  console.log(typeof 100); // number
  console.log(typeof "Hello"); // string
  console.log(typeof {}); // object
  console.log(typeof null); // object (ошибка в JS)
  ```

## Примечания

- Резервированные слова нельзя использовать как имена переменных.
- Переменные могут содержать буквы, цифры, символы `$` и `_`, но не могут начинаться с цифры.
