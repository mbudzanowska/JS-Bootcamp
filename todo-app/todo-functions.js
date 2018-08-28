

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

// remve todo from list
const removeTodo = function (id) {
    const todoIndex = todos.findIndex(function(todo){
        return todo.id === id
    })
    if(todoIndex > -1){
        todos.splice(todoIndex, 1)
    }
}

const toggleCheckbox = function(id) {
    const todo = todos.find(function(todo){
        return todo.id === id
    })
    if(todo != undefined){
        todo.completed = !todo.completed;
    }
}


// get the DOM elelemnts for list summary
const generateSummaryDOM = function (incompletedTodos) {
    const summary = document.createElement('h3');
    summary.textContent = `You have ${incompletedTodos.length} todos left.`;
    return summary;
}

// get the DOM elements for an individual note
const generateTodoDOM = function (todo) {
    // div
    let todoElem = document.createElement('div');
    // checkbox
    let todoCheckbox = document.createElement('input');
    todoCheckbox.setAttribute('type', 'checkbox');
    todoCheckbox.checked = todo.completed;
    todoElem.appendChild(todoCheckbox);
    todoCheckbox.addEventListener('change', function(){
        toggleCheckbox(todo.id);
        saveTodos(todos);
        renderTodos();
    })

    // text
    let todoText = document.createElement('span');
    todoText.textContent = todo.text;
    todoElem.appendChild(todoText);
    // button 
    let removeTodoButton = document.createElement('button');
    removeTodoButton.textContent = 'x';
    todoElem.appendChild(removeTodoButton);
    removeTodoButton.addEventListener('click', function(){
        removeTodo(todo.id);
        console.log(todos)
        saveTodos(todos);
        renderTodos();
    })

    return todoElem;
}



