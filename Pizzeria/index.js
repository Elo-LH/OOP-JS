import { Ingredient } from './classes/ingredient.js'
import { Pizza } from './classes/pizza.js'
let pizza
console.log(pizza)
console.log(typeof pizza)

function toggleSelection(e) {
  //init new Pizza if not allready
  if (typeof pizza == 'undefined') {
    console.log('entre new pizza')
    pizza = new Pizza()
    console.log(typeof pizza)
  }
  //change igredient to selected
  //si on clique sur l'article
  if (e.target.localName === 'article') {
    let article = e.target
    let name = e.target.querySelector('h3').textContent.toLowerCase()
    console.log(name)

    if (!article.classList.contains('selected')) {
      pizza.addIngredient(name)
      console.log(pizza)
    } else {
      pizza.removeIngredient(name)
    }
    article.classList.toggle('selected')
    //si on clique sur un de ses enfants
  } else {
    let article = e.target.closest('article')
    let name = article.querySelector('h3').textContent.toLowerCase()
    if (!article.classList.contains('selected')) {
      pizza.addIngredient(name)
    } else {
      pizza.removeIngredient(name)
    }
    article.classList.toggle('selected')
  }
  //display updated pizza

  let list = pizza.display()
  const asideUl = document.querySelector('aside > ul')
  const button = ` <li><button id="order">Commander</button></li>`

  asideUl.innerHTML = list
  asideUl.innerHTML += button
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

  const ul = document.querySelector('.ingredients-list')
  availableIngredients.forEach((ingredient) => {
    let name = ingredient.name
    console.log(name)
    let link = ingredient.file

    const li = document.createElement('li')
    const article = document.createElement('article')
    article.addEventListener('click', toggleSelection)
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
