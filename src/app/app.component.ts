import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
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
  myRouter: Router;

  constructor(myAccountService : AccountService, router:Router){
    this.accountService = myAccountService;
    this.myRouter = router;
  }

  isAdmin(): boolean {
    return this.accountService.isAdmin && this.accountService.isLoggedIn;
  }

  isUser() : boolean {
    return this.accountService.isLoggedIn && !this.accountService.isAdmin;
  }

  link(choice:string){
    if(choice==='files'){
      this.myRouter.navigate(['/files']);
    } else if(choice==='admin'){
      this.myRouter.navigate(['/admin']);
    } else {
      this.myRouter.navigate(['/login']);
    }
  }

  title = 'parser-front-end';
}
