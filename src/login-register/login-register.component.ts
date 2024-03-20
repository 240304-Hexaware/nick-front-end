import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { AccountService } from '../app/account.service';

@Component({
  selector: 'app-login-register',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterOutlet],
  templateUrl: './login-register.component.html',
  styleUrl: './login-register.component.scss'
})
export class LoginRegisterComponent {

  username : string = '';
  password : string = '';
  repassword : string = '';
  inputError : boolean = false;
  registering : boolean = false;
  myAccountService : AccountService;
  myRouter : Router;

  constructor(accountService:AccountService, router:Router){
    this.myAccountService = accountService;
    this.myRouter = router;
  }

  login() : void {
    if(this.username === '' || this.password === ''){
      this.inputError = true;
    }

    if(!this.inputError){
      this.myAccountService.isLoggedIn = true;
      this.myRouter.navigate(['/home']);
    } else {
      console.log(">:( ERROR!");
    }
  }

  register() : void{
    if(this.username === '' || this.password === '' || this.password !== this.repassword){
      this.inputError = true;
    }

    if(!this.inputError){
      this.myAccountService.isLoggedIn = true;
      this.myRouter.navigate(['/home']);
    } else {
      console.log(">:( ERROR!");
    }
  }

  resetError() {
    this.inputError = false;
  }

}
