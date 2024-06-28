export default class ShowInfo {
  constructor(titulos, descricoes) {
    this.titulos = document.querySelectorAll(titulos)
    this.descricoes = document.querySelectorAll(descricoes)
    this.events = ['touchstart', 'click']
  }

  showDescription() {
    this.events.forEach((event) => {
      this.titulos.forEach((titulo) => {
        titulo.addEventListener(event, (evento) => {
          this.titulos.forEach((tituloAll) => {
            tituloAll.classList.remove('ativo')
          })
          const tituloSelecionado = evento.target.id
          evento.target.classList.add('ativo')
          this.descricoes.forEach((descricao) => {
            descricao.classList.remove('ativo')
            if(descricao.id === tituloSelecionado) {
              descricao.classList.add('ativo')
            }
          })
        })
      })
    })
  }

  initShowDescription() {
    this.showDescription()
  }
}