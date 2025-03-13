const input = document.querySelector("[data-input-box-input")
const btn = document.querySelector("[data-input-box-btn")
const p = document.querySelector("[data-input-box-question")
const objAnswers = {
  "Какой метод объекта Math отвечает за округление числа до ближайшего целого?":
    "math.round",
  "Какой метод объекта Math отвечает за округление числа до ближайшего меньшего целого?":
    "math.floor",
  "Какой метод объекта Math отвечает за округление числа до ближайшего большего целого?":
    "math.ceil",
  "Какой метод объекта Math убирает дробную часть числа?": "math.trunc",
}

let countAnswerList = 0
const keys = Object.keys(objAnswers)
const randomAnswerList = keys[Math.floor(Math.random() * keys.length)]

const getQuestion = () => {
  p.innerHTML = `${randomAnswerList}`
  input.addEventListener("input", () => {
    if (input.value.trim() === "") {
      btn.style.backgroundColor = "red"
    } else {
      btn.style.backgroundColor = "green"
    }
  })
}

let countAnswerBtn = 0

btn.addEventListener("click", () => {
  const answ = input.value.trim()
  if (answ === randomAnswerList) {
    p.innerHTML = "Верно"
  } else {
    p.innerHTML = `Неправильно (ответ: ${objAnswers[randomAnswerList]})`
  }
  if (!(countAnswerBtn % 2)) {
    btn.innerHTML = "Продолжить"
  } else {
    btn.innerHTML = "Отправить"
  }
  countAnswerList++
})

const btnRenderCounter = () => {
  btn.innerHTML = "Отправить"

  setTimeout(getQuestion, 3200)

  setTimeout(() => {
    input.style.animation = "appearanceInput 1s ease-in-out"
    input.style.visibility = "visible"
  }, 2200)

  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      p.innerHTML = `${++i}`
    }, i * 1000)
  }
}

let count = 0

btn.addEventListener("click", () => {
  if (!count) {
    btnRenderCounter()
    count++
  }
})
