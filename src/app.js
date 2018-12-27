class App {
  constructor(){
    this.adapter = new Adapter();
  }

  attachEventListeners() {
    document.querySelector('#notes-list').addEventListener('click', e => {
      const id = e.target.dataset.id;
      const note = Note.findById(id)
      document.querySelector("#update").innerHTML = note.renderUpdateForm()
    });

    document.querySelector('#update').addEventListener('submit', e => {
       e.preventDefault();
       const id = e.target.dataset.id;
       const note = Note.findById(id);
       const title = e.target.querySelector('input').value;
       const content = e.target.querySelector('textarea').value;
       const jsonBody = { title, content };
       this.adapteber.updateNote(note.id, jsonBody).then(updatedNote => console.log(updatedNote))
    });
  }
}
