const items = document.querySelectorAll('.item')
const elemS = document.querySelectorAll('.div_shown')
const elemH = document.querySelectorAll('.div_hidden')

const expand = (item, i) => {
  items.forEach((it, ind) => {
    if (i === ind) return
    it.clicked = false
  })
  gsap.to(items, {
    width: item.clicked ? '10vw' : '10vw',
    duration: 2,
    ease: 'elastic(1, .6)'
  })
  
  item.clicked = !item.clicked
  gsap.to(item, {
    width: item.clicked ? '15vw' : '10vw',
    duration: 2.5,
    ease: 'elastic(1, .3)'
  })
}

items.forEach((item, i) => {
  item.clicked = false
  if(i === 2) {
    item.clicked = true
  }
  item.addEventListener('click', () => expand(item, i))
})