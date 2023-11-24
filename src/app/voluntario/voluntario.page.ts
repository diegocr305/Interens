import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voluntario',
  templateUrl: './voluntario.page.html',
  styleUrls: ['./voluntario.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class VoluntarioPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.router.navigate(['/login']);
  }
}
