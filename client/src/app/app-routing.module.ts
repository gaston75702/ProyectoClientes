import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClienteListComponent} from './components/cliente-list/cliente-list.component';
import {ClienteFormComponent} from './components/cliente-form/cliente-form.component';
import {ClienteDetalleComponent} from './components/cliente-detalle/cliente-detalle.component';
 
const routes: Routes = [
  {
    path:'',
    redirectTo:'/clientes',
    pathMatch:'full'
  },
  {
    path:'clientes',
    component:ClienteListComponent
  },
  {
    path:'clientes/add',
    component:ClienteFormComponent
  },
  {
    path:'clientes/detalle/:id',
    component:ClienteDetalleComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
