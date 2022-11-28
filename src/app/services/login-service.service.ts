import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    withCredentials: true,
    observe: 'response' as 'response'
  };

  constructor(private client: HttpClient) { }

  register(user: User){
    return this.client.post('http://localhost:5273/api/User/register', user);
  }

  login(user: User){
    return this.client.post('http://localhost:5273/api/User/login', user, this.httpOptions);
  }
}
