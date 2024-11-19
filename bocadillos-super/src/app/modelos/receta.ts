// src/app/models/receta.ts
export interface Receta {
    nombre: string;
    ingredientes: string[];
    pasos: string[];
    foto?: string; // Propiedad opcional para la foto
}
  