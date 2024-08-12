import { Component,  OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Rol } from '../../Models/rol';
import { RolService } from '../../Services/rol.service';
import { HttpClientModule } from '@angular/common/http';
import { EditarRolesModalComponent } from '../../Modales_Roles/Editar_Roles/editar-roles-modal/editar-roles-modal.component';
import { EliminarRolesModalComponent } from '../../Modales_Roles/Eliminar_Roles/eliminar-roles-modal/eliminar-roles-modal.component';
import { ObservarRolesModalComponent } from '../../Modales_Roles/Observar_Roles/observar-roles-modal/observar-roles-modal.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crud-components-roles',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, EditarRolesModalComponent, EliminarRolesModalComponent, ObservarRolesModalComponent],
  templateUrl: './crud-components-roles.component.html',
  styleUrl: './crud-components-roles.component.css'
})
export class CrudComponentsRolesComponent {
  roles: Rol[] = [];
  selectedRol: Rol | null = null;
  showEditModal = false;
  showDeleteModal = false;
  showViewModal = false;

  constructor(private _rolService: RolService) {}

  ngOnInit(): void {
    this.obtenerRoles();
  }

  obtenerRoles(): void {
    this._rolService.getRoles().subscribe({
      next: (data: Rol[]) => this.roles = data,
      error: (err) => console.error('Error al obtener roles', err),
      complete: () => console.info('Roles obtenidos')
    });
  }

  openEditModal(rol: Rol): void {
    this.selectedRol = rol;
    this.showEditModal = true;
  }

  closeEditModal(): void {
    this.showEditModal = false;
    this.selectedRol = null;
  }

  saveChanges(rol: Rol): void {
    if (rol) {
      this._rolService.updateRol(rol.id!, rol).subscribe({
        next: () => {
          this.obtenerRoles();
          this.closeEditModal();
        },
        error: (err) => console.error('Error al actualizar rol', err)
      });
    }
  }
  openDeleteModal(rol: Rol): void {
    this.selectedRol = rol;
    this.showDeleteModal = true;
  }

  closeDeleteModal(): void {
    this.showDeleteModal = false;
    this.selectedRol= null;
  }
  

  deleteRol(rol: Rol): void {
    if (rol) {
      this._rolService.deleteRol(rol.id!).subscribe(() => {
        this.obtenerRoles();
          this.closeDeleteModal();
      });
    }
  }

  openViewModal(rol: Rol): void {
    this.selectedRol = rol;
    this.showViewModal = true;
  }

  closeViewModal(): void {
    this.showViewModal = false;
    this.selectedRol = null;
  }
}
