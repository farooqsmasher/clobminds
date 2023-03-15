import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user/user.model';

const baseUrl="http://localhost:8080/user/add";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  saveUser(data:any):Observable<User>{
    return this.http.post(baseUrl, data);
  }
  


}
