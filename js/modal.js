export default class Modal {
  constructor(buttonAbrir, buttonFechar, modal) {
    this.buttonAbrirModal = document.querySelector(buttonAbrir)
    this.buttonFecharModal = document.querySelector(buttonFechar)
    this.modalBg = document.querySelector(modal)
  }

  abrirModal() {
    this.modalBg.classList.add('ativo')
  }

  fecharModal() {
    this.modalBg.classList.remove('ativo')
  }

  clicarFora(event) {
    if (event.target === this.modalBg) {
      this.fecharModal()
    }
  }

  addEvent() {
    this.buttonAbrirModal.addEventListener('click', this.abrirModal)
    this.buttonFecharModal.addEventListener('click', this.fecharModal)
    this.modalBg.addEventListener('click', this.clicarFora)
  }

  bind() {
    this.abrirModal = this.abrirModal.bind(this)
    this.fecharModal = this.fecharModal.bind(this)
    this.clicarFora = this.clicarFora.bind(this)
  }

  initModal() {
    this.bind()
    this.addEvent()
  }
}