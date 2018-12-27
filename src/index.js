const endPoint = 'http://localhost:3000/notes';

document.addEventListener('DOMContentLoaded', initPage);

function initPage(){
  getNotes()
}

function getNotes(){
  fetch(endPoint)
    .then(res => res.json())
    .then(notes =>
      notes.forEach(note =>
        renderNote(note)
      )
    )
}

function renderNote(note){
  const ul = document.querySelector("#notes-list")
  const li = document.createElement('li')
  const h3 = document.createElement('h3')
  const button = document.createElement('button')

  button.innerText = "edit"
  h3.innerText = `${note.title}`

  button.addEventListener('click', editText)

  h3.appendChild(button)
  li.appendChild(h3)
  ul.appendChild(li)
}

function editText(){
  console.log(event)
}

// const markup = `
// <li>
//   <h3>${note.title}
//   <button>edit</button>
//   </h3>
// </li>`;
// document.querySelector('#notes-list').innerHTML += markup;
