import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  template: `
    <div>
      <label class="switch">
        <input type="checkbox" [checked]="isLoggedIn" (click)="toggle()">
        <span class="slider round"></span>
        <span class="menu-icon"></span>
      </label>
    </div>
  `
})
export class AuthComponent {
  public isLoggedIn: boolean = false;

  constructor(private authService: AuthService) {
    this.authService.isLoggedIn$.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  public toggle(): void {
    if (this.isLoggedIn) {
      this.authService.logout();
    }  /* else {
      this.authService.login();
    } */ 
  }
}
