import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { Producto } from '../models/producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ProductosPage implements OnInit {
  imagenSrc = 'assets/img/';
  
  productList: Producto[]= [
    new Producto(1, 'Laptop', 'Laptop HP', 1000, 10, this.imagenSrc+'laptop-hp.jpg'),
    new Producto(2, 'Refrigeradora', 'Refrigeradora LG', 2000, 5, this.imagenSrc+'refri-lg.jpg'),
    new Producto(3, 'Televisor', 'Televisor Sony', 3000, 15, this.imagenSrc+'tv-sony.jpeg'),
    new Producto(4, 'Lavadora', 'Lavadora Samsung', 4000, 20, this.imagenSrc+'lavadora-samsung.jpeg'),
    new Producto(5, 'Cocina', 'Cocina Mabe', 5000, 25, this.imagenSrc+'cocina-mabe.jpg'),
    new Producto(6, 'Microondas', 'Microondas Panasonic', 6000, 30, this.imagenSrc+'microondas-panasonic.png'),
  ];


  



  constructor(private route:ActivatedRoute, private router: Router) { }

  ngOnInit() {
    console.log(this.productList);
  }

  comprar(producto: Producto) {
    console.log(producto);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        productoId: producto.id,
      }
    };

    this.router.navigate(['/perfil-producto'], { state: { producto: producto } });
  }
}
