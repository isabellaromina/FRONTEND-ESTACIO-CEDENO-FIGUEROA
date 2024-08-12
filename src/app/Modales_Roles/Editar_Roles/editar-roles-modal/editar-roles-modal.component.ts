import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Rol } from '../../../Models/rol';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-roles-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editar-roles-modal.component.html',
  styleUrl: './editar-roles-modal.component.css'
})
export class EditarRolesModalComponent {
  @Input() rol: Rol | null = null;
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<Rol>();

  onSave(): void {
    if (this.rol) {
      this.save.emit(this.rol);
    }
  }

  onClose(): void {
    this.close.emit();
  }
}
