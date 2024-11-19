import { Routes } from '@angular/router';
import { Ciclo1Component } from './ciclo1/ciclo1.component';
import { Ciclo2Component} from './ciclo2/ciclo2.component';

export const routes: Routes = [
    {path: 'ciclo1', component: Ciclo1Component},
    {path: 'ciclo2', component: Ciclo2Component}
];
