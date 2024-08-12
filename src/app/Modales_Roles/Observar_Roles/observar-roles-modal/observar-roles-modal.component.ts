import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Rol } from '../../../Models/rol';
;

@Component({
  selector: 'app-observar-roles-modal',
  standalone: true,
  imports: [ ],
  templateUrl: './observar-roles-modal.component.html',
  styleUrl: './observar-roles-modal.component.css'
})
export class ObservarRolesModalComponent {
  @Input() rol: Rol | null = null;
  @Output() close = new EventEmitter<void>();

  onClose(): void {
    this.close.emit();
  }
}
