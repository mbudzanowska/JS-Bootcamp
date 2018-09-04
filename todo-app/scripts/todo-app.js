"use strict";

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

document.querySelector('#new-todo').addEventListener('submit', e => {
    e.preventDefault();

    const text = e.target.elements.todoText.value.trim()

    if(text.length > 0) {
        let newTodo = {
            id: uuidv4(),
            text,
            completed: false
        }
        todos.push(newTodo);
        saveTodos(todos);
        renderTodos();
        e.target.elements.todoText.value = '';
    }
 
})

document.querySelector('#toggleHide').addEventListener('change', e => {
    filter.hideCompleted =  !filter.hideCompleted;
    renderTodos();
})

