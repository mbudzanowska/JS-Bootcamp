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


// generate dom structure of note
const generateNoteDOM = function(note) {
    const 
    const noteEl = document.createElement('div');
    const textEl = document.createElement('p');
    const button = document.createElement('button');
    button.textContent = 'x';

    if(note.title.lenght > 0) {
        textEl.textContent = note.title;
    } else {
        textEl.textContent = 'Unnamed note';
    }
    noteEl.appendChild(textEl);
    noteEl.appendChild(button);
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