import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserPage } from '../user/user.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.page.html',
  styleUrls: ['./recuperar-contrasena.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  providers: [UserPage],
})
export class RecuperarContrasenaPage implements OnInit {

  user={
    usuario: "",
    newPassword: ""
  }

  constructor(private userService: UserPage, private router: Router) { }

  ngOnInit() {
  }

  
  recuperarContrasena(){
    this.userService.actualizarContrasena(this.user.usuario, this.user.newPassword);
    console.log(`Contraseña cambiada exitosamente para ${this.user.usuario}`);
    this.router.navigate(['/login']); 

  }
}
