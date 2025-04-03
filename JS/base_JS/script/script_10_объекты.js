const obj1 = {age: 10}
const obj2 = {age: 10}

// Сравниваем два объекта obj1 и obj2
// Важно понимать, что в JavaScript объекты сравниваются по ссылке, а не по значению
// Поэтому даже если у двух объектов одинаковые свойства и значения, они будут считаться разными объектами

console.log(obj1 === obj2) // false, так как obj1 и obj2 указывают на разные области памяти




const obj3 = { name: 'Vladosik'}
const obj4 = obj3

// Сравниваем два объекта obj3 и obj4
// В данном случае obj3 и obj4 указывают на одну и ту же область памяти
// Поэтому они будут считаться одинаковыми объектами

console.log(obj3 === obj4) // true, так как obj3 и obj4 указывают на одну и ту же область памяти

// Пример, явно показывающий, что obj3 и obj4 имеют общую ссылку

obj4.name = 'V1ad0s1k'
console.log(obj3.name)

const obj5 = {
    name: 'Vladosik', 
    age: 17,
    obj: {
        1: 'Первое свойство',
        2: 'Второе свойство',
        3: 'Третье свойство',
    },
    obj2: {
        1: 'Первое свойство',
        2: 'Второе свойство',
        3: 'Третье свойство',
    },
}

const obj6 = {
    name: 'Vladosik', 
    obj: {
        1: 'Первое свойство',
        2: 'Второе свойство',
        3: 'Третье свойство',
    },
    obj2: {
        1: 'Первое свойство',
        2: 'Второе свойство',
        3: 'Третье свойство',
    },
    age: 17,
}

console.log('')

const areObjectsEqual = (object1, object2) => {
    // Получаем массивы ключей для обоих объектов
    const keys1 = Object.keys(object1) 
    const keys2 = Object.keys(object2) 
    
    // Если количество ключей не совпадает, объекты точно не равны
    if (keys1.length !== keys2.length) {
        return false
    }

    // Проходимся по всем ключам первого объекта
    for (const key in object1) {
        const value1 = object1[key]
        const value2 = object2[key]
        // Проверяем, являются ли оба значения объектами
        const areValueObjects = typeof value1 === 'object' && typeof value2 === 'object'

        // Если оба значения объекты, рекурсивно вызываем areObjectsEqual
        if (areValueObjects) {
            if( !areObjectsEqual(value1, value2) ) {
                return false
            }
        }

        // Если значения не равны и не являются объектами, возвращаем false
        if (value1 !== value2 && !areValueObjects) {
            return false
        }
    }

    // Если все проверки пройдены, объекты равны
    return true
} 

console.log('Равны ли объекты obj5 и obj6: ', areObjectsEqual(obj5, obj6))


console.log('')



const obj7 = {
    name: 'Vladosik',
}

// 3 способа как создать копия объекта

const obj8 = {} 

for (const key in obj7) {
    obj8[key] = obj7[key]
}
const obj9 = Object.assign({}, obj7)
const obj10 = {...obj7}

console.log(obj7, obj8, obj9, obj10)


// Объединение нескольких объектов

const obj11 = {name: 'Vladosik'}
const obj12 = {age: 17}
const obj13 = {name: 'Maks'}

// Объединяем объекты obj11, obj12 и obj13 в один объект obj14
// Если у объектов есть одинаковые ключи, значения из последнего объекта будут использоваться
const obj14 = Object.assign({}, obj11, obj12, obj13)

// Используем оператор spread (...) для объединения объектов
const obj15 = {...obj11, ...obj12, ...obj13}

console.log(obj14, obj15)


console.log('')


const obj16 = {
    name: 'Vladosik', 
    age: 17,
    adress: {
        street: 'Michurina'
    }
}

console.log(obj16.adress.street) // Обращение к свойству объекта в объекте

const obj17 = {
    name: 'Vladosik', 
    age: 17,
    /* 
    adress: {
        street: 'Michurina'
    }
    */
}

// Используем опциональную цепочку (optional chaining) для безопасного обращения к вложенному свойству
// Если свойство adress или street не существует, код не вызовет ошибку, а вернет undefined
console.log(obj17.adress?.street)

console.log('')


const obj18 = {
    name: 'Vladosik',
    age: 17,
    date: '15.10.2024',
}
// Извлекаем свойства name, age, date из obj18, записывая их в переменные. Этот метод называется деструктурирующего  присваивание
// let
const {name, age, date} = obj18

console.log(name, age, date)


// Функция для логирования адреса
const logAddress = ({city, street, house, apartment}) => {
    // Выводим адрес в формате: город, улица, дом, квартира
    console.log(`город ${city}, ул. ${street}, д. ${house}, кв. ${apartment}`)
}

// Вызываем функцию logAddress с объектом, содержащим адрес
logAddress({
    city: 'Москва',
    street: 'Тверская',
    house: '12',
    apartment: '34',
})

console.log('')

const user = {
    name: 'Vladosik',
}

const admin = {
    name: 'Boss',
}

// Извлекаем свойства name из объектов user и admin, записывая их в переменные nameUser и nameAdmin соответственно
const {name: nameUser} = user
const {name: nameAdmin} = admin
console.log(nameAdmin, nameUser)


console.log('')


const adressDestraction1 = {
    city: 'Москва',
    street: 'Тверская',
    house: '12',
    apartmentHouse: '34',
}

const adressDestraction2 = {
    city: 'Москва',
    street: 'Тверская',
    house: '12',
}

// Для деструктиризации можно задать значение по умолчанию
const {apartmentHouse = 'Не указано'} = adressDestraction2
console.log(apartmentHouse)


console.log('')

// Функция для логирования деталей о человеке
const logPersonDetails = ({ name, age, ...otherInfo }) => {
    // Выводим имя и возраст
    console.log(`Name: ${name}, Age: ${age}`);
    // Выводим остальные детали
    console.log('Other details:', otherInfo);
};

const person = {
    name: 'Vladosik',
    age: 17,
    city: 'Москва',
    street: 'Тверская',
    house: '12',
    apartment: '34'
};

logPersonDetails(person);