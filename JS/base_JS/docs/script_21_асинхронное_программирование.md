# Асинхронное программирование в JavaScript

## Синхронное выполнение кода

- Каждая строка выполняется последовательно.
- Пример:
  ```javascript
  console.log(1);
  console.log(2);
  console.log(3);
  ```

## Синхронный код с задержкой

- Используется блокирующая функция `wait`:
  ```javascript
  const wait = (ms, callback) => {
    const now = new Date().getTime();
    while (new Date().getTime() < now + ms) {}
    callback();
  };
  ```

## Асинхронный код

- Для асинхронности используется `setTimeout`:
  ```javascript
  const waitAsync = (callback, ms) => {
    setTimeout(callback, ms);
  };
  ```

## Event Loop (Событийный цикл)

- Асинхронные задачи выносятся за пределы основного потока.
- После выполнения основного кода задачи из очереди обрабатываются.

## Пример асинхронного кода

- Вложенные вызовы (callback hell):
  ```javascript
  const makeRequest = (url, onSuccess) => {};
  makeRequest("/api/sellers/154", (seller) => {
    const firstProductId = seller.productIds[0];
    makeRequest(`/api/products/${firstProductId}`, (product) => {
      const firstReviewId = product.reviewsIds[0];
      makeRequest(`/api/reviews/${firstReviewId}`, (review) => {
        const authorName = review.author.name;
      });
    });
  });
  ```

## Promise

- Специальный объект для работы с асинхронным кодом.
- Состояния:
  - `pending` — ожидание.
  - `fulfilled` — выполнено успешно.
  - `rejected` — выполнено с ошибкой.
- Методы:
  - `then()` — обработка успешного выполнения.
  - `catch()` — обработка ошибок.
  - `finally()` — выполняется в любом случае.

### Пример использования Promise

```javascript
const promise = new Promise((fulfill, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      fulfill("Ура, состояние fulfilled");
    } else {
      reject("Увы, состояние rejected");
    }
  }, 3000);
});

promise
  .then((successData) => console.log(successData))
  .catch((errorData) => console.log(errorData))
  .finally(() => console.log("Завершение"));
```

### Переписывание функции с использованием Promise

```javascript
const makeRequestPromise = (url) => {
  return new Promise((fulfill) => {
    fulfill("Ура, состояние fulfilled");
  });
};

makeRequestPromise("/api/sellers/154")
  .then((seller) => {
    const firstProductId = seller.productIds[0];
    return makeRequestPromise(`/api/products/${firstProductId}`);
  })
  .then((product) => {
    const firstReviewId = product.reviewsIds[0];
    return makeRequestPromise(`/api/reviews/${firstReviewId}`);
  })
  .then((review) => {
    console.log(review.author.name);
  })
  .catch((error) => console.log(error));
```

## Async/Await

- Упрощает работу с асинхронным кодом.
- Пример:

  ```javascript
  async function getMessage() {
    return new Promise((fulfill) => {
      setTimeout(() => fulfill("Привет!"), 3000);
    });
  }

  const message = await getMessage();
  console.log(message);
  ```

### Переписывание функции с использованием Async/Await

```javascript
const makeRequestAsync = async (url) => {
  return new Promise((fulfill) => {
    fulfill("Ура, состояние fulfilled");
  });
};

try {
  const seller = await makeRequestAsync("/api/sellers/154");
  const firstProductId = seller.productIds[0];
  const product = await makeRequestAsync(`/api/products/${firstProductId}`);
  const firstReviewId = product.reviewsIds[0];
  const review = await makeRequestAsync(`/api/reviews/${firstReviewId}`);
  console.log(review.author.name);
} catch (error) {
  console.log(error);
}
```
