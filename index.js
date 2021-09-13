const openBtn = document.querySelector('.open-nav-btn')
const closeBtn = document.querySelector('.close-nav-btn')

const nav = document.querySelector('.nav')

const openNavModal = () => {
  nav.classList.add('navigation-open')

  document.body.style.overflow = 'hidden'
}

const closeNavModal = () => {
  nav.classList.remove('navigation-open')

  document.body.style.overflow = 'unset'
}

openBtn.addEventListener('click', openNavModal)
closeBtn.addEventListener('click', closeNavModal)

// Slider
const slides = document.querySelectorAll('.slide')
const leftSlideBtn = document.querySelector('#left-slide-btn')
const rightSlideBtn = document.querySelector('#right-slide-btn')

let i = 0

const moveLeft = () => {
  slides.forEach((slide) => {
    slide.classList.remove('visible')
  })

  slides[i].classList.add('visible')

  if (i <= 0) {
    i = slides.length - 1
  } else {
    i--
  }
}

const moveRight = () => {
  slides.forEach((slide) => {
    slide.classList.remove('visible')
  })

  slides[i].classList.add('visible')

  if (i === slides.length - 1) {
    i = 0
  } else {
    i++
  }
}

leftSlideBtn.addEventListener('click', moveLeft)
rightSlideBtn.addEventListener('click', moveRight)
