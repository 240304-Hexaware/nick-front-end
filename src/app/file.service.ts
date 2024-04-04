import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { readFile } from './readFile';
import ObjectID from 'bson-objectid';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) { }

  baseurl = 'http://localhost:8080/files';

  getAllFilesWithName(fileName:string):Observable<readFile>{
    let params: HttpParams = new HttpParams().set('filename', fileName);
    console.log(params);
    return this.http.get<readFile>(this.baseurl+'/name', {params});
  }

  getAllFiles():Observable<readFile[]>{
    return this.http.get<readFile[]>(this.baseurl);
  }

  uploadFile(newFile: File, specName:string, uploader:string):Observable<string>{
    let form: FormData = new FormData();
    form.append("file", newFile)
    form.append('spec', specName);
    form.append('user', uploader);

    return this.http.post<string>(this.baseurl+'/upload', form);
  }

  deleteFile(fileName:string){
    let params: HttpParams = new HttpParams().set('filename', fileName);
    this.http.delete(this.baseurl, {params})
  }
}
