import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommandService {
  command: any;
  username = sessionStorage.getItem('username'); 
  password = sessionStorage.getItem('password');

  constructor(private Http: HttpClient) { }

  getCommands() {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    return this.Http.get(environment.url + '/commands/list', {headers});
  }

  showDetail(id){
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    return this.Http.get(environment.url + '/lignecommands/listbyid/'+id , {headers});
  }
}
