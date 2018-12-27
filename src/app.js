class App {
  constructor() {
    this.adapter = new Adapter();

    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.createNotes = this.createNotes.bind(this);
    this.addNotes = this.addNotes.bind(this);
  }

  attachEventListeners() {
    document.querySelector('#notes-list').addEventListener('click', this.handleEditClick);
    document.querySelector('#update').addEventListener('submit', this.handleFormSubmit);
  }

  createNotes(notes) {
    notes.forEach(note => {
      new Note(note);
    });
    this.addNotes();
  }

  addNotes() {
    document.querySelector('#notes-list').innerHTML = '';
    Note.all.forEach(
      note => (document.querySelector('#notes-list').innerHTML += note.renderListItem())
    );
  }

  handleEditClick(e) {
    const id = e.target.dataset.id;
    const note = Note.findById(id);
    document.querySelector('#update').innerHTML = note.renderUpdateForm();
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const id = e.target.dataset.id;
    const note = Note.findById(id);
    const title = e.target.querySelector('input').value;
    const content = e.target.querySelector('textarea').value;

    const bodyJSON = { title, content };

    this.adapter.updateNote(note.id, bodyJSON).then(updatedNote => {
      const note = Note.findById(updatedNote.id);
      note.update(updatedNote);
      this.addNotes();
    });
  }
}
