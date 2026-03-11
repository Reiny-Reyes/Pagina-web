import { Component } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

constructor(private carrito:CarritoService){}

productos = [

{
id:1,
nombre:"MacBook Pro M3",
precio:2400,
descripcion:"Laptop Apple con chip M3",
imagen:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-select-202310"
},

{
id:2,
nombre:"Lenovo Legion 5",
precio:1500,
descripcion:"Laptop gamer RTX",
imagen:"https://p3-ofp.static.pub//fes/cms/2023/07/19/2slqv0b0xhjg9r2c6w9y3qg36j0h7y986296.png"
},

{
id:3,
nombre:"Logitech G502",
precio:60,
descripcion:"Mouse gamer profesional",
imagen:"https://resource.logitechg.com/w_1200,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/g502-hero/g502-hero-gallery-1.png"
},

{
id:4,
nombre:"Samsung Odyssey G5",
precio:420,
descripcion:"Monitor gamer 165hz",
imagen:"https://images.samsung.com/is/image/samsung/p6pim/latin_en/ls27cg552elxzp/gallery/latin-en-odyssey-g5"
}

];

agregar(producto:any){
this.carrito.agregar(producto);
}

}