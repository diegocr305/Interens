import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ToastController } from '@ionic/angular';
import { UserPage } from '../user/user.page';
import {NavigationExtras, Router } from '@angular/router';
import { LUsuario } from '../models/lUsuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  providers: [UserPage],
})
export class LoginPage implements OnInit {

  user={
    usuario: "",
    password: ""
  }

  // ListUsuario: LUsuario[] = [
  //   new LUsuario('12345678-k', 'Pedro', 'Perez','pe.perez@duocuc.cl','Admin', '123'),
  // ];

  constructor(private userService: UserPage,private router: Router, public toastController: ToastController) { 
    
  }

  ngOnInit() {
  }

  ingresar(){
    let usuarioEncontrado = false; // Variable para rastrear si se ha encontrado el usuario
    let contrasenaCorrecta = false; // Variable para rastrear si la contraseña es correcta

    for (let i = 0; i < this.userService.userList.length; i++) {
      console.log(this.userService.userList[i].email);

      if (this.userService.userList[i].email === this.user.usuario) {
        usuarioEncontrado = true; // Se ha encontrado el usuario

        if (this.userService.userList[i].password === this.user.password) {
          contrasenaCorrecta = true; // La contraseña es correcta
          console.log(this.userService.userList[i]);
          let navigationExtras: NavigationExtras = {
            state: {
              user: this.userService.userList[i]
            }
          }
          this.router.navigate(['/home'], navigationExtras);
          break; // Salir del bucle tan pronto como se encuentre una coincidencia
        }
      }
    }

    if (!usuarioEncontrado || !contrasenaCorrecta) {
      this.presentToast("Usuario o contraseña incorrecta");
    }
  }

  async presentToast(menssage: string, duration:number = 5000){//creacion de una funcion asincronica
    let toast = this.toastController.create({ //creamos una variable toast que se inicializa llamando al metodo create 
      message: menssage,
      duration: duration     
    });
    (await toast).present();// pausa la ejecución del código en ese punto hasta que la operación toast.present() haya terminado
  }

  //Funciones para redirigir 

  PagOlv(){
    this.router.navigate(['/recuperar-contrasena']);
  }
  Registr(){
    this.router.navigate(['/registrar']);
  }

}

