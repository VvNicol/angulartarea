// tarea service ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  private tareas: string[] = [];
  private tareasSubject = new BehaviorSubject<string[]>(this.tareas);

  tareas$ = this.tareasSubject.asObservable();

  agregarTarea(tarea: string) {
    this.tareas.push(tarea);
    this.tareasSubject.next([...this.tareas]); // Emitir la lista actualizada
  }

  eliminarTarea(indice: number) {
    this.tareas.splice(indice, 1);
    this.tareasSubject.next([...this.tareas]); // Emitir la lista actualizada
  }
}
