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

import { AuthService } from './services/auth.service';
import { AuthComponent } from './auth/auth.component';
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';


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
    AuthComponent,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
   /*  RouterModule.forRoot([
      {path:'nos-maison',component:AppComponent},
      {path:'nos-circuit',component:AppComponent},
      {path:'offre-maison',component:AppComponent},
      {path:'offre-circuit',component:AppComponent},
      {path:'our-activity',component:AppComponent}
    ]) */
      
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
