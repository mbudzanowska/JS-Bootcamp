const notes = [
    {
    title: 'title 1',
    body: 'bdy 1',
}, 
{
    title: 'ttle 2',
    body: 'body 2',
}, 
{
    title: 'ttle 3',
    body: 'bdy 3',
}];

// console.log(notes.pop());
// notes.push('New note');

// notes.splice(2,0, 'new secont note!')

// console.log(notes.shift())
// console.log(notes)
// console.log(notes.length)
// console.log(notes[0])
// console.log(notes[notes.length-1])

// console.log()

// notes.forEach(note => {
//     console.log(note)
// })
// console.log()
// notes.forEach(function(note, index) {
//     console.log(index + ' ' + note)
// })

console.log()
for(let count = 0; count < notes.length; count++) {
    console.log(notes[count])
}

/* console.log(notes.indexOf('Note 22'))
console.log(notes.indexOf('Note 2')) */

let obj1 = {};
let obj2 = obj1;
console.log(obj1 === obj2)
console.log({} === {})

const index =notes.findIndex(function (note, index) {
    console.log(note)
    return note.title === "title 2"
})

console.log(index)

const findNote = function (notes, noteTitle) {
    const index = notes.findIndex(function (note, index) {
        return note.title === noteTitle;
    });
    return notes[index];
}

const findNote2 = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title === noteTitle;
    });
}


const findNotes = function (notes, query) {
     return notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLocaleLowerCase().includes(query.toLocaleLowerCase());
        const isBodyMatch = note.body.toLocaleLowerCase().includes(query.toLocaleLowerCase());
        return isTitleMatch || isBodyMatch;
    })
}

console.log(findNotes(notes, 'ti'));

/* 
const note = findNote(notes, 'title 2');
const note2 = findNote2(notes, 'title 2');
console.log('Note found: '+ note.body);
console.log('Note2 found: '+ note2.body); */