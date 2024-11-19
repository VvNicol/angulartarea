import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ficha-cliente',
  standalone: true,
  imports: [],
  templateUrl: './ficha-cliente.component.html',
  styleUrl: './ficha-cliente.component.css'
})
export class FichaClienteComponent {
@Input() clienteDetalle: any
@Output() clienteEliminado = new EventEmitter<string>();

eliminarClick(nombreCompleto: string){
  this.clienteEliminado.emit(nombreCompleto);
}
}
