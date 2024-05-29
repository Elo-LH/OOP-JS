class Character {
  #name
  #healthPoints

  constructor(name, healthPoints) {
    this.#name = name
    this.#healthPoints = healthPoints
  }
  get name() {
    return this.#name
  }
  set name(name) {
    this.#name = name
  }
  get healthPoints() {
    return this.#healthPoints
  }
  set healthPoints(healthPoints) {
    this.#healthPoints = healthPoints
  }
}

export { Character }
