import { Ingredient } from './classes/ingredient.js'

function toggleSelection(e) {
  let li = e.target
}

document.addEventListener('DOMContentLoaded', () => {
  let availableIngredients = []
  const bacon = new Ingredient('Bacon', 'assets/img/bacon.png')
  availableIngredients.push(bacon)

  const carotte = new Ingredient('Carotte', 'assets/img/carrots.png')
  availableIngredients.push(carotte)
  const fromage = new Ingredient('Fromage', 'assets/img/cheese.png')
  availableIngredients.push(fromage)
  const oeuf = new Ingredient('Oeuf', 'assets/img/egg.png')
  availableIngredients.push(oeuf)
  const aubergine = new Ingredient('Aubergine', 'assets/img/eggplant.png')
  availableIngredients.push(aubergine)
  const chevre = new Ingredient(
    'Fromage de chèvre',
    'assets/img/goat-cheese.png'
  )
  availableIngredients.push(chevre)
  const miel = new Ingredient('Miel', 'assets/img/honey.png')
  availableIngredients.push(miel)
  const champignon = new Ingredient('Champignon', 'assets/img/mushroom.png')
  availableIngredients.push(champignon)
  const olive = new Ingredient('Olive', 'assets/img/olive.png')
  availableIngredients.push(olive)
  const piment = new Ingredient('Piment', 'assets/img/pepper.png')
  availableIngredients.push(piment)
  const potat = new Ingredient('Pomme de terre', 'assets/img/potato.png')
  availableIngredients.push(potat)
  const tomate = new Ingredient('Tomate', 'assets/img/tomato.png')
  availableIngredients.push(tomate)

  const ul = document.querySelector('#stage > ul')
  availableIngredients.forEach((ingredient) => {
    let name = ingredient.name
    console.log(name)
    let link = ingredient.file

    const li = document.createElement('li')
    li.addEventListener('click', toggleSelection)
    const article = document.createElement('article')
    li.appendChild(article)
    const header = document.createElement('header')
    article.appendChild(header)

    const figure = document.createElement('figure')
    header.appendChild(figure)
    const img = document.createElement('img')
    img.src = link
    img.alt = name
    figure.appendChild(img)

    const h3 = document.createElement('h3')
    h3.textContent = name
    header.appendChild(h3)

    ul.appendChild(li)
  })
})
