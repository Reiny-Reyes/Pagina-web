import { Injectable } from '@angular/core';

@Injectable({
providedIn: 'root'
})
export class CarritoService {

items:any[]=[];

agregar(producto:any){
this.items.push(producto);
}

eliminar(producto:any){
this.items=this.items.filter(p=>p!==producto);
}

total(){
return this.items.reduce((sum,p)=>sum+p.precio,0);
}

totalItems(){
return this.items.length;
}

}