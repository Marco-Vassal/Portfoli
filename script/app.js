const items = document.querySelectorAll('.item')
const cercle = document.querySelector('.cercle')
const header = document.querySelector('header')
const loader = document.querySelector('.loader')
const main = document.querySelector('main')
const pages = document.querySelectorAll('.navbar a')
const sticky = header.offsetTop // Get the offset position of the navbar
const ratio = .1

// Elastic accordion for quality
if (window.matchMedia("(min-width: 413px)").matches) {
  /* La largeur minimum de l'affichage est 391 px inclus */
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
} else {
  /* L'affichage est inférieur à 391px de large */
  const expand = (item, i) => {
    items.forEach((it, ind) => {
      if (i === ind) return
      it.clicked = false
      it.getElementsByClassName('div_shown')[0].style.display = "none"
      it.getElementsByClassName('div_hidden')[0].style.display = "flex"
    })
    gsap.to(items, {
      width: item.clicked ? '75vw' : '75vw',
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
      width: item.clicked ? '75vw' : '75vw',
      height: item.clicked ? '90vw' : '24vw',
      duration: 3,
      ease: 'elastic(0.5, .3)'
    })
  }
  items.forEach((item, i) => {
    item.clicked = false
    if(i === 0) {
      item.clicked = true
    }
    item.addEventListener('click', () => expand(item, i))
  })
}


// animation when scrolling
const options = {
  root: null,
  rootMargin: '0px',
  threshold: ratio
}
const handleIntersect = function(entries, observer) {
  entries.forEach(function(entry){
    if(entry.intersectionRatio > ratio){
      entry.target.classList.remove('reveal')
      observer.unobserve(entry.target)
    }
  })
}
document.documentElement.classList.add('reveal-loaded')
const observer = new IntersectionObserver(handleIntersect , options)
document.querySelectorAll('.reveal').forEach(function(r) {
  observer.observe(r)
})

//preloader
window.addEventListener('load', ()=> {
  
  if(loader){
    loader.classList.add('fondu-out')
    main.style.display = 'block'
    setTimeout(()=>{
      loader.style.display = 'none'
    }, 400)
  }
  const cercle = document.querySelector('.cercle')
  const height = document.body.clientHeight/2
  cercle.style.height = height + "px"
})

window.addEventListener("scroll", function() {
  //Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky")
  } else {
    header.classList.remove("sticky")
  }
  //Parallax effect
  const scrolled = window.pageYOffset
  cercle.style.transform = "translateY(" + scrolled * 0.6 + "px)"
})

window.addEventListener("resize", () => {
  const cercle = document.querySelector('.cercle')
  const height = document.body.clientHeight/2
  console.log(height)
  cercle.style.height = height + "px"
});


//header hamburger
const hamburger = document.querySelector(".hambergur")
console.log(hamburger)
hamburger.addEventListener("click", () => {
    
    document.querySelector(".fullscreen").classList.toggle("active")
  });
  
  document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".fullscreen").classList.toggle("reverse_anim")
    setTimeout(()=>{
        document.querySelector(".fullscreen").classList.remove("reverse_anim")
        document.querySelector(".fullscreen").classList.remove("active")
    }, 400)
  });
  