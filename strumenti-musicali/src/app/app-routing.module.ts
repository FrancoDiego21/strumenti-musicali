import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BenvenutoComponent } from './benvenuto/benvenuto.component';
import { SpartitiComponent } from './spartiti/spartiti.component';
import { StrumentiComponent } from './strumenti/strumenti.component';

const routes: Routes = [
  {path: 'benvenuto', component: BenvenutoComponent},
  {path: 'spartiti', component: SpartitiComponent},
  {path: 'strumenti', component: StrumentiComponent},
  {path: '', redirectTo: 'benvenuto', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
