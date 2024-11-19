import { Routes } from '@angular/router';
import { ListadoRecetasComponent } from './listado-recetas/listado-recetas.component';
import { FormRecetasComponent } from './form-recetas/form-recetas.component';

export const routes: Routes = [
    { path: 'listado-recetas', component: ListadoRecetasComponent },
    { path: 'form-recetas', component: FormRecetasComponent },
    // Agrega más rutas si es necesario
    { path: '', redirectTo: '/listado-recetas', pathMatch: 'full' }
];
