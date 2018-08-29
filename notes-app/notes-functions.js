"use strict";

// read exsiting notes from local storage
const getSavedNotes = ()  => {
    const notesJSON = localStorage.getItem('notes');
    try {
        return notesJSON ? JSON.parse(notesJSON) : [];
    } catch (e) {
        return [];
    }
}

// save the notes to localStorage
const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes));
}


// remove note from a list
let removeNote = (id) => {
    const noteIndex = notes.findIndex((note) => note.id === id)
    if(noteIndex > -1){
        notes.splice(noteIndex, 1)
    }
}


// generate dom structure of note
const generateNoteDOM = (note) => {
     
    const noteEl = document.createElement('div');
    const textEl = document.createElement('a');
    const button = document.createElement('button');

    // delete button
    button.textContent = 'x';
    noteEl.appendChild(button);
    button.addEventListener('click', () => {
        removeNote(note.id);
        saveNotes(notes);
        renderNotes(notes, filters);
    })


    // title text
    if(note.title.length > 0) {
        textEl.textContent = note.title;
    } else {
        textEl.textContent = 'Unnamed note';
    }
    textEl.setAttribute('href', `/edit.html#${note.id}`)
    noteEl.appendChild(textEl);

    return noteEl;
}

// sort your notes in one of the three ways
const sortNotes = (notes, sortBy) =>  {
    if(sortBy === 'lastEdited'){
        return notes.sort((a, b) => {
            if(a.updatedAt > b.updatedAt){
                return -1;
            } else if(a.updatedAt < b.updatedAt){
                return 1;
            } else {
                return 0;
            }
        })
    } else if(sortBy === 'recentlyCreated'){
        return notes.sort((a, b) => {
            if(a.createdAt > b.createdAt){
                return -1;
            } else if(a.createdAt < b.createdAt){
                return 1;
            } else {
                return 0;
            }
        })
    } else if (sortBy === 'alphabetical'){
        return notes.sort((a, b) => {
            if(a.title.toLowerCase() > b.title.toLowerCase()){
                return 1;
            } else if(a.title.toLowerCase() < b.title.toLowerCase()){
                return -1;
            } else {
                return 0;
            }
        })
    } else {
        return notes;
    }
}

// render application notes
const renderNotes = (notes, filters) => {
    notes = sortNotes(notes, filters.sortBy);
    const filteredNotes = notes.filter(note =>  note.title.toLowerCase().includes(filters.searchText.toLowerCase()));

    document.querySelector('#notes').innerHTML = '';

    filteredNotes.forEach(note => {
        const noteEl = generateNoteDOM(note);
        document.querySelector('#notes').appendChild(noteEl);
    })
}

// Generate last edited message
const generateLastEdited = (timestamp) => `Last edited ${moment(note.updatedAt).fromNow()}`;
