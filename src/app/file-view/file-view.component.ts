import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { error } from 'console';
import { FileService } from '../file.service';
import { readFile } from '../readFile';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-file-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './file-view.component.html',
  styleUrl: './file-view.component.scss'
})
export class FileViewComponent {

  displayFileName:string|undefined;
  myFileService:FileService;
  displayRecords:readFile[] = [];

  constructor(private aRoute: ActivatedRoute, fileService:FileService){
    this.myFileService = fileService;
  }

  ngOnInit(){
    this.aRoute.params.subscribe(data => {
      this.displayFileName = data['fileName'];
      this.getDisplayFile();
    }, error => {
      console.log(error);
    })
  }

  getDisplayFile(){
    if(this.displayFileName){
      this.myFileService.getAllFilesWithName(this.displayFileName).subscribe(data => {
        this.displayRecords = [];
        this.displayRecords.push(data);
      }, error => {
        console.log(error);
      })
    }
  }
}
