import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login-register',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterOutlet],
  templateUrl: './login-register.component.html',
  styleUrl: './login-register.component.css'
})
export class LoginRegisterComponent {

  username : string = '';
  password : string = '';
  repassword : string = '';
  inputError : boolean = false;
  registering : boolean = false;

  login() : void {
    if(this.username === '' || this.password === ''){
      this.inputError = true;
    }

    if(!this.inputError){
      console.log(this.username);
      console.log(this.password);
    } else {
      console.log(">:( ERROR!");
    }
  }

  register() : void{
    if(this.username === '' || this.password === '' || this.password !== this.repassword){
      this.inputError = true;
    }

    if(!this.inputError){
      console.log(this.username);
      console.log(this.password);
    } else {
      console.log(">:( ERROR!");
    }
  }

  resetError() {
    this.inputError = false;
  }

}
