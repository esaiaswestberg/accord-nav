export default class Section {
  #element = this.#createEmptyElement()
  #title

  constructor(title) {
    this.#title = title

    this.#initializeElement()
  }

  get element() {
    return this.#element
  }

  #initializeElement() {
    this.#element.appendChild(this.#createHeaderElement())
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
}
