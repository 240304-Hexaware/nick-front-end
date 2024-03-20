import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(router:Router){
    this.myRouter = router;
  }

  routeToPastFiles(){
    this.myRouter.navigate(['/files']);
  }

  uploadSpecification(){
    this.uploadingFlatFile = false;
    this.uploadingSpecFile = false;
    alert("successful upload of specification");
  }
  
}
