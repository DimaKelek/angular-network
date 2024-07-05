import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProfile } from './types';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  http = inject(HttpClient);
  baseApiUrl = 'https://icherniakov.ru/yt-course';

  getTestAccounts() {
    return this.http.get<IProfile[]>(
      `${this.baseApiUrl}/account/test_accounts`,
    );
  }
}
