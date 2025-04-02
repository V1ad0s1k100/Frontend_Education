const loadElement = document.querySelector("[data-load-text]")
let count = 0

const renderLoad = setInterval(() => {
  loadElement.innerHTML += "."
  count++
  if (count === 3) {
    loadElement.innerHTML = ""
    count = 0
  }
}, 1000)

const burgerList = document.querySelector("[data-burger-list]")
const burgerBtn = document.querySelector("[data-burger-btn]")

burgerBtn.addEventListener("click", () => {
  console.log(1)
  burgerList.style.display = "block"
})
