import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Usuario } from '../../../Models/usuario';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css'],
  imports: [ FormsModule, CommonModule], 
})
export class EditModalComponent {
  @Input() usuario: Usuario | null = null;
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<Usuario>();

  saveChanges(): void {
    if (this.usuario) {
      this.save.emit(this.usuario);
    }
  }

  cancel(): void {
    this.close.emit();
  }
}

