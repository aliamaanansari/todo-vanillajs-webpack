import { removeButton } from './removeButton'
import { render } from './render'
import './todo.css'

const form = document.querySelector('.form')
const taskInput = document.querySelector('.task-input')
export const todoList = document.querySelector('.todo-list')

export let state = {
  tasks: [],
}

// Dynamic HTML template for new tasks
export const template = (task) => `<div
  class="todo-list-task ${task.complete && 'todo-list-task__done'}"
    id="${task.id}" 
    onclick="markComplete(${task.id})">
    <p>${task.task}</p>
    ${removeButton(task)}
  </div>`

// Submit form
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const task = {
    id: Date.now(),
    task: taskInput.value,
    complete: false,
  }
  state.tasks = [...state.tasks, task]
  render(template(state.tasks[state.tasks.length - 1]), todoList)
  taskInput.value = ''
})
