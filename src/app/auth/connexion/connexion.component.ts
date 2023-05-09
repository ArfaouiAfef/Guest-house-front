import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/_services/login.service';
import { TokenService } from 'src/app/_services/token.service';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  form: any = {};
  roles: string = '';
  constructor(private login: LoginService, private token: TokenService, private route: Router) {
    if (localStorage.getItem("TOKEN_KEY") != undefined) {
      this.route.navigate(["AccAdmin"])
    }
  }

  ngOnInit(): void {
  }
  connexion() {
    console.log(this.form.login)
    console.log(this.form.password)

    if (this.form.login != undefined && (this.form.password != undefined)) {
      this.login.login(this.form).subscribe({
        next: (data: any) => {
          console.log(data)
          this.token.saveToken(data.token);
          this.token.saveTokenType(data.tokentype);
          this.token.saveUserId(data.id);
          this.token.saveUserlogin(data.login)
          this.token.saveUserrole(data.roles);

          //   localStorage.setItem("currentUser",JSON.stringify(data))
          for (var i in data.roles) {

            if (data.roles[i] == "ROLE_ADMIN") {
              localStorage.setItem("ROLE_ADMIN", data.roles[i])
              window.location.replace('AccAdmin')
              //  this.route.navigate(['/AccAdmin'])
            }
            else {
              window.location.replace('/home')
              //  this.route.navigate(['/AccResponsable'])
            }
          }
        },
        error: (err: any) => {

          alert("compte non reconnue , vous pouvez faire inscription d'abord (Sign Up)")
        },
        complete: () => { },

      })
    }
  }
}
