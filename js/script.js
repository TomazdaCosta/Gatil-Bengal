import MenuMobile from "./menu-mbile.js"

document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('js-enabled')
})

const menuMobile = new MenuMobile('.menu-mobile', '.lista-nav')
menuMobile.initMenuMobile()