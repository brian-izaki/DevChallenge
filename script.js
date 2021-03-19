const menuMobile = document.querySelector('.menu')
const btnOpenMenu = document.querySelector('nav [data-hamburguer="open"]')
const btnCloseMenu = document.querySelector('.menu [data-hamburguer="close"]')

function toggleMenu(e) {
  menuMobile.classList.toggle('ativo')  
}

btnOpenMenu.addEventListener('click', toggleMenu)
btnCloseMenu.addEventListener('click', toggleMenu)