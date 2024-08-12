import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../Services/cliente.service';
import { Cliente } from '../../Models/cliente';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { Genero } from '../../Models/genero';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
})

  export class ClienteComponent implements OnInit {
    cliente: Cliente = {
      nombre: '',
      apellido: '',
      telefono: '',
      correo: '',
      direccion: '',
      genero: ''
    }; 
    listaCliente: Cliente[] = [];
  
    constructor(private _clienteService: ClienteService) {}
  
    ngOnInit(): void {
      this.obtenerClientes();
    }
  
    obtenerClientes() {
      this._clienteService.mostrarCliente().subscribe(data => {
        this.listaCliente = data;
      });
    }
  
    agregarCliente() {
      if (this.validarCliente(this.cliente)) {
        this._clienteService.agregarCliente(this.cliente).subscribe({
          next: data => {
            console.log('Cliente agregado:', data);
            alert("Cliente agregado correctamente");
            this.obtenerClientes();
            this.limpiarFormulario();
          },
          error: error => {
            console.error('Error al agregar cliente:', error);
            alert("Ocurrió un error al agregar el cliente");
          }
        });
      } else {
        alert("Por favor complete todos los campos");
      }
    }
  
    actualizarCliente() {
      if (this.validarCliente(this.cliente)) {
        this._clienteService.modificarCliente(this.cliente).subscribe({
          next: data => {
            console.log('Cliente actualizado:', data);
            alert("Cliente actualizado correctamente");
            this.obtenerClientes();
            this.limpiarFormulario();
          },
          error: error => {
            console.error('Error al actualizar cliente:', error);
            alert("Ocurrió un error al actualizar el cliente");
          }
        });
      } else {
        alert("Por favor complete todos los campos");
      }
    }
  
    eliminarCliente(id: number) {
      this._clienteService.eliminarCliente(id).subscribe({
        next: data => {
          console.log('Cliente eliminado:', data);
          alert("Cliente eliminado correctamente");
          this.obtenerClientes();
        },
        error: error => {
          console.error('Error al eliminar cliente:', error);
          alert("Ocurrió un error al eliminar el cliente");
        }
      });
    }
  
    editarCliente(cliente: Cliente) {
      this.cliente = { ...cliente }; 
    }
  
    validarCliente(cliente: Cliente): boolean {
      return cliente.nombre && cliente.apellido && cliente.telefono && cliente.correo && cliente.direccion && cliente.genero ? true : false;
    }
  
    limpiarFormulario() {
      this.cliente = {
        nombre: '',
        apellido: '',
        telefono: '',
        correo: '',
        direccion: '',
        genero: ''
    }
  }
}
  