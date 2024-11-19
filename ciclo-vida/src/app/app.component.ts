import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Ciclo1Component } from "./ciclo1/ciclo1.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, Ciclo1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ciclo-vida';
  nombre: string = 'Pepita';
}
