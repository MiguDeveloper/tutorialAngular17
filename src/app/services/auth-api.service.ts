import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ILoginRequest } from './models/user-api.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  private readonly _URL_USER = `white_${environment.domain}/auth/login`;
  private readonly _httpClient = inject(HttpClient);

  constructor() {}

  login(user: ILoginRequest): Observable<{ token: string }> {
    return this._httpClient.post<{ token: string }>(this._URL_USER, user);
  }
}
