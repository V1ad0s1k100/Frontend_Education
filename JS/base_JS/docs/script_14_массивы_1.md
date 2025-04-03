# Конспект: Работа с массивами в JavaScript

## Объявление массивов

- Массивы можно объявлять с помощью литерала `[]` или конструктора `new Array()`.
- Пример:
  ```javascript
  const arr = [
    "Привет",
    100,
    true,
    { name: "Vladosik" },
    [true, true, true],
    () => console.log("Хахах"),
  ];
  const arrAdd = new Array();
  ```

## Доступ к элементам массива

- Доступ к элементам осуществляется через индексы.
- Пример:
  ```javascript
  console.log(arr[0]); // 'Привет'
  console.log(arr[3].name); // 'Vladosik'
  arr[5](); // Вызов функции
  ```

## Многомерные массивы

- Массивы могут содержать вложенные массивы.
- Пример:
  ```javascript
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  console.log(matrix[1][0]); // 4
  ```

## Изменение массива

- Элементы массива можно изменять или добавлять новые.
- Пример:
  ```javascript
  matrix[1][0] = 100;
  matrix[1][99] = 100; // Добавление нового элемента
  ```

## Методы для работы с массивами

### Добавление элементов

- `push` — добавляет элементы в конец массива.
- `unshift` — добавляет элементы в начало массива.
- Пример:
  ```javascript
  letters.push("Г", "Д");
  letters.unshift("А1");
  ```

### Удаление элементов

- `pop` — удаляет элемент с конца массива.
- `shift` — удаляет элемент с начала массива.
- Пример:
  ```javascript
  letters.pop();
  letters.shift();
  ```

### Преобразование массива в строку

- `toString` — преобразует массив в строку.
- `join` — объединяет элементы массива в строку с указанным разделителем.
- Пример:
  ```javascript
  console.log(numbers.join("-ый, "));
  ```

### Копирование массивов

- Используются:
  - Оператор spread (`...`).
  - Метод `slice`.
  - Циклы для копирования элементов.
- Пример:
  ```javascript
  const arr4 = [...arr1];
  let arr5 = arr1.slice();
  ```

### Объединение массивов

- Используются:
  - Оператор spread (`...`).
  - Метод `concat`.
- Пример:
  ```javascript
  const totalArr = joinArr1.concat(joinArr2, joinArr3);
  ```

### Проверка равенства массивов

- Для проверки равенства массивов используется рекурсивная функция.
- Пример:
  ```javascript
  const areArrayEqual = (array1, array2) => {
    if (array1.length !== array2.length) return false;
    for (let i = 0; i < array1.length; i++) {
      if (Array.isArray(array1[i]) && Array.isArray(array2[i])) {
        if (!areArrayEqual(array1[i], array2[i])) return false;
      } else if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  };
  ```

## Полезные методы

- `split` и `join` — для преобразования строки в массив и обратно.
- Пример:
  ```javascript
  const message = "Один, два, три, четыре, пять";
  console.log(message.split(", ").join(", "));
  ```
