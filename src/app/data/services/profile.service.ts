import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBaseResponse, IProfile } from './types';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  http = inject(HttpClient);
  baseApiUrl = `${environment.BASE_URL}/account`;

  getTestAccounts() {
    return this.http.get<IProfile[]>(`${this.baseApiUrl}/test_accounts`);
  }

  getMe() {
    return this.http
      .get<IProfile>(`${this.baseApiUrl}/me`)
      .subscribe((value) => {
        console.log('### my profile', value);
      });
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
