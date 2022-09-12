import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './model/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginHttpService {

  constructor(private readonly http: HttpClient) { }

  login(payload: { email: string; password: string}): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/user/login`, payload);
  }
}
