import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import ObjectID from 'bson-objectid';
import { FileService } from '../file.service';
import { readFile } from '../readFile';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-past-files',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './past-files.component.html',
  styleUrl: './past-files.component.scss'
})
export class PastFilesComponent {

  files:readFile[] = [];

  sorted : boolean = false;
  sortedOn : string = '';
  myFileService:FileService;
  myAccountService:AccountService;
  myRouter:Router;
  showAll : boolean = false;
  sortingOn: string = "";

  constructor(fileService:FileService, accountService:AccountService, router:Router){
    this.myFileService = fileService;
    this.myRouter = router;
    this.myAccountService = accountService;
  }

  ngOnInit(){
    if(this.myAccountService.activeUser){
      this.myAccountService.GetUsersFiles(this.myAccountService.activeUser?.username).subscribe(data => {
        this.files = data;
        console.log(data);
      }, error => {
        console.log(error);
      });
    }
  }

  sortOn(header : string){
    this.sortingOn = header;
    switch(header){
      case "filename":{
        this.files = this.files.slice().sort((a, b) => a.fileName.localeCompare(b.fileName));
        break;
      }
      case "spec": {
        this.files = this.files.slice().sort((a, b) => a.specId.localeCompare(b.specId));
        break;
      }
      case "date": {
        this.files = this.files.slice().sort((a, b) => a.uploadDate.toString().localeCompare(b.uploadDate.toString()));
        break;
      }
      case "size": {
        this.files = this.files.slice().sort((a, b) => a.fileSize - b.fileSize);
        break;
      }
      case "uploader": {
        this.files = this.files.slice().sort((a, b) => a.uploader.localeCompare(b.uploader));
        break;
      }
    }
  }

  showRecord(showFile: readFile) {
    this.myRouter.navigate(['fileview', showFile.fileName]);
  }


  toggleShowAll() {
    if(this.showAll === false){
      this.showAll = true;
      this.myFileService.getAllFiles().subscribe(data => {
        this.files = data;
        console.log(data);
      }, error => {
        console.log(error);
      });
    } else {
      this.showAll = false;
      if(this.myAccountService.activeUser){
        this.myAccountService.GetUsersFiles(this.myAccountService.activeUser?.username).subscribe(data => {
          this.files = data;
          console.log(data);
        }, error => {
          console.log(error);
        });
      }
    }
  }
}
