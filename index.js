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
