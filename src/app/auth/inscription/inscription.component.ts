import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InscriptionService } from 'src/app/_services/inscription.service';
import { TokenService } from 'src/app/_services/token.service';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit{
  idPersonne:any;
  form:any={	"nom" : "",
	"prenom" : "",
	"adresse" : "",
	"naissance" : "",
	"email" : "",
	"telephone" : "",
	"identificateur" : "",
	"listeRole" : "",
	"login" : "",
	"password" : "",
	"passwordConfirme" : ""};
  constructor(private token:TokenService ,private inscriptService:InscriptionService,private route:Router) { }

  ngOnInit(): void {
  }
  enregistrer(){
    let champVide = "veillez remplir tout les champs du formulaire"
    let al=0;
    for (let i in this.form){
      if (this.form[i]==""){
        alert(i)
        al=1
      }
    }
    if (al == 0)
    this.inscriptService.inscription(this.form).subscribe(data=> 
      {console.log(data)});
    else
      alert(champVide)
  }
}
