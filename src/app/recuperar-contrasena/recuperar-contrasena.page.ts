import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ToastController } from '@ionic/angular';
import { NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.page.html',
  styleUrls: ['./recuperar-contrasena.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class RecuperarContrasenaPage implements OnInit {

  user={
    usuario: ""
  }

  constructor(private router: Router,public toastController: ToastController) { }

  ngOnInit() {
  }
  

  Verificar(){
    // let usuarioEncontrado = false; // Variable para rastrear si se ha encontrado el usuario

    // for(let i = 0; i < this.userService.userList.length; i++) {
    //   console.log(this.user.usuario);
      
    //   if(this.userService.userList[i].email === this.user.usuario) {
    //     usuarioEncontrado = true; // Se ha encontrado el usuario
    //     break; // Salir del bucle tan pronto como se encuentre una coincidencia
    //   }
    // }

    // if (usuarioEncontrado) {
    //   this.presentToast("Usuario Verificado");
    //   this.router.navigate(['/recuperar-contrasena-verificado']);
    // } else {
    //   this.presentToast("Usuario incorrecto");
    // }
   
  }

  async presentToast(menssage: string, duration:number = 1000){//creacion de una funcion asincronica
    let toast = this.toastController.create({ //creamos una variable toast que se inicializa llamando al metodo create 
      message: menssage,
      duration: duration     
    });
    (await toast).present();// pausa la ejecución del código en ese punto hasta que la operación toast.present() haya terminado
  }
}
