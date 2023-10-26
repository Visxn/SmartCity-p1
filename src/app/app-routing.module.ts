import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaComponent } from './agenda/agenda.component';


const routes: Routes = [
  {path: 'agenda', component: AgendaComponent},
  { path: '', redirectTo: '/agenda', pathMatch: 'full' },
  { path: '**', component: AgendaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}



