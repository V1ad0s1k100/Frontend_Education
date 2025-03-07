const menuBurger = document.getElementById('burger-menu')
const menuBurgerItems = document.querySelectorAll('.menu-box__bar-item')
const menuBoxList = document.getElementsByClassName('menu-box-list')

let count = 0

menuBurger.addEventListener('click', () => {
  if (count % 2 === 0) {
    menuBurgerItems.forEach((item) => {
      item.style.transform = `rotate(90deg)`
      item.style.color = 'rgb(255, 112, 88)'
    })
    menuBoxList[0].style.display = 'flex'
  } else {
    menuBurgerItems.forEach((item) => {
      item.style.transform = `rotate(0deg)`
      item.style.color = 'rgb(148, 149, 154)'
    })
    menuBoxList[0].style.display = 'none'
  }
  count++
})
