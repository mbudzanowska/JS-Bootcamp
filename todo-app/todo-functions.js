// fetch existing todos from localStorage
const getSavedTodos = function () {
    const todosJSON = localStorage.getItem('todos');
    if(todosJSON !== null) {
    return JSON.parse(todosJSON);
    } else {
        return [];
    }
}

// save todos to localStorage
const saveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// render application todos based on filters
const renderTodos = function () {
   
    const filteredTodos = todos.filter(todo => {
        return todo.text.toLowerCase().includes(filter.searchFilter)

    })
    
    const incompletedTodos = filteredTodos.filter(todo => {
        return !todo.completed;
    })

    const todosDiv = document.querySelector('#todos');
    todosDiv.innerHTML = '';
    todosDiv.appendChild(generateSummaryDOM(incompletedTodos))

    filteredTodos.forEach(todo => {
        todosDiv.appendChild(generateTodoDOM(todo));
    })
}

// get the DOM elements for an individual note
const generateTodoDOM = function (todo) {
    let p = document.createElement('p');
    p.textContent = todo.text;
    return p;
}

// get the DOM elelemnts for list summary
const generateSummaryDOM = function (incompletedTodos) {
    const summary = document.createElement('h3');
    summary.textContent = `You have ${incompletedTodos.length} todos left.`;
    return summary;
}