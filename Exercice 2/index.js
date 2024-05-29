import { Warrior } from './warrior.js'
import { Mage } from './mage.js'

document.addEventListener('DOMContentLoaded', () => {
  let mageDiv = document.querySelector('.mage')
  let warriorDiv = document.querySelector('.warrior')

  let mage = new Mage('Gandalf')
  let warrior = new Warrior('Uruk')

  mageDiv.textContent += mage.name + ' '
  mageDiv.textContent += mage.healthPoints + ' '
  mageDiv.textContent += mage.manaPoints + ' '

  warriorDiv.textContent += warrior.name + ' '
  warriorDiv.textContent += warrior.healthPoints + ' '
  warriorDiv.textContent += warrior.strength + ' '
})
