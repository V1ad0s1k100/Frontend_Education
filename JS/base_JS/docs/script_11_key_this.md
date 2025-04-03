# Конспект по файлу `script_11_key_this.js`

## Глобальный контекст `this`
- В глобальной области выполнения `this` ссылается на глобальный объект (например, `window` в браузере).
```javascript
console.log('this глобальный: ', this)
```

## Объект `user1`
- Содержит свойства `name`, `age`, вложенные объекты `address` и `travelTime`, а также методы для демонстрации работы `this`.

### Метод `logThis`
- Выводит значение `this` и имя пользователя.
```javascript
user1.logThis()
```

### Вложенный объект `address`
- Содержит метод `logInnerThis`, который демонстрирует работу `this` внутри вложенного объекта.
```javascript
user1.address.logInnerThis()
```

### Вложенный объект `travelTime`
- Содержит стрелочную функцию `logArrowFunctionThis`, которая показывает, что стрелочные функции не имеют собственного `this`.
```javascript
user1.travelTime.logArrowFunctionThis()
```

## Функция `logInfo`
- Демонстрирует работу `this` в глобальном контексте и при вызове от разных объектов.
```javascript
logInfo() // Глобальный контекст
user2.logInfo = logInfo
user3.logInfo = logInfo
user2.logInfo() // Контекст user2
user3.logInfo() // Контекст user3
```

## Объект `calculator`
- Содержит методы для работы с числами:
  - `read`: считывает значения `a` и `b` через `prompt`.
  - `sum`: возвращает сумму `a` и `b`.
  - `mul`: возвращает произведение `a` и `b`.
```javascript
/* calculator.read()
alert(calculator.sum())
alert(calculator.mul()) */
```

## Объект `ladder`
- Реализует цепочку вызовов для управления свойством `step`:
  - `up`: увеличивает `step` на 1.
  - `down`: уменьшает `step` на 1.
  - `showStep`: выводит текущее значение `step`.
```javascript
ladder.up().down().up().down().down().showStep().up().down().up().down().down().showStep()
```