export default class AnimaScroll {
  constructor(sectionsSelected) {
    this.sections = document.querySelectorAll(sectionsSelected)
    this.windowHeight = window.innerHeight * 0.6
    this.showSection = this.showSection.bind(this)
  }

  showSection() {
    window.addEventListener('scroll', this.showSection)
    this.sections.forEach(section => {
      const top = section.getBoundingClientRect().top
      if(top <= this.windowHeight) {
        section.classList.add('ativo')
      } else {
        section.classList.remove('ativo')
      }
    })
  }

  initAnimaScroll() {
    this.showSection()
  }
}