"use strict";

// fetch existing todos from localStorage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos');
    try {
        return todosJSON ? JSON.parse(todosJSON) : [];
    } catch (e) {
        return [];
    }
}

// save todos to localStorage
const saveTodos = todos => localStorage.setItem('todos', JSON.stringify(todos));

// render application todos based on filters
const renderTodos = () => {
   
    const filteredTodos = todos.filter(todo => todo.text.toLowerCase().includes(filter.searchFilter))
    const incompletedTodos = filteredTodos.filter(todo =>  !todo.completed)

    const todosDiv = document.querySelector('#todos');
    todosDiv.innerHTML = '';
    todosDiv.appendChild(generateSummaryDOM(incompletedTodos))

    if(todos.length > 0) {
       
        filteredTodos.forEach(todo => todosDiv.appendChild(generateTodoDOM(todo)))
    } else {
        const messageEl = document.createElement('p')
        messageEl.classList.add('empty-message')
        messageEl.textContent = "No todos to show"
        todosDiv.appendChild(messageEl)
    }
}

// remve todo from list
const removeTodo = function (id) {
    const todoIndex = todos.findIndex(todo => todo.id === id)
    if(todoIndex > -1){
        todos.splice(todoIndex, 1)
    }
}

const toggleCheckbox = function(id) {
    const todo = todos.find(todo => todo.id === id)
    if(todo){
        todo.completed = !todo.completed;
    }
}

// get the DOM elements for an individual note
const generateTodoDOM = (todo) => {
   
    let todoElem = document.createElement('label');
    let containerEl = document.createElement('div')
    let todoCheckbox = document.createElement('input');
    let todoText = document.createElement('span');
    let removeTodoButton = document.createElement('button');

    // checkbox
    todoCheckbox.setAttribute('type', 'checkbox');
    todoCheckbox.checked = todo.completed;
    containerEl.appendChild(todoCheckbox);
    todoCheckbox.addEventListener('change', () => {
        toggleCheckbox(todo.id);
        saveTodos(todos);
        renderTodos();
    })

    // text
    todoText.textContent = todo.text;
    containerEl.appendChild(todoText);

    // container
    todoElem.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    todoElem.appendChild(containerEl)

    // button 
    removeTodoButton.textContent = 'Remove';
    removeTodoButton.classList.add('button', 'button--text')
    todoElem.appendChild(removeTodoButton);
    removeTodoButton.addEventListener('click', () => {
        removeTodo(todo.id);
        console.log(todos)
        saveTodos(todos);
        renderTodos();
    })

   
    return todoElem;
}

// get the DOM elelemnts for list summary
const generateSummaryDOM = (incompletedTodos) => {
    const summary = document.createElement('h3');
    summary.classList.add('list-title')
    const plural = incompletedTodos.length === 1? '' : 's'
    summary.textContent = `You have ${incompletedTodos.length} todo${plural} left.`;
    return summary;
}

