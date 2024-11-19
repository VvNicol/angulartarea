import { Component, inject, OnInit } from '@angular/core';
import { Receta } from '../modelos/receta';
import { RecetasService } from '../services/recetas.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-listado-recetas',
  standalone: true,
  imports: [NgFor],
  templateUrl: './listado-recetas.component.html',
  styleUrl: './listado-recetas.component.css'
})
export class ListadoRecetasComponent implements OnInit {


  // Inyección del servicio
  recetasSvc = inject(RecetasService);

  // Lista de recetas
  recetas: Receta[] = [];

  ngOnInit(): void {
    // Obtiene las recetas desde el servicio
    this.recetas = this.recetasSvc.getRecetas();
  }
}
