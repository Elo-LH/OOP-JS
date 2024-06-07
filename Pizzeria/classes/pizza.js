class Pizza {
  #ingredients

  constructor() {
    this.#ingredients = []
  }
  get ingredients() {
    return this.#ingredients
  }
  addIngredient(ingredient) {
    this.#ingredients.push(ingredient)
  }
  removeIngredient(ingredient) {
    //find index et splice index
    const index = this.#ingredients.indexOf(ingredient) // get index of the item

    if (index !== -1) {
      // only splice array when item is found
      this.#ingredients.splice(index, 1)
    }
  }
  display() {
    let list = ''
    this.#ingredients.forEach((ingredient) => {
      list += `<li> ${ingredient} </li>`
    })
    return list
  }
}

export { Pizza }
