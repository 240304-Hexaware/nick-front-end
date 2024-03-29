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

  getAllFilesWithName(fileName:string):Observable<readFile[]>{
    let params: HttpParams = new HttpParams().set('filename', fileName);

    return this.http.get<readFile[]>(this.baseurl, {params});
  }

  getAllFilesByIds(ids:ObjectID[]):Observable<readFile[]>{
    let params: HttpParams = new HttpParams();
    for(let i = 0; i < ids.length; i++){
      params.set(`id[${i}]`, ids[i].id);
    }

    return this.http.get<readFile[]>(this.baseurl+'/id', {params});
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
