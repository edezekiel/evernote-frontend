const endPoint = 'http://localhost:3000/notes';
document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.attachEventListeners();
  app.adapter.fetchNotes().then(app.createNotes);
});
