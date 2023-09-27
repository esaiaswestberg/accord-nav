export default class Link {
  #element
  #title
  #url

  constructor(title, url) {
    this.#title = title
    this.#url = url

    this.#initializeElement()
  }

  get element() {
    return this.#element
  }

  #initializeElement() {
    this.#element = document.createElement('a')
    this.#element.classList.add('accord-nav__link')
    this.#element.setAttribute('href', this.#url)
    this.#element.textContent = this.#title
  }
}
