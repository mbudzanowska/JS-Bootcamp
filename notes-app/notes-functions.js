

// read exsiting notes from local storage
const getSavedNotes = function () {
    const notesJSON = localStorage.getItem('notes');
    if(notesJSON !== null) {
        return JSON.parse(notesJSON);
    } else {
        return [];
    }
}

// save the notes to localStorage
const saveNotes = function (notes) {
    localStorage.setItem('notes', JSON.stringify(notes));
}


// remove note from a list
let removeNote = function (id) {
    const noteIndex = notes.findIndex(function(note){
        return note.id === id
    })
    if(noteIndex > -1){
        notes.splice(noteIndex, 1)
    }
}


// generate dom structure of note
const generateNoteDOM = function(note) {
     
    const noteEl = document.createElement('div');
    const textEl = document.createElement('a');
    const button = document.createElement('button');

    // delete button
    button.textContent = 'x';
    noteEl.appendChild(button);
    button.addEventListener('click', function () {
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

// render application notes
const renderNotes = function(notes, filters){
    const filteredNotes = notes.filter(note => {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    });

    document.querySelector('#notes').innerHTML = '';

    filteredNotes.forEach(note => {
        const noteEl = generateNoteDOM(note);
        
        document.querySelector('#notes').appendChild(noteEl);
    })
}

