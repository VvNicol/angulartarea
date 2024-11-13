// tarea Component ts
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tarea',
  standalone: true,
  imports: [],
  templateUrl: './tarea.component.html',
  styleUrl: './tarea.component.css'
})
export class TareaComponent implements OnInit, OnDestroy {
  @Input() nombre: string = '';
  @Output() alEliminar = new EventEmitter<void>();

  ngOnInit() {
    console.log(`TareaComponent: ${this.nombre} inicializada`);
  }

  eliminar() {
    this.alEliminar.emit(); // Emitir evento de eliminación
  }

  ngOnDestroy() {
    console.log(`TareaComponent: ${this.nombre} destruida`);
  }
}
