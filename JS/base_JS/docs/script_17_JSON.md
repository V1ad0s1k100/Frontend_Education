# Работа с объектами и JSON в JavaScript

## Пример объекта

```javascript
const user = {
  name: "Vladosik",
  age: 17,
  city: "Красноярск",
  adress: {
    street: "ул. Пушкина, д. 1, кв. 1",
    zipcode: 123456,
  },
  todos: ["sleep", "eat", "work", "train", "learn"],
  hasCat: false,
  yacht: null,
  toString() {
    return `{ name: "${this.name}", age: "${this.age}" ...}`;
  },
};
```

## Преобразование объекта в строку

### Метод `toString`

- Метод `toString`, определённый в объекте, возвращает строковое представление объекта.
- Пример:
  ```javascript
  let userDataAsString = user.toString();
  console.log(userDataAsString);
  ```

### Метод `JSON.stringify`

- Преобразует объект в строку в формате JSON.
- Не включает функции и свойства со значением `undefined`.
- Пример:
  ```javascript
  userDataAsString = JSON.stringify(user);
  console.log(userDataAsString);
  ```

## Парсинг строки JSON

### Метод `JSON.parse`

- Преобразует строку JSON обратно в объект.
- Пример:

  ```javascript
  userDataAsString = JSON.parse(userDataAsString);
  console.log(userDataAsString);
  ```

- **Важно:** Если строка JSON содержит ошибки, будет выброшено исключение.

## Исключение свойств при `JSON.stringify`

- Свойства со значением `undefined` или функции не включаются в итоговую строку JSON.
- Пример:

  ```javascript
  const uniqueUser = {
    name: "Vladosik",
    age: 17,
    sayHi() {
      console.log(`Привет, ${this.name}`);
    },
    car: undefined,
  };

  console.log(JSON.stringify(uniqueUser));
  ```
