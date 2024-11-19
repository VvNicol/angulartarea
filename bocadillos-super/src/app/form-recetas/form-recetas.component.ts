import { Component, inject } from '@angular/core';
import { Receta } from '../modelos/receta';
import { RecetasService } from '../services/recetas.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-recetas',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-recetas.component.html',
  styleUrl: './form-recetas.component.css'
})
export class FormRecetasComponent {
  //formulario para crear recetas
  recetasSvc = inject(RecetasService)

  receta: Receta = {
    nombre: '',
    ingredientes: [],
    pasos: [],
  };

  addReceta(): void {
    if (this.receta.nombre && this.receta.ingredientes.length && this.receta.pasos.length) {
      this.recetasSvc.addReceta(this.receta);
      //this.resetForm();
      alert('Receta añadida con éxito.');
    } else {
      alert('Por favor, completa todos los campos.');
    }
  }

  // Limpiar el formulario
  /* resetForm(): void {
    this.receta = { nombre: '', ingredientes: [], pasos: [] };
  } */
}
