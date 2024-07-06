import { Routes } from '@angular/router';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

export const routes: Routes = [
  { path: '', component: SearchPageComponent },
  { path: 'sign-in', component: SignInPageComponent },
];
