import { Component } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html'
})
export class CarritoComponent {

constructor(public carrito:CarritoService){}

eliminar(item:any){
this.carrito.eliminar(item);
}

}