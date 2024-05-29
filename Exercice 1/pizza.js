class Pizza {
  #name
  #ingredient1
  #ingredient2
  #ingredient3
  constructor(name, ingredient1, ingredient2, ingredient3) {
    this.#name = name
    this.#ingredient1 = ingredient1
    this.#ingredient2 = ingredient2
    this.#ingredient3 = ingredient3
  }
  get name() {
    return this.#name
  }
  set name(name) {
    this.#name = name
  }
  get ingredient1() {
    return this.#ingredient1
  }
  set ingredient1(ingredient1) {
    this.#ingredient1 = ingredient1
  }
  get ingredient2() {
    return this.#ingredient2
  }
  set ingredient2(ingredient2) {
    this.#ingredient2 = ingredient2
  }
  get ingredient3() {
    return this.#ingredient3
  }
  set ingredient3(ingredient3) {
    this.#ingredient3 = ingredient3
  }
}

export { Pizza }
