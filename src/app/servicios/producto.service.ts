import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  productoSeleccionado: Producto | any;

  constructor() { }

  guardarProducto(producto: Producto) {
    this.productoSeleccionado = producto;
  }

  obtenerProducto(): Producto {
    return this.productoSeleccionado;
  }
}
