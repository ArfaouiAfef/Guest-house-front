import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InscriptionService } from 'src/app/_services/inscription.service';
import { TokenService } from 'src/app/_services/token.service';


@Component({
  selector: 'app-oublier-password',
  templateUrl: './oublier-password.component.html',
  styleUrls: ['./oublier-password.component.css']
})
export class OublierPasswordComponent implements OnInit{
  formu:any={};
  message :string="";
  mdp=true;
 
  constructor(private token:TokenService ,private inscriptService: InscriptionService , private route:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("TOKEN_KEY")!=undefined){
      this.route.navigate(["connexion"])
    }
  }
  passe(){
      if(this.formu.email!=undefined){
        this.formu.baseURL="http://localhost:4200"
        this.message="";
        this.inscriptService.mdpOub(this.formu).subscribe({
          next:(data:any)=>{
            console.log(data)
            alert(data.message)
            },
      error:(err:any)=>{
            
            },
            complete:()=>{},
        
        })
      }else{this.message="Champs vide"}
    /*
    let champVide = "veillez remplir votre champ"
    let al=0;
    for (let i in this.formu){
      if ((this.formu[i].email!="")){
        this.formu.subscribe({
          next:(data:any)=>{
              console.log(data)
              
 
           al=1
      } } ) } }
    if (al == 0)
      this.inscriptService.mdpOub(this.formu).subscribe(data=> 
        {console.log(data)});
    else
        alert(champVide)
  }
  */
}
}
