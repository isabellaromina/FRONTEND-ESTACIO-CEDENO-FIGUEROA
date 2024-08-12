import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { MetodosCrudComponent } from "./Crud_Components/metodos-crud/metodos-crud.component";
import { CrudComponentsRolesComponent } from './Crud_Components_Roles/crud-components-roles/crud-components-roles.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { CabeceraComponent } from './Cabecera/cabecera/cabecera.component';
import { ClienteComponent } from './Cliente/cliente/cliente.component';
import { ListaClientesComponent } from './CrudClientes/lista-clientes/lista-clientes.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule ,MetodosCrudComponent, FormsModule, RouterModule , CrudComponentsRolesComponent, CabeceraComponent, RouterLink, ClienteComponent, ListaClientesComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProyectoFin';
}
