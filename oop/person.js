// prototypal inheritance

class Person {
    constructor(firstName, lastName, age, likes = []){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }

    getBio() {
        let bio =  `${this.firstName} is ${this.age}. `
        this.likes.forEach(like => {
            bio += `${this.firstName} likes ${like}. `
        });
        return bio
    }

    setName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
}


class Emploee extends Person{
    constructor(firstName, lastName, age, position, likes) {
        super(firstName, lastName, age, likes) 
        this.position = position}

    getBio () {
        let bio = `${this.firstName} ${this.lastName}  is ${this.position}. `
    }
}

const me = new Emploee ('Mary', 'Budzanowska', 22, 'coder', ['eating', 'reading'])
// new property on instance
/* me.getBio = function () {
    return 'fake!'
} */
me.setName('Alexis Turner')
console.log(me.getBio())

const person2 = new Person('Andrew', 'Doe', 55)
console.log(person2.getBio())

/* Person.prototype.getBio = function() {
    return 'trololo'
}
console.log(me.getBio()) */

