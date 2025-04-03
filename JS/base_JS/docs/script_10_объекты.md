# Конспект: Работа с объектами в JavaScript

## Сравнение объектов

- Объекты в JavaScript сравниваются **по ссылке**, а не по значению.
- Даже если два объекта имеют одинаковые свойства и значения, они считаются разными, если ссылки на них различны.

```javascript
const obj1 = { age: 10 };
const obj2 = { age: 10 };
console.log(obj1 === obj2); // false
```

- Если два объекта ссылаются на одну и ту же область памяти, они равны.

```javascript
const obj3 = { name: "Vladosik" };
const obj4 = obj3;
console.log(obj3 === obj4); // true
```

## Рекурсивное сравнение объектов

- Функция `areObjectsEqual` позволяет сравнивать объекты **по значению**, включая вложенные объекты.

```javascript
const areObjectsEqual = (object1, object2) => {
  // ...existing code...
};
console.log(areObjectsEqual(obj5, obj6)); // true или false
```

## Копирование объектов

- Три способа создания копии объекта:
  1. Через цикл `for...in`.
  2. С помощью `Object.assign`.
  3. Используя оператор spread (`...`).

```javascript
const obj8 = {};
for (const key in obj7) obj8[key] = obj7[key];
const obj9 = Object.assign({}, obj7);
const obj10 = { ...obj7 };
```

## Объединение объектов

- Объединение нескольких объектов в один:
  - С помощью `Object.assign`.
  - С использованием оператора spread (`...`).

```javascript
const obj14 = Object.assign({}, obj11, obj12, obj13);
const obj15 = { ...obj11, ...obj12, ...obj13 };
```

## Вложенные свойства и опциональная цепочка

- Доступ к вложенным свойствам объекта:

```javascript
console.log(obj16.adress.street);
```

- Безопасный доступ с помощью **опциональной цепочки**:

```javascript
console.log(obj17.adress?.street); // undefined, если adress отсутствует
```

## Деструктуризация объектов

- Извлечение свойств объекта в переменные:

```javascript
const { name, age, date } = obj18;
```

- Переименование переменных при деструктуризации:

```javascript
const { name: nameUser } = user;
```

- Значения по умолчанию:

```javascript
const { apartmentHouse = "Не указано" } = adressDestraction2;
```

## Функции с деструктуризацией

- Пример функции, принимающей объект с адресом:

```javascript
const logAddress = ({ city, street, house, apartment }) => {
  console.log(`город ${city}, ул. ${street}, д. ${house}, кв. ${apartment}`);
};
```

- Использование остаточных свойств (`...`):

```javascript
const logPersonDetails = ({ name, age, ...otherInfo }) => {
  console.log(`Name: ${name}, Age: ${age}`);
  console.log("Other details:", otherInfo);
};
```

## Примеры использования

- Логирование адреса:

```javascript
logAddress({
  city: "Москва",
  street: "Тверская",
  house: "12",
  apartment: "34",
});
```

- Логирование деталей о человеке:

```javascript
logPersonDetails(person);
```
