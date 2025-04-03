# Конспект по методам массивов в JavaScript

## Деструктуризация массивов

### Исходные данные
```javascript
const data = ['Vlad0s1k', 17];
```

### Старый метод деструктуризации
```javascript
const nameOne = data[0];
const ageOne = data[1];
```

### Новый метод деструктуризации
```javascript
const [nameTwo, ageTwo] = data;
```

### Вывод
```
Старый метод деструктуризации:
Name: Vlad0s1k
Age: 17

Новый метод деструктуризации:
Name: Vlad0s1k
Age: 17
```

---

## Перебор массивов

### Исходный массив
```javascript
const letters = ['A', 'B', 'C', 'D', 'B'];
```

### Перебор с использованием цикла `for`
```javascript
for (let index = 0; index < letters.length; index++) {
  console.log(letters[index]);
}
```

### Перебор с использованием метода `forEach`
```javascript
letters.forEach((element, index, array) => {
  console.log('Элемент:', element);
  console.log('Индекс:', index);
  console.log('Массив:', array);
});
```

---

## Методы поиска индексов

### Использование `indexOf` и `lastIndexOf`
```javascript
letters.indexOf('B'); // Первый индекс 'B'
letters.lastIndexOf('B'); // Последний индекс 'B'
```

### Использование `findIndex` и `findLastIndex`
```javascript
users.findIndex(({ name }) => name === 'Владислав');
users.findLastIndex(({ name }) => name === 'Владислав');
```

---

## Проверка наличия элементов

### Метод `includes`
```javascript
letters.includes('B', 5); // Проверка наличия 'B' начиная с индекса 5
```

### Метод `some` и `every`
```javascript
users.some((user) => user.name === 'V1ados1k'); // Проверка наличия пользователя
users.every((user) => user.age >= 18); // Проверка всех пользователей
```

---

## Фильтрация и преобразование массивов

### Фильтрация
```javascript
users_One.filter(({ city, age }) => city === 'Москва' || age >= 18);
```

### Преобразование с помощью `map`
```javascript
users_One.map((user) => `${user.name} ${user.surname}, ${user.age} лет, живет в городе ${user.city}`);
```

---

## Агрегация данных

### Сумма возрастов с помощью `reduce`
```javascript
users_One.reduce((sum, { age }) => sum + age, 0);
```

### Средний возраст
```javascript
ageSum / users_One.length;
```

---

## Работа с массивами чисел

### Создание массива чисел от 1 до 20
```javascript
let arrNumber = [];
for (let i = 1; i < 21; i++) {
  arrNumber.push(i);
}
```

### Переворот массива с помощью `reverse`
```javascript
const arrNumberCloneOne = [...arrNumber].reverse(); // Без изменения исходного
const arrNumberCloneTwo = arrNumber.reverse(); // С изменением исходного
```

### Сортировка массива с помощью `sort`
```javascript
const sortedNumbersClone = [...randomNumbers].sort((a, b) => a - b); // Без изменения исходного
const sortedNumbers = randomNumbers.sort((a, b) => a - b); // С изменением исходного
```

---

## Вывод комментариев
Каждый блок кода сопровождается выводом данных в консоль для наглядности работы методов.