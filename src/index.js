const endPoint = 'http://localhost:3000/notes';
document.addEventListener('DOMContentLoaded', initPage);

function initPage(){
  const app = new App()
  app.attachEventListeners()
  getNotes()
  
}

function getNotes(){
  fetch(endPoint)
    .then(res => res.json())
    .then(notes =>
      notes.forEach(note => {
        const newNote = new Note(note);
        document.querySelector('#notes-list').innerHTML += newNote.renderListItem();
      })
    )
}



// function renderNote(note){
//   const ul = document.querySelector("#notes-list")
//   const li = document.createElement('li')
//   const h3 = document.createElement('h3')
//   const button = document.createElement('button')
//
//   button.innerText = "edit"
//   h3.innerText = `${note.title}`
//
//   button.addEventListener('click', editText)
//
//   h3.appendChild(button)
//   li.appendChild(h3)
//   ul.appendChild(li)
// }
//
// function editText(){
//   console.log(event)
// }
