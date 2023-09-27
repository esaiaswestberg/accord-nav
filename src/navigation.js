export default class Navigation {
  #container

  constructor(container) {
    this.#container = container
    this.#initializeContainer()
  }

  #initializeContainer() {
    this.#container.classList.add('accord-nav')
    this.#container.setAttribute('role', 'navigation')
  }
}
