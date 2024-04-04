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

  getAllSpecs():Observable<Spec[]>{
    return this.http.get<Spec[]>(this.baseurl);
  }

  uploadSpec(newFile:File, uploader:string):Observable<Spec>{
    let form: FormData = new FormData();
    form.append("spec", newFile)
    form.append('username', uploader);

    return this.http.post<Spec>(this.baseurl, form);
  }

  
}
