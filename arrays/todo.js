const todos = ['walk the dog', 'brush the teeth', 'glam yourself', 'don`t eat crap', 'dress up']

console.log(`You have ${todos.length} todos:`);


for(let todo of todos){
    console.log(`TODO: ${todo}`);
}
console.log()

todos.forEach(function(todo, index){
    const num = index +1;
    console.log(`${num}: ${todo}`)
})

console.log()
for (let count = 0; count <= 2; count ++) {
    console.log(`Counting ...${count}`)
}

console.log()
for(let count = 0; count < todos.length; count++) {
    console.log(`${count +1}: ${todos[count]}`)
}

const todos_obj = todos.map((todo,index) =>{
    return {
        text: todo, 
        completed: index % 2 === 0
    }
});

const deleteTodo = function (todos, todoText) {
    const index = todos.findIndex(function(todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    });
    if(index > -1) {
        todos.splice(index, 1);
    }
}
/*
console.log(todos_obj)
console.log()
deleteTodo(todos_obj, 'dress up')
console.log(todos_obj)

 */
let getThingsTodo = function(todos){
    return todos.filter(function (todo, index) {
        return !todo.completed;
    })
}

console.log(getThingsTodo(todos_obj))

const sortTodos = function (todos) {
    return todos.sort(function (todo1, todo2) {
        if(todo1.text.toLowerCase() , todo2.text.toLowerCase()){
            return -1;
        } else if (todo1.text.toLowerCase() , todo2.text.toLowerCase()) {
            return 1;
        } else  {
            return 0;
        }
    })
}

console.log(sortTodos(todos_obj));
console.log()

const sortByCompleted = function (todos) {
    return todos.sort(function (todo1, todo2){
        if(todo1.completed && ! todo2.completed){
            return 1;
        } else if (todo2.completed && ! todo1.completed){
            return -1;
        } else {
            return 0;
        }
    })
}

console.log(sortByCompleted(todos_obj));