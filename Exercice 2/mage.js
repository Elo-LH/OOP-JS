import { Character } from './character.js'

class Mage extends Character {
  #manaPoints

  constructor(name, healthPoints = 50, manaPoints = 50) {
    super(name, healthPoints)
    this.#manaPoints = manaPoints
  }
  get manaPoints() {
    return this.#manaPoints
  }
  set manaPoints(manaPoints) {
    this.#manaPoints = manaPoints
  }
}

export { Mage }
