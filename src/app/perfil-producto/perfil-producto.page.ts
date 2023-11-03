import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Route } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { Producto } from '../models/producto';

@Component({
  selector: 'app-perfil-producto',
  templateUrl: './perfil-producto.page.html',
  styleUrls: ['./perfil-producto.page.scss'],
  standalone: true,
  
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PerfilProductoPage implements OnInit {
  producto: any = {};
  
  constructor(private route:ActivatedRoute) { 
    console.log('constructor');
  }

  ngOnInit() {
    if (history.state.producto) {
      this.producto = history.state.producto;
      console.log('Producto Obtenido:', this.producto);
      // ... otros campos
    } else {
      console.error('Producto no definido');
    }
  }
  


}
