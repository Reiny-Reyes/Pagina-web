import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { CarritoComponent } from './pages/carrito/carrito.component';

const routes:Routes=[

{path:'',component:HomeComponent},
{path:'productos',component:ProductosComponent},
{path:'detalle/:id',component:DetalleComponent},
{path:'carrito',component:CarritoComponent}

]

@NgModule({
imports:[RouterModule.forRoot(routes)],
exports:[RouterModule]
})
export class AppRoutingModule{}