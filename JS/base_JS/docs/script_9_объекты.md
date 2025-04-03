# Конспект: Работа с объектами в JavaScript

## Создание объектов

- Пустой объект можно создать двумя способами:
  ```javascript
  const firstEmptyObject = {};
  const secondEmptyObject = new Object();
  ```

## Объект с ключами и методами

- Объект состоит из пар ключ-значение:

  ```javascript
  const user = {
    login: "iamsuperhero",
    password: "qwerty",
    "registration date": "01.01.2025",
    "last-auth": "05.04.2024",
    sayHi: () => console.log("Привет!"),
    "say hi": () => console.log("Привет мир!"),
  };
  ```

- Доступ к значениям:
  ```javascript
  console.log(user["registration date"]); // Для ключей с пробелами или тире
  user.sayHi(); // Вызов метода
  user["say hi"]();
  ```

## Добавление и изменение свойств

- Добавление новых свойств:

  ```javascript
  const secondUser = {};
  secondUser.name = "Vladosik";
  secondUser["is developer"] = true;
  ```

- Изменение существующих свойств:
  ```javascript
  secondUser.name = "V1ad0s1k";
  secondUser["is developer"] = false;
  ```

## Удаление свойств

- Удаление свойств из объекта:
  ```javascript
  delete secondUser.name;
  delete secondUser["is developer"];
  ```

## Константные объекты

- Константный объект можно изменять, но нельзя переопределять:
  ```javascript
  const thirdUser = {
    name: "Слава",
    age: 20,
  };
  ```

## Динамическое добавление свойств

- Использование переменных для названия ключей:
  ```javascript
  const propName = "example";
  const propValue = "value";
  const obj = {
    [propName]: propValue,
  };
  ```

## Проверка наличия свойства

- Проверка, существует ли свойство в объекте:
  ```javascript
  console.log("key" in obj); // true или false
  ```

## Перебор свойств объекта

- Использование цикла `for-in`:

  ```javascript
  const firstObj = {
    name: "Vladosik",
    age: 20,
    language: "rus",
    city: "Krasnoyarsk",
  };

  for (const key in firstObj) {
    console.log(key, ": ", firstObj[key]);
  }
  ```

## Сортировка ключей

- Ключи-числа сортируются автоматически:

  ```javascript
  const nums = {
    1: "Первый",
    3: "Третий",
    2: "Второй",
  };

  for (const num in nums) {
    console.log(nums[num]);
  }
  ```
