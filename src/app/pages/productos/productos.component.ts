import { Component } from '@angular/core';
import { PRODUCTOS } from 'src/app/Data/producto';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector:'app-productos',
  templateUrl:'./productos.component.html',
  styleUrls:['./productos.component.css']
})
export class ProductosComponent{

  productos = PRODUCTOS
  productosFiltrados = PRODUCTOS

  categoriaSeleccionada = 'todos'

  // buscador
  busqueda = ''

  // paginación
  paginaActual = 1
  productosPorPagina = 6
  totalPaginas = 0

  constructor(private carrito:CarritoService){

    this.actualizarPaginacion()

  }

  /* FILTRO CATEGORIA */

  filtrar(categoria:string){

    this.categoriaSeleccionada = categoria

    if(categoria === 'todos'){

      this.productosFiltrados = PRODUCTOS

    }else{

      this.productosFiltrados =
      PRODUCTOS.filter(p=>p.categoria===categoria)

    }

    this.buscar()

  }

  /* BUSCADOR */

  buscar(){

    let resultado = this.productosFiltrados

    if(this.busqueda.trim() !== ''){

      resultado = resultado.filter(p =>
        p.nombre.toLowerCase().includes(this.busqueda.toLowerCase())
      )

    }

    this.productos = resultado

    this.paginaActual = 1

    this.actualizarPaginacion()

  }

  /* PAGINACION */

  actualizarPaginacion(){

    this.totalPaginas = Math.ceil(
      this.productos.length / this.productosPorPagina
    )

  }

  cambiarPagina(numero:number){

    this.paginaActual = numero

  }

  productosPagina(){

    const inicio = (this.paginaActual-1) * this.productosPorPagina

    return this.productos.slice(
      inicio,
      inicio + this.productosPorPagina
    )

  }

  /* CARRITO */

  agregar(producto:any){

    this.carrito.agregar(producto)

  }

}