import { Injectable } from '@angular/core';


//Manages what user is logged in and their privelages
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  isAdmin : boolean = false;
  isLoggedIn : boolean = false;
  
  constructor() { }
}
