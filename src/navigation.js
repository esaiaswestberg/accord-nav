export default class Navigation {
  #container
  #sections = []

  constructor(container) {
    this.#container = container
    this.#initializeContainer()
  }

  addSection(section) {
    this.#sections.push(section)
    this.#updateSectionsIfNecessary()
  }

  #initializeContainer() {
    this.#container.classList.add('accord-nav')
    this.#container.setAttribute('role', 'navigation')
  }

  #updateSectionsIfNecessary() {
    if (this.#areSectionElementsCorrect()) return
    this.#updateSections()
  }

  #updateSections() {
    this.#removeContainerChildren()
    this.#addSectionElements()
  }

  #removeContainerChildren() {
    while (this.#container.firstChild) {
      this.#container.removeChild(this.#container.firstChild)
    }
  }

  #addSectionElements() {
    this.#sections.forEach((section) => this.#container.appendChild(section.element))
  }

  #areSectionElementsCorrect() {
    const sectionElements = this.#sections.map((section) => section.element)
    const containerSections = Array.from(this.#container.children)

    if (sectionElements.length !== containerSections.length) return false

    const sectionElementsMatch = sectionElements.every((sectionElement, index) => sectionElement === containerSections[index])
    if (!sectionElementsMatch) return false

    return true
  }
}
