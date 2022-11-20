import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private client: HttpClient) { }

  register(user: User){
    return this.client.post('https://localhost:7273/api/User/register', user);
  }

  login(user: User){
    return this.client.post('https://localhost:7273/api/User/login', user);
  }
}
