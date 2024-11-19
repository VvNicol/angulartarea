import { Injectable } from '@angular/core';
import { Receta } from '../modelos/receta';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  private recetas: Receta[] = [
    {
      nombre: 'Arepa Valluna',
      ingredientes: [
        'Harina de maíz',
        'Agua',
        'Sal',
        'Queso costeño rallado (opcional)',
        'Mantequilla (opcional)',
      ],
      pasos: [
        'En un recipiente, mezcla la harina de maíz con agua y una pizca de sal hasta obtener una masa suave.',
        'Forma bolas pequeñas con la masa y aplánalas para darles forma de arepa.',
        'Calienta una parrilla o sartén a fuego medio.',
        'Cocina las arepas por ambos lados hasta que estén doradas.',
        'Opcionalmente, úntalas con mantequilla y agrega queso rallado encima.',
      ],
    },

  ];

  constructor() { }

  addReceta(receta: Receta): void {
    this.recetas.push(receta);
  }

  getRecetas(): Receta[] {
    return this.recetas;
  }
}
