import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import ObjectID from 'bson-objectid';
import { Observable } from 'rxjs';
import { Spec } from './Spec';

@Injectable({
  providedIn: 'root'
})
export class SpecService {

  constructor(private http: HttpClient) { }

  baseurl = 'http://localhost:8080/spec';

  getAllSpecsByIds(ids : ObjectID[]):Observable<Spec[]>{
    let params: HttpParams = new HttpParams();
    for(let i = 0; i < ids.length; i++){
      params.set(`id[${i}]`, ids[i].id);
    }

    return this.http.get<Spec[]>(this.baseurl+'/id', {params});
  }

  uploadSpec(newFile:File, uploader:string):Observable<Spec>{
    let form: FormData = new FormData();
    form.append("spec", newFile)
    form.append('username', uploader);

    return this.http.post<Spec>(this.baseurl, form);
  }

  
}
