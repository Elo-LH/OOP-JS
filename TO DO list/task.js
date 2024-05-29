class Task {
  #name

  static instances = []

  constructor(name) {
    this.#name = name
    Task.instances.push(this)
  }

  get name() {
    return this.#name
  }
  set name(name) {
    this.#name = name
  }
}

export { Task }
