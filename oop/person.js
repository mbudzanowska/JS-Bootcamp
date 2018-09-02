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

        set fullName(fullName) {
            const names = fullName.split(' ')
            this.firstName = names[0]
            this.lastName = names[1]
        }

        get fullName() {
            return `${this.firstName} ${this.lastName}`
        }
    }


    class Emploee extends Person{
        constructor(firstName, lastName, age, position, likes) {
            super(firstName, lastName, age, likes) 
            this.position = position}

        getBio () {
            return `${this.fullName} is a ${this.position}. `
            
        }

        getYearsLeft () {
            return 65 - this.age;
        }
    }

    class Student extends Person {
        constructor(firstName, lastName, age, likes = [], grade) {
            super(firstName, lastName, age, likes);
            this.grade = grade;
        }

        getBio () {
            return `${this.firstName} ${this.lastName} has ${this.grade} points. `;
        }

        updateGrade(change){
            this.grade += change
        }
    }

    const me = new Emploee ('Mary', 'Budzanowska', 22, 'coder', ['eating', 'reading'])
    // new property on instance
    /* me.getBio = function () {
        return 'fake!'
    } */
    console.log(me.getBio())
    me.fullName = 'Alexis Turner';
    console.log(me.getBio())

    const person2 = new Person('Andrew', 'Doe', 55)
    console.log(person2.getBio())
    console.log(me.getYearsLeft()); 

    /* Person.prototype.getBio = function() {
        return 'trololo'
    }
    console.log(me.getBio()) */

const stud = new Student('Mary', 'Budzanowska', 22, ['eating', 'reading'], 6);
console.log(stud.getBio())
stud.updateGrade((20))
console.log(stud.getBio())


