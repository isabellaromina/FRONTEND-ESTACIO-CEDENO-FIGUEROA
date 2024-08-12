import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Usuario } from '../../../Models/usuario';

@Component({
  selector: 'app-view-modal',
  standalone: true,
  templateUrl: './view-modal.component.html',
  styleUrls: ['./view-modal.component.css']
})
export class ViewModalComponent {
  @Input() usuario: Usuario | null = null;
  @Output() close = new EventEmitter<void>();

  closeModal(): void {
    this.close.emit();
  }
}
