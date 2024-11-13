// app Component ts
import { Component, NgModule, NgModuleRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TareaService } from './service/tarea.service';
import { TareaComponent } from "./tarea/tarea.component";
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TareaComponent, NgFor, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  nuevaTarea: string = '';
  tareas: string[] = [];

  constructor(private tareaService: TareaService) {
    this.tareaService.tareas$.subscribe((tareas) => {
      this.tareas = tareas;
    });
  }

  agregarTarea() {
    if (this.nuevaTarea.trim()) {
      this.tareaService.agregarTarea(this.nuevaTarea.trim());
      this.nuevaTarea = '';
    }
  }

  eliminarTarea(indice: number) {
    this.tareaService.eliminarTarea(indice);
  }
}
