import { Component } from '@angular/core';
import { MensajesService } from '../ciclo1/services/mensajes.service';
import { ContadorComponent } from "./contador/contador.component";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-ciclo2',
  standalone: true,
  imports: [ContadorComponent, NgIf],
  templateUrl: './ciclo2.component.html',
  styleUrl: './ciclo2.component.css'
})
export class Ciclo2Component {
  mostrarContador = true;
  inicial = 0;
  handleDestruccion() {
  console.log('PadreComponent: El contador fue destruido');
  }
  
}
