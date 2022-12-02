import { render } from './render'
import { state, todoList, template } from './todo'

// Remove task
function removeTask(id) {
  const index = state.tasks.findIndex((item) => item.id === id)
  state.tasks.splice(index, 1)
  todoList.innerHTML = ''
  state.tasks.map((el) => render(template(el), todoList))
}
