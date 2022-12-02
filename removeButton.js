// Create + add remove button
export function removeButton(task) {
  if (task.complete) {
    return `
      <div>
        <button
          type="button"
          class="remove-button" 
          onclick="removeTask(${task.id})">
          X
        </button>
    </div>`
  }
  return ''
}
