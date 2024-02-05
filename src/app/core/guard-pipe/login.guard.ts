import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../service/auth.service';

export const loginGuard: CanActivateFn = (route, state) => {
  return inject(AuthService).isloggedin;
};
