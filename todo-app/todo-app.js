let todos = getSavedTodos();

let filter = {
    searchFilter: '',
    hideCompleted: false
}

renderTodos();

document.querySelector('#search-todo').addEventListener('input', event => {
    filter.searchFilter = event.target.value.toLowerCase();
    renderTodos();
})

document.querySelector('#new-todo').addEventListener('submit', function (e) {
    e.preventDefault();
    let newTodo = {
        text: e.target.elements.todoText.value,
        completed: false
    }
    todos.push(newTodo);
    saveTodos(todos);
    generateSummaryDOM();
    renderTodos();
    e.target.elements.todoText.value = '';
})

document.querySelector('#toggleHide').addEventListener('change', function (e) {
    filter.hideCompleted = e.target.checked;
    renderTodos();
})

