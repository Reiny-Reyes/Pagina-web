import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarritoService } from '../../services/carrito.service';
import { PRODUCTOS } from 'src/app/Data/producto';

@Component({
selector: 'app-detalle',
templateUrl: './detalle.component.html',
styleUrls: ['./detalle.component.css']
})

export class DetalleComponent implements OnInit {

producto:any;

constructor(
private route: ActivatedRoute,
private carrito: CarritoService
){}

ngOnInit(){

const id = Number(this.route.snapshot.paramMap.get('id'));

this.producto = PRODUCTOS.find(p => p.id === id);

}

agregarCarrito(){

this.carrito.agregar(this.producto);

}

}