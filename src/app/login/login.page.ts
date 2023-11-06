import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ToastController } from '@ionic/angular';
import { UserPage } from '../user/user.page';
import { NavigationExtras, Router } from '@angular/router';
import { UserService } from '../servicios/user.service';
import { userLogin } from '../models/userlogin';
import { lastValueFrom } from 'rxjs';
import { LUsuario } from '../models/lUsuario';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  
  // providers: [UserPage],
})
export class LoginPage implements OnInit {
  userlogin: any; // Variable para almacenar los datos del usuario que se está logueando

  user = {
    email: "",
    password: ""
  }

  constructor(private userService: UserService, private router: Router, public toastController: ToastController) {

  }

  ngOnInit() {
  }

  async Login(userlogin: any) {
    const user: userLogin = {
      usuario: userlogin.usuario,
      password: userlogin.password
    };
    const user_login = await lastValueFrom(this.userService.getLogin(userlogin));
    console.log(user_login);
    if (user_login) {
      console.log("Usuario existe...");
      this.router.navigate(['/home'], { state: { userInfo: user_login } })
    } else {
      //NO EXISTE
      console.log("Usuario no existe...");
      this.presentToast("Usuario y/o Contraseña incorrectas")
    }
  }

  async presentToast(message: string
  ) {//creacion de una funcion asincronica
    let toast = this.toastController.create({ //creamos una variable toast que se inicializa llamando al metodo create 
      header: 'Datos incorrectos',
      message: message,
      position: 'middle',
      buttons: [
        {
          text: 'Aceptar',
          role: 'cancel',
          handler: async () => {
            console.log('Botón Aceptar clickeado');
            (await toast).dismiss(); // Cierra el Toast al hacer clic en "Aceptar"
          }
        }
      ]
    });
    (await toast).present();// pausa la ejecución del código en ese punto hasta que la operación toast.present() haya terminado
    (await toast).onDidDismiss();
  }
  PagOlv() {
    this.router.navigate(['/recuperar-contrasena']);
  }
  Registr() {
    this.router.navigate(['/registrar']);
  }
}
