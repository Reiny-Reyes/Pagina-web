import { Component } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';

@Component({
selector: 'app-carrito',
templateUrl: './carrito.component.html',
styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {

carrito:any[]=[];

constructor(private carritoService:CarritoService){

this.carrito=this.carritoService.obtener();

}

aumentar(producto:any){

producto.cantidad++;

}

disminuir(producto:any){

if(producto.cantidad>1){

producto.cantidad--;

}

}

eliminar(producto:any){

this.carritoService.eliminar(producto);

this.carrito=this.carritoService.obtener();

}

vaciarCarrito(){

this.carritoService.vaciar();

this.carrito=[];

}

subtotal(){

return this.carrito.reduce(
(acc,p)=>acc+(p.precio*p.cantidad),0
).toFixed(2);

}

iva(){

return (Number(this.subtotal())*0.21).toFixed(2);

}

total(){

return (Number(this.subtotal())+Number(this.iva())).toFixed(2);

}

}