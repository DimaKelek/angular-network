import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBaseResponse, IProfile } from './types';
import { environment } from '../../../environments/environment';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  http = inject(HttpClient);
  baseApiUrl = `${environment.BASE_URL}/account`;
  me = signal<IProfile | null>(null);

  getTestAccounts() {
    return this.http.get<IProfile[]>(`${this.baseApiUrl}/test_accounts`);
  }

  getMe() {
    return this.http.get<IProfile>(`${this.baseApiUrl}/me`).pipe(
      tap((me: IProfile) => {
        this.me.set(me);
      }),
    );
  }

  getFollowers(amount: number) {
    return this.http
      .get<IBaseResponse>(`${this.baseApiUrl}/subscribers/`, {
        params: {
          page: 1,
          size: amount,
        },
      })
      .pipe(map((value) => value.items));
  }
}
