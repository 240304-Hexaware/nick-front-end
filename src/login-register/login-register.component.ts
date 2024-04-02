import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { AccountService } from '../app/account.service';
import { catchError, throwError } from 'rxjs';
import { User } from '../app/User';

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
      
      this.myAccountService.GetUserByUser(this.username, this.password).subscribe(data =>{
        this.myAccountService.isLoggedIn = true;
        console.log(data.permissions);
        this.myAccountService.activeUser = data;
        if(data.permissions === 'admin'){
          this.myAccountService.isAdmin = true;
        }    
        this.myRouter.navigate(['/home']);   
      }, (error => {
        this.inputError = true;
      }));
    }
  }

  register() : void{
    if(this.username === '' || this.password === '' || this.password !== this.repassword){
      this.inputError = true;
    }

    if(!this.inputError){

      let newUser: User = new User(this.username, this.password, 'user', [], []);

      this.myAccountService.RegisterUser(newUser).subscribe(data => {
        this.myAccountService.activeUser = data;
        this.myAccountService.isLoggedIn = true;
        this.myRouter.navigate(['/home']);
      }, (error => {
        console.log(error);
      }))
    } else {
      console.log(">:( ERROR!");
    }
  }

  resetError() {
    this.inputError = false;
  }



}
