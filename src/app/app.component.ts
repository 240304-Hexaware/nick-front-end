import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'parser-front-end';
  
  username : string = '';
  password : string = '';
  inputError : boolean = false;

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

  resetError() {
    this.inputError = false;
  }

}
