import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { RolService } from '../../../Services/rol.service';
import { Rol } from '../../../Models/rol';
import { Usuario } from '../../../Models/usuario';

@Component({
  selector: 'app-add-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.css']
})
export class AddModalComponent {
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<Partial<Usuario>>();

  newUsuario: Partial<Usuario> = { cedula: '', apellidos: '', telefono: '', direccion: '', rolId: undefined };
  roles: Rol[] = [];

  constructor(private _rolService: RolService) {
    this.obtenerRoles();
  }

  obtenerRoles(): void {
    this._rolService.getRoles().subscribe({
      next: (roles) => this.roles = roles,
      error: (err) => console.error('Error al obtener roles', err)
    });
  }

  
  onSave(): void {
    if (
      !this.newUsuario.cedula ||
      !this.newUsuario.apellidos ||
      !this.newUsuario.telefono ||
      !this.newUsuario.direccion ||
      !this.newUsuario.rolId
    ) {
      alert('Faltan propiedades. Por favor complete todos los campos.');
      return;
    }

    this.save.emit(this.newUsuario as Usuario);
  }

  onClose(): void {
    this.close.emit();
  }
}