import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RegistrarPage implements OnInit {
  user={
    email: "",
    nombre:"",
    telefono: "",
    password: ""
  }
  v = 0;
  constructor(private router: Router, public toastController: ToastController) { 

  }

  
  ngOnInit() {
    
  }
  
  validarRegistro(user: any) {
    // Realiza las validaciones de datos aquí
    if (!user.email || !user.telefono || !user.nombre) {
      console.log('Datos de registro no válidos');
      this.v = this.v + 1;
      console.log(this.v);
    }

    // Validar formato de correo electrónico
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail.com$/;
    if (!emailPattern.test(user.email)) {
      console.log('Formato de correo electrónico no válido');
      this.v = this.v + 1;
      console.log(this.v);
    }

    // Validar que el teléfono contenga solo números
    const phonePattern = /^[0-9]+$/;
    if (!phonePattern.test(user.telefono)) {
      console.log('El teléfono debe contener solo números');
      this.v = this.v + 1;
      console.log(this.v);
    }

    // Validar que la contraseña no supere los 8 caracteres
    if (user.password.length < 8) {
      console.log('La contraseña no debe superar los 8 caracteres');
      this.v = this.v + 1;
      console.log(this.v);
    }

    if (this.v === 0){
      console.log('Datos de registro válidos');
      console.log('Guardado exitosamente');
      this.router.navigate(['/login']);
    }
    this.v = this.v - this.v;
    console.log(this.v);
  }


  async presentToast(menssage: string, duration:number = 5000){//creacion de una funcion asincronica
    let toast = this.toastController.create({ //creamos una variable toast que se inicializa llamando al metodo create 
      message: menssage,
      duration: duration     
    });
    (await toast).present();// pausa la ejecución del código en ese punto hasta que la operación toast.present() haya terminado
  }
}
