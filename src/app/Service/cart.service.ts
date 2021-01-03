import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  CartBooks = [];

  username = sessionStorage.getItem('username'); 
  password = sessionStorage.getItem('password');

  constructor(private Http: HttpClient) { }

  addToCart(x) {
    let test = false;
    let i = 0;
    while ((test == false) && (i < this.CartBooks.length)) {
      if (this.CartBooks[i].id == x.id) { test = true }
      i++;
    }
    if (test == false) {
      x.cartQuantity = 1
      this.CartBooks.push(x)
    }
  }

  remove(id) {
    let i = 0;
    let test = false
    while ((test == false) && (i < this.CartBooks.length)) {
      if (this.CartBooks[i].id == id) {
        test = true
        this.CartBooks.splice(i, 1)
      }
      i++;
    }
  }
  updateQuantity(cartQuantity, id) {
    let i = 0;
    let test = false
    while ((test == false) && (i < this.CartBooks.length)) {
      if (this.CartBooks[i].id == id) {
        test = true
        this.CartBooks[i].cartQuantity = cartQuantity;
      }
      i++;
    }
  }


  purchase() {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    return this.Http.post(environment.url + '/commands/add' , this.CartBooks , {headers})
  }
}
