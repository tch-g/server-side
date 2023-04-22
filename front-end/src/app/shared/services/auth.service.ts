import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignIn, SignUp } from '../models/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(user: SignUp): Observable<any> {
    return this.http.post<SignUp>(`User/register`, user);
  }

  signIn(user: SignIn): Observable<any> {
    return this.http.post<SignIn>(`User/authenticate`, user);
  }

}
