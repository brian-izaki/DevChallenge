const menu = document.querySelector('.menu')
const openMenu = document.querySelector('nav [data-hamburguer="open"]')
const closeMenu = document.querySelector('.menu [data-hamburguer="close"]')

function toggleMenu(e) {
  menu.classList.toggle('ativo')  
}

openMenu.addEventListener('click', toggleMenu)
closeMenu.addEventListener('click', toggleMenu)