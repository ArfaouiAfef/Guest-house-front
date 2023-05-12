import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InscriptionService } from 'src/app/_services/inscription.service';

import { TokenService } from 'src/app/_services/token.service';


@Component({
  selector: 'app-modifier-password',
  templateUrl: './modifier-password.component.html',
  styleUrls: ['./modifier-password.component.css']
})
export class ModifierPasswordComponent {
  newPassword!: string;
  forms: any = {};
  succes : boolean= false;

  constructor(private inscription: InscriptionService , private token: TokenService, private router: Router) {}

  resetPassword() {
    // const { email, oldpassword, newpassword } = this.forms;
    this.inscription.reset(this.forms.value.password).subscribe(
      data => {
       
        this.router.navigate(['/login']);
        this.succes=true;
      },
      error => {
        console.log(error);
      }
    );
  }

}
