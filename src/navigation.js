export default class Navigation {
  #container
  #sections = []
  #links = []

  constructor(container) {
    this.#container = container
    this.#initializeContainer()
  }

  addSection(section) {
    this.#sections.push(section)
    this.#updateContent()
  }

  addLink(link) {
    this.#links.push(link)
    this.#updateContent()
  }

  #initializeContainer() {
    this.#container.classList.add('accord-nav')
    this.#container.setAttribute('role', 'navigation')
  }

  #updateContent() {
    this.#removeContainerChildren()
    this.#addSectionElements()
    this.#addLinkElements()
  }

  #removeContainerChildren() {
    while (this.#container.firstChild) {
      this.#container.removeChild(this.#container.firstChild)
    }
  }

  #addSectionElements() {
    this.#sections.forEach((section) => this.#container.appendChild(section.element))
  }

  #addLinkElements() {
    this.#links.forEach((link) => this.#container.appendChild(link.element))
  }
}
