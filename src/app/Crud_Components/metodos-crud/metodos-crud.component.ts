import { Component,  OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Usuario } from '../../Models/usuario';
import { UsuarioService } from '../../Services/usuario.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RolService } from '../../Services/rol.service';
import { EditModalComponent } from '../../Modales/Editar/edit-modal/edit-modal.component';
import { ViewModalComponent } from '../../Modales/Observar/view-modal/view-modal.component';
import { DeleteModalComponent } from '../../Modales/Eliminar/delete-modal/delete-modal.component';
import { AddModalComponent } from '../../Modales/Agregar/add-modal/add-modal.component';
import { forkJoin } from 'rxjs';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-metodos-crud',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule, EditModalComponent, DeleteModalComponent, ViewModalComponent, AddModalComponent, RouterLink],
  templateUrl: './metodos-crud.component.html',
  styleUrl: './metodos-crud.component.css'
})
export class MetodosCrudComponent implements OnInit {
  usuarios: (Usuario & { nombreRol?: string })[] = [];
  roles: { [key: number]: string } = {};
  newUsuario: Partial<Usuario> = { cedula: '', apellidos: '', telefono: '', direccion: '', rolId: undefined };
  originalUsuarios: (Usuario & { nombreRol?: string })[] = [];
  showEditModal = false;
  showDeleteModal = false;
  showViewModal = false;
  showAddModal = false;
  selectedUsuario: Usuario | null = null;
  cedulaFilter: string = '';
  apellidosFilter: string = '';
  idFilter: number | null = null;
  
  constructor(private _usuarioService: UsuarioService,  private _rolService: RolService) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(): void {
    forkJoin({
      usuarios: this._usuarioService.getUsuarios(),
      roles: this._rolService.getRoles()
    }).subscribe({
      next: ({ usuarios, roles }) => {
        const rolesMap = roles.reduce((acc, rol) => {
          acc[rol.id!] = rol.nombreRol;
          return acc;
        }, {} as { [key: number]: string });

        this.usuarios = usuarios.map(usuario => ({
          ...usuario,
          nombreRol: usuario.rolId !== undefined ? rolesMap[usuario.rolId] || 'Rol no encontrado' : 'Rol no encontrado'
        }));
        
        this.originalUsuarios = [...this.usuarios];
        this.applyFilters();
      },
      error: (err) => console.error('Error al obtener datos', err),
      complete: () => console.info('Datos obtenidos')
    });
  }


  applyFilters(): void {
    this.usuarios = this.originalUsuarios.filter(usuario => {
      const matchesCedula = this.cedulaFilter ? usuario.cedula.includes(this.cedulaFilter) : true;
      const matchesApellidos = this.apellidosFilter ? usuario.apellidos.toLowerCase().includes(this.apellidosFilter.toLowerCase()) : true;
      const matchesId = this.idFilter !== null ? usuario.id === this.idFilter : true;
      return matchesCedula && matchesApellidos && matchesId;
    });
  } 

  openEditModal(usuario: Usuario): void {
    this.selectedUsuario = usuario;
    this.showEditModal = true;
  }

  closeEditModal(): void {
    this.showEditModal = false;
    this.selectedUsuario = null;
  }

  saveChanges(usuario: Usuario): void {
    if (usuario) {
      this._usuarioService.updateUsuario(usuario.id!, usuario).subscribe({
        next: () => {
          this.obtenerUsuarios();
          this.closeEditModal();
        },
        error: (err) => console.error('Error al actualizar usuario', err)
      });
    }
  }

  openDeleteModal(usuario: Usuario): void {
    this.selectedUsuario = usuario;
    this.showDeleteModal = true;
  }

  closeDeleteModal(): void {
    this.showDeleteModal = false;
    this.selectedUsuario = null;
  }

  deleteUsuario(usuario: Usuario): void {
    if (usuario) {
      this._usuarioService.deleteUsuario(usuario.id!).subscribe({
        next: () => {
          this.obtenerUsuarios();
          this.closeDeleteModal();
        },
        error: (err) => console.error('Error al eliminar usuario', err)
      });
    }
  }

  openViewModal(usuario: Usuario): void {
    this.selectedUsuario = usuario;
    this.showViewModal = true;
  }

  closeViewModal(): void {
    this.showViewModal = false;
    this.selectedUsuario = null;
  }

  openAddModal(): void {
    this.showAddModal = true;
  }
  
  closeAddModal(): void {
    this.showAddModal = false;
  }
  
  addUsuario(usuario: Partial<Usuario>): void {
    this._usuarioService.addUsuario(usuario as Usuario).subscribe({
      next: () => {
        this.obtenerUsuarios();  // Actualiza la lista de usuarios
        this.closeAddModal();    // Cierra el modal
      },
      error: (err) => console.error('Error al agregar usuario', err)
    });
  }
  
}
