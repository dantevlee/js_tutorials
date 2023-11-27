const button = document.getElementById('button');
const app = document.getElementById('app');

function saveNote(note) {
  localStorage.setItem("note-app", JSON.stringify(note));
}

function getNotes(){
  return JSON.parse(localStorage.getItem("note-app") || "[]");
}

getNotes().forEach((note) => {
  const noteEl = createNoteEl(note.id, note.content);
  app.insertBefore(noteEl, button);
});

function addNote() {
  const notes = getNotes();
  const Note = {
    id: Math.floor(Math.random() * 100000),
    content: "",
  }
  const noteElement = createNoteEl(Note.id, Note.content);
  app.insertBefore(noteElement, button);
  notes.push(Note);
  saveNote(notes);
}

function createNoteEl(id, content) {
  const noteText = document.createElement('textarea');
  noteText.classList.add('notes');
  noteText.placeholder = "Enter a note..";
  noteText.value = content;

  noteText.addEventListener("dblclick", () => {
    const warning = confirm("Do you want to delete this note?");
    if (warning) {
      deleteNote(id, noteText);
    }
  });

  noteText.addEventListener("input", () => {
    updateNote(id, noteText.value);
  });

  return noteText;
}

function deleteNote(id, noteEl) {
  const notes = getNotes().filter((note) => note.id != id);
  saveNote(notes);
  app.removeChild(noteEl);
}


function updateNote(id, content) {
  const notes = getNotes();
  const target = notes.filter((note) => note.id == id)[0];
  target.content = content;
  saveNote(notes);
}


button.addEventListener('click', addNote);
