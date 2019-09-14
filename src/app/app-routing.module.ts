import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './pages/inicio/inicio.component';

import { HostalInicioComponent } from './pages/hostal/hostal-inicio/hostal-inicio.component';
import { HabDobleComponent } from './pages/hostal/hab-doble/hab-doble.component';
import { HabTripleComponent } from './pages/hostal/hab-triple/hab-triple.component';
import { HabMatrimonialComponent} from './pages/hostal/hab-matrimonial/hab-matrimonial.component';

import { CabanaComponent } from './pages/cabana/cabana.component';
import { CafeteriaComponent } from './pages/cafeteria/cafeteria.component';
import { TerceraEdadComponent } from './pages/tercera-edad/tercera-edad.component';
import { ExtranjeroComponent } from './pages/extranjero/extranjero.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { DepartamentoComponent } from './pages/departamento/departamento.component';
import { TarifaComponent } from './pages/tarifa/tarifa.component';

const routes: Routes = [{
  path: 'inicio',
  component: InicioComponent
},
{
  path:'hostal-inicio',
  component: HostalInicioComponent
},
{
  path: 'hab-doble',
  component: HabDobleComponent  
},
{
  path: 'hab-triple',
  component: HabTripleComponent
},
{
  path: 'hab-matrimonial',
  component: HabMatrimonialComponent
},
{
  path: 'cabana',
  component: CabanaComponent
},
{
  path: 'cafeteria',
  component: CafeteriaComponent  
},
{
  path: 'tercera-edad',
  component: TerceraEdadComponent  
},
{
  path: 'extranjero',
  component: ExtranjeroComponent
},
{
  path: 'contacto',
  component: ContactoComponent
},
{
  path: 'departamento',
  component: DepartamentoComponent
},
{
  path: 'tarifa',
  component: TarifaComponent
},
{
  path: '',
  redirectTo: 'inicio',
  pathMatch: 'full'
},
{
  path: '**',
  redirectTo: 'inicio'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
