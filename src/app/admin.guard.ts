import { CanActivateFn } from '@angular/router';
import { AccountService } from './account.service';
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = (route, state) => {
  return inject(AccountService).isAdmin;
};
