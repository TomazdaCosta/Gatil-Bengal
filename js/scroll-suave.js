export default class ScrollSuave {
  constructor(linksList) {
    this.links = document.querySelectorAll(linksList)
    this.events = ['touchstart', 'click']
  }

  scrollSuave(event) {
    event.preventDefault()
    const href = event.currentTarget.getAttribute('href')
    const section = document.querySelector(href)
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  addEvent() {
    this.links.forEach(link => {
      this.events.forEach(event => {
        link.addEventListener(event, this.scrollSuave)
      })
    })
  }

  initScrollSuave() {
    this.addEvent()
  }
}