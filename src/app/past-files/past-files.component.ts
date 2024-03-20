import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import ObjectID from 'bson-objectid';

@Component({
  selector: 'app-past-files',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './past-files.component.html',
  styleUrl: './past-files.component.scss'
})
export class PastFilesComponent {
  Files = [
    {id: ObjectID("65f204938bc5ab7a1244686f"), fileName: "woo", spec: "spec2", uploadDate:new Date('December 17, 1990 03:24:00'), fileSize: 10020300,
     filePath: "c:/nick/fun/woohoo", parsedData: "{yeah: some, stuff:yup}", uploader: "SmileBrother4eva"},
    {id: ObjectID("65f204938bc5ab7a1244686f"), fileName: "forever", spec: "spec3", uploadDate:new Date('December 13, 1999 03:24:00'), fileSize: 9999999,
     filePath: "c:/nick/fun/woohoont", parsedData: "{yeah: some, stuff:yup}", uploader: "Nicholas"},
    {id: ObjectID("65f204938bc5ab7a1244686f"), fileName: "uhhuh", spec: "spec1", uploadDate:new Date('December 17, 2022 03:24:00'), fileSize: 555555555,
     filePath: "c:/nick/fun/woohooooooo", parsedData: "{yeah: some, stuff:yup}", uploader: "NICHOLAS"},
    {id: ObjectID("65f204938bc5ab7a1244686f"), fileName: "forsure", spec: "spec5", uploadDate:new Date('December 17, 1902 03:24:00'), fileSize: 43434343434,
     filePath: "c:/nick/fun/woohoopla", parsedData: "{yeah: some, stuff:yup}", uploader: "FrownDastard"},
    {id: ObjectID("65f204938bc5ab7a1244686f"), fileName: "nah", spec: "spe", uploadDate:new Date('December 17, 2000 03:24:00'), fileSize: 12121221122121,
     filePath: "c:/nick/fun/woohooligan", parsedData: "{yeah: some, stuff:yup}", uploader: "XxGamingBroxX"},
    {id: ObjectID("65f204938bc5ab7a1244686f"), fileName: "noway", spec: "spec4eva", uploadDate:new Date('December 17, 2008 03:24:00'), fileSize: 8989989989,
     filePath: "c:/nick/fun/woohoohoo", parsedData: "{yeah: some, stuff:yup}", uploader: "Yes"},
  ];

  sortOn(header : string){
    console.log(header);
  }
}
