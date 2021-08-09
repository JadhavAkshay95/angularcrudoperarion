import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) { }

  getUserList(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getUser(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  deleteUser() {

  }

}
