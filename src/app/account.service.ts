import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { User } from './User';
import ObjectID from 'bson-objectid';


//Manages what user is logged in and their privelages
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  isAdmin : boolean = false;
  isLoggedIn : boolean = false;
  activeUser : User | undefined;

  baseurl = 'http://localhost:8080/users';

  constructor(private http: HttpClient) { }

  RegisterUser(newUser:User): Observable<User> {
    return this.http.post<User>(this.baseurl, JSON.stringify(newUser), {headers: new HttpHeaders({'Content-Type': 'application/json'})})
      .pipe(catchError(this.errorHandler));
  }

  GetAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseurl+'/all').pipe(catchError(this.errorHandler));
  }

  GetUserByUser(username:string, password:string): Observable<User>{
    let params : HttpParams = new HttpParams().set('username', username).set('password', password);
    
    return this.http.get<User>(this.baseurl, {params}).pipe(catchError(this.errorHandler));
  }

  SetUserPerms(user:User, newPerms:string): Observable<User>{
    let params : HttpParams = new HttpParams().set('username', user.username).set('permissions', newPerms);

    return this.http.put<User>(this.baseurl, {params}).pipe(catchError(this.errorHandler));
  }

  TestCall():Observable<Object>{
    return this.http.get('http://localhost:8080/test').pipe(catchError(this.errorHandler));
  }

  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }


}
