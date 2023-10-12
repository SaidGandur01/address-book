import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserResponse } from '../utils/user-interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = 'https://randomuser.me/api/';
  constructor(private http: HttpClient) { }

  getUsers(page = 1, results = 10): Observable<IUserResponse> {
    const path = `${this.baseUrl}/?page=${page}&results=${results}`;
    return this.http.get<IUserResponse>(path);
  }
}
