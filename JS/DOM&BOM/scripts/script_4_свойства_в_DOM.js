const blockOneElement = document.querySelector(".block1")

// Выводим ширину элемента через свойство style. Поскольку стили прописаны в CSS файле, а не в HTML документе, значение будет пустым.
console.log(
  `Ширина элемента через свойство style: ${blockOneElement.style.width}`,
) // Выведет пустую строку, так как ширина не задана в атрибуте style

// Выводим ширину элемента через метод getComputedStyle, который возвращает все стили элемента, включая те, что прописаны в CSS файле.
console.log(
  `Ширина элемента через getComputedStyle: ${
    getComputedStyle(blockOneElement).width
  }`,
) // Выведет ширину элемента, прописанную в CSS файле

// Выводим значение свойства background-color псевдоэлемента ::after через метод getComputedStyle.
console.log(
  `Свойство background-color псевдоэлемента ::after: ${
    getComputedStyle(blockOneElement, "::after").backgroundColor
  }`, // Выведет значение background-color псевдоэлемента ::after, если оно задано в CSS
)

const blockTwoElement = document.querySelector(".block2")

// Выводим объект classList, который содержит список всех классов элемента.
console.log(`Список классов элемента block2:`, blockTwoElement.classList) // Выведет DOMTokenList со всеми классами элемента

// Добавляем классы "red" и "color" к элементу.
blockTwoElement.classList.add("red", "color")
console.log(
  `После добавления классов "red" и "color":`,
  blockTwoElement.classList,
) // Выведет обновленный список классов

// Удаляем классы "red" и "color" у элемента.
blockTwoElement.classList.remove("red", "color")
console.log(
  `После удаления классов "red" и "color":`,
  blockTwoElement.classList,
) // Выведет обновленный список классов

// Переключаем класс "red": если его нет, добавляем; если есть, удаляем.
blockTwoElement.classList.toggle("red") // Добавляет класс red
console.log(`После первого toggle класса "red":`, blockTwoElement.classList) // Выведет обновленный список классов

blockTwoElement.classList.toggle("red") // Удаляет класс red
console.log(`После второго toggle класса "red":`, blockTwoElement.classList) // Выведет обновленный список классов

// Переключаем класс "red" в зависимости от значения переменной hasTrue. В данном случае класс не добавится, так как hasTrue = false.
const hasTrue = false
blockTwoElement.classList.toggle("red", hasTrue) // Класс red не добавится
console.log(
  `После toggle класса "red" с hasTrue = false:`,
  blockTwoElement.classList,
) // Выведет обновленный список классов

// Проверяем, содержит ли элемент класс "block2".
console.log(
  `Есть ли класс "block2" у элемента: ${blockTwoElement.classList.contains(
    "block2",
  )}`, // Выведет true, если элемент содержит класс "block2", иначе false
)

// Работа с CSS переменными
const blockThreeElement = document.querySelector(".block3")

// Устанавливаем значение CSS переменной --border-color для элемента.
blockThreeElement.style.setProperty("--border-color", "blue") // Также можно 3 аргументом передать приоритет, например "important"
console.log(
  `Установлено значение CSS переменной --border-color: blue для элемента block3`,
)
