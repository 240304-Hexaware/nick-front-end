import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginRegisterComponent } from '../login-register/login-register.component';
import { AccountService } from './account.service';
import { PastFilesComponent } from './past-files/past-files.component';
import { FileViewComponent } from './file-view/file-view.component';
import { HomeUploadComponent } from './home-upload/home-upload.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, LoginRegisterComponent, PastFilesComponent, FileViewComponent, HomeUploadComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  accountService : AccountService;

  constructor(myAccountService : AccountService){
    this.accountService = myAccountService;
  }

  isAdmin(): boolean {
    return this.accountService.isAdmin && this.accountService.isLoggedIn;
  }

  isUser() : boolean {
    return this.accountService.isLoggedIn && !this.accountService.isAdmin;
  }

  title = 'parser-front-end';
}
