import { Component, OnInit , ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-info-carrucel',
  templateUrl: './info-carrucel.page.html',
  styleUrls: ['./info-carrucel.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,]
})
export class InfoCarrucelPage implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
