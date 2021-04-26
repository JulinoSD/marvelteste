import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { PersonagemComponent } from './personagens/personagem/personagem.component';

const routes: Routes = [
  { path: '', redirectTo: 'layout', pathMatch: 'full'},
  { path: 'layout', component: LayoutComponent },
  { path: 'personagens', component: PersonagemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
