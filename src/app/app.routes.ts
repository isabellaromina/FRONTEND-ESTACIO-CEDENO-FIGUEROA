import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { MetodosCrudComponent } from './Crud_Components/metodos-crud/metodos-crud.component';
import { CrudComponentsRolesComponent } from './Crud_Components_Roles/crud-components-roles/crud-components-roles.component';
import { ClienteComponent } from './Cliente/cliente/cliente.component';
import { ListaClientesComponent } from './CrudClientes/lista-clientes/lista-clientes.component';

export const routes: Routes = [
    { path:'usuario', component: MetodosCrudComponent },
    { path:'roles', component: CrudComponentsRolesComponent},
    { path:'clienteslista', component: ClienteComponent},
    { path:'OrdenesCompra', component: ListaClientesComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];
