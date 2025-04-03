# Обработка ошибок в JavaScript

## Основные конструкции

### Блок `try...catch`

- Используется для обработки ошибок, возникающих во время выполнения кода.
- Пример:
  ```javascript
  try {
    // Код, который может вызвать ошибку
  } catch (error) {
    // Обработка ошибки
  }
  ```

### Блок `finally`

- Выполняется всегда, независимо от того, была ли ошибка в блоке `try` или нет.
- Пример:
  ```javascript
  try {
    console.log("Код в блоке try отработал корректно");
  } catch (error) {
    console.log("Возникла ошибка: ", error);
  } finally {
    console.log("Блок кода (finally) выполняется в любом случае");
  }
  ```

---

## Примеры обработки ошибок

### Ошибка при вызове метода у `undefined`

- Если попытаться вызвать метод у `undefined`, это вызовет ошибку.
- Пример:
  ```javascript
  try {
    const names = undefined;
    names.forEach((name) => {
      console.log("Имя: ", name);
    });
  } catch (error) {
    console.log("Возникла ошибка: ", error);
  }
  ```

---

### Ошибки парсинга

- Ошибки парсинга (например, синтаксические ошибки) не могут быть перехвачены блоком `try...catch`.
- Пример:
  ```javascript
  // Этот код вызовет ошибку парсинга
  // try {
  //   345console.log('Привет мир!');
  // } catch (error) {
  //   console.log(error);
  // }
  ```

---

### Асинхронные ошибки

- Ошибки в асинхронном коде не перехватываются внешним блоком `try...catch`.
- Для их обработки нужно использовать `try...catch` внутри асинхронной функции.
- Пример:
  ```javascript
  setTimeout(() => {
    try {
      const names = undefined;
      names.forEach((name) => {
        console.log("Имя: ", name);
      });
    } catch (error) {
      console.log(error.name); // Имя ошибки
      console.log(error.message); // Сообщение об ошибке
      console.log(error.stack); // Трассировка стека
    }
  }, 3000);
  ```

---

### Ошибки при работе с JSON

- Ошибки парсинга JSON можно перехватить с помощью `try...catch`.
- Пример:
  ```javascript
  try {
    const userJSON = `{
      "name": "Владислав",
      "age": "17",
    }`;
    console.log(JSON.parse(userJSON));
  } catch (error) {
    console.log("Возникла ошибка: ", error);
  }
  ```

---

### Логические ошибки

- Для обработки логических ошибок можно выбрасывать свои собственные ошибки с помощью класса `Error`.
- Пример:
  ```javascript
  try {
    const userJSON = JSON.parse(`{
      "name": "Владислав"
    }`);
    if (!userJSON.age) {
      throw new Error("Имя не заполнено!");
    }
  } catch (error) {
    console.log("Возникла ошибка: ", error);
  }
  ```

---

## Полезные свойства объекта ошибки

- `error.name` — имя ошибки (например, `TypeError`).
- `error.message` — сообщение об ошибке.
- `error.stack` — трассировка стека вызовов.
