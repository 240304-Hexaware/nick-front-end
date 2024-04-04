import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FileService } from '../file.service';
import { SpecService } from '../spec.service';
import { AccountService } from '../account.service';
import { Spec } from '../Spec';
import ObjectID from 'bson-objectid';

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
  myFileService : FileService;
  userSpecs : Spec[] = [];
  selectedSpec: string = 'car.json';

  constructor(router:Router, specService:SpecService, accountService:AccountService, fileService:FileService){
    this.myRouter = router;
    this.mySpecService = specService;
    this.myAccountService = accountService;
    this.myFileService = fileService;
    this.updateUserSpecs();
  }

  routeToPastFiles(){
    this.myRouter.navigate(['/files']);
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
        this.mySpecService.uploadSpec(this.chosenFile, this.myAccountService.activeUser.username).subscribe(data => {
          this.updateUserSpecs();
          this.uploadingFlatFile = false;
          this.uploadingSpecFile = false;
          alert('spec upload successful');
        }, (error => {
          console.log(error);
          this.inputError = true;
        }));
      } else {
        this.inputError = true;
      }
    } else {
      this.inputError = true;
    }
    this.chosenFile = undefined;
  }

  uploadFile(){
    if(this.chosenFile){
      if(this.myAccountService.activeUser?.username){
        console.log(this.selectedSpec);
        this.myFileService.uploadFile(this.chosenFile, this.selectedSpec, this.myAccountService.activeUser.username).subscribe(data => {
          console.log(data);
          this.routeToPastFiles();
        }, (error) => {
          console.log(error);
          this.inputError = true;
        })
      }
    } else{
      this.inputError = true;
    }

  }

  updateUserSpecs(){
    if(this.myAccountService.activeUser?.specifications){
      this.mySpecService.getAllSpecs().subscribe(data => {
        console.log(data);
        this.userSpecs = data;
        console.log(this.userSpecs);
      }, (error => {
        console.log(error);
      }));
      console.log(this.userSpecs);
    }
  }
}
