"use strict";

let notes = getSavedNotes();

const filters = {
    searchText: '',
    sortBy: 'lastEdited'
}

renderNotes(notes, filters);

document.querySelector('#create-button').addEventListener('click', (e) => {
    const id = uuidv1();
    const timestamp = moment().valueOf()
    notes.push({
        id: id,
        title: '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp
    });
    saveNotes(notes);
    //renderNotes(notes, filters);
    location.assign(`/edit.html#${id}`);
});

document.querySelector('#search-text').addEventListener('input', (e) => {
    console.log(e.target.value)
    filters.searchText = e.target.value;
    renderNotes(notes, filters)
})

document.querySelector('#sortBy').addEventListener('change', (e) => {
    filters.sortBy = e.target.value;
    renderNotes(notes, filters);
})

window.addEventListener('storage', (e) => {
    if(e.key === 'notes'){
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters);
    }
})

//DATE

/* const now = new Date();
const timestamp = now.getTime();
const myDate = new Date(timestamp);
console.log(myDate.getFullYear())

const dateOne = new Date('March 1 2019 12:00:00');
const dateTwo = new Date ();
const dateOneTimestamp = dateOne.getTime();
const dateTwoTimestamp = dateTwo.getTime();

if(dateOneTimestamp < dateTwoTimestamp) {
    console.log(dateOne.toString())
} else if(dateOneTimestamp > dateTwoTimestamp) {
    console.log(dateTwo.toString())
}  */


// MOMENT
const birthday = moment();
birthday.day(17).month(8).year(1995);
console.log(birthday.format('MMM D, YYYY'));
