import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserPage } from '../user/user.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar-contrasena-verificado',
  templateUrl: './recuperar-contrasena-verificado.page.html',
  styleUrls: ['./recuperar-contrasena-verificado.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  providers: [UserPage],
})
export class RecuperarContrasenaVerificadoPage implements OnInit {

  constructor(private userService: UserPage, private router: Router) { }

  user={
    newPassword: ""
  }

  ngOnInit() {
  }

  // recuperarContrasena(){
  //   this.userService.actualizarContrasena(this.user.newPassword);
  //   console.log(`Contraseña cambiada exitosamente`);
  //   this.router.navigate(['/login']); 

  // }

  vollogin(){
    this.router.navigate(['/login']); 
  }

}
