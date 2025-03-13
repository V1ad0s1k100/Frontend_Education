const numberElements = document.querySelectorAll("[data-num]")
const operationsElements = document.querySelectorAll("[data-oper]")
const outputElement = document.querySelector("[data-oper-conclusion]")

const calcInputElement = document.querySelector("[data-calc-input]")

const calcClearAllElement = document.querySelector("[data-oper-clear-all]")

const calcClearElement = document.querySelector("[data-oper-clear]")

numberElements.forEach((element) => {
  element.addEventListener("click", () => {
    calcInputElement.innerHTML += element.textContent
  })
})

operationsElements.forEach((element) => {
  element.addEventListener("click", () => {
    let logic = 1

    operationsElements.forEach((oper) => {
      if (calcInputElement.innerHTML.at(-1) === oper.textContent) {
        logic = 0
      }
    })

    if (logic) {
      calcInputElement.innerHTML += element.textContent
    }
  })
})

outputElement.addEventListener("click", () => {
  try {
    if (calcInputElement.innerHTML.length != 0) {
      calcInputElement.innerHTML = eval(calcInputElement.innerHTML)
    }
  } catch (error) {
    calcInputElement.innerHTML = "Error"
  }
})

calcClearAllElement.addEventListener("click", () => {
  calcInputElement.innerHTML = ""
})

calcClearElement.addEventListener("click", () => {
  calcInputElement.innerHTML = calcInputElement.innerHTML
    .split("")
    .slice(0, -1)
    .join("")
})
