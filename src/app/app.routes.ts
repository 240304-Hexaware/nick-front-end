import { Routes } from '@angular/router';
import { LoginRegisterComponent } from '../login-register/login-register.component';
import { PastFilesComponent } from './past-files/past-files.component';
import { FileViewComponent } from './file-view/file-view.component';
import { AdminComponent } from './admin/admin.component';
import { HomeUploadComponent } from './home-upload/home-upload.component';
import { adminGuard } from './admin.guard';
import { loginGuard } from './login.guard';

export const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: LoginRegisterComponent},
    {path: 'files', component: PastFilesComponent, canActivate:[loginGuard]},
    {path: 'fileview', component: FileViewComponent, canActivate:[loginGuard]},
    {path: 'admin', component: AdminComponent, canActivate:[adminGuard]},
    {path: 'home', component: HomeUploadComponent, canActivate:[loginGuard]}
];
