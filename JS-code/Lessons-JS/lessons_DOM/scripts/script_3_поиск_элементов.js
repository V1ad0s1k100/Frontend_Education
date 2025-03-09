// Не всегда удобно доставать элементы из DOM отталкиваясь от дочерних элементов

// Пример

const buttonElement =
  document.body.children[1].children[1].children[0].children[0].children[0]
    .children[0]
// section.investigation-section
// div.investigation-box
// div.level-one
// div.level-two
// div.level-three
// button

console.log("buttonElement: ", buttonElement) // В конце мы получаем кнопку

// Если у элемента в разметке указан id, то мы можем получить его при помощи:
const btnOne = document.getElementById("myBtn")
console.log("btnOne: ", btnOne) // Выведет элемент с id="myBtn"

// Если указать некорректный id, то будет выведен null
const btnOneIncorrect = document.getElementById("myBtn123")
console.log("btnOneIncorrect: ", btnOneIncorrect) // Выведет null, так как элемента с таким id нет

// Также можно получить элемент основываясь на глобальной переменной с именем id в camelCaseNotation
// Но если в коде уже есть переменная с этим именем, то вместо элемента c id будет выведена локальная переменная
console.log("myBtn: ", myBtn) // Выведет значение переменной myBtn, если такая переменная существует

// Также можно использовать универсальный метод querySelector, он находит в коде первый подходящий селектор и выдает на него ссылку
// Селектор может быть любым: id, class или составной .level-one > .level-two > .level-three
const btnTwo = document.querySelector(".btnClass")
console.log("btnTwo: ", btnTwo) // Выведет первый элемент с классом .btnClass

// Существует также метод, позволяющий получать ссылки на все элементы, подходящие под определенный селектор
const interList = document.querySelectorAll(
  ".internal-list .internal-list__item",
)
console.log("interList: ", interList) // Выведет NodeList всех элементов с классом .internal-list__item внутри .internal-list

// Такой массив объектов можно перебрать
interList.forEach((el) => console.log("Элемент списка: ", el)) // Перебираем и выводим каждый элемент списка

// Если querySelectorAll не найдет ни одного элемента с указанным селектором, то выведет пустой массив

// querySelectorAll и querySelector можно использовать для поиска элементов не только начиная от объекта document, но и от уже имеющейся в коде переменной со значением DOM элемента

// Если нужно найти элемент не сверху вниз, а снизу вверх, то потребуется следующий метод:
const thirdBoxElement = document.querySelector(".level-three")
const firstBoxElement = thirdBoxElement.closest(".level-one")
console.log("Элемент firstBoxElement: ", firstBoxElement) // Выведет ближайший родительский элемент с классом .level-one

// Также можно получить сразу несколько элементов с разными селекторами при помощи метода querySelectorAll
const elementsArr = document.querySelectorAll(
  `.level-one, .level-two, .level-three`,
)
console.log("elementsArr: ", elementsArr) // Выведет NodeList всех элементов с классами .level-one, .level-two и .level-three

// Также существуют урезанные по функционалу методы, но они отличаются от querySelector и querySelectorAll тем, что записывают элементы динамически
const formElements = document.getElementsByTagName("form")
const radioGroupElements = document.getElementsByClassName("radio-group")
const inputElements = document.getElementsByName("specialization")

console.log("formElements: ", formElements) // Выведет HTMLCollection всех элементов <form>
console.log("radioGroupElements: ", radioGroupElements) // Выведет HTMLCollection всех элементов с классом .radio-group
console.log("inputElements: ", inputElements) // Выведет NodeList всех элементов с атрибутом name="specialization"

// Клонируем элемент <form>, добавляем в конце <body>
const secondFormElement = formElements[0].cloneNode(true)
document.body.append(secondFormElement)

console.log("===========================================")

console.log("formElements: ", formElements) // Выведет обновленный HTMLCollection всех элементов <form>
console.log("radioGroupElements: ", radioGroupElements) // Выведет HTMLCollection всех элементов с классом .radio-group
console.log("inputElements: ", inputElements) // Выведет NodeList всех элементов с атрибутом name="specialization"

// Просто так перебрать коллекции, которые получены при помощи этих методов, не получится. Нужно преобразовать их в массивы при помощи spread оператора или объекта Array

// Для нэйминга переменных не стоит называть переменные также как и теги, лучше углубиться в смысл тега. Например, <a> лучше назвать link

// Также каждый раз при нэйминге переменных DOM дерева стоит в конце приписывать Elements или Element

// Для оптимального обращения к html элементам из JS стоит использовать data-атрибуты в html тегах
// Обращаться к ним следует следующим образом:
const dataElement = document.querySelector("[data-js-slider-list]")
console.log(dataElement) // Выведет элемент с атрибутом data-js-slider-list

// Атрибуты классов стоит использовать только в CSS
// ID можно использовать в JS, но поскольку их нужно именовать уникально, то лучше использовать метод с data-
