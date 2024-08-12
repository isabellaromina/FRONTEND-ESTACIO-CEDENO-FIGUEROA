import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Usuario } from '../../../Models/usuario';

@Component({
  selector: 'app-delete-modal',
  standalone: true,
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent {
  @Input() usuario: Usuario | null = null;
  @Output() close = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<Usuario>();

  cancel(): void {
    this.close.emit();
  }

  confirmDelete(): void {
    if (this.usuario) {
      this.confirm.emit(this.usuario);
    }
  }
}
