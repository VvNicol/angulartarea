import { AfterContentInit, Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MensajesService } from './services/mensajes.service';

@Component({
  selector: 'app-ciclo1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ciclo1.component.html',
  styleUrl: './ciclo1.component.css'
})
export class Ciclo1Component implements  OnInit, OnDestroy {

  nombre: string = '';

  constructor(private mensajesService: MensajesService){}

  ngOnInit(): void {
      this.mensajesService.setMensaje('ngOnInir lanzado en ciclo1')
      console.log(this.mensajesService.getMensaje());
  }

  ngOnDestroy(): void{
    console.log('Has llamado ngOnDestroy');
  }

}
