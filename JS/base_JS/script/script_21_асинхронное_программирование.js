// Синхронное выполнение кода (каждая строчка кода выполняется друг за другом. Пока не выполнится одна строка вторая не будет выполняться)
console.log(1)
console.log(2)
console.log(3)

console.log('\nCинхронный код c задержкой')

// Другое представление синхронного кода

// Функция wait является синхронной
const wait = (ms, callback) => {
  const now = new Date().getTime()

  while (new Date().getTime() < now + ms) {
    /* Ничего не выполняем */
  }

  callback()
}

console.log(1)
// wait(5000, () => console.log(2))
console.log(3)

console.log('\nАсинхронный код')

// Чтобы сделать функцию wait асинхронной (т.е. так чтобы до вывода не было заблокированно выполнение последующего кода) нужно использовать setTimeout
const waitAsync = (callback, ms) => {
  setTimeout(callback, ms)
}

console.log(1)
// waitAsync(() => console.log(2, 'вывод с задержкой 5000 ms'), 5000)
console.log(3)

/* JS способен обрабатывать только один поток задач

При этом если JS видет асинхронную задачу, то он выносит ее за пределы основного потока и продолжает выполнять следующие задачи.

После обработки всех задач в основном цикле (EventLoop) JS просматривает вынесенные задачи и начинает выполнять их.

Таким образом обрабатываются задачи в JS при помощи Event Loop или событийного цикла
*/

// Разберем пример асинхронного кода на реальном примере

const makeRequest = (url, onSuccess) => {}

const sellerId = 154

makeRequest(`/api/sellers/${sellerId}`, (seller) => {
  const firstProductId = seller.productIds[0]

  makeRequest(`/api/products/${firstProductId}`, (product) => {
    const firstReviewId = seller.reviewsIds[0]

    makeRequest(`/api/reviews/${firstReviewId}`, (review) => {
      const authorName = review.author.name
    })
  })
})

/*
        Для того чтобы не писать гигантское
        колличество колбек фукнций 
        существует Promise
*/

/*
        Promise - специальный объект-надстройка 
        для работы с асинхронным кодом
*/

/*
        Promise имеет 3 состояния:
            pending - ожидание, исходное состояние
            fulfilled - выполнено успешно, получен результат 
            rejected - выполнено с ошибкой
*/

/*
        Основные методы Promise:
            then() - обрабатывает fulfilled состояние
            catch() - обрабатывает rejected состояние
*/

console.log('\nПример кода с Promise')

const promise = new Promise((fulfill, reject) => {
  console.log('Начало, состояние pending...')

  setTimeout(() => {
    if (Math.random() > 0.5) {
      fulfill('Ура, состояние fulfilled')
    } else {
      reject('Увы, состояние rejected')
    }
  }, 3000)
})

promise
  .then((successData) => {
    console.log('Успех! Получены данные: ', successData)
  })
  .catch((errorData) => {
    console.log('Ошибка. Получены данные: ', errorData)
  })
  .finally(() => {
    console.log('Код, выполняющийся в самом конце, независимо от результата')
  })

// Перепишем асинхронную функцию makeRequest с использованием промисов
const makeRequestPromise = (url, onSuccess) => {
  return new Promise((fulfill) => {
    fulfill('Ура, состояние fulfilled')
  })
}

const sellerIdPromise = 154

makeRequestPromise(`/api/sellers/${sellerIdPromise}`)
  .then((seller) => {
    const firstProductId = seller.productIds[0]
    return makeRequestPromise(`/api/products/${firstProductId}`)
  })
  .then((product) => {
    const firstReviewId = product.reviewsIds[0]
    return makeRequestPromise(`/api/reviews/${firstReviewId}`)
  })
  .then((review) => {
    const authorName = review.author.name
    console.log(authorName)
  })
  .catch((error) => {
    console.log(error)
  })

async function getSomething() {
  return 'Вывод строки с ключевым словом async'
}

getSomething().then((something) => {
  console.log(something)
})

async function getMessage() {
  return new Promise((fulfill, reject) => {
    setTimeout(() => {
      fulfill('Привет!')
    }, 3000)
  })
}

console.log('Начало')

// Использование await для ожидания выполнения промиса
const message = await getMessage().then((result) => {
  console.log(result)
})

console.log('Конец')

// Перепишем функцию makeRequestPromise на async и await

const makeRequestAsync = async (url, onSuccess) => {
  return new Promise((fulfill) => {
    fulfill('Ура, состояние fulfilled')
  })
}

const sellerIdAsync = 154

try {
  const seller = await makeRequestAsync(`/api/sellers/${sellerIdAsync}`)
  const firstProductId = seller.productIds[0]

  const product = await makeRequestAsync(`/api/sellers/${firstProductId}`)
  const firstReviewId = product.reviewsIds[0]

  const review = await makeRequestPromise(`/api/reviews/${firstReviewId}`)

  const authorName = review.author.name
  console.log(authorName)
} catch (error) {
  console.log(error)
}
