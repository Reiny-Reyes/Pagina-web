import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  carrito:any[] = [];

  constructor(){}

  agregar(producto:any){

    const existe = this.carrito.find(p => p.id === producto.id);

    if(existe){

      existe.cantidad++;

    }else{

      this.carrito.push({
        ...producto,
        cantidad:1
      });

    }

  }

  obtener(){

    return this.carrito;

  }

  eliminar(producto:any){

    this.carrito = this.carrito.filter(
      p => p.id !== producto.id
    );

  }

  vaciar(){

    this.carrito = [];

  }

  /* 🔥 TOTAL DE PRODUCTOS PARA EL NAVBAR */

  totalItems(){

    return this.carrito.reduce(
      (total,producto)=> total + producto.cantidad ,0
    );

  }

}