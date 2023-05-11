import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { OffresMaisonComponent } from './offresMaison/offres-maison.component';
import { OffresCircuitComponent } from './offresCircuit/offres-circuit.component';
import { NosMaisonComponent } from './nos-maison/nos-maison.component';
import { NosCircuitComponent } from './nos-circuit/nos-circuit.component';
import { OurActivityComponent } from './our-activity/our-activity.component';
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ConnexionComponent } from './auth/connexion/connexion.component';
import { OublierPasswordComponent } from './auth/oublier-password/oublier-password.component';
import { InscriptionComponent } from './auth/inscription/inscription.component';
import { CardHomeComponent } from './card-home/card-home.component';






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    OffresMaisonComponent,
    OffresCircuitComponent,
    NosMaisonComponent,
    NosCircuitComponent,
    OurActivityComponent,
    HomeComponent,
    ConnexionComponent,
    InscriptionComponent,
    OublierPasswordComponent,
    CardHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
   /*  RouterModule.forRoot([
      {path:'nos-maison',component:AppComponent},
      {path:'nos-circuit',component:AppComponent},
      {path:'offre-maison',component:AppComponent},
      {path:'offre-circuit',component:AppComponent},
      {path:'our-activity',component:AppComponent}
    ]) */
      
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
