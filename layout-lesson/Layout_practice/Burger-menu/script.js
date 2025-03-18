const burgerElement = document.querySelector("[data-burger]")
const sticks = document.querySelectorAll("[data-burger-item]")

let countClick = 0

burgerElement.addEventListener("click", () => {
  if (countClick % 2 === 0) {
    sticks[0].style.rotate = "45deg"
    sticks[2].style.rotate = "-45deg"
    sticks[1].style.animation = "burgerMidlleStickLeft 0.4s ease-in-out"

    setTimeout(() => {
      sticks[1].style.display = "none"
    }, 350)
  } else {
    sticks[1].style.display = "block"
    sticks[1].style.animation = "burgerMidlleStickRight 0.4s ease-in-out"

    setTimeout(() => {
      sticks[1].style.animation = "none"
    }, 350)

    sticks[0].style.rotate = "0deg"
    sticks[2].style.rotate = "0deg"
  }

  sticks.forEach((el) => {
    el.classList.toggle("active")
  })

  countClick++
})
