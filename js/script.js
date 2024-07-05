document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('js-enabled')
})

import MenuMobile from "./menu-mobile.js"
import ShowInfo from "./show-informacoes.js"
import Modal from "./modal.js"
import ScrollSuave from "./scroll-suave.js"
import AnimaScroll from "./anima-scroll.js"

const menuMobile = new MenuMobile('.menu-mobile', '.lista-nav')
menuMobile.initMenuMobile()

const showInfo = new ShowInfo('.informacoes-titulo', '.informacoes-conteudo')
showInfo.initShowDescription()

const modal = new Modal('.filhotes-descricao .button-filhote', '.fechar-modal', '.modal-bg')
modal.initModal()

const scrollSuave = new ScrollSuave('.lista-nav a', '.section')
scrollSuave.initScrollSuave()

const animaScroll = new AnimaScroll()