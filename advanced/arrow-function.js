const square = (num) =>  num * num


const squareLong = (num) => {
    return num * num
}

console.log(square(3))

const people = [{
    name: 'Andrew',
    age: 28
}, {
    name: 'Mae',
    age: 22
},
{
    name: 'Andrew',
    age: 34
}]

/* const under30 = people.filter(function(person) {
    return person.age < 30;
}) */

const under30 = people.filter((person) => person.age < 30)
console.log(under30)

const age22 = people.filter((person) => person.age == 22)
console.log(age22)