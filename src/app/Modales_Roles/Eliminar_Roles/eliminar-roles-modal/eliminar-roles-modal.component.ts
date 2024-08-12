import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Rol } from '../../../Models/rol';



@Component({
  selector: 'app-eliminar-roles-modal',
  standalone: true,
  templateUrl: './eliminar-roles-modal.component.html',
  styleUrl: './eliminar-roles-modal.component.css'
})
export class EliminarRolesModalComponent {
  @Input() rol!: Rol; // Asegúrate de que 'rol' nunca sea null o undefined
  @Output() close = new EventEmitter<void>();
  @Output() delete = new EventEmitter<Rol>();

  // Método para confirmar la eliminación del rol
  confirmDelete(): void {
    if (this.rol) {
      this.delete.emit(this.rol);
    }
  }

cancel(): void {
  this.close.emit();
}
}
