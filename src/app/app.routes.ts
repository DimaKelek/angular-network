import { Routes } from '@angular/router';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { LayoutComponent } from './common-ui/layout/layout.component';
import { canActivateAuth } from './auth/access.guard';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: SearchPageComponent },
      { path: 'profile', component: ProfilePageComponent },
    ],
    canActivate: [canActivateAuth],
  },
  { path: 'sign-in', component: SignInPageComponent },
];
