export default class MenuMobile {
  constructor(button, nav) {
    this.buttonMenuMobile = document.querySelector(button)
    this.navMenuMobile = document.querySelector(nav)
    this.events = ['touchstart', 'click']
  }

  addEventButton() {
    this.events.forEach((event) => {
      this.buttonMenuMobile.addEventListener(event, this.showNav)
    })
  }

  showNav(event) {
    event.preventDefault()
    this.navMenuMobile.classList.toggle('ativo')
    this.buttonMenuMobile.classList.toggle('ativo')
  }

  bind() {
    this.showNav = this.showNav.bind(this)
  }

  initMenuMobile() {
    this.bind()
    this.addEventButton()
  }
}