import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AccountService } from './account.service';

export const loginGuard: CanActivateFn = (route, state) => {
  return inject(AccountService).isLoggedIn;
};
