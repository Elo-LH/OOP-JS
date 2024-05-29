import { Task } from './task.js'

document.addEventListener('DOMContentLoaded', () => {
  let ToDoUl = document.querySelector('.to-do-list')
  let newTask = document.querySelector('#new-task')
  let buttonTask = document.querySelector('#button-task')

  buttonTask.addEventListener('click', () => {
    let value = newTask.value
    if (value === '') {
      return
    }
    let task = new Task(value)
    newTask.value = ''
    console.log(task)
    ToDoUl.innerHTML = ''

    for (const instance of Task.instances) {
      console.log(instance)

      ToDoUl.innerHTML += `<li>${instance.name}</li>`
    }

    let lis = document.querySelectorAll('li')
    lis.forEach((li) => {
      li.addEventListener('click', () => {
        li.style.textDecoration = 'line-through'
      })
    })
  })
})
