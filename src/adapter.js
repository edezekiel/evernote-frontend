class Adapter {
  constructor(){
    this.baseUrl = "http:/localhost:3000/notes"
    this.headers = {
      'Content-Type': 'application/json',
    };
  }

  fetchNotes() {
    return this.get(`${this.baseUrl}`);
  }

  updateNote(id, body) {
    return this.patch(`${this.baseUrl}/${id}`, body);
  }

  get(url) {
    return fetch(url).then(res => res.json());
  }

  patch(url, body) {
    return fetch(url, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify(body),
    }).then(res => res.json());
  }
}
