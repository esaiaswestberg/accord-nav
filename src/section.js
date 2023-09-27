import Navigation from './navigation.js'

export default class Section {
  #element = this.#createEmptyElement()
  #navigationInstance
  #title

  constructor(title) {
    this.#title = title

    this.#initializeElement()
  }

  addSection(section) {
    this.#navigationInstance.addSection(section)
  }

  addLink(link) {
    this.#navigationInstance.addLink(link)
  }

  get element() {
    return this.#element
  }

  #initializeElement() {
    this.#element.appendChild(this.#createHeaderElement())
    this.#element.appendChild(this.#createNavigationElement())
  }

  #createEmptyElement() {
    const section = document.createElement('section')
    section.classList.add('accord-nav__section')
    section.setAttribute('role', 'listitem')
    section.setAttribute('aria-expanded', 'false')
    return section
  }

  #createHeaderElement() {
    const sectionHeader = document.createElement('div')
    sectionHeader.classList.add('accord-nav__section-header')

    sectionHeader.appendChild(this.#createHeaderTitleElement())
    sectionHeader.appendChild(this.#createHeaderArrowElement())

    return sectionHeader
  }

  #createHeaderTitleElement() {
    const sectionTitle = document.createElement('h2')
    sectionTitle.classList.add('accord-nav__section-title')
    sectionTitle.setAttribute('role', 'heading')
    sectionTitle.textContent = this.#title
    return sectionTitle
  }

  #createHeaderArrowElement() {
    const sectionHeaderArrow = document.createElement('span')
    sectionHeaderArrow.classList.add('accord-nav__section-header-arrow')
    sectionHeaderArrow.innerHTML = '&#8249;'
    return sectionHeaderArrow
  }

  #createNavigationElement() {
    const navigationElement = document.createElement('nav')
    this.#navigationInstance = new Navigation(navigationElement)
    return navigationElement
  }
}
