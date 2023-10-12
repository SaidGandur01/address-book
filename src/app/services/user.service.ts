import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUserResponse, User } from '../utils/user-interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = 'https://randomuser.me/api/';

  private userSelected = new BehaviorSubject<User | undefined>(undefined);

  constructor(private http: HttpClient) { }

  getUsers(page = 1, results = 10): Observable<IUserResponse> {
    const path = `${this.baseUrl}/?page=${page}&results=${results}`;
    return this.http.get<IUserResponse>(path);
  }

  setUser(user: User): void {
    this.userSelected.next(user);
  }

  getUser(): any {
    return this.userSelected.value;
  }
}
