# Виды функций в JavaScript

## Function Declaration

- Функцию можно вызывать до ее объявления.
- Пример:

  ```javascript
  function sum(a, b) {
    return a + b;
  }
  console.log(sum(1, 3)); // 4
  ```

- Если объявить функцию с одинаковым именем дважды, будет использоваться последняя:

  ```javascript
  function logMessage() {
    console.log("Привет!");
  }

  function logMessage() {
    console.log("Пока!");
  }

  logMessage(); // 'Пока!'
  ```

## Function Expression

- Функцию нельзя вызывать до ее объявления.
- Пример:

  ```javascript
  let logHello = function () {
    console.log("Hello!");
  };

  logHello(); // 'Hello!'

  logHello = function () {
    console.log("Пока");
  };

  logHello(); // 'Пока'
  ```

## Arrow Function

- Упрощенный синтаксис для создания функций.
- Не имеет доступа к `arguments`.
- Пример:

  ```javascript
  const LogHello = () => {
    console.log("Привет!");
  };

  LogHello(); // 'Привет!'
  ```

## Копирование функции

- Функцию можно присвоить другой переменной.
- Пример:

  ```javascript
  const fn1 = () => {
    console.log("Я функция!");
  };

  const fn2 = fn1;

  fn2(); // 'Я функция!'
  ```

## Callback Function

- Функция, передаваемая как аргумент в другую функцию.
- Пример:

  ```javascript
  const LogMessage = (actionBefore, actionAfter) => {
    actionBefore();
    console.log("Привет!");
    actionAfter();
  };

  LogMessage(
    () => console.log("before"),
    () => console.log("after")
  );
  // 'before'
  // 'Привет!'
  // 'after'
  ```

## Функция, возвращающая другую функцию

- Пример:

  ```javascript
  const validate = (hasAccess) => {
    if (hasAccess) {
      return () => console.log("Доступ разрешен :)");
    } else {
      return () => console.log("Доступ запрещен :(");
    }
  };

  const validateMessage = validate(false);
  validateMessage(); // 'Доступ запрещен :('
  ```

## Рекомендации по именованию функций

- Название функции должно начинаться с глагола и состоять из двух или более слов.
- Функция не должна выполнять действия, которые от нее не ожидают.

Пример плохой практики:

```javascript
const getPi = () => {
  // alert('Какой-то текст'); // Лишнее действие
  return 3.14;
};

console.log(getPi()); // 3.14
```
