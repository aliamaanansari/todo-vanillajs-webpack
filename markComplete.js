import { state, todoList, render, template } from './todo'

// Mark task as complete
function markComplete(id) {
  const i = state.tasks.findIndex((item) => item.id === id)
  if (i !== -1) {
    state.tasks[i].complete = true
    todoList.innerHTML = ''
    state.tasks.map((el) => render(template(el), todoList))
  }
}
