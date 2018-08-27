let myBook = {
    title: '1984',
    author: 'Geogre Orwell',
    pageCount: 326,
}

console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`);


let person = {
    name: 'Mary',
    age: 23,
    city: 'Wrocław'
}

console.log(`${person.name} of age ${person.age} lives in ${person.city}`)

person.age ++;

console.log(`${person.name} of age ${person.age} lives in ${person.city}`)