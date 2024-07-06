import {
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';
import { catchError, switchMap, throwError } from 'rxjs';

let isRefreshing = false;

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);

  if (!authService.accessToken) return next(req);

  if (isRefreshing) {
    return refreshAndTransfer(authService, req, next);
  }

  req = addTokenToRequest(req, authService.accessToken);

  return next(req).pipe(
    catchError((error) => {
      if (error.status === 403) {
        return refreshAndTransfer(authService, req, next);
      }

      return throwError(() => error);
    }),
  );
};

const refreshAndTransfer = (
  authService: AuthService,
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
) => {
  if (!isRefreshing) {
    isRefreshing = true;

    return authService.updateTokens().pipe(
      switchMap((res) => {
        isRefreshing = false;
        return next(addTokenToRequest(req, res.access_token));
      }),
    );
  }

  return next(addTokenToRequest(req, authService.accessToken!));
};

const addTokenToRequest = (request: HttpRequest<unknown>, token: string) => {
  return request.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });
};
