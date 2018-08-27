const notes = getSavedNotes();

const filters = {
    searchText: '',
}

renderNotes(notes, filters);

document.querySelector('#create-button').addEventListener('click', function(e) {
    notes.push({
        title: '',
        body: ''
    });
    saveNotes(notes);
    renderNotes(notes, filters);
});

document.querySelector('#search-text').addEventListener('input', function(e){
    console.log(e.target.value)
    filters.searchText = e.target.value;
    renderNotes(notes, filters)
})

document.querySelector('#sortBy').addEventListener('change', function(e){
    console.log(e.target.value)
})

