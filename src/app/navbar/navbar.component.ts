import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isChecked: boolean = false;
  toggleCheckbox() {
    this.isChecked = !this.isChecked;
  }
  onCheckboxClick(event: any) {
    if (event.target.checked) {
      window.location.href = "/connexion";
    }
  }
  }
  


