const items = document.querySelectorAll('.item')
const cercles = document.querySelectorAll('.cercle')
const ratio = .1

const expand = (item, i) => {
  items.forEach((it, ind) => {
    if (i === ind) return
    it.clicked = false
    it.getElementsByClassName('div_shown')[0].style.display = "none"
    it.getElementsByClassName('div_hidden')[0].style.display = "flex"
  })
  gsap.to(items, {
    width: item.clicked ? '10vw' : '10vw',
    height: item.clicked ? '24vw' : '24vw',
    duration: 2,
    ease: 'elastic(1, .6)'
  })
  if (item.clicked) {
    console.log(item.getElementsByClassName('div_shown'))
    item.getElementsByClassName('div_shown')[0].style.display = "none"
    item.getElementsByClassName('div_hidden')[0].style.display = "flex"
  } else {
    item.getElementsByClassName('div_shown')[0].style.display = "block"
    item.getElementsByClassName('div_hidden')[0].style.display = "none"
  }

  item.clicked = !item.clicked
  gsap.to(item, {
    width: item.clicked ? '15vw' : '10vw',
    height: item.clicked ? '30vw' : '24vw',
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

const options = {
  root: null,
  rootMargin: '0px',
  threshold: ratio
}

const handleIntersect = function(entries, observer) {
  entries.forEach(function(entry){
    console.log(entry.target)
    if(entry.intersectionRatio > ratio){
      entry.target.classList.add('reveal-visible')
      observer.unobserve(entry.target)
    }
  })
}
const observer = new IntersectionObserver(handleIntersect , options);
document.querySelectorAll('.reveal').forEach(function(r) {
  observer.observe(r)
})
