export default class Modal {
  constructor(buttonAbrir, buttonFechar, modal) {
    this.buttonAbrirModal = document.querySelector(buttonAbrir)
    this.buttonFecharModal = document.querySelector(buttonFechar)
    this.modalBg = document.querySelector(modal)
    this.events = ['click', 'touchstart']
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
    this.events.forEach(evento => {
      this.buttonAbrirModal.addEventListener(evento, this.abrirModal)
      this.buttonFecharModal.addEventListener(evento, this.fecharModal)
      this.modalBg.addEventListener(evento, this.clicarFora)
    })
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