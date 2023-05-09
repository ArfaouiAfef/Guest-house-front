import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const AUTH_API ="http://localhost:8080/api/auth";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }
  login(from:any): Observable<any> {
    return this.http.post(AUTH_API+"/signin" , from);
  }
}


