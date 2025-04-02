const htmlElement = document.documentElement
const bodyElement = document.body

console.log(
  "Ширина окна через document.documentElement: ",
  htmlElement.clientWidth,
)

console.log(
  "Высота окна через document.documentElement: ",
  htmlElement.clientHeight,
)

console.log("Ширина окна через window: ", window.innerWidth)

console.log("Высота окна через window: ", window.innerHeight)

console.log(
  "Ширина страницы через htmlElement.scrollWidth: ",
  htmlElement.scrollWidth,
)

console.log(
  "Высота страницы через htmlElement.scrollHeight: ",
  htmlElement.scrollHeight,
)

console.log(
  "Максимальное значение ширины экрана: ",
  Math.max(
    htmlElement.clientWidth,
    bodyElement.clientWidth,
    htmlElement.scrollWidth,
    bodyElement.scrollWidth,
  ),
)

console.log(
  "Координаты позиции скролла страницы: ",
  window.scrollX,
  window.scrollY,
)

// document.documentElement.scroll({
//   top: 400,
//   behavior: "smooth",
// })

// window.scroll({
//   top: 400,
//   behavior: "smooth",
// })

// scrollTo ~ scroll
// метод scroll скролит не на указанное колличество px, в какую-либо сторону, а в определенную координату на странице

// setTimeout(() => {
//   window.scroll({
//     top: 100,
//     behavior: "smooth",
//   })
// }, 2000)

// scrollBy скролит не до определенной координаты, а на определенное колличество px

// setTimeout(() => {
//   window.scrollBy({
//     top: 100,
//     behavior: "smooth",
//   })
// }, 1000)

const reviewsSectionElement = document.querySelector("#reviews")

// reviewsSectionElement.scrollIntoView({
//   behavior: "smooth",
// })

// Скролл может быть не отображен из-за слишком быстрого отображения скрола
// Для решения этой проблемы используется setTimeout

setTimeout(() => {
  reviewsSectionElement.scrollIntoView({
    behavior: "smooth",
    block: "nearest", // end - скролл до конца блока, start - до начала блока, center - по центру блока, nearest - браузер сам решает
    inline: "start", // Скрол по горизонтали
  })
}, 300)
