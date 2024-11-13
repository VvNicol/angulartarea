import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Listado de clientes';
  listaClientes = [
    {name:'alen', apellido:'taborda', movil:'55552225', email:'alencito@gmail.com'},
    {name:'sara', apellido:'rosa', movil:'55552225', email:'alencito@gmail.com'},
    {name:'jose', apellido:'montero', movil:'55552225', email:'alencito@gmail.com'},
    {name:'ana', apellido:'buitrago', movil:'55552225', email:'alencito@gmail.com'},
    {name:'maria', apellido:'ochoa', movil:'55552225', email:'alencito@gmail.com'},
    {name:'pepe', apellido:'cruz', movil:'55552225', email:'alencito@gmail.com'},
    {name:'ayen', apellido:'amor', movil:'55552225', email:'alencito@gmail.com'}
  ]
}
