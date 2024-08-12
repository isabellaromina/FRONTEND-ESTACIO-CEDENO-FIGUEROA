
import { Component, OnInit } from '@angular/core';
import { OrdenCompra } from '../../Models/OrdenCompra';
import { Cliente } from '../../Models/cliente';
import { OrdenService } from '../../Services/orden-compra.service';
import { ClienteService } from '../../Services/cliente.service';
import { CommonModule } from '@angular/common';
import { ObservarOrdenComponent } from "../ObservarOrden/observar-orden/observar-orden.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-clientes',
  standalone: true,
  imports: [CommonModule, ObservarOrdenComponent, FormsModule],
  templateUrl: './lista-clientes.component.html',
  styleUrl: './lista-clientes.component.css'
})
export class ListaClientesComponent implements OnInit {
  listaOrdenes: OrdenCompra[] = [];
  listaClientes: Cliente[] = [];
  orden: OrdenCompra = { id: 0, clienteId: 0, solicitudCompraId: 0, descripcion: '' };
  selectedOrden: OrdenCompra | null = null;
  showViewModal = false;

  constructor(
    private ordenService: OrdenService,
    private clienteService: ClienteService
  ) {}

  ngOnInit(): void {
    this.cargarOrdenes();
    this.cargarClientes();
  }

  cargarOrdenes(): void {
    this.ordenService.mostrarOrdenes().subscribe(
      data => {
        this.listaOrdenes = data;
      },
      error => console.error('Error al cargar las órdenes', error)
    );
  }

  cargarClientes(): void {
    this.clienteService.mostrarCliente().subscribe(
      data => {
        this.listaClientes = data;
      },
      error => console.error('Error al cargar los clientes', error)
    );
  }

  obtenerNombreCliente(id: number): string {
    const cliente = this.listaClientes.find(c => c.id === id);
    return cliente ? cliente.nombre : 'Desconocido';
  }

  verOrden(orden: OrdenCompra): void {
    this.selectedOrden = orden;
    this.showViewModal = true;
  }

  seleccionarOrden(orden: OrdenCompra): void {
    this.orden = { ...orden }; // Clonar el objeto para editar
  }

  guardarOrden(): void {
    if (!this.orden.solicitudCompraId) {
      this.orden.solicitudCompraId = this.generarIdUnico();
    }

    if (this.orden.id) {
      // Actualizar una orden existente
      this.ordenService.modificarOrden(this.orden).subscribe(
        () => {
          this.cargarOrdenes(); // Recargar las órdenes después de la actualización
          this.resetearFormulario(); // Limpiar el formulario
        },
        error => console.error('Error al actualizar la orden', error)
      );
    } else {
      // Agregar una nueva orden
      this.ordenService.agregarOrden(this.orden).subscribe(
        () => {
          this.cargarOrdenes(); // Recargar las órdenes después de agregar
          this.resetearFormulario(); // Limpiar el formulario
        },
        error => console.error('Error al agregar la orden', error)
      );
    }
  }

  eliminarOrden(id: number): void {
    this.ordenService.eliminarOrden(id).subscribe(
      () => this.cargarOrdenes(), // Recargar las órdenes después de eliminar
      error => console.error('Error al eliminar la orden', error)
    );
  }

  consultarOrden(): void {
    // Implementar si es necesario para consultas específicas
  }

  resetearFormulario(): void {
    this.orden = { id: 0, clienteId: 0, solicitudCompraId: 0, descripcion: '' };
  }

  closeViewModal(): void {
    this.showViewModal = false;
  }

  generarIdUnico(): number {
    return this.listaOrdenes.length > 0 ? Math.max(...this.listaOrdenes.map(o => o.solicitudCompraId)) + 1 : 1;
  }
}