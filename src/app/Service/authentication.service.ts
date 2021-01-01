import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient, private router:Router) { }

  authenticate(username, password) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get(environment.url + '/basicauth', { headers }).pipe(map(userData => {
      sessionStorage.setItem('username', username);
      sessionStorage.setItem('password', password);
      console.log(username + " " + password);
      return userData;
    }));
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  } 
  
  logOut() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('password');
    this.router.navigate(['/login']);
  }
}