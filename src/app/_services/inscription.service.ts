import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API ="http://localhost:8080/api/auth/";



const httpOptions = {
  
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  constructor(private http: HttpClient) { }
  inscription(formulaire:any): Observable<any> {
   
      return this.http.post(AUTH_API+'signup', formulaire);
  }

  mdpOub(formu:any): Observable<any>{
    return this.http.post(AUTH_API+'forget', formu);
  }
  reset(formu:any): Observable<any>{
    return this.http.post(AUTH_API+'resetpassword', formu);
  }
}
