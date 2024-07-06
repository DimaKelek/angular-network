import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProfile } from './types';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  http = inject(HttpClient);
  baseApiUrl = environment.BASE_URL;

  getTestAccounts() {
    return this.http.get<IProfile[]>(
      `${this.baseApiUrl}/account/test_accounts`,
    );
  }
}
