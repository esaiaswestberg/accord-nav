export default class Section {
  #element = this.#createEmptySectionElement()
  #title

  constructor(title) {
    this.#title = title

    this.#initializeElement()
  }

  get element() {
    return this.#element
  }

  #initializeElement() {
    this.#element.appendChild(this.#createSectionTitleElement())
  }

  #createEmptySectionElement() {
    const section = document.createElement('section')
    section.classList.add('accord-nav__section')
    section.setAttribute('role', 'listitem')
    return section
  }

  #createSectionTitleElement() {
    const sectionTitle = document.createElement('h2')
    sectionTitle.classList.add('accord-nav__section-title')
    sectionTitle.setAttribute('role', 'heading')
    sectionTitle.textContent = this.#title
    return sectionTitle
  }
}
