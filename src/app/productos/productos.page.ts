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
  productList: Producto[]= [
    new Producto(1, 'Laptop', 'Laptop HP', 1000, 10, 'https://picsum.photos/200/300'),
    new Producto(2, 'Refrigeradora', 'Refrigeradora LG', 2000, 5, 'https://picsum.photos/200/300'),
    new Producto(3, 'Televisor', 'Televisor Sony', 3000, 15, 'https://picsum.photos/200/300'),
    new Producto(4, 'Lavadora', 'Lavadora Samsung', 4000, 20, 'https://picsum.photos/200/300'),
    new Producto(5, 'Cocina', 'Cocina Mabe', 5000, 25, 'https://picsum.photos/200/300'),
    new Producto(6, 'Microondas', 'Microondas Panasonic', 6000, 30, 'https://picsum.photos/200/300'),
  ];

  



  constructor(private route:ActivatedRoute, private router: Router) { }

  ngOnInit() {
    console.log(this.productList);
  }

  comprar(productList: Producto) {
    console.log(productList);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        productoId: productList.id,
      }
    };

    this.router.navigate(['/perfil-producto']);
  }
}
