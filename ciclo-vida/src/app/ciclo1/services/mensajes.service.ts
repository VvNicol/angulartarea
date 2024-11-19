import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  private mensaje: string = '';

  getMensaje(){
    return this.mensaje;
  }

  setMensaje(msg: string){
    return this.mensaje;
  }

}
