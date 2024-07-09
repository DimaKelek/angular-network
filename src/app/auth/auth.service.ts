import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { IAuthResponse } from './types';
import { catchError, tap, throwError } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);
  cookieService = inject(CookieService);
  router = inject(Router);
  baseApiUrl = `${environment.BASE_URL}/auth`;

  accessToken: string | null = null;
  refreshToken: string | null = null;

  get isAuth() {
    if (!this.accessToken) {
      this.accessToken = this.cookieService.get('accessToken');
    }

    return !!this.accessToken;
  }

  signIn(payload: { username: string; password: string }) {
    const formData = new FormData();

    formData.append('username', encodeURIComponent(payload.username));
    formData.append('password', encodeURIComponent(payload.password));

    return this.http
      .post<IAuthResponse>(`${this.baseApiUrl}/token`, formData)
      .pipe(tap((value) => this.saveTokens(value)));
  }

  updateTokens() {
    return this.http
      .post<IAuthResponse>(`${this.baseApiUrl}/refresh`, {
        refresh_token: this.cookieService.get('refreshToken'),
      })
      .pipe(
        catchError((err) => {
          this.signOut();

          return throwError(() => err);
        }),
        tap((value) => this.saveTokens(value)),
      );
  }

  signOut() {
    return this.http.post(`${this.baseApiUrl}/logout`, {}).subscribe(() => {
      this.cookieService.deleteAll();
      this.accessToken = null;
      this.refreshToken = null;

      this.router.navigate(['/sign-in']);
    });
  }

  private saveTokens(value: IAuthResponse) {
    this.accessToken = value.access_token;
    this.refreshToken = value.refresh_token;

    this.cookieService.set('accessToken', value.access_token);
    this.cookieService.set('refreshToken', value.refresh_token);
  }
}
