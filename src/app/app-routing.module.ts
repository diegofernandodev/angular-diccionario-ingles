import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementoListaComponent } from './elemento-lista/elemento-lista.component';
import { MenuInglesComponent } from './menu-ingles/menu-ingles.component';

const routes: Routes = [
  { path: '', redirectTo: '/frutas', pathMatch: 'full' },
  { path: 'frutas', component: ElementoListaComponent, data: { categoria: 'frutas' } },
  { path: 'vocales', component: ElementoListaComponent, data: { categoria: 'vocales' } },
  { path: 'animales', component: ElementoListaComponent, data: { categoria: 'animales' } },
  { path: 'colores', component: ElementoListaComponent, data: { categoria: 'colores' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
