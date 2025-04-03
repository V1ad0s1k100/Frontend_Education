# Преобразование типов данных в JavaScript

## Неявное преобразование

- **Пример сложения числа и строки**:

  ```javascript
  const num = 111;
  const str = "222";
  const result = num + str;
  console.log(result, typeof result); // 111222, string
  ```

  Здесь `num` неявно преобразуется в строку.

- **Пример деления строк, содержащих числа**:
  ```javascript
  console.log("16" / "8", typeof ("16" / "8")); // 2, number
  ```
  Неявное преобразование строк в числа.

## Явное преобразование

### Преобразование в строку

- Используется функция `String()`:

  ```javascript
  let meAge = 11;
  console.log(String(meAge), typeof String(meAge)); // "11", string
  ```

- Примеры:

  ```javascript
  let isAdult = false;
  console.log(String(isAdult)); // "false"

  let obj = {};
  console.log(String(obj)); // "[object Object]"
  ```

### Преобразование в число

- Используется функция `Number()`:

  ```javascript
  let Str = "1000";
  console.log(Number(Str), typeof Number(Str)); // 1000, number
  console.log(Number(Str + "-"), typeof Number(Str + "-")); // NaN, number
  ```

- Примеры преобразования различных типов:
  ```javascript
  console.log(Number(true)); // 1
  console.log(Number(false)); // 0
  console.log(Number(null)); // 0
  console.log(Number(undefined)); // NaN
  ```

### Преобразование в Boolean

- Используется функция `Boolean()`:

  ```javascript
  console.log(Boolean(-1)); // true
  console.log(Boolean(0)); // false
  console.log(Boolean(1)); // true
  ```

- Примеры преобразования строк:
  ```javascript
  console.log(Boolean("Hello")); // true
  console.log(Boolean("0")); // true
  console.log(Boolean(" ")); // true
  console.log(Boolean("")); // false
  ```

## Примечания

- **Неявное преобразование** происходит автоматически, например, при сложении строки и числа.
- **Явное преобразование** требует использования специальных функций, таких как `String()`, `Number()`, `Boolean()`.
