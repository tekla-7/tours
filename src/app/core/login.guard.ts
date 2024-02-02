import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';

export const loginGuard: CanActivateFn = (route, state) => {
  return inject(AuthService).isloggedin;
};
