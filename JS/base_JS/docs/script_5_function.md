# Конспект: Функции в JavaScript

## 1. Function Declaration

Функции можно объявлять с помощью ключевого слова `function`. Такие функции доступны для вызова до их объявления.

```javascript
function logHello() {
  console.log("Привет");
}
logHello(); // Вывод: Привет
```

---

## 2. Локальная и глобальная область видимости

Переменные, объявленные внутри функции, имеют локальную область видимости и недоступны за её пределами.

```javascript
const message = "Глобальный привет!";

function logMessage() {
  const message = "Локальный привет!";
  console.log(message); // Вывод: Локальный привет!
}

logMessage();
console.log(message); // Вывод: Глобальный привет!
```

---

## 3. Параметры функции

Функции могут принимать параметры, которые задаются при вызове.

```javascript
function logMessageInfoCount(message, count) {
  for (let i = 0; i < count; i++) {
    console.log(message);
  }
}

logMessageInfoCount("Привет", 3);
// Вывод:
// Привет
// Привет
// Привет
```

---

## 4. Значения по умолчанию

Параметры функции могут иметь значения по умолчанию.

```javascript
function logMessageInfo(message, count = 4) {
  console.log(message.repeat(count));
}

logMessageInfo("Привет ");
// Вывод: Привет Привет Привет Привет
```

---

## 5. Возврат значения

Функции могут возвращать значения с помощью оператора `return`.

```javascript
function sum(a, b) {
  return a + b;
}

console.log(sum(10, 20)); // Вывод: 30
```

---

## 6. Проверка типов и условий

Функции могут проверять типы входных данных и возвращать разные значения в зависимости от условий.

```javascript
function getAgeType(age) {
  if (typeof age !== "number") {
    return "Возраст указан неверно";
  }
  if (age < 18) {
    return "Несовершеннолетний";
  }
  return "Взрослый";
}

console.log(getAgeType(20)); // Вывод: Взрослый
console.log(getAgeType("Привет")); // Вывод: Возраст указан неверно
```

---

## 7. Ранний выход из функции

Функция может завершить выполнение раньше с помощью `return`.

```javascript
function helloMessage(name) {
  if (!name) return;
  return `О, привет ${name}`;
}

console.log(helloMessage("Вася")); // Вывод: О, привет Вася
console.log(helloMessage()); // Вывод: undefined
```
