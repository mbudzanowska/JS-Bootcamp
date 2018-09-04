import moment from 'moment'
import {getFilters} from './filters'
import {sortNotes, getNotes} from './notes'

// generate dom structure of note
const generateNoteDOM = (note) => {
     
    const noteEl = document.createElement('a');
    const textEl = document.createElement('p');
    const statusEl = document.createElement('p')

    // title text
    if(note.title.length > 0) {
        textEl.textContent = note.title;
    } else {
        textEl.textContent = 'Unnamed note';
    }
    textEl.classList.add('list-item__title')
    noteEl.appendChild(textEl);

    // note text
    noteEl.setAttribute('href', `/edit.html#${note.id}`)
    noteEl.classList.add('list-item')

    // status text
    statusEl.textContent = generateLastEdited(note.updatedAt)
    statusEl.classList.add('list-item__subtitle')
    noteEl.appendChild(statusEl)

    return noteEl;
}
// render application notes
const renderNotes = () => {
    const filters = getFilters()
    const notesEl = document.querySelector('#notes')
    const notes = sortNotes(filters.sortBy);
    const filteredNotes = notes.filter(note =>  note.title.toLowerCase().includes(filters.searchText.toLowerCase()));

    notesEl.innerHTML = '';

    if(filteredNotes.length > 0) {
        filteredNotes.forEach(note => {
            const noteEl = generateNoteDOM(note);
           notesEl.appendChild(noteEl);
        })
    } else {
        const p = document.createElement('p')
        p.textContent = 'No notes to show...'
        p.classList.add('empty-message')
        notesEl.appendChild(p)
    }
}

const initializeEditPage = (noteId) => {

    const titleElement = document.querySelector('#note-title');
    const bodyElement = document.querySelector('#note-body');
    const dateElement = document.querySelector('#last-edited');
    const notes = getNotes();
    const note = notes.find(note =>  note.id === noteId)
    
    if(!note) {
        location.assign('/index.html');
    }
    
    titleElement.value = note.title
    bodyElement.value = note.body;
    dateElement.textContent = generateLastEdited(note.updatedAt);
}

// Generate last edited message
const generateLastEdited = (timestamp) => `Last edited ${moment(timestamp).fromNow()}`;

export {generateLastEdited, generateNoteDOM, renderNotes, initializeEditPage}