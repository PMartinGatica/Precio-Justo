import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Components
import { ProvinciasComponent } from './components/provincias/provincias.component';
import { ProductosComponent } from './components/productos/productos.component';
import { HomeComponent } from './components/home/home.component';
import { P404Component } from './components/p404/p404.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home',component: HomeComponent},
  {path: 'provincias', component: ProvinciasComponent},
  {path: 'provincias/:nombreProvincia/productos', component: ProductosComponent},
  {path: 'productos', component: ProductosComponent},
  {path: '**', component: P404Component},

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
