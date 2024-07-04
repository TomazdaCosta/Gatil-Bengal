document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('js-enabled')
})

import MenuMobile from "./menu-mbile.js"
import ShowInfo from "./show-informacoes.js"
import Modal from "./modal.js"

const menuMobile = new MenuMobile('.menu-mobile', '.lista-nav')
menuMobile.initMenuMobile()

const showInfo = new ShowInfo('.informacoes-titulo', '.informacoes-conteudo')
showInfo.initShowDescription()

const modal = new Modal('.filhotes-descricao .button-filhote', '.fechar-modal', '.modal-bg')
modal.initModal()