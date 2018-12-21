const endPoint = 'http://localhost:3000/api/v1/notes';

document.addEventListener('DOMContentLoaded', initPage);

function initPage(){
  getNotes()
}

function getNotes(){
  fetch(endPoint)
    .then(res => res.json())
    .then(notes => notes.forEach(note => renderNote(note)))
}

function renderNote(note){
  const markup = `
  <li>
    <h3>${note.title}
    <button>edit</button>
    </h3>
  </li>`;
  document.querySelector('#notes-list').innerHTML += markup;
}
