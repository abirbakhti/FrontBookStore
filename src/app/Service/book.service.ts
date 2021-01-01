import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from '../book';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class BookService {
  book: any;
  username = sessionStorage.getItem('username'); 
  password = sessionStorage.getItem('password');

  constructor(private Http: HttpClient) { }

  getBooks() {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    return this.Http.get(environment.url + '/books/list', {headers});
  }

  postBook(book: Book) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    return this.Http.post(environment.url + '/books/add', book, {headers});
  }

  updateBook(book: Book) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    return this.Http.put(environment.url + '/books/' + book['id'], book, {headers})
  }

  deleteBook(id) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    return this.Http.delete(environment.url + '/books/' + id, {headers})
  }
}