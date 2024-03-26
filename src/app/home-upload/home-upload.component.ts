import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FileService } from '../file.service';
import { SpecService } from '../spec.service';
import { AccountService } from '../account.service';
import { Spec } from '../Spec';

@Component({
  selector: 'app-home-upload',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-upload.component.html',
  styleUrl: './home-upload.component.scss'
})
export class HomeUploadComponent {
  uploadingFlatFile : boolean = false;
  uploadingSpecFile : boolean = false;
  myRouter : Router;
  inputError : boolean = false;
  chosenFile : File | undefined;
  mySpecService : SpecService;
  myAccountService : AccountService;
  userSpecs : Spec[] = [];

  constructor(router:Router, specService:SpecService, accountService:AccountService){
    this.myRouter = router;
    this.mySpecService = specService;
    this.myAccountService = accountService;
    this.updateUserSpecs();
  }

  routeToPastFiles(){

  }

  fileSelected(event:any){
    this.inputError = false;
    let selectedFile:File = event.target.files[0];
    if(selectedFile){
      this.chosenFile = selectedFile;
    } else{
      this.inputError = true;
    }
  }

  uploadSpecification(){
    if(this.chosenFile){
      if(this.myAccountService.activeUser?.username){
        console.log(this.chosenFile);
        console.log(this.myAccountService.activeUser);
        this.mySpecService.uploadSpec(this.chosenFile, this.myAccountService.activeUser.username).subscribe(data => {
          //this.updateUserSpecs(); Perm Solution
          this.userSpecs.push(data);
          console.log(data);
          this.uploadingFlatFile = false;
          this.uploadingSpecFile = false;
          alert('spec upload successful');
        }, (error => {
          console.log(error);
          this.inputError = true;
        }));
      } else {
        console.log('you arent logged in?');
      }
    } else {
      this.inputError = true;
    }
  }

  updateUserSpecs(){
    if(this.myAccountService.activeUser?.specifications){
      this.mySpecService.getAllSpecsByIds(this.myAccountService.activeUser?.specifications).subscribe(data => {
        this.userSpecs = data;
      })
    }
  }
  
}
