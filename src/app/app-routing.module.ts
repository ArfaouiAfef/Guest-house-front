import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffresMaisonComponent } from './offresMaison/offres-maison.component';
import { NosMaisonComponent } from './nos-maison/nos-maison.component';
import { HomeComponent } from './home/home.component';
import { OffresCircuitComponent } from './offresCircuit/offres-circuit.component';
import { NosCircuitComponent } from './nos-circuit/nos-circuit.component';
import { OurActivityComponent } from './our-activity/our-activity.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'offre-maison', component:OffresMaisonComponent},
  {path:'offre-circuit', component:OffresCircuitComponent},
  {path:'nos-maison', component:NosMaisonComponent},
  {path:'nos-circuit', component:NosCircuitComponent},
  {path:'our-activity', component:OurActivityComponent},
  {path:'navbar', component:NavbarComponent},
  {path:'footer', component:FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
