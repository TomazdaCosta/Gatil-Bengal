import MenuMobile from "./menu-mbile.js"
import ShowInfo from "./show-informacoes.js"

document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('js-enabled')
})

const menuMobile = new MenuMobile('.menu-mobile', '.lista-nav')
menuMobile.initMenuMobile()

const showInfo = new ShowInfo('.informacoes-titulo', '.informacoes-conteudo')
showInfo.initShowDescription()