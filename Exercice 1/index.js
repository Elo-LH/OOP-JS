import { Pizza } from './pizza.js'

document.addEventListener('DOMContentLoaded', () => {
  let pizzaDiv = document.querySelector('.pizza')

  let veggie = new Pizza('Veggie', 'tomate', 'fromage', 'légumes')
  let meattie = new Pizza('Meattie', 'tomate', 'fromage', 'viande')
  let fichie = new Pizza('Fishie', 'tomate', 'fromage', 'poisson')

  pizzaDiv.innerHTML += veggie.name + '</br>'
  pizzaDiv.innerHTML += '- ' + veggie.ingredient1 + '</br>'
  pizzaDiv.innerHTML += '- ' + veggie.ingredient2 + '</br>'
  pizzaDiv.innerHTML += '- ' + veggie.ingredient3 + '</br>'

  pizzaDiv.innerHTML += meattie.name + '</br>'
  pizzaDiv.innerHTML += '- ' + meattie.ingredient1 + '</br>'
  pizzaDiv.innerHTML += '- ' + meattie.ingredient2 + '</br>'
  pizzaDiv.innerHTML += '- ' + meattie.ingredient3 + '</br>'

  pizzaDiv.innerHTML += fichie.name + '</br>'
  pizzaDiv.innerHTML += '- ' + fichie.ingredient1 + '</br>'
  pizzaDiv.innerHTML += '- ' + fichie.ingredient2 + '</br>'
  pizzaDiv.innerHTML += '- ' + fichie.ingredient3 + '</br>'
})
