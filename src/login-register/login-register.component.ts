import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login-register.component.html',
  styleUrl: './login-register.component.css'
})
export class LoginRegisterComponent {

  username : string = '';
  password : string = '';
  inputError : boolean = false;

  constructor(){

  }

  login() : void {
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
