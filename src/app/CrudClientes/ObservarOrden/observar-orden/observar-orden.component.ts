import { Component, Input, Output, EventEmitter } from '@angular/core';
import { OrdenCompra } from '../../../Models/OrdenCompra';

@Component({
  selector: 'app-observar-orden',
  standalone: true,
  imports: [],
  templateUrl: './observar-orden.component.html',
  styleUrl: './observar-orden.component.css'
})
export class ObservarOrdenComponent {
  @Input() orden: OrdenCompra | null = null;
  @Output() close = new EventEmitter<void>();

  onClose(): void {
    this.close.emit();
  }
}
