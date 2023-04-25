import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor(private http: HttpClient) { }

  public login(username: string, password: string): void {
    const url = 'http://example.com/api/login';
    const data = { username, password };

    this.http.post(url, data).subscribe(
      (response: any) => {
        const token = response.token;
        localStorage.setItem('access_token', token);
        this.isLoggedInSubject.next(true);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public logout(): void {
    localStorage.removeItem('access_token');
    this.isLoggedInSubject.next(false);
  }

 /*  private isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor() { }

  public login(): void {
    // Code pour effectuer la connexion
    this.isLoggedInSubject.next(true);
  }

  public logout(): void {
    // Code pour effectuer la déconnexion
    this.isLoggedInSubject.next(false);
  } */
}
